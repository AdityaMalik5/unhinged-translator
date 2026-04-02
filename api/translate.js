export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({ message: 'API key not configured' })
  }

  const { text, voicePrompt } = req.body

  if (!text || !voicePrompt) {
    return res.status(400).json({ message: 'Missing text or voice' })
  }

  if (text.length > 5000) {
    return res.status(400).json({ message: 'Text too long (max 5000 characters)' })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6-20250514',
        max_tokens: 1000,
        system: `${voicePrompt}\n\nRewrite the following text completely in your voice and style. Keep the core meaning but express it in the most extreme version of your character possible. Be funny, creative, and commit fully to the bit. Output only the rewritten text — no explanations, no preamble, no quotation marks around the output. Keep it roughly similar in length to the original (within 50% longer or shorter).`,
        messages: [{ role: 'user', content: text }],
      }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      console.error('Anthropic API error:', error)
      return res.status(502).json({ message: 'AI service error. Please try again.' })
    }

    const data = await response.json()
    const translation = data.content[0]?.text || ''

    return res.status(200).json({ translation })
  } catch (error) {
    console.error('Proxy error:', error)
    return res.status(500).json({ message: 'Something went wrong. Please try again.' })
  }
}

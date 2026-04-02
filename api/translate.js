export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const apiKey = process.env.GROQ_API_KEY
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

  const systemPrompt = `You are a comedic rewriter. Your job is to take any text and COMPLETELY rewrite it in a specific character's voice. You must NEVER return the original text. Every single word must change. The output must sound like a completely different person wrote it.

CHARACTER TO PLAY:
${voicePrompt}

ABSOLUTE RULES:
- NEVER copy the input text. Not even partially. Rewrite EVERY word.
- You ARE this character. Stay in character for every single word.
- Go ABSURDLY over the top. Be dramatic, funny, unhinged, and ridiculous.
- Use the character's catchphrases, verbal tics, slang, and worldview in EVERY sentence.
- For short inputs: EXPAND them. Add the character's reactions, tangents, and commentary. A short input should get a longer, funnier output.
- For long inputs: Transform every sentence while keeping the general meaning.
- Output ONLY the rewritten text. No quotes, no explanations, no "here's my version".
- If the input has typos or errors, DO NOT preserve them — rewrite everything from scratch in your character's voice.`

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: text },
        ],
        max_tokens: 2000,
        temperature: 1.2,
      }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      console.error('Groq API error:', error)
      return res.status(502).json({ message: 'AI service error. Please try again.' })
    }

    const data = await response.json()
    const translation = data.choices?.[0]?.message?.content || ''

    return res.status(200).json({ translation })
  } catch (error) {
    console.error('Proxy error:', error)
    return res.status(500).json({ message: 'Something went wrong. Please try again.' })
  }
}

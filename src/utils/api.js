export async function translateText(text, voicePrompt) {
  const response = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, voicePrompt }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Translation failed. Please try again!')
  }

  const data = await response.json()
  return data.translation
}

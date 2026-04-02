import { useState } from 'react'
import { voices } from './data/voices'
import { translateText } from './utils/api'
import { useTranslationLimit } from './hooks/useTranslationLimit'
import Header from './components/Header'
import VoiceSelector from './components/VoiceSelector'
import TextInput from './components/TextInput'
import LoadingScreen from './components/LoadingScreen'
import ResultCard from './components/ResultCard'
import PaywallModal from './components/PaywallModal'
import Sparkles from './components/Sparkles'

export default function App() {
  const [inputText, setInputText] = useState('')
  const [selectedVoice, setSelectedVoice] = useState('conspiracy')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showPaywall, setShowPaywall] = useState(false)

  const { remaining, isLimited, increment, limit } = useTranslationLimit()

  const currentVoice = voices.find((v) => v.id === selectedVoice)

  async function handleTranslate() {
    if (isLimited) {
      setShowPaywall(true)
      return
    }

    setError(null)
    setIsLoading(true)

    try {
      const translation = await translateText(inputText, currentVoice.prompt)
      increment()
      setResult({ original: inputText, translated: translation })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again!')
    } finally {
      setIsLoading(false)
    }
  }

  function handleTryAnother() {
    setResult(null)
    setInputText('')
    setError(null)
  }

  function handleChangeVoice() {
    setResult(null)
    setInputText('')
    setError(null)
  }

  return (
    <div className="relative min-h-screen max-w-lg mx-auto pb-10 overflow-hidden">
      <Sparkles />
      <Header remaining={remaining} limit={limit} />

      {isLoading ? (
        <LoadingScreen />
      ) : result ? (
        <ResultCard
          originalText={result.original}
          translatedText={result.translated}
          voice={currentVoice}
          onTryAnother={handleTryAnother}
          onChangeVoice={handleChangeVoice}
        />
      ) : (
        <>
          <VoiceSelector
            voices={voices}
            selected={selectedVoice}
            onSelect={setSelectedVoice}
          />
          <TextInput
            value={inputText}
            onChange={setInputText}
            onTranslate={handleTranslate}
            isLoading={isLoading}
          />
          {error && (
            <div className="mx-4 mt-3 p-4 rounded-duo bg-coral/10 border-2 border-coral/30 text-coral-dark font-bold text-sm text-center">
              {error}
            </div>
          )}
        </>
      )}

      {showPaywall && <PaywallModal onClose={() => setShowPaywall(false)} />}
    </div>
  )
}

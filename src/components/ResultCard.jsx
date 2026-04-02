import { useState } from 'react'

export default function ResultCard({
  originalText,
  translatedText,
  voice,
  onTryAnother,
  onChangeVoice,
}) {
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)

  const shareText = `${translatedText}\n\n— Translated by ${voice.emoji} ${voice.name} on Unhinged Translator\nTry it: unhingd.fun`

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = shareText
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  async function handleShare() {
    const truncated =
      translatedText.length > 280
        ? translatedText.slice(0, 277) + '...'
        : translatedText

    const shareData = {
      title: `${voice.emoji} Unhinged Translation`,
      text: `${truncated}\n\n— ${voice.name} on Unhinged Translator`,
      url: 'https://unhingd.fun',
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      } catch (err) {
        if (err.name !== 'AbortError') handleCopy()
      }
    } else {
      handleCopy()
    }
  }

  return (
    <div className="px-4 py-2 animate-fade-in">
      {/* Original text */}
      <div className="mb-4">
        <p className="text-xs font-bold text-eel-light uppercase tracking-wide mb-2 px-1">
          Original
        </p>
        <div className="p-3 rounded-duo bg-snow-off border border-swan text-sm text-eel-light leading-relaxed max-h-24 overflow-y-auto">
          {originalText}
        </div>
      </div>

      {/* Translated result */}
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wide mb-2 px-1" style={{ color: voice.color }}>
          {voice.emoji} {voice.name}
        </p>
        <div
          className="p-5 rounded-duo border-2 text-eel leading-relaxed text-base font-medium"
          style={{
            backgroundColor: voice.bgTint,
            borderColor: voice.borderColor,
          }}
        >
          {translatedText}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={handleCopy}
          className={`
            flex-1 py-3.5 rounded-duo font-bold text-sm uppercase tracking-wide
            border-2 transition-all duration-150
            active:translate-y-[2px] active:shadow-none
            ${
              copied
                ? 'bg-lime-primary border-lime-dark text-white shadow-duo-sm shadow-lime-dark'
                : 'bg-white border-swan text-eel hover:border-lime-primary shadow-duo-sm shadow-swan'
            }
          `}
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
        <button
          onClick={handleShare}
          className="
            flex-1 py-3.5 rounded-duo font-bold text-sm uppercase tracking-wide
            bg-sky-primary text-white border-2 border-sky-dark
            shadow-duo-sm shadow-sky-dark
            active:translate-y-[2px] active:shadow-none
            transition-all duration-150
          "
        >
          {shared ? '✅ Shared!' : '🚀 Share'}
        </button>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-3">
        <button
          onClick={onTryAnother}
          className="
            flex-1 py-3.5 rounded-duo font-bold text-sm uppercase tracking-wide
            bg-lime-primary text-white border-2 border-lime-dark
            shadow-duo-sm shadow-lime-dark
            active:translate-y-[2px] active:shadow-none
            transition-all duration-150
          "
        >
          🔄 Try Another
        </button>
        <button
          onClick={onChangeVoice}
          className="
            flex-1 py-3.5 rounded-duo font-bold text-sm uppercase tracking-wide
            bg-grape-primary text-white border-2 border-grape-dark
            shadow-duo-sm shadow-grape-dark
            active:translate-y-[2px] active:shadow-none
            transition-all duration-150
          "
        >
          🎭 Change Voice
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}

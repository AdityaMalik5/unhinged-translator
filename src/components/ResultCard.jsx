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

  const shareText = `${translatedText}\n\n— Translated by ${voice.name} on Unhinged Translator\nTry it: unhingd.fun`

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
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
      title: 'Unhinged Translation',
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
    <div className="relative z-10 px-4 py-2 animate-fade-in">
      {/* Original text */}
      <div className="mb-4">
        <p className="text-xs font-bold text-ink-light uppercase tracking-wide mb-2 px-1">
          Original
        </p>
        <div className="p-3 rounded-duo bg-cream-white/70 border border-blush-dark/30 text-sm text-ink-light leading-relaxed max-h-24 overflow-y-auto">
          {originalText}
        </div>
      </div>

      {/* Translated result */}
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wide mb-2 px-1" style={{ color: voice.color }}>
          {voice.name}
        </p>
        <div
          className="p-5 rounded-duo border-2 text-ink leading-relaxed text-base font-medium"
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
                ? 'bg-purple-600/80 border-purple-700 text-white shadow-duo-sm shadow-purple-800/60 backdrop-blur-sm'
                : 'bg-purple-100/30 border-purple-300/40 text-ink backdrop-blur-sm hover:border-purple-400/60 shadow-duo-sm shadow-purple-400/15'
            }
          `}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button
          onClick={handleShare}
          className="
            flex-1 py-3.5 rounded-duo font-bold text-sm uppercase tracking-wide
            bg-purple-600/80 text-white border border-purple-400/30
            shadow-duo-sm shadow-purple-800/60 backdrop-blur-sm
            active:translate-y-[2px] active:shadow-none
            transition-all duration-150 hover:bg-purple-700/85
          "
        >
          {shared ? 'Shared!' : 'Share'}
        </button>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-3">
        <button
          onClick={onTryAnother}
          className="
            flex-1 py-3.5 rounded-duo font-bold text-sm uppercase tracking-wide
            bg-purple-500/70 text-white border border-purple-400/30
            shadow-duo-sm shadow-purple-700/50 backdrop-blur-sm
            active:translate-y-[2px] active:shadow-none
            transition-all duration-150 hover:bg-purple-600/80
          "
        >
          Try Another
        </button>
        <button
          onClick={onChangeVoice}
          className="
            flex-1 py-3.5 rounded-duo font-bold text-sm uppercase tracking-wide
            bg-purple-100/30 text-ink border-2 border-purple-300/40
            shadow-duo-sm shadow-purple-400/15 backdrop-blur-sm
            active:translate-y-[2px] active:shadow-none
            transition-all duration-150 hover:border-purple-400/60 hover:bg-purple-200/40
          "
        >
          Change Voice
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

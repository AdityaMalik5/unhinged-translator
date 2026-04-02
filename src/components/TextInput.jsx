export default function TextInput({ value, onChange, onTranslate, isLoading }) {
  const isEmpty = !value.trim()
  const charCount = value.length

  return (
    <div className="relative z-10 px-4 py-2">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste any boring text here... meeting notes, emails, textbook paragraphs, anything."
          rows={5}
          maxLength={5000}
          className="
            w-full p-4 pb-8 rounded-duo border-2 border-blush-dark/40 bg-cream-white/90
            text-ink text-base leading-relaxed resize-none
            placeholder:text-ink-light/50
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
            transition-colors duration-150
          "
        />
        <span className="absolute bottom-3 right-4 text-xs font-semibold text-ink-light/50">
          {charCount}/5000
        </span>
      </div>

      <button
        onClick={onTranslate}
        disabled={isEmpty || isLoading}
        className={`
          w-full mt-4 py-4 rounded-duo font-extrabold text-lg uppercase tracking-wide
          transition-all duration-150
          ${
            isEmpty || isLoading
              ? 'bg-purple-200/40 text-ink-light/50 cursor-not-allowed shadow-duo-sm shadow-purple-300/20 backdrop-blur-sm'
              : 'bg-purple-600/80 text-white shadow-duo shadow-purple-800/60 backdrop-blur-sm active:translate-y-[4px] active:shadow-none hover:bg-purple-700/85 border border-purple-400/30'
          }
        `}
      >
        {isLoading ? 'Translating...' : 'Translate'}
      </button>
    </div>
  )
}

export default function TextInput({ value, onChange, onTranslate, isLoading }) {
  const isEmpty = !value.trim()
  const charCount = value.length

  return (
    <div className="px-4 py-2">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste any boring text here... meeting notes, emails, textbook paragraphs, anything."
          rows={5}
          maxLength={5000}
          className="
            w-full p-4 pb-8 rounded-duo border-2 border-swan bg-white
            text-eel text-base leading-relaxed resize-none
            placeholder:text-eel-light/60
            focus:outline-none focus:border-lime-primary focus:ring-2 focus:ring-lime-primary/20
            transition-colors duration-150
          "
        />
        <span className="absolute bottom-3 right-4 text-xs font-semibold text-eel-light/50">
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
              ? 'bg-swan text-eel-light/50 cursor-not-allowed shadow-duo-sm shadow-swan'
              : 'bg-lime-primary text-white shadow-duo shadow-lime-dark active:translate-y-[4px] active:shadow-none hover:bg-lime-dark'
          }
        `}
      >
        {isLoading ? 'Translating...' : '🔥 Translate'}
      </button>
    </div>
  )
}

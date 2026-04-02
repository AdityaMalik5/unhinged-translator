export default function VoiceSelector({ voices, selected, onSelect }) {
  return (
    <div className="px-4 py-2">
      <p className="text-sm font-bold text-eel-light uppercase tracking-wide mb-3 px-1">
        Pick a voice
      </p>
      <div className="flex gap-2.5 overflow-x-auto pb-3 px-1 snap-x snap-mandatory scrollbar-hide">
        {voices.map((voice) => {
          const isActive = selected === voice.id
          return (
            <button
              key={voice.id}
              onClick={() => onSelect(voice.id)}
              className={`
                flex-shrink-0 snap-start flex flex-col items-center gap-1.5
                px-4 py-3 rounded-duo border-2 font-bold text-sm
                transition-all duration-150 min-w-[90px]
                active:translate-y-[2px] active:shadow-none
                ${
                  isActive
                    ? 'border-lime-primary bg-lime-light text-lime-dark shadow-duo-sm shadow-lime-dark/30'
                    : 'border-swan bg-white text-eel hover:border-lime-primary/50 shadow-duo-sm shadow-swan'
                }
              `}
            >
              <span className="text-2xl">{voice.emoji}</span>
              <span className="whitespace-nowrap">{voice.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

import VoiceIcon from './VoiceIcons'

export default function VoiceSelector({ voices, selected, onSelect }) {
  return (
    <div className="relative z-10 px-4 py-2">
      <p className="text-sm font-bold text-ink-light uppercase tracking-wide mb-3 px-1">
        Pick a mode
      </p>
      <div className="flex gap-3 overflow-x-auto pb-3 px-1 snap-x snap-mandatory scrollbar-hide">
        {voices.map((voice) => {
          const isActive = selected === voice.id
          return (
            <button
              key={voice.id}
              onClick={() => onSelect(voice.id)}
              className={`
                flex-shrink-0 snap-start flex flex-col items-center justify-center gap-2
                px-5 py-4 rounded-duo border-2 font-bold text-sm
                transition-all duration-150 min-w-[110px]
                active:translate-y-[2px] active:shadow-none
                ${
                  isActive
                    ? 'border-purple-500 bg-purple-500/20 text-purple-800 shadow-duo-sm shadow-purple-600/30 backdrop-blur-sm'
                    : 'border-purple-300/40 bg-purple-100/30 text-ink backdrop-blur-sm hover:border-purple-400/60 hover:bg-purple-200/40 shadow-duo-sm shadow-purple-400/15'
                }
              `}
            >
              <VoiceIcon voiceId={voice.id} size={44} />
              <span className="whitespace-nowrap">{voice.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

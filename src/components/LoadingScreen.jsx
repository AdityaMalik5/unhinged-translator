import { useState, useEffect } from 'react'

const messages = [
  'Consulting the unhinged council...',
  'Adding unnecessary drama...',
  'Questioning everything...',
  'Adjusting tinfoil hat...',
  'Waking up the chaos goblins...',
  'Channeling chaotic energy...',
  'Removing all filters...',
  'Turning the unhinged dial to 11...',
]

export default function LoadingScreen() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4">
      {/* Bouncing dots */}
      <div className="flex gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? '#7C3AED' : '#A78BFA',
              animation: 'bounce-dot 0.6s ease-in-out infinite alternate',
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      <p className="text-lg font-bold text-ink animate-pulse">
        {messages[index]}
      </p>

      <style>{`
        @keyframes bounce-dot {
          from { transform: translateY(0); }
          to { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  )
}

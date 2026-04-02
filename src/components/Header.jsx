export default function Header({ remaining, limit }) {
  return (
    <header className="relative z-10 text-center pt-10 pb-6 px-4">
      <div className="relative inline-block">
        {/* Hazy glow behind title */}
        <div
          className="absolute inset-0 blur-2xl opacity-70 -z-10 scale-110"
          style={{
            background: 'radial-gradient(ellipse at center, #FDE8E0 0%, #F5C6B8 40%, transparent 70%)',
          }}
        />
        <h1
          className="text-ink tracking-tight mb-3 leading-none drop-shadow-[0_0_30px_rgba(245,198,184,0.9)]"
          style={{
            fontFamily: 'Brizel, sans-serif',
            fontSize: '100px',
            WebkitTextStroke: '2px #1A1A1A',
            textShadow: '0 0 40px rgba(253,232,224,0.95), 0 0 80px rgba(245,198,184,0.7), 0 0 120px rgba(232,160,144,0.4)',
          }}
        >
          Unhinged Translator
        </h1>
      </div>
      <div className="relative inline-block">
        <div
          className="absolute inset-0 blur-xl opacity-60 -z-10 scale-110"
          style={{
            background: 'radial-gradient(ellipse at center, #FDE8E0 0%, #F5C6B8 40%, transparent 70%)',
          }}
        />
        <p
          className="text-ink-light leading-snug drop-shadow-[0_0_20px_rgba(245,198,184,0.9)]"
          style={{
            fontFamily: 'Brizel, sans-serif',
            fontSize: '42px',
            WebkitTextStroke: '1px #555555',
            textShadow: '0 0 30px rgba(253,232,224,0.95), 0 0 60px rgba(245,198,184,0.7)',
          }}
        >
          Paste anything boring. Get something unhinged.
        </p>
      </div>
      <div className="mt-4 inline-flex items-center gap-1.5 bg-cream-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-bold text-ink-light border border-blush-dark/30">
        {remaining}/{limit} translations left today
      </div>
    </header>
  )
}

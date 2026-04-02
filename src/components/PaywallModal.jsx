import { useState } from 'react'

export default function PaywallModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 animate-modal-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-cream-white rounded-duo-lg p-6 text-center shadow-xl border-2 border-blush-dark/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blush-light flex items-center justify-center text-ink-light hover:bg-blush transition-colors"
        >
          X
        </button>

        <h2 className="text-xl font-extrabold text-ink mb-2">
          You're on a roll!
        </h2>
        <p className="text-ink-light font-medium mb-5">
          You've used all 3 free translations today. Come back tomorrow or join
          the waitlist for unlimited access!
        </p>

        {submitted ? (
          <div className="py-4">
            <p className="font-bold text-purple-700">
              You're on the list! We'll let you know when unlimited drops.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="
                w-full px-4 py-3 rounded-duo border-2 border-blush-dark/40 bg-blush-light/50
                text-ink font-medium placeholder:text-ink-light/50
                focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
              "
            />
            <button
              type="submit"
              className="
                w-full py-3.5 rounded-duo font-extrabold text-base uppercase tracking-wide
                bg-purple-600/80 text-white border border-purple-400/30
                shadow-duo-sm shadow-purple-800/60 backdrop-blur-sm
                active:translate-y-[2px] active:shadow-none
                transition-all duration-150 hover:bg-purple-700/85
              "
            >
              Join the Waitlist
            </button>
          </form>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-sm font-bold text-ink-light hover:text-ink transition-colors"
        >
          Maybe tomorrow
        </button>
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-modal-in {
          animation: modal-in 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}

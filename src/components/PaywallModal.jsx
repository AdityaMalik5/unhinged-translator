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
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-white rounded-duo-lg p-6 text-center shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-snow-off flex items-center justify-center text-eel-light hover:bg-swan transition-colors"
        >
          ✕
        </button>

        <div className="text-5xl mb-3">😤</div>
        <h2 className="text-xl font-extrabold text-eel mb-2">
          You're on a roll!
        </h2>
        <p className="text-eel-light font-medium mb-5">
          You've used all 5 free translations today. Come back tomorrow or join
          the waitlist for unlimited access!
        </p>

        {submitted ? (
          <div className="py-4">
            <div className="text-4xl mb-2">🎉</div>
            <p className="font-bold text-lime-dark">
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
                w-full px-4 py-3 rounded-duo border-2 border-swan bg-snow-off
                text-eel font-medium placeholder:text-eel-light/50
                focus:outline-none focus:border-lime-primary focus:ring-2 focus:ring-lime-primary/20
              "
            />
            <button
              type="submit"
              className="
                w-full py-3.5 rounded-duo font-extrabold text-base uppercase tracking-wide
                bg-fire-primary text-white border-2 border-fire-dark
                shadow-duo-sm shadow-fire-dark
                active:translate-y-[2px] active:shadow-none
                transition-all duration-150
              "
            >
              🔓 Join the Waitlist
            </button>
          </form>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-sm font-bold text-eel-light hover:text-eel transition-colors"
        >
          Maybe tomorrow →
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

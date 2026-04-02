export default function Header({ remaining, limit }) {
  return (
    <header className="text-center pt-8 pb-4 px-4">
      <div className="inline-flex items-center gap-2 mb-2">
        <span className="text-4xl">🤪</span>
        <h1 className="text-3xl font-extrabold text-eel tracking-tight">
          Unhinged Translator
        </h1>
      </div>
      <p className="text-eel-light font-semibold text-lg">
        Paste anything boring. Get something unhinged.
      </p>
      <div className="mt-3 inline-flex items-center gap-1.5 bg-snow-off rounded-full px-4 py-1.5 text-sm font-bold text-eel-light">
        <span className="text-base">⚡</span>
        {remaining}/{limit} translations left today
      </div>
    </header>
  )
}

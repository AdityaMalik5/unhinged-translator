export default function Sparkles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-repeat"
        style={{ backgroundImage: 'url(/bg.png)' }}
      />
      {/* Pink translucent overlay */}
      <div className="absolute inset-0 bg-[#FDE8E0]/85" />
    </div>
  )
}

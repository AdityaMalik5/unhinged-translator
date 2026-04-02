export function ConspiracyIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* All-seeing eye in triangle */}
      <path d="M20 4L36 34H4L20 4Z" stroke="#1A1A1A" strokeWidth="2.5" strokeLinejoin="round" fill="#FFD5CC" />
      <ellipse cx="20" cy="22" rx="7" ry="5" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="20" cy="22" r="2.5" fill="#1A1A1A" />
      {/* Rays */}
      <line x1="20" y1="11" x2="20" y2="14" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="15" x2="15.5" y2="17" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="15" x2="24.5" y2="17" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ToddlerIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Head */}
      <circle cx="20" cy="18" r="13" fill="#FFD5CC" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="15" cy="16" r="2.5" fill="#1A1A1A" />
      <circle cx="25" cy="16" r="2.5" fill="#1A1A1A" />
      {/* Eye shine */}
      <circle cx="16" cy="15" r="0.8" fill="white" />
      <circle cx="26" cy="15" r="0.8" fill="white" />
      {/* Mouth - open */}
      <ellipse cx="20" cy="23" rx="3.5" ry="2.5" fill="#1A1A1A" />
      {/* Tooth */}
      <rect x="18.5" y="21" width="3" height="2" rx="0.5" fill="white" />
      {/* Hair tuft */}
      <path d="M17 6C18 3 22 3 23 6" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function MedievalIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Helmet */}
      <path d="M10 22C10 13 14 6 20 6C26 6 30 13 30 22" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="#C4A882" />
      {/* Visor slit */}
      <rect x="12" y="18" width="16" height="3" rx="1.5" fill="#1A1A1A" />
      {/* Nose guard */}
      <line x1="20" y1="14" x2="20" y2="24" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Brim */}
      <path d="M8 22H32" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Plume */}
      <path d="M20 6C20 6 22 2 26 3C24 5 22 5 20 6Z" fill="#E87870" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Chain mail hint */}
      <path d="M12 26C14 28 18 30 20 30C22 30 26 28 28 26" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function InternIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Coffee cup */}
      <rect x="10" y="10" width="18" height="22" rx="3" fill="#C4A882" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Handle */}
      <path d="M28 16C32 16 33 20 33 22C33 24 32 28 28 28" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
      {/* Steam lines */}
      <path d="M16 8C16 5 18 6 18 4" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 7C20 4 22 5 22 3" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Lid */}
      <rect x="8" y="10" width="22" height="3" rx="1.5" fill="#1A1A1A" />
      {/* Sleeve */}
      <rect x="12" y="18" width="14" height="6" rx="1" fill="#E8A090" stroke="#1A1A1A" strokeWidth="1.5" />
    </svg>
  )
}

export function RamsayIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Chef hat */}
      <ellipse cx="20" cy="12" rx="12" ry="8" fill="white" stroke="#1A1A1A" strokeWidth="2.5" />
      <rect x="12" y="12" width="16" height="10" fill="white" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Hat band */}
      <rect x="12" y="20" width="16" height="3" fill="#1A1A1A" />
      {/* Face */}
      <circle cx="17" cy="28" r="1.5" fill="#1A1A1A" />
      <circle cx="23" cy="28" r="1.5" fill="#1A1A1A" />
      {/* Angry eyebrows */}
      <line x1="14" y1="25" x2="18" y2="26.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="25" x2="22" y2="26.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      {/* Frown */}
      <path d="M17 33C18 31 22 31 23 33" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      {/* Hat puff */}
      <circle cx="16" cy="8" r="4" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="24" cy="8" r="4" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="20" cy="6" r="4" fill="white" stroke="#1A1A1A" strokeWidth="2" />
    </svg>
  )
}

export function DesiParentIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Head */}
      <circle cx="20" cy="20" r="13" fill="#E8A090" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Glasses */}
      <circle cx="15" cy="18" r="4" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="25" cy="18" r="4" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      <line x1="19" y1="18" x2="21" y2="18" stroke="#1A1A1A" strokeWidth="2" />
      {/* Eyes behind glasses */}
      <circle cx="15" cy="18" r="1.5" fill="#1A1A1A" />
      <circle cx="25" cy="18" r="1.5" fill="#1A1A1A" />
      {/* Disappointed eyebrows - raised */}
      <path d="M11 13C12 11 14 12 16 13" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 13C26 12 28 11 29 13" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      {/* Disappointed mouth */}
      <path d="M16 26C18 24 22 24 24 26" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      {/* Mustache */}
      <path d="M15 22C17 24 19 23 20 22C21 23 23 24 25 22" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="#1A1A1A" />
    </svg>
  )
}

export function CommentatorIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Microphone head */}
      <rect x="14" y="4" width="12" height="18" rx="6" fill="#555" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Mic grille lines */}
      <line x1="16" y1="8" x2="24" y2="8" stroke="#1A1A1A" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="11" x2="24" y2="11" stroke="#1A1A1A" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="14" x2="24" y2="14" stroke="#1A1A1A" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="17" x2="24" y2="17" stroke="#1A1A1A" strokeWidth="1" opacity="0.5" />
      {/* Mic body */}
      <path d="M10 18C10 25 14 28 20 28C26 28 30 25 30 18" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
      {/* Stand */}
      <line x1="20" y1="28" x2="20" y2="34" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="34" x2="26" y2="34" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Sound waves */}
      <path d="M32 10C34 12 34 16 32 18" stroke="#E87870" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 10C6 12 6 16 8 18" stroke="#E87870" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ShakespeareIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Quill feather */}
      <path d="M28 4C22 8 18 14 16 22C14 14 10 10 6 8C12 10 16 8 28 4Z" fill="#E8A090" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      {/* Quill shaft */}
      <line x1="16" y1="22" x2="8" y2="38" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Quill center line */}
      <path d="M28 4C24 10 20 16 16 22" stroke="#1A1A1A" strokeWidth="1.5" />
      {/* Ink drops */}
      <circle cx="7" cy="36" r="2.5" fill="#1A1A1A" />
      <circle cx="12" cy="34" r="1.5" fill="#1A1A1A" />
      {/* Written text hint */}
      <line x1="22" y1="30" x2="34" y2="30" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="22" y1="33" x2="30" y2="33" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="22" y1="36" x2="32" y2="36" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

export function RizzIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Sunglasses face */}
      <circle cx="20" cy="20" r="13" fill="#FFD5CC" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Cool sunglasses */}
      <rect x="9" y="15" width="9" height="6" rx="2" fill="#1A1A1A" />
      <rect x="22" y="15" width="9" height="6" rx="2" fill="#1A1A1A" />
      <line x1="18" y1="18" x2="22" y2="18" stroke="#1A1A1A" strokeWidth="2" />
      {/* Lens shine */}
      <line x1="11" y1="17" x2="14" y2="17" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="24" y1="17" x2="27" y2="17" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Smirk */}
      <path d="M16 26C18 28 24 28 26 25" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      {/* Sparkle left */}
      <path d="M4 10L5 8L6 10L5 12Z" fill="#E11D48" />
      {/* Sparkle right */}
      <path d="M34 8L35 6L36 8L35 10Z" fill="#E11D48" />
      {/* Heart */}
      <path d="M34 14C34 12 36 11 37 13C38 11 40 12 40 14C40 16 37 18 37 18C37 18 34 16 34 14Z" fill="#E11D48" stroke="#1A1A1A" strokeWidth="1" />
    </svg>
  )
}

const iconMap = {
  conspiracy: ConspiracyIcon,
  toddler: ToddlerIcon,
  medieval: MedievalIcon,
  intern: InternIcon,
  ramsay: RamsayIcon,
  'desi-parent': DesiParentIcon,
  commentator: CommentatorIcon,
  rizz: RizzIcon,
  shakespeare: ShakespeareIcon,
}

export default function VoiceIcon({ voiceId, size = 40 }) {
  const Icon = iconMap[voiceId]
  if (!Icon) return null
  return <Icon size={size} />
}

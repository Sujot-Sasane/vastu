// Minimal monoline icons — geometric, not illustrative. Sized via className.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconVastu({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...base}>
      <rect x="6" y="6" width="28" height="28" />
      <line x1="6" y1="20" x2="34" y2="20" />
      <line x1="20" y1="6" x2="20" y2="34" />
      <path d="M20 6 L34 20 L20 34 L6 20 Z" opacity="0.6" />
    </svg>
  )
}

export function IconAstrology({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...base}>
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="6" />
      <line x1="20" y1="2" x2="20" y2="8" />
      <line x1="20" y1="32" x2="20" y2="38" />
      <line x1="2" y1="20" x2="8" y2="20" />
      <line x1="32" y1="20" x2="38" y2="20" />
    </svg>
  )
}

export function IconAura({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...base}>
      <circle cx="20" cy="20" r="4" />
      <circle cx="20" cy="20" r="10" opacity="0.75" />
      <circle cx="20" cy="20" r="16" opacity="0.45" />
    </svg>
  )
}

export function IconNumerology({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...base}>
      <rect x="6" y="6" width="28" height="28" />
      <line x1="15.33" y1="6" x2="15.33" y2="34" />
      <line x1="24.67" y1="6" x2="24.67" y2="34" />
      <line x1="6" y1="15.33" x2="34" y2="15.33" />
      <line x1="6" y1="24.67" x2="34" y2="24.67" />
    </svg>
  )
}

export function IconBusinessGrowth({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...base}>
      <polyline points="6,30 15,20 22,25 34,10" />
      <polyline points="26,10 34,10 34,18" />
      <line x1="6" y1="34" x2="34" y2="34" />
    </svg>
  )
}

export function IconWhatsapp({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.15L2 22l5.13-1.53a9.87 9.87 0 0 0 4.9 1.31h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.44 17.5 2 12.04 2zm5.83 14.1c-.25.7-1.44 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.7-.62-3-1.3-4.95-4.32-5.1-4.53-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.05-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.24.08.15.13.33.03.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.13 1 2.08 1.32 2.38 1.47.3.15.48.13.65-.05.18-.18.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
    </svg>
  )
}

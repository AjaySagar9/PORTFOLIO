'use client'

export default function ScrollCue({ color = '#1a0800' }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: '2rem',
      left: '1.375rem',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.4rem',
      color: color,
      opacity: 0.45,
      zIndex: 50,
      pointerEvents: 'none'
    }}>
      <span style={{
        fontSize: '0.44rem',
        letterSpacing: '0.12em',
        fontWeight: 700,
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        textTransform: 'uppercase'
      }}>
        Scroll down
      </span>
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="6" r="2" fill="currentColor" />
      </svg>
    </div>
  )
}

'use client'

import styles from '@/styles/ui/FixedScrollIndicator.module.css'

export default function FixedScrollIndicator() {
  return (
    <div className={styles.scrollIndicator}>
      <span className={styles.scrollText}>Scroll down</span>
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="6" r="2" fill="currentColor" />
      </svg>
    </div>
  )
}

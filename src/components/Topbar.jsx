import { useState, useEffect } from 'react'

function formatTime(date) {
  return date.toLocaleTimeString('en-GB') // HH:MM:SS
}

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function Topbar() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="topbar">
      {/* Page title */}
      <div className="topbar-page" style={{ minWidth: 0 }}>
        <div className="page-icon" style={{ flexShrink: 0 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="9" y1="21" x2="9" y2="9"/>
          </svg>
        </div>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Today's Board
        </span>
      </div>

      {/* Live clock */}
      <div className="topbar-clock">
        <div>
          <div className="clock-t">{formatTime(now)}</div>
          <div className="clock-d">{formatDate(now)}</div>
        </div>
        <div className="clock-sep" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--t3)' }}>
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>

      {/* Notification button */}
      <button className="tb-btn tb-notif">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <div className="tb-notif-dot" />
      </button>

      {/* Expand button */}
      <button className="tb-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </button>

      {/* User info */}
      <div className="tb-user">
        <div className="tb-user-av">OT</div>
        <div>
          <div className="tb-user-name">Orionik Technologies</div>
          <div className="tb-user-role">Store Owner</div>
        </div>
      </div>
    </div>
  )
}

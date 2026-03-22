import React from 'react'

export default function FAB({ onClick }) {
  return (
    <button className="fab" onClick={onClick}>
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    </button>
  )
}

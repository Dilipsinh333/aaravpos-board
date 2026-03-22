import React from 'react'
import { STAFF_MEMBERS } from '../data/boardData'

export default function ControlBar({ activeStaff, onStaffChange, searchQuery, onSearchChange }) {
  return (
    <div className="ctrlbar">
      {/* Staff avatar filter */}
      <div className="staff-scroller">
        <button className="sav-btn">‹</button>

        {STAFF_MEMBERS.map((member) => (
          <div
            key={member.id}
            className={[
              'sav',
              member.cssClass,
              member.online ? '' : 'offline',
              activeStaff === member.id ? 'active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            title={member.label}
            onClick={() => onStaffChange(member.id)}
          >
            {member.label}
          </div>
        ))}

        <button className="sav-btn">›</button>
      </div>

      <div className="ctrl-sep" />

      {/* Search */}
      <div className="ctrl-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Search clients, services…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Action buttons */}
      <button className="btn-add">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Add Appointment
      </button>

      <button className="btn-secondary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Check In
      </button>

      <button className="btn-secondary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        Show Cancelled
      </button>
    </div>
  )
}

import React from 'react'

const ServiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
)

const StaffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>
  </svg>
)

/** Upcoming appointment card (col-appt) */
export function AppointmentCard({ card, onClick }) {
  const cardClasses = [
    'acard',
    card.accentClass,
    card.isCheckin ? 'is-checkin' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="acard-inner">
        {/* Top row */}
        <div className="ac-top">
          <div className={`ac-av ${card.avatarClass}`}>{card.initials}</div>
          <div className="ac-name">{card.name}</div>
          <div className="ac-time">{card.time}</div>
          <span className={`ac-status ${card.statusClass}`}>{card.statusLabel}</span>
          <button
            className="ac-edit"
            onClick={(e) => e.stopPropagation()}
          >
            <EditIcon />
          </button>
        </div>

        {/* Meta */}
        <div className="ac-meta">
          <div className="ac-meta-item">
            <ServiceIcon />
            Service: <span>{card.service}</span>
          </div>
          <div className="ac-meta-item">
            <StaffIcon />
            Staff: <span>{card.staffLabel}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="ac-footer">
          <div className="ac-queue">
            <span
              className="q-dot"
              style={card.queueDotColor ? { background: card.queueDotColor } : undefined}
            />
            Queue #{card.queue}
          </div>
          <span className="ac-duration">
            <ClockIcon />
            {card.duration}
          </span>
          <span className={`appt-type-badge ${card.type === 'checkin' ? 'badge-checkin' : 'badge-normal'}`}>
            <span className="badge-dot" />
            {card.type === 'checkin' ? 'Checked In' : 'Appointment'}
          </span>
          <div
            className="ac-staff-badge"
            style={{ background: card.staffBadge.gradient }}
          >
            {card.staffBadge.initials}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Completed card (col-done) */
export function CompletedCard({ card }) {
  return (
    <div className={`acard ${card.accentClass}`}>
      <div className="acard-inner">
        {/* Top row */}
        <div className="ac-top">
          <div className={`ac-av ${card.avatarClass}`}>{card.initials}</div>
          <div className="ac-name">{card.name}</div>
          <div className="ac-time">{card.time}</div>
          <span className="ac-status ss-done">Done</span>
        </div>

        {/* Meta */}
        <div className="ac-meta">
          <div className="ac-meta-item">
            <ServiceIcon />
            Service: <span>{card.service}</span>
          </div>
          <div className="ac-meta-item">
            <StaffIcon />
            Staff: <span>{card.staff}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="ac-progress">
          <div className="ac-progress-header">
            <span>Duration</span>
            <span>{card.duration}</span>
          </div>
          <div className="prog-track">
            <div className={`prog-fill ${card.progressClass}`} style={{ width: '100%' }} />
          </div>
        </div>

        {/* Footer */}
        <div className="ac-footer">
          <div className="ac-revenue">{card.revenue}</div>
          <span className="ac-service">Completed</span>
          <div
            className="ac-staff-badge"
            style={{ background: card.staffBadge.gradient }}
          >
            {card.staffBadge.initials}
          </div>
        </div>
      </div>
    </div>
  )
}

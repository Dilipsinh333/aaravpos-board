import React from 'react'

function getTypeBadgeClass(isCheckin) {
  return isCheckin ? 'vc-badge vc-badge-checkin' : 'vc-badge vc-badge-normal'
}

function getStatusBadge(vcStatus) {
  switch (vcStatus) {
    case 'checkin':   return { cls: 'vc-badge vc-badge-checkin',   label: 'Checked In' }
    case 'completed': return { cls: 'vc-badge vc-badge-completed', label: 'Completed'  }
    default:          return { cls: 'vc-badge vc-badge-pending',   label: 'Pending'    }
  }
}

function getPaymentColor(vcStatus) {
  return vcStatus === 'completed' ? '#059669' : '#b45309'
}

function getPaymentLabel(vcStatus, payment) {
  return vcStatus === 'completed' ? 'PAID' : payment
}

export default function ViewCardPanel({ card, onClose }) {
  const isOpen = card !== null
  const statusBadge = card ? getStatusBadge(card.vcStatus) : null

  return (
    <>
      {/* Overlay */}
      <div
        className={`vc-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div className={`vc-panel${isOpen ? ' open' : ''}`}>
        {card && (
          <>
            {/* Header */}
            <div className="vc-header">
              <div className="vc-av" style={{ background: card.avGrad }}>
                {card.initials}
              </div>
              <div className="vc-header-info">
                <div className="vc-client-name">{card.name}</div>
                <div className="vc-appt-time">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{card.timeDisplay}</span>
                  <span
                    className={getTypeBadgeClass(card.isCheckin)}
                    style={{ marginLeft: 6 }}
                  >
                    {card.isCheckin ? 'Checked In' : 'Appointment'}
                  </span>
                </div>
              </div>
              <button className="vc-close" onClick={onClose}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="vc-body">
              {/* Time range */}
              <div className="vc-time-range">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <div>
                  <div className="vc-time-range-text">{card.timeRange}</div>
                  <div className="vc-time-range-sub">{card.durationFull}</div>
                </div>
              </div>

              {/* Service & Staff */}
              <div className="vc-section">
                <div className="vc-section-title">Service & Staff</div>
                <div className="vc-row">
                  <span className="vc-row-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    Service
                  </span>
                  <span className="vc-row-val hi">{card.service}</span>
                </div>
                <div className="vc-staff-row">
                  <div className="vc-staff-av" style={{ background: card.staffGrad }}>
                    {card.staffInitials}
                  </div>
                  <div>
                    <div className="vc-staff-name">{card.staffName}</div>
                    <div className="vc-staff-role">Assigned Staff</div>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="vc-section">
                <div className="vc-section-title">Appointment Details</div>

                <div className="vc-row">
                  <span className="vc-row-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.23 19.79 19.79 0 0 1 1.6 2.62 2 2 0 0 1 3.58.44h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.44 15z"/>
                    </svg>
                    Mobile
                  </span>
                  <span className="vc-row-val">{card.mobile}</span>
                </div>

                <div className="vc-row">
                  <span className="vc-row-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                      <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                    Type
                  </span>
                  <span className={statusBadge.cls}>{statusBadge.label}</span>
                </div>

                <div className="vc-row">
                  <span className="vc-row-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    Payment
                  </span>
                  <span
                    className="vc-row-val"
                    style={{ color: getPaymentColor(card.vcStatus) }}
                  >
                    {getPaymentLabel(card.vcStatus, card.payment)}
                  </span>
                </div>

                <div className="vc-row">
                  <span className="vc-row-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                    Outlet
                  </span>
                  <span className="vc-row-val hi">{card.outlet}</span>
                </div>
              </div>

              {/* Bill Summary */}
              <div className="vc-section">
                <div className="vc-section-title">Bill Summary</div>
                <div className="vc-bill-row">
                  <span className="vc-bill-label">Tip</span>
                  <span className="vc-bill-val">{card.tip}</span>
                </div>
                <div className="vc-bill-row">
                  <span className="vc-bill-label" style={{ fontWeight: 700, color: 'var(--t1)' }}>
                    Total Bill Amount
                  </span>
                  <span className="vc-bill-val red">{card.total}</span>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="vc-footer">
              <button className="vc-cart-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

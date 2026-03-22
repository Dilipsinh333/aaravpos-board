import React from 'react'
import { APPOINTMENT_CARDS, COMPLETED_CARDS } from '../data/boardData'
import { AppointmentCard, CompletedCard } from './AppointmentCard'

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export default function Board({ onCardClick }) {
  return (
    <div className="board-area" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>

      {/* ── COL 1: TODAY'S APPOINTMENTS ── */}
      <div className="col col-appt">
        <div className="col-head">
          <div className="col-title">Today's Appointments</div>
          <div className="col-badge cb-y">{APPOINTMENT_CARDS.length}</div>
          <button className="col-add-btn"><PlusIcon /></button>
        </div>

        {/* Legend strip */}
        <div className="col-legend">
          <span className="appt-type-badge badge-normal" style={{ fontSize: 9, padding: '2px 7px 2px 5px' }}>
            <span className="badge-dot" />
            Appointment
          </span>
          <span className="appt-type-badge badge-checkin" style={{ fontSize: 9, padding: '2px 7px 2px 5px' }}>
            <span className="badge-dot" />
            Checked In
          </span>
        </div>

        <div className="col-body">
          {APPOINTMENT_CARDS.map((card) => (
            <AppointmentCard
              key={card.id}
              card={card}
              onClick={() => onCardClick(card)}
            />
          ))}
        </div>
      </div>

      {/* ── COL 2: IN SERVICE ── */}
      <div className="col col-inservice">
        <div className="col-head">
          <div className="col-title">In Service</div>
          <div className="col-badge cb-g">0</div>
        </div>
        <div className="col-body">
          <div className="empty-state">
            <div className="es-ring">🪑</div>
            <p>
              <strong>All chairs free</strong>
              No clients currently being served
            </p>
          </div>
        </div>
      </div>

      {/* ── COL 3: COMPLETED ── */}
      <div className="col col-done">
        <div className="col-head">
          <div className="col-title">Completed</div>
          <div className="col-badge cb-b">{COMPLETED_CARDS.length}</div>
        </div>
        <div className="col-body">
          {COMPLETED_CARDS.map((card) => (
            <CompletedCard key={card.id} card={card} />
          ))}
        </div>
      </div>

    </div>
  )
}

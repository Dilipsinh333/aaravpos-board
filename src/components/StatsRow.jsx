import React from 'react'
import { STATS } from '../data/boardData'

export default function StatsRow() {
  return (
    <div className="stats-row">
      {STATS.map((stat) => (
        <div key={stat.label} className="st-chip">
          <div className={`st-icon ${stat.iconClass}`}>{stat.icon}</div>
          <div>
            <div className="st-val">{stat.value}</div>
            <div className="st-lbl">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

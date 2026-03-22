import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ControlBar from './components/ControlBar'
import StatsRow from './components/StatsRow'
import Board from './components/Board'
import ViewCardPanel from './components/ViewCardPanel'
import FAB from './components/FAB'

export default function App() {
  const [activeStaff, setActiveStaff] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCard, setSelectedCard] = useState(null)

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleClosePanel() {
    setSelectedCard(null)
  }

  return (
    <>
      <Sidebar />

      <div className="main">
        <Topbar />
        <ControlBar
          activeStaff={activeStaff}
          onStaffChange={setActiveStaff}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <StatsRow />
        <Board onCardClick={handleCardClick} />
      </div>

      <ViewCardPanel card={selectedCard} onClose={handleClosePanel} />

      <FAB />
    </>
  )
}

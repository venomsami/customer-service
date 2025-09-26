import { useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Banner from './components/Banner/Banner.jsx'
import TicketCard from './components/TicketCard/TicketCard.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { tickets as seed } from './data/tickets.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [tickets, setTickets] = useState(seed)          // available tickets (Customer Tickets)
  const [inProgress, setInProgress] = useState([])      // ids
  const [resolved, setResolved] = useState([])          // ids

  const inProgressTickets = useMemo(
    () => inProgress.map(id => tickets.find(t => t.id === id)).filter(Boolean),
    [inProgress, tickets]
  )

  const resolvedTickets = useMemo(
    () => seed.filter(t => resolved.includes(t.id)),
    [resolved]
  )

  const handleSelect = (id) => {
    if (resolved.includes(id)) return
    if (!inProgress.includes(id)) {
      setInProgress(prev => [...prev, id])
      setTickets(prev => prev.map(t => t.id === id ? { ...t, status: 'IN_PROGRESS' } : t))
      toast.info('Added to Task Status')
    }
  }

  const handleComplete = (id) => {
    // remove from in-progress
    setInProgress(prev => prev.filter(x => x !== id))
    // add to resolved
    setResolved(prev => prev.includes(id) ? prev : [...prev, id])
    // remove from customer tickets (left list)
    setTickets(prev => prev.filter(t => t.id !== id))
    toast.success('Ticket resolved')
  }

  return (
    <>
      <Navbar />

      <Banner
        inProgress={inProgress.length}
        resolved={resolved.length}
      />

      <main className="container main-grid">
        {/* LEFT: Customer Tickets */}
        <section>
          <h2 className="section-title">Customer Tickets</h2>
          <div className="tickets">
            {tickets.length === 0 ? (
              <p className="muted">No tickets remaining.</p>
            ) : tickets.map(t => (
              <TicketCard key={t.id} ticket={t} onSelect={handleSelect} />
            ))}
          </div>
        </section>

        {/* RIGHT: Sidebar */}
        <Sidebar
          tasks={inProgressTickets}
          resolved={resolvedTickets}
          onComplete={handleComplete}
        />
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={1600} />
    </>
  )
}

import './TicketCard.css'

const fmt = (iso) => new Date(iso).toLocaleDateString(undefined, {month:'2-digit',day:'2-digit',year:'numeric'})

export default function TicketCard({ ticket, onSelect }){
  const statusClass = ticket.status === 'IN_PROGRESS' ? 'in_progress' : (ticket.status === 'RESOLVED' ? 'resolved' : 'open')
  const prioClass = ticket.priority.toLowerCase()

  return (
    <article className="ticket">
      <div className="ticket__row">
        <h3 className="ticket__title">{ticket.title}</h3>
        <span className={`chip chip--${statusClass}`}>
          {ticket.status === 'IN_PROGRESS' ? 'In-Progress' : ticket.status === 'RESOLVED' ? 'Resolved' : 'Open'}
        </span>
      </div>

      <p className="ticket__desc">{ticket.description}</p>

      <div className="ticket__meta">
        <span>#{ticket.id}</span>
        <span className={`prio prio--${prioClass}`}>{ticket.priority} PRIORITY</span>
        <span>{ticket.customer}</span>
        <span>{fmt(ticket.createdAt)}</span>
      </div>

      <div className="ticket__actions">
        <button className="btn btn--ghost" onClick={() => onSelect(ticket.id)}>
          Add to Task Status
        </button>
      </div>
    </article>
  )
}

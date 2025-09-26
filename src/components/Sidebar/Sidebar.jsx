import './Sidebar.css'

export default function Sidebar({ tasks = [], resolved = [], onComplete }){
  return (
    <aside className="sidebar">
      <div className="panel">
        <div className="panel__header">Task Status</div>
        {tasks.length === 0 ? (
          <p className="empty">Select a ticket to add to Task Status</p>
        ) : tasks.map(t => (
          <div className="task" key={t.id}>
            <div className="task__title">{t.title}</div>
            <button className="btn btn--success" onClick={() => onComplete(t.id)}>Complete</button>
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="panel__header">Resolved Task</div>
        {resolved.length === 0 ? (
          <p className="empty">No resolved tasks yet.</p>
        ) : resolved.map(t => (
          <div className="resolved" key={t.id}>{t.title}</div>
        ))}
      </div>
    </aside>
  )
}

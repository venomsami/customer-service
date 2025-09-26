import './Banner.css'

export default function Banner({ inProgress = 0, resolved = 0 }){
  return (
    <section className="banner">
      <div className="container banner__grid">
        <div className="stat stat--purple">
          <div className="stat__title">In-Progress</div>
          <div className="stat__value">{inProgress}</div>
        </div>
        <div className="stat stat--green">
          <div className="stat__title">Resolved</div>
          <div className="stat__value">{resolved}</div>
        </div>
      </div>
    </section>
  )
}

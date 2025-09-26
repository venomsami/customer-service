import './Footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h4>CS — Ticket System</h4>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div>
          <div className="footer__title">Company</div>
          <a href="#">About Us</a>
          <a href="#">Our Mission</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <div className="footer__title">Services</div>
          <a href="#">Products & Services</a>
          <a href="#">Customer Stories</a>
          <a href="#">Download Apps</a>
        </div>

        <div>
          <div className="footer__title">Information</div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Join Us</a>
        </div>

        <div>
          <div className="footer__title">Social Links</div>
          <a href="#">@CS — Ticket System</a>
          <a href="#">@CS — Ticket System</a>
          <a href="#">support@cst.com</a>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
      </div>
    </footer>
  )
}

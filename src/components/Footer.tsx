import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Absolutely Fabulous Hair & Beauty" />
          <p>Making you feel your absolute best,<br />one appointment at a time.</p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Styling & Cutting</li>
            <li>Colour & Highlights</li>
            <li>Waxing</li>
            <li>Eye Treatments</li>
            <li>Facials & Spray Tans</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon – Fri &nbsp;9am – 7pm</li>
            <li>Saturday &nbsp;9am – 6pm</li>
            <li>Sunday &nbsp;By appointment</li>
            <li style={{ marginTop: '0.75rem', color: 'var(--gold-light)', fontSize: '0.78rem', letterSpacing: '0.06em' }}>
              Sevenoaks area, Kent
            </li>
          </ul>
          <a href="https://wa.me/447518500599" className="footer-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.533 5.862L.054 23.447a.5.5 0 00.499.553h.043l5.758-1.508A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.93 9.93 0 01-5.07-1.383l-.36-.215-3.723.976.993-3.63-.236-.374A9.929 9.929 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© {new Date().getFullYear()} Absolutely Fabulous Hair & Beauty. All rights reserved.</span>
          <span>absolutelyfabuloushairandbeauty.com</span>
        </div>
      </div>
    </footer>
  )
}

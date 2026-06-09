import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Home.css'

const hairServices = [
  { name: 'Cut & Blow Dry', desc: 'Precision cuts tailored to your face shape and lifestyle.', price: 'from £35' },
  { name: 'Colour & Highlights', desc: 'Full colour, balayage, ombré, and foil highlights.', price: 'from £65' },
  { name: 'Bridal Hair', desc: 'Stunning up-dos and bridal styling for your special day.', price: 'from £95' },
  { name: 'Keratin Treatment', desc: 'Smooth, frizz-free results that last up to 3 months.', price: 'from £120' },
  { name: 'Hair Extensions', desc: 'Tape, nano, and micro-ring extensions for length and volume.', price: 'from £150' },
  { name: 'Toning & Gloss', desc: 'Refresh your colour and restore shine between appointments.', price: 'from £30' },
]

const beautyServices = [
  { name: 'Lash Extensions', desc: 'Classic, hybrid, and volume lash sets to open up your eyes.', price: 'from £45' },
  { name: 'Brow Design', desc: 'Shaping, tinting, lamination, and HD brows.', price: 'from £18' },
  { name: 'Manicure & Pedicure', desc: 'Classic, gel, and luxury treatments for hands and feet.', price: 'from £22' },
  { name: 'Facial Treatments', desc: 'Bespoke facials for deep cleanse, glow, and anti-ageing.', price: 'from £55' },
  { name: 'Waxing', desc: 'Full body waxing with professional comfort wax.', price: 'from £12' },
  { name: 'Make-Up', desc: 'Occasion, bridal, and photoshoot make-up artistry.', price: 'from £50' },
]

const testimonials = [
  {
    name: 'Sophie T.',
    text: "Absolutely the best salon I've been to. My balayage is exactly what I envisioned – stunning results and such a warm, welcoming atmosphere.",
    stars: 5,
  },
  {
    name: 'Charlotte M.',
    text: "I had my bridal hair done here and it was absolutely perfect. The team made me feel like royalty. Couldn't recommend enough.",
    stars: 5,
  },
  {
    name: 'Emma R.',
    text: "Lash extensions are incredible – so natural yet full. Quick appointment, lovely staff, and the salon is gorgeous.",
    stars: 5,
  },
]

const Divider = () => (
  <div className="divider"><div className="divider-diamond" /></div>
)

function Stars({ count }: { count: number }) {
  return (
    <span className="stars" aria-label={`${count} stars`}>
      {'★'.repeat(count)}
    </span>
  )
}

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src={logo} alt="Absolutely Fabulous Hair & Beauty" className="hero-logo" />
          <p className="hero-tagline">Where beauty meets elegance</p>
          <div className="hero-actions">
            <a href="#booking" className="btn btn-primary">Book an Appointment</a>
            <Link to="/gallery" className="btn btn-outline hero-btn-outline">View Gallery</Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span />
        </div>
      </section>


      {/* ── LOCATION STRIP ───────────────────── */}
      <div className="intro-strip">
        <div className="intro-strip-inner">
          <div className="intro-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--gold-light)', flexShrink: 0 }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Based in the Sevenoaks area, Kent</span>
          </div>
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────── */}
      <section id="about" className="section section-alt">
        <div className="section-inner about-grid">
          <div className="about-img-wrap">
            <div className="about-img-frame">
              <div className="about-img-placeholder">
                <img src={logo} alt="" className="about-logo-watermark" />
                <p>Your salon photo here</p>
              </div>
              <div className="about-img-border" />
            </div>
          </div>
          <div className="about-text">
            <p className="about-eyebrow gold-text">Our Story</p>
            <h2>A sanctuary of style<br /><em>& beauty</em></h2>
            <Divider />
            <p>
              Absolutely Fabulous Hair & Beauty is a family-run salon established in
              2026, proudly serving the Sevenoaks area of Kent. From the very beginning,
              we've built our reputation on one simple belief — every client deserves
              to leave feeling refreshed, confident, and completely fabulous.
            </p>
            <p>
              From a quick trim to a full bridal transformation, we treat every
              appointment as an opportunity to make you feel your very best.
            </p>
            <a href="#booking" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Book Your Visit
            </a>
          </div>
        </div>
      </section>

      {/* ── HAIR SERVICES ────────────────────── */}
      <section id="services" className="section section-pink">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow gold-text">What We Offer</p>
            <h2>Hair Services</h2>
            <Divider />
            <p>Expert hair care crafted around you</p>
          </div>
          <div className="services-grid">
            {hairServices.map(s => (
              <div key={s.name} className="service-card">
                <div className="service-card-inner">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <span className="service-price gold-text">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEAUTY SERVICES ──────────────────── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow gold-text">Indulge Yourself</p>
            <h2>Beauty Services</h2>
            <Divider />
            <p>Treatments that nourish, enhance, and delight</p>
          </div>
          <div className="services-grid">
            {beautyServices.map(s => (
              <div key={s.name} className="service-card service-card--beauty">
                <div className="service-card-inner">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <span className="service-price gold-text">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ───────────────────── */}
      <section className="section section-pink gallery-teaser">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow gold-text">Our Work</p>
            <h2>From Our Gallery</h2>
            <Divider />
            <p>A glimpse of the transformations we create</p>
          </div>
          <div className="gallery-teaser-grid">
            {[1,2,3,4].map(i => (
              <div key={i} className="gallery-teaser-item">
                <div className="gallery-placeholder">
                  <span>Photo {i}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow gold-text">Kind Words</p>
            <h2>What Our Clients Say</h2>
            <Divider />
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.text}</p>
                <Stars count={t.stars} />
                <p className="testimonial-name">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ──────────────────────────── */}
      <section id="booking" className="section section-booking">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Ready to feel fabulous?</p>
            <h2 style={{ color: '#fff' }}>Book Your Appointment</h2>
            <div className="divider divider-light"><div className="divider-diamond" style={{ background: 'var(--gold-light)' }} /></div>
          </div>
          <div className="booking-content">
            <div className="booking-options">
              <a
                href="https://wa.me/447700000000"
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.533 5.862L.054 23.447a.5.5 0 00.499.553h.043l5.758-1.508A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.93 9.93 0 01-5.07-1.383l-.36-.215-3.723.976.993-3.63-.236-.374A9.929 9.929 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Book via WhatsApp
              </a>
              <Link to="/contact" className="btn btn-gold">
                Send Enquiry
              </Link>
              <a href="tel:+447700000000" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>
                Call Us
              </a>
            </div>
            <div className="booking-info">
              <div className="booking-info-item">
                <strong>Monday – Friday</strong>
                <span>9:00 am – 7:00 pm</span>
              </div>
              <div className="booking-info-item">
                <strong>Saturday</strong>
                <span>9:00 am – 6:00 pm</span>
              </div>
              <div className="booking-info-item">
                <strong>Sunday</strong>
                <span>By appointment only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

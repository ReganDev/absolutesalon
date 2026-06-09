import { useState } from 'react'
import './Contact.css'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const services = [
  'Styling',
  'Cutting',
  'Colour & Highlights',
  "Men's Cut",
  "Junior's Hair",
  'Hands',
  'Feet',
  'Waxing',
  'Spray Tan',
  'Eye Treatments',
  'Facials',
  'Other',
]

const Divider = () => (
  <div className="divider"><div className="divider-diamond" /></div>
)

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page-top">

      {/* ── PAGE HERO ────────────────── */}
      <section className="page-hero contact-hero">
        <div className="page-hero-content">
          <p className="eyebrow gold-text">Get in Touch</p>
          <h1>Contact Us</h1>
          <Divider />
          <p className="page-hero-sub">We'd love to hear from you — let us make you feel fabulous</p>
        </div>
      </section>

      {/* ── CONTACT BODY ─────────────── */}
      <section className="section section-alt">
        <div className="section-inner contact-grid">

          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-sub-title">Send an Enquiry</h2>
            <p className="contact-sub-desc">Fill in the form below and we'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been received. We'll be in touch very soon.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span>*</span></label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="07518 500 599"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select
                      id="service" name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message <span>*</span></label>
                  <textarea
                    id="message" name="message"
                    placeholder="Tell us about what you're looking for, preferred dates, or any questions…"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="contact-info">
            <div className="contact-card">
              <h3>Visit Us</h3>
              <p>123 High Street<br />Your Town<br />AB1 2CD</p>
            </div>

            <div className="contact-card">
              <h3>Opening Hours</h3>
              <ul className="hours-list">
                <li><span>Mon – Fri</span><span>9:00 am – 7:00 pm</span></li>
                <li><span>Saturday</span><span>9:00 am – 6:00 pm</span></li>
                <li><span>Sunday</span><span>By appointment</span></li>
              </ul>
            </div>

            <div className="contact-card">
              <h3>Get in Touch</h3>
              <div className="contact-links">
                <a href="tel:+447518500599" className="contact-link-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                  07518 500 599
                </a>
                <a href="mailto:abfabhairandbeauty@gmail.com" className="contact-link-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  abfabhairandbeauty@gmail.com
                </a>
                <a
                  href="https://wa.me/447518500599"
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '0.75rem', justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.533 5.862L.054 23.447a.5.5 0 00.499.553h.043l5.758-1.508A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.93 9.93 0 01-5.07-1.383l-.36-.215-3.723.976.993-3.63-.236-.374A9.929 9.929 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-card contact-card--gold">
              <p className="contact-card-quote">
                "Every client who walks through our door is treated like royalty."
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}

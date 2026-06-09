import BeforeAfterSlider from '../components/BeforeAfterSlider'
import './Gallery.css'

// Using Picsum for placeholder imagery with consistent seeds
const beforeAfters = [
  {
    label: 'Balayage Transformation',
    before: 'https://picsum.photos/seed/hair1b/600/800',
    after:  'https://picsum.photos/seed/hair1a/600/800',
  },
  {
    label: 'Colour & Gloss Treatment',
    before: 'https://picsum.photos/seed/hair2b/600/800',
    after:  'https://picsum.photos/seed/hair2a/600/800',
  },
  {
    label: 'Classic Cut & Blow Dry',
    before: 'https://picsum.photos/seed/hair3b/600/800',
    after:  'https://picsum.photos/seed/hair3a/600/800',
  },
  {
    label: 'Lash Extension Set',
    before: 'https://picsum.photos/seed/lash1b/600/800',
    after:  'https://picsum.photos/seed/lash1a/600/800',
  },
]

const galleryItems = [
  { src: 'https://picsum.photos/seed/gal1/600/800',  cat: 'Hair' },
  { src: 'https://picsum.photos/seed/gal2/600/600',  cat: 'Beauty' },
  { src: 'https://picsum.photos/seed/gal3/600/800',  cat: 'Hair' },
  { src: 'https://picsum.photos/seed/gal4/600/600',  cat: 'Nails' },
  { src: 'https://picsum.photos/seed/gal5/600/800',  cat: 'Brows' },
  { src: 'https://picsum.photos/seed/gal6/600/600',  cat: 'Beauty' },
  { src: 'https://picsum.photos/seed/gal7/600/800',  cat: 'Hair' },
  { src: 'https://picsum.photos/seed/gal8/600/600',  cat: 'Lashes' },
  { src: 'https://picsum.photos/seed/gal9/600/800',  cat: 'Hair' },
]

const Divider = () => (
  <div className="divider"><div className="divider-diamond" /></div>
)

export default function Gallery() {
  return (
    <main className="page-top">

      {/* ── PAGE HERO ─────────────────────── */}
      <section className="page-hero gallery-hero">
        <div className="page-hero-content">
          <p className="eyebrow gold-text">Our Work</p>
          <h1>Gallery</h1>
          <Divider />
          <p className="page-hero-sub">Browse our transformations and be inspired</p>
        </div>
      </section>

      {/* ── BEFORE & AFTER SLIDERS ─────────── */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow gold-text">See the Difference</p>
            <h2>Before & After</h2>
            <Divider />
            <p>Drag the slider to reveal each transformation</p>
          </div>
          <div className="ba-grid">
            {beforeAfters.map(item => (
              <BeforeAfterSlider
                key={item.label}
                before={item.before}
                after={item.after}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ──────────────────── */}
      <section className="section section-pink">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow gold-text">Fresh From the Salon</p>
            <h2>Our Work</h2>
            <Divider />
          </div>
          <div className="masonry-grid">
            {galleryItems.map((item, i) => (
              <div key={i} className="masonry-item">
                <div className="masonry-img-wrap">
                  <img src={item.src} alt={item.cat} loading="lazy" />
                  <div className="masonry-overlay">
                    <span>{item.cat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────── */}
      <section className="section section-alt gallery-cta">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="eyebrow gold-text">Like What You See?</p>
          <h2>Book Your Transformation</h2>
          <Divider />
          <p style={{ marginBottom: '2rem', fontFamily: 'var(--font-elegant)', fontStyle: 'italic', fontSize: '1.1rem' }}>
            Let us help you look and feel absolutely fabulous.
          </p>
          <a href="https://wa.me/447518500599" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Book Now on WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}

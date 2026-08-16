import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container" style={{ padding: 'clamp(2rem,5vw,4rem) 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, Cormorant Garamond, Georgia, serif', color: '#D05334', fontWeight: 700, fontSize: '1.1rem' }}>
              I Should Have My Tea
            </div>
            <div style={{ fontSize: '0.95rem', color: '#2C2A29', opacity: 0.75, marginTop: '0.5rem' }}>
              A thoughtful space for writing and reflection.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <Link to="/" className="text-charcoal" style={{ textDecoration: 'none' }}>HOME</Link>
            <Link to="/blog" className="text-charcoal" style={{ textDecoration: 'none' }}>BLOG</Link>
            <Link to="/about" className="text-charcoal" style={{ textDecoration: 'none' }}>ABOUT</Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', opacity: 0.6, fontSize: '0.875rem' }}>
          © {year} I Should Have My Tea
        </div>
      </div>
    </footer>
  );
}

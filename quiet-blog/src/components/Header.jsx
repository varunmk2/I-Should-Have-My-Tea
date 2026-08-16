import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream border-b-0">
      <div className="container flex items-center justify-between py-[clamp(1.5rem,3vw,2rem)]">
        <div className="logo">
          <Link to="/" className="text-rust font-heading uppercase" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', letterSpacing: '0.06rem' }}>
            I Should Have My Tea
          </Link>
        </div>

        <nav className="nav">
          <Link to="/about" className="mr-6 text-charcoal hover:text-rust">ABOUT</Link>
          <Link to="/blog" className="text-charcoal hover:text-rust">BLOG</Link>
        </nav>
      </div>
    </header>
  );
}

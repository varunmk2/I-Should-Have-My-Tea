import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { palette } = useTheme();

  return (
    <header
      style={{
        background: palette.bg,
        borderBottom: `2px solid ${palette.accent}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
      }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: '1rem',
              color: palette.text,
              letterSpacing: '-0.01em',
            }}
          >
            I Should Have My Tea
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              fontWeight: 500,
              color: isActive ? palette.accent : palette.text,
              textDecoration: 'none',
              paddingBottom: '0.3rem',
              borderBottom: isActive ? `2px solid ${palette.accent}` : '2px solid transparent',
              transition: 'all 0.15s',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              fontWeight: 500,
              color: isActive ? palette.accent : palette.text,
              textDecoration: 'none',
              paddingBottom: '0.3rem',
              borderBottom: isActive ? `2px solid ${palette.accent}` : '2px solid transparent',
              transition: 'all 0.15s',
            })}
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              fontWeight: 500,
              color: isActive ? palette.accent : palette.text,
              textDecoration: 'none',
              paddingBottom: '0.3rem',
              borderBottom: isActive ? `2px solid ${palette.accent}` : '2px solid transparent',
              transition: 'all 0.15s',
            })}
          >
            About
          </NavLink>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: palette.accent,
              color: '#fff',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: '0.8rem',
              padding: '0.5rem 1.1rem',
              borderRadius: '50px',
              textDecoration: 'none',
              border: `2px solid ${palette.accent}`,
              boxShadow: `3px 3px 0 ${palette.accentLight}`,
              transition: 'all 0.15s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-1px, -1px)';
              e.currentTarget.style.boxShadow = `4px 4px 0 ${palette.accentLight}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = `3px 3px 0 ${palette.accentLight}`;
            }}
          >
            Start Reading →
          </Link>
        </div>
      </nav>
    </header>
  );
}

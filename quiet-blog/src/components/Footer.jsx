import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import CustomizeModal from './CustomizeModal';

export default function Footer() {
  const year = new Date().getFullYear();
  const { palette } = useTheme();

  return (
    <footer
      style={{
        borderTop: `2px solid ${palette.border}`,
        background: palette.bgLight,
        marginTop: 'auto',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '1.05rem', color: palette.text, marginBottom: '0.4rem' }}>
              I Should Have My Tea
            </p>
            <p style={{ fontSize: '0.85rem', color: palette.textMuted, maxWidth: '240px', lineHeight: 1.6 }}>
              A calm corner of the web for long reads, half-formed thoughts, and things worth sitting with.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', fontWeight: 700, color: palette.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
              Pages
            </p>
            {[['/', 'Home'], ['/blog', 'Blog'], ['/about', 'About']].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: palette.text, textDecoration: 'none' }}
                onMouseEnter={e => (e.target.style.color = palette.accent)}
                onMouseLeave={e => (e.target.style.color = palette.text)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: `1px dashed ${palette.border}`, paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: palette.textMuted, margin: 0 }}>
              © {year} I Should Have My Tea — built with Vite + React
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: palette.textMuted, margin: 0 }}>
              hosted on GitHub Pages
            </p>
          </div>
          <div>
            <CustomizeModal footerMode={true} palette={palette} />
          </div>
        </div>
      </div>
    </footer>
  );
}

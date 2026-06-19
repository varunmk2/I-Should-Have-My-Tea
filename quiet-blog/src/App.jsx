import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import About from './pages/About';

function NotFound() {
  const { palette } = useTheme();
  return (
    <main style={{ textAlign: 'center', padding: '7rem 1.5rem', background: palette.bg, color: palette.text }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '4rem', marginBottom: '0.5rem' }}>404</p>
      <h1
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          fontSize: '2rem',
          color: palette.text,
          marginBottom: '0.75rem',
        }}
      >
        404 — Lost in the woods
      </h1>
      <p style={{ color: palette.textMuted, marginBottom: '2rem' }}>
        That page doesn't exist. Head back and try again.
      </p>
      <a
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: palette.accent,
          color: '#fff',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 600,
          fontSize: '0.85rem',
          padding: '0.6rem 1.2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          border: `2px solid ${palette.accent}`,
          boxShadow: `3px 3px 0 ${palette.accentLight}`,
          transition: 'all 0.15s',
          cursor: 'pointer',
        }}
      >
        ← Back Home
      </a>
    </main>
  );
}

function AppContent() {
  const { palette } = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: palette.bg, color: palette.text, transition: 'background 0.3s ease, color 0.3s ease' }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      {/* HashRouter handles sub-paths cleanly on GitHub Pages without breaking */}
      <HashRouter>
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  );
}

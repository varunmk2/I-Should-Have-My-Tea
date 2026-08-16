import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import About from './pages/About';

function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '7rem 1.5rem', background: '#F9F6F0', color: '#2C2A29' }}>
      <p style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</p>
      <h1 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '0.75rem' }}>404 — Lost in the woods</h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>That page doesn't exist. Head back and try again.</p>
      <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#2C2A29', fontWeight: 600, fontSize: '0.85rem', padding: '0.6rem 1.2rem', border: '2px solid #D05334', textDecoration: 'none' }}>← Back Home</a>
    </main>
  );
}

function AppContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
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
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

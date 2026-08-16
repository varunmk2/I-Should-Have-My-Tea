import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { getPostBySlug, getSortedPosts, formatDate } from '../data/posts';

marked.setOptions({ gfm: true, breaks: false });

const COLORS = { cream: '#F9F6F0', rust: '#D05334', charcoal: '#2C2A29', blush: '#F4CFCF' };

export default function Article() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (post) document.title = `${post.title} | I Should Have My Tea`;
  }, [slug, post]);

  if (!post) return <Navigate to="/blog" replace />;

  const html = useMemo(() => DOMPurify.sanitize(marked.parse(post.content || '')), [post.content]);

  const allPosts = getSortedPosts();
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const nextPost = idx > 0 ? allPosts[idx - 1] : null;

  return (
    <main style={{ background: COLORS.cream, color: COLORS.charcoal }}>
      <header style={{ borderBottom: `2px solid ${COLORS.rust}`, padding: '3.5rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <nav style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/" className="text-charcoal">Home</Link>
            <span style={{ color: COLORS.rust }}>/</span>
            <Link to="/blog" className="text-charcoal">Blog</Link>
            <span style={{ color: COLORS.rust }}>/</span>
            <span className="text-charcoal">{post.title.slice(0, 36)}{post.title.length > 36 ? '…' : ''}</span>
          </nav>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {post.tags && post.tags.map((tag) => (
              <span key={tag} className="uppercase" style={{ fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.65rem', border: `1.5px solid ${COLORS.charcoal}`, color: COLORS.charcoal, textDecoration: 'none' }}>{tag}</span>
            ))}
          </div>

          <h1 className="font-heading text-rust uppercase" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', marginBottom: '1.1rem' }}>{post.title}</h1>

          {post.description && <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7, marginBottom: '1.5rem' }}>{post.description}</p>}

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.78rem', color: '#555' }}>
            <span>{formatDate(post.pubDate)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div className="prose" style={{ fontSize: '1.08rem', lineHeight: '1.85', color: COLORS.charcoal }} dangerouslySetInnerHTML={{ __html: html }} />

        <hr style={{ border: 'none', borderTop: `2px dashed ${COLORS.charcoal}`, margin: '3rem 0' }} />

        <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            {prevPost && (
              <Link to={`/blog/${prevPost.slug}`} style={{ display: 'block', padding: '1rem', border: `2px solid ${COLORS.charcoal}`, textDecoration: 'none' }}>
                <p style={{ fontSize: '0.7rem', color: '#555', marginBottom: '0.35rem' }}>← Older</p>
                <p style={{ fontWeight: 600, fontSize: '0.85rem', color: COLORS.charcoal }}>{prevPost.title}</p>
              </Link>
            )}
          </div>

          <div>
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} style={{ display: 'block', padding: '1rem', border: `2px solid ${COLORS.charcoal}`, textDecoration: 'none' }}>
                <p style={{ fontSize: '0.7rem', color: '#555', marginBottom: '0.35rem' }}>Newer →</p>
                <p style={{ fontWeight: 600, fontSize: '0.85rem', color: COLORS.charcoal }}>{nextPost.title}</p>
              </Link>
            )}
          </div>
        </nav>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: COLORS.charcoal, fontWeight: 600, fontSize: '0.82rem', padding: '0.6rem 1.2rem', border: `2px solid ${COLORS.charcoal}`, textDecoration: 'none' }}>← Back to all posts</Link>
        </div>
      </article>
    </main>
  );
}
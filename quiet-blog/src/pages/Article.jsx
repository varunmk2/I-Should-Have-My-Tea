import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useTheme } from '../context/ThemeContext';
import { getPostBySlug, getSortedPosts, formatDate } from '../data/posts';

marked.setOptions({ gfm: true, breaks: false });

export default function Article() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const { palette } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (post) {
      document.title = `${post.title} | I Should Have My Tea`;
    }
  }, [slug, post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const html = useMemo(
    () => DOMPurify.sanitize(marked.parse(post.content || '')),
    [post.content]
  );

  const allPosts = getSortedPosts();
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const nextPost = idx > 0 ? allPosts[idx - 1] : null;

  return (
    <main style={{ background: palette.bg, color: palette.text, transition: 'all 0.3s ease' }}>
      <header
        style={{
          background: `linear-gradient(180deg, ${palette.bgLight} 0%, ${palette.bg} 100%)`,
          borderBottom: `2px solid ${palette.border}`,
          padding: '3.5rem 1.5rem 3rem',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <nav style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: palette.textMuted, textDecoration: 'none' }}>Home</Link>
            <span style={{ color: palette.border }}>/</span>
            <Link to="/blog" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: palette.textMuted, textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: palette.border }}>/</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: palette.text }}>
              {post.title.slice(0, 36)}{post.title.length > 36 ? '…' : ''}
            </span>
          </nav>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {post.tags.map((tag) => (
              <Link key={tag} to="/blog" style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '0.2rem 0.65rem',
                borderRadius: '4px',
                background: palette.bg,
                border: `1.5px solid ${palette.border}`,
                color: palette.text,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}>
                {tag}
              </Link>
            ))}
          </div>

          <h1
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
              color: palette.text,
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
              marginBottom: '1.1rem',
            }}
          >
            {post.title}
          </h1>

          <p style={{ fontSize: '1.05rem', color: palette.textMuted, lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {post.description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.78rem',
              color: palette.textMuted,
            }}
          >
            <span>📅 {formatDate(post.pubDate)}</span>
            <span style={{ color: palette.border }}>·</span>
            <span>⏱ {post.readTime}</span>
          </div>
        </div>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div
          style={{
            fontSize: '1.08rem',
            lineHeight: '1.85',
            color: palette.text,
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <hr style={{ border: 'none', borderTop: `2px dashed ${palette.border}`, margin: '3rem 0' }} />

        <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            {prevPost && (
              <Link
                to={`/blog/${prevPost.slug}`}
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: palette.bgLight,
                  border: `2px solid ${palette.border}`,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: palette.textMuted, marginBottom: '0.35rem' }}>
                  ← Older
                </p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: '0.85rem', color: palette.text, lineHeight: 1.4 }}>
                  {prevPost.title}
                </p>
              </Link>
            )}
          </div>

          <div>
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                style={{
                  display: 'block',
                  padding: '1rem',
                  background: palette.bgLight,
                  border: `2px solid ${palette.border}`,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: palette.textMuted, marginBottom: '0.35rem' }}>
                  Newer →
                </p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: '0.85rem', color: palette.text, lineHeight: 1.4 }}>
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </nav>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: palette.bgLight,
            color: palette.text,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            fontSize: '0.82rem',
            padding: '0.6rem 1.2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            border: `2px solid ${palette.border}`,
            boxShadow: `3px 3px 0 ${palette.border}`,
            transition: 'all 0.15s',
            cursor: 'pointer',
          }}>
            ← Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}
import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import matter from 'gray-matter';
import { useTheme } from '../context/ThemeContext';
import { getSortedPosts, formatDate } from '../data/posts';

export default function Article() {
  const { slug } = useParams();
  const { palette } = useTheme();

  // Add this inside your Home() / About() / Blog() components before the return statement:
useEffect(() => {
  document.title = "Article | I Should Have My Tea"; // Swap "Home" for whichever page it is
}, []);
  
  // New States to handle your files dynamically
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Dynamic import to fetch the standalone markdown file directly
    import(`../content/${slug}.md?raw`)
      .then((res) => {
        const { data, content } = matter(res.default);
        
        setPost({
          title: data.title,
          description: data.excerpt || data.description || '',
          pubDate: data.date,
          tags: data.tags || [],
          content: content
        });

        // Calculate a realistic reading time dynamically based on word count
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / 200);
        setReadTime(`⏱ ${minutes} min read`);

        // Dynamically update document browser tab title
        document.title = `${data.title} | I Should Have My Tea`;
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        document.title = "404 - Post Not Found";
      });
  }, [slug]);

  // Handle Loading States cleanly
  if (loading) {
    return <div style={{ background: palette.bg, color: palette.text, padding: '8rem', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace" }}>Loading Post...</div>;
  }

  // Redirect if no markdown file matches the URL slug
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Handle older/newer pagination logic seamlessly
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
            {/* Formatted Date helper falls through safely */}
            <span>📅 {formatDate(post.pubDate)}</span>
            <span style={{ color: palette.border }}>·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div style={{ fontSize: '1.08rem', lineHeight: '1.85', color: palette.text }}>
          
          {/* Swapped custom renderer to securely parse markdown with syntax highlights */}
          <ReactMarkdown
            children={post.content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.9rem',
                      borderRadius: '8px',
                      border: `1.5px solid ${palette.border}`
                    }}
                    {...props}
                  />
                ) : (
                  <code style={{ fontFamily: "'JetBrains Mono', monospace', backgroundColor: palette.bgLight, padding: '0.2rem 0.4rem', borderRadius: '4px" }} className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          />
          
        </div>

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
// import { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import PostCard from '../components/PostCard';
import { getSortedPosts, getAllTags } from '../data/posts';
import { useState, useEffect, useMemo } from 'react';

const ALL_POSTS = getSortedPosts();
const ALL_TAGS  = getAllTags();

export default function Blog() {

// Add this inside your Home() / About() / Blog() components before the return statement:
useEffect(() => {
  document.title = "Blog | I Should Have My Tea"; // Swap "Home" for whichever page it is
}, []);

  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const { palette } = useTheme();

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ALL_POSTS.filter((post) => {
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q);

      const matchesTag = !activeTag || post.tags.includes(activeTag);

      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  const toggleTag = (tag) => setActiveTag((prev) => (prev === tag ? null : tag));

  return (
    <main style={{ background: palette.bg, color: palette.text, padding: '3.5rem 1.5rem 6rem', transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 700,
              color: palette.accent,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '0.6rem',
            }}
          >
            Archive
          </p>
          <h1
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              color: palette.text,
              letterSpacing: '-0.015em',
              marginBottom: '0.6rem',
            }}
          >
            All Posts
          </h1>
          <p style={{ fontSize: '0.95rem', color: palette.textMuted, maxWidth: '480px', lineHeight: 1.7 }}>
            {ALL_POSTS.length} articles on philosophy, engineering, habits, and whatever else demanded to be written.
          </p>
        </div>

        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={palette.textMuted} strokeWidth="2.5" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            placeholder="Search posts by title or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              padding: '0.75rem 1.25rem 0.75rem 3rem',
              background: palette.bgLight,
              border: `2px solid ${palette.border}`,
              borderRadius: '8px',
              color: palette.text,
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = palette.accent)}
            onBlur={(e) => (e.target.style.borderColor = palette.border)}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: `2px solid ${palette.border}`,
          }}
        >
          <button
            onClick={() => setActiveTag(null)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 600,
              padding: '0.2rem 0.65rem',
              borderRadius: '4px',
              background: !activeTag ? palette.accent : palette.bg,
              border: `1.5px solid ${!activeTag ? palette.accent : palette.border}`,
              color: !activeTag ? '#fff' : palette.text,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            All
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '0.2rem 0.65rem',
                borderRadius: '4px',
                background: activeTag === tag ? palette.accent : palette.bg,
                border: `1.5px solid ${activeTag === tag ? palette.accent : palette.border}`,
                color: activeTag === tag ? '#fff' : palette.text,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {(query || activeTag) && (
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.78rem',
              color: palette.textMuted,
              marginBottom: '1.5rem',
            }}
          >
            {filtered.length === 0
              ? 'No posts matched your search.'
              : `${filtered.length} post${filtered.length !== 1 ? 's' : ''} found`}
            {activeTag && (
              <span>
                {' '}in <strong style={{ color: palette.accent }}>#{activeTag}</strong>
              </span>
            )}
          </p>
        )}

        {filtered.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} palette={palette} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '5rem 1.5rem',
              color: palette.textMuted,
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌲</div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, marginBottom: '0.4rem', color: palette.text }}>
              Nothing here yet.
            </p>
            <p style={{ fontSize: '0.9rem' }}>Try a different search or tag filter.</p>
            <button
              onClick={() => { setQuery(''); setActiveTag(null); }}
              style={{ marginTop: '1.25rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: palette.accent, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

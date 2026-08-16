import { useState, useEffect, useMemo } from 'react';
import PostCard from '../components/PostCard';
import { getSortedPosts, getAllTags } from '../data/posts';

const ALL_POSTS = getSortedPosts();
const ALL_TAGS = getAllTags();
const COLORS = { cream: '#F9F6F0', rust: '#D05334', charcoal: '#2C2A29' };

export default function Blog() {
  useEffect(() => { document.title = 'Blog | I Should Have My Tea'; }, []);

  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ALL_POSTS.filter((post) => {
      const matchesQuery = !q || post.title.toLowerCase().includes(q) || (post.description && post.description.toLowerCase().includes(q));
      const matchesTag = !activeTag || (post.tags && post.tags.includes(activeTag));
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  const toggleTag = (tag) => setActiveTag((prev) => (prev === tag ? null : tag));

  return (
    <main style={{ background: COLORS.cream, color: COLORS.charcoal, padding: '3.5rem 1.5rem 6rem' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="uppercase" style={{ fontSize: '0.72rem', fontWeight: 700, color: COLORS.rust, letterSpacing: '0.12em', marginBottom: '0.6rem' }}>Archive</p>
          <h1 className="font-heading text-rust uppercase" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '0.6rem' }}>All Posts</h1>
          <p style={{ fontSize: '0.95rem', color: '#555', maxWidth: '480px', lineHeight: 1.7 }}>{ALL_POSTS.length} articles on philosophy, engineering, habits, and whatever else demanded to be written.</p>
        </div>

        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <input
            type="search"
            placeholder="Search posts by title or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              fontSize: '0.9rem',
              padding: '0.75rem 1.25rem',
              background: '#fff',
              border: `2px solid ${COLORS.charcoal}`,
              borderRadius: '0',
              color: COLORS.charcoal,
              outline: 'none',
            }}
            onFocus={(e) => (e.target.style.borderColor = COLORS.rust)}
            onBlur={(e) => (e.target.style.borderColor = COLORS.charcoal)}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: `2px solid ${COLORS.charcoal}` }}>
          <button onClick={() => setActiveTag(null)} className="uppercase" style={{ fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.65rem', borderRadius: 0, background: activeTag ? COLORS.cream : COLORS.rust, border: 'none', color: activeTag ? COLORS.charcoal : '#fff', cursor: 'pointer' }}>All</button>
          {ALL_TAGS.map((tag) => (
            <button key={tag} onClick={() => toggleTag(tag)} className="uppercase" style={{ fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.65rem', borderRadius: 0, background: activeTag === tag ? COLORS.rust : COLORS.cream, border: 'none', color: activeTag === tag ? '#fff' : COLORS.charcoal, cursor: 'pointer' }}>{tag}</button>
          ))}
        </div>

        {(query || activeTag) && (
          <p style={{ fontSize: '0.78rem', color: '#555', marginBottom: '1.5rem' }}>
            {filtered.length === 0 ? 'No posts matched your search.' : `${filtered.length} post${filtered.length !== 1 ? 's' : ''} found`}
            {activeTag && (<span> in <strong style={{ color: COLORS.rust }}>#{activeTag}</strong></span>)}
          </p>
        )}

        {filtered.length > 0 ? (
          <div className="grid-posts">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem 1.5rem', color: '#777' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.4rem', color: COLORS.charcoal }}>Nothing here yet.</p>
            <p style={{ fontSize: '0.9rem' }}>Try a different search or tag filter.</p>
            <button onClick={() => { setQuery(''); setActiveTag(null); }} style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: COLORS.rust, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear filters</button>
          </div>
        )}
      </div>
    </main>
  );
}

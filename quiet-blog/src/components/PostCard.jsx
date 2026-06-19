import { Link } from 'react-router-dom';
import { formatDate } from '../data/posts';

export default function PostCard({ post, featured = false, palette }) {
  const { slug, title, description, pubDate, tags, readTime, featuredImage } = post;

  return (
    <Link
      to={`/blog/${slug}`}
      style={{
        textDecoration: 'none',
        display: 'block',
        borderRadius: '8px',
        overflow: 'hidden',
        background: palette.bgLight,
        border: `2px solid ${palette.border}`,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-2px, -3px)';
        e.currentTarget.style.boxShadow = `4px 5px 0 ${palette.border}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          height: featured ? '180px' : '140px',
          background: featuredImage ? 'transparent' : `linear-gradient(135deg, ${palette.bgLight} 0%, ${palette.accent} 50%, ${palette.border} 100%)`,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {featuredImage ? (
          <img 
            src={featuredImage} 
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <svg width="60" height="50" viewBox="0 0 80 70" xmlns="http://www.w3.org/2000/svg" opacity="0.3">
            <polygon points="20,5 36,35 4,35" fill={palette.primary} />
            <polygon points="20,18 38,46 2,46" fill={palette.accent} />
            <rect x="17" y="44" width="6" height="10" fill={palette.primary} />
          </svg>
        )}
      </div>

      <div style={{ padding: '1.1rem 1.25rem 1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: palette.textMuted,
              fontWeight: 500,
            }}
          >
            {formatDate(pubDate)}
          </span>
          <span style={{ color: palette.border, fontSize: '0.7rem' }}>·</span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: palette.textMuted,
            }}
          >
            {readTime}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: featured ? '1.05rem' : '0.95rem',
            color: palette.text,
            lineHeight: 1.4,
            marginBottom: '0.5rem',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: palette.textMuted,
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '0.85rem',
          }}
        >
          {description}
        </p>

        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.78rem',
            fontWeight: 600,
            color: palette.accent,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          Read more →
        </span>
      </div>
    </Link>
  );
}

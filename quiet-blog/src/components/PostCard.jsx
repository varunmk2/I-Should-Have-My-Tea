import { Link } from 'react-router-dom';
import { formatDate } from '../data/posts';

export default function PostCard({ post }) {
  const { slug, title, description, pubDate, readTime, featuredImage } = post;

  return (
    <article className="post-card">
      <Link to={`/blog/${slug}`} className="block no-underline text-charcoal">
        {featuredImage && (
          <div className="w-full" style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
            <img src={featuredImage} alt={title} className="w-full h-full object-cover sharp-corners" />
          </div>
        )}

        <div style={{ padding: '1rem 0' }}>
          <div className="post-meta" style={{ marginBottom: '0.5rem', fontSize: '0.75rem', opacity: 0.75 }}>
            <span>{formatDate(pubDate)}</span>
            <span style={{ margin: '0 0.5rem' }}>·</span>
            <span>{readTime}</span>
          </div>

          <h3 className="font-heading text-rust" style={{ fontSize: '1.5rem', margin: '0 0 0.5rem' }}>{title}</h3>

          {description && (
            <p style={{ fontSize: '0.95rem', color: '#2C2A29', margin: 0 }}>{description}</p>
          )}
        </div>
      </Link>
    </article>
  );
}

import React from 'react';
import PostCard from './PostCard';

export default function FeaturedPosts({ posts = [] }) {
  return (
    <section className="featured py-[4rem]">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2 className="text-rust font-heading uppercase">FEATURED POSTS</h2>
        </div>

        <div className="grid-posts">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PostCard from '../components/PostCard';
import OceanScene from '../components/scenes/OceanScene';
import LibraryScene from '../components/scenes/LibraryScene';
import CityScene from '../components/scenes/CityScene';
import TrainScene from '../components/scenes/TrainScene';
import { getRecentPosts } from '../data/posts';
import { useState, useEffect } from 'react';

const FEATURES = [
  {
    emoji: '🧘',
    title: 'Quick Reading',
    desc: 'Short-form posts that won\'t take up your time. Reviews, hot takes and much more',
  },
  {
    emoji: '📒',
    title: 'Honest Writing',
    desc: 'Book notes, movie reviews, and reflections. Real opinions not AI.',
  },
  {
    emoji: '🌿',
    title: 'Slow Updates',
    desc: 'I publish when something is ready, not on a schedule. Quality over cadence.',
  },
];

function getScene(theme) {
  const imagePaths = {
    ocean: `${import.meta.env.BASE_URL}images/oceanscene.jpg`,
    library: `${import.meta.env.BASE_URL}images/libraryscene.jpg`,
    city: `${import.meta.env.BASE_URL}images/cityscene.jpg`,
    train: `${import.meta.env.BASE_URL}images/trainscene.jpg`,
  };
  const imagePath = imagePaths[theme] || imagePaths.ocean;
  
  switch (theme) {
    case 'library':
      return <LibraryScene imagePath={imagePath} />;
    case 'city':
      return <CityScene imagePath={imagePath} />;
    case 'train':
      return <TrainScene imagePath={imagePath} />;
    case 'ocean':
    default:
      return <OceanScene imagePath={imagePath} />;
  }
}

export default function Home() {


useEffect(() => {
  document.title = "Home | I Should Have My Tea"; 
}, []);


  const { theme, palette } = useTheme();
  const recentPosts = getRecentPosts(3);

  return (
    <main style={{ background: palette.bg, color: palette.text, transition: 'all 0.3s ease' }}>
      <section
        style={{
          textAlign: 'center',
          padding: '5rem 1.5rem 0',
          maxWidth: '780px',
          margin: '0 auto',
        }}
      >


        <h1
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 'clamp(2.1rem, 5vw, 3.5rem)',
            color: palette.text,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            marginBottom: '1.4rem',
          }}
        >
          Where Logic Meets
          <br />
          Reflection.
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            color: palette.textMuted,
            lineHeight: 1.75,
            maxWidth: '540px',
            margin: '0 auto 2.25rem',
          }}
        >
          In the rush of building things, sometimes I need a space to slow down and
          think clearly, read carefully, and write honestly about what I've
          learned along the way.
        </p>
      </section>

      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
        }}
      >
        <div
          style={{
            border: `2px solid ${palette.accent}`,
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: `4px 6px 0 ${palette.accent}`,
            transition: 'all 0.3s ease',
          }}
        >
          {getScene(theme)}
        </div>
      </section>

      <section
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {FEATURES.map(({ emoji, title, desc }) => (
            <div
              key={title}
              style={{
                background: palette.bgLight,
                border: `2px solid ${palette.border}`,
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{emoji}</div>
              <h3
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: palette.text,
                  marginBottom: '0.5rem',
                }}
              >
                {title}
              </h3>
              <p
                style={{ fontSize: '0.875rem', color: palette.textMuted, lineHeight: 1.65 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem 6rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '0.75rem',
            borderBottom: `2px solid ${palette.border}`,
          }}
        >
          <h2
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: '1.3rem',
              color: palette.text,
            }}
          >
            Recent Posts
          </h2>
          <Link
            to="/I-Should-Have-My-Tea/blog"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: palette.accent,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            View all →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} featured palette={palette} />
          ))}
        </div>
      </section>
    </main>
  );
}

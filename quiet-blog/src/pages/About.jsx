import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useMemo } from 'react';

marked.setOptions({ gfm: true, breaks: false });

export const about = {
  name: "Varun Kolambekar",
  content: `
Writing has always been alluring to me. I am someone who has always been shy, conservative, and awkward, and writing happens to be the easiest way for me to express my feelings. Relaxing, sitting down, and penning my thoughts is therapeutic in a weird way. 

This site was created because I felt I needed my own space to publish my pieces. Now, don't get me wrong: Medium and Substack are great platforms to upload stories, but creating my own custom space just makes everything feel more personal. I will still upload stories over there, but it will mostly be a simultaneous upload with this site.

Now, let's talk about the name of the blog: I Should Have My Tea.

I thought long and hard about it. I came up with dozens of names and ideas, but I just kept canceling them and overthinking the whole process. While I was struggling to decide, I started scrolling through my collection of books. The one that stood out to me was Notes from Underground by Fyodor Dostoevsky. I went through some of the quotes I had highlighted, and one particular line stood out to me:

“I say let the world go to hell, but I should always have my tea.”

This deeply cynical line completely encapsulates the exact sort of dry, pessimistic, and slightly humorous vibe that I hope this blog will give off. 

So, welcome. Enjoy reading my raw, unfiltered thoughts. Ignore the spelling mistakes, look past the grammatical errors, and have a read. The world can wait.
  `
};

export default function About() {
  const { palette } = useTheme();

  const html = useMemo(
    () => DOMPurify.sanitize(marked.parse(about.content)),
    []
  );

  return (
    <main style={{ background: palette.bg, color: palette.text, padding: '4rem 1.5rem 7rem', transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
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
            About
          </p>
          <h1
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              color: palette.text,
              letterSpacing: '-0.015em',
              marginBottom: '0.5rem',
            }}
          >
            Hello, I'm Varun.
          </h1>
          <p style={{ fontSize: '1rem', color: palette.textMuted, lineHeight: 1.75 }}>
            A student who reads too much and thinks too much.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <div
            style={{
              width: '110px',
              height: '110px',
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${palette.bgLight}, ${palette.accent})`,
              border: `3px solid ${palette.border}`,
              boxShadow: `3px 3px 0 ${palette.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="54" height="64" viewBox="0 0 54 64" xmlns="http://www.w3.org/2000/svg">
              <rect x="14" y="28" width="26" height="28" rx="6" fill={palette.primary} />
              <rect x="14" y="38" width="26" height="18" rx="4" fill={palette.accent} />
              <rect x="17" y="10" width="20" height="20" rx="6" fill={palette.primary} />
              <rect x="18" y="0" width="6" height="16" rx="3" fill={palette.primary} />
              <rect x="19" y="1" width="4" height="12" rx="2" fill={palette.accentLight} />
              <rect x="30" y="0" width="6" height="16" rx="3" fill={palette.primary} />
              <rect x="31" y="1" width="4" height="12" rx="2" fill={palette.accentLight} />
              <rect x="21" y="18" width="4" height="4" rx="2" fill={palette.text} />
              <rect x="29" y="18" width="4" height="4" rx="2" fill={palette.text} />
              <rect x="25" y="24" width="4" height="3" rx="1" fill={palette.accent} />
              <rect x="14" y="54" width="10" height="8" rx="3" fill={palette.primary} />
              <rect x="30" y="54" width="10" height="8" rx="3" fill={palette.primary} />
            </svg>
          </div>

          <div style={{ flex: 1, minWidth: '200px' }}>
            <p style={{ fontSize: '1rem', color: palette.text, lineHeight: 1.8, marginBottom: '1rem' }}>
              I'm a third-year Computer Engineering student who (tries to) study and learn things during the day
              and read during the night. This blog is where I process what I'm learning 
              about code, about books, movies,and everything about the strange project of being a person.
            </p>
            <Link to="/blog" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: palette.accent,
              color: '#fff',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: '0.82rem',
              padding: '0.6rem 1.2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              border: `2px solid ${palette.accent}`,
              boxShadow: `3px 3px 0 ${palette.accentLight}`,
              transition: 'all 0.15s',
              cursor: 'pointer',
            }}>
              Read the Blog →
            </Link>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: `2px dashed ${palette.border}`, margin: '2.5rem 0' }} />

        <article>
          <div
            style={{
              fontSize: '1.08rem',
              lineHeight: '1.85',
              color: palette.text,
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </main>
  );
}

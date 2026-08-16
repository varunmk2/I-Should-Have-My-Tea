import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Clean, inline declaration of your metadata content
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
  useEffect(() => { document.title = 'About | I Should Have My Tea'; }, []);

  return (
    <main style={{ background: '#F9F6F0', color: '#2C2A29', padding: '4rem 1.5rem 7rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '2.5rem' }}>
          <h1 className="font-heading text-rust uppercase" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '0.5rem' }}>Hello, I'm Varun.</h1>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75 }}>A student who reads too much and thinks too much.</p>
        </header>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 140px' }}>
            <img src="/images/profile.svg" alt="Profile" style={{ width: '140px', height: '140px', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '1rem', color: '#2C2A29', lineHeight: 1.85 }}>
              Writing has always been alluring to me. I am someone who has always been shy, conservative, and awkward, and writing happens to be the easiest way for me to express my feelings. Relaxing, sitting down, and penning my thoughts is therapeutic in a weird way.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#2C2A29', lineHeight: 1.85 }}>
              This site was created because I felt I needed my own space to publish my pieces. Now, don't get me wrong: Medium and Substack are great platforms to upload stories, but creating my own custom space just makes everything feel more personal.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <Link to="/blog" className="text-charcoal" style={{ textDecoration: 'none', border: `2px solid #D05334`, padding: '0.6rem 1rem' }}>Read the Blog →</Link>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: `2px dashed #2C2A29`, margin: '2.5rem 0' }} />

        <article>
          <div style={{ fontSize: '1.08rem', lineHeight: '1.85', color: '#2C2A29' }}>
            <ReactMarkdown children={about.content} />
          </div>
        </article>
      </div>
    </main>
  );
}
import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero hero-wrapper">
      <div className="hero-content container">
        <div className="max-w-prose">
          <h1 className="uppercase">ON THE BLOG</h1>
          <p className="text-charcoal" style={{ marginTop: '0.5rem' }}>
            Essays on craft, culture, and the quiet work of thought. A small archive of
            longer pieces meant to be read slowly and returned to.
          </p>
        </div>
      </div>

      <img src="/images/blog-hero.svg" alt="Hero" className="hero-image sharp-corners" />
    </section>
  );
}

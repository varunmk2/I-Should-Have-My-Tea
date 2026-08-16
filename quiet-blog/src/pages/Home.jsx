import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedPosts from '../components/FeaturedPosts';
import Footer from '../components/Footer';
import { getRecentPosts } from '../data/posts';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => { document.title = 'I Should Have My Tea — Home'; }, []);

  const recentPosts = getRecentPosts(3);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedPosts posts={recentPosts} />
      </main>
      <Footer />
    </>
  );
}

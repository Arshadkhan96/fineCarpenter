import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturedProducts } from '@/components/featured-products';
import { AboutPreview } from '@/components/about-preview';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <AboutPreview />
      <Footer />
    </>
  );
}

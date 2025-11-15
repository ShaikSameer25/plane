import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Capabilities } from '@/components/landing/capabilities';
import { Highlights } from '@/components/landing/highlights';
import { Footer } from '@/components/landing/footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
      </main>
      <Footer />
    </div>
  );
}

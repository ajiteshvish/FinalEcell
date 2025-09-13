import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { OurVision } from '../components/OurVision';
import { OurInitiatives } from '../components/OurInitiatives';
import { RecentEvents } from '../components/RecentEvents';
import { Events } from '../components/Events';
import { PastEvents } from '../components/PastEvents';
import { OurBlogs } from '../components/OurBlogs';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16 sm:pt-20">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <OurVision />
        <section id="initiatives">
          <OurInitiatives />
        </section>
        <RecentEvents />
        <section id="events">
          <Events />
        </section>
        <PastEvents />
        <section id="blogs">
          <OurBlogs />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;

import HeaderStatic from '../components/layout/HeaderStatic';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import HistorySection from '../components/sections/HistorySection';
import StatsSection from '../components/sections/StatsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderStatic />
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

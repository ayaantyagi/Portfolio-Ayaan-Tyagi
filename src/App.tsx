import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';
import SkillsSection from './components/SkillsSection';
import CustomCursor from './components/CustomCursor';
import './index.css';

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
}

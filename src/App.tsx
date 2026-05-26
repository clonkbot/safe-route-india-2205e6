import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AccidentPrevention from './components/AccidentPrevention';
import DrunkDriving from './components/DrunkDriving';
import SafeDrivingTips from './components/SafeDrivingTips';
import EmergencyContacts from './components/EmergencyContacts';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hazard stripe top bar */}
      <div className="fixed top-0 left-0 right-0 h-2 z-50 bg-repeating-stripe" />

      {/* Floating Emergency Button - Mobile */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden flex flex-col gap-2">
        <a
          href="tel:112"
          className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50 animate-pulse-slow"
        >
          <span className="text-xl">🚑</span>
        </a>
        <a
          href="tel:100"
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/50"
        >
          <span className="text-xl">🚔</span>
        </a>
      </div>

      <HeroSection scrollY={scrollY} />
      <StatsSection />
      <AccidentPrevention />
      <DrunkDriving />
      <SafeDrivingTips />
      <EmergencyContacts />
      <Footer />

      {/* Hazard stripe bottom bar */}
      <div className="h-2 bg-repeating-stripe" />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import About from './components/About';
import Coaching from './components/Coaching';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Coaching />
      <Contact />
      <Footer />
      <LegalModals />
      <CookieConsent />
    </div>
  );
}

export default App;
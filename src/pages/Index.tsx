
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Recommendations from '../components/Recommendations';
import Languages from '../components/Languages';
import Footer from '../components/Footer';
import SnowflakeBackground from '../components/SnowflakeBackground';
import ScrollToTop from '../components/ScrollToTop';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <SnowflakeBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Recommendations />
      <Languages />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

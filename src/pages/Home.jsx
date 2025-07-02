import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Project from './Project';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <div className='bg-gradient-to-br from-[#1B1F3B] via-[#0F172A] to-[#2A2F5A]'>
      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;

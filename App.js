import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navbar from './components/navbar';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Certifications from './components/certifications';
import Resume from './components/resume';
import Contact from './components/contacts';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects" className="projects-section">
          <Projects />
        </section>
        <section id="certifications" className="certifications-section">
          <Certifications />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

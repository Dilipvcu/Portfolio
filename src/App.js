import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <nav className="navbar">
        <ul>
          <li><Link to="/"><span>About</span></Link></li>
          <li><Link to="/experience"><span>Experience</span></Link></li>
          <li><Link to="/education"><span>Education</span></Link></li>
          <li><Link to="/skills"><span>Skills</span></Link></li>
          <li><Link to="/projects"><span>Projects</span></Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

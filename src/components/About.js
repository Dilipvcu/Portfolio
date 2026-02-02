import React, { useEffect, useRef, useState } from 'react';
import resume from '../resume/resumeData.json';

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  // Map contact items from JSON, resolving values and links dynamically
  const contactItems = resume.contactItems.map(item => ({
    ...item,
    value: item.value || resume.contact[item.valueKey],
    link: item.linkKey ? resume.contact[item.linkKey] : undefined
  }));

  return (
    <section 
      className="about-section-v2" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Orbs */}
      <div className="orb-container">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="mouse-glow"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`
        }}
      ></div>

      {/* Hero Content */}
      <div className={`hero-wrapper ${isVisible ? 'visible' : ''}`}>
        <div className="floating-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>
        
        <h1 className="name-gradient">
          {resume.name.split(' ').map((word, idx, array) => (
            <>
              <span 
                key={idx} 
                className="name-word"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {word}
              </span>
              {idx < array.length - 1 && ' '}
            </>
          ))}
        </h1>

        <div className="title-wrapper">
          <div className="title-decoration"></div>
          <h2 className="professional-title-v2">{resume.title}</h2>
          <div className="title-decoration"></div>
        </div>

        <div className="summary-card-v2">
          <div className="summary-glow"></div>
          <p className="summary-content">{resume.summary}</p>
          <div className="summary-border-animation"></div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={`connect-section ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <h3 className="section-title">
            <span className="title-icon">✨</span>
            Let's Connect
            <span className="title-icon">✨</span>
          </h3>
          <div className="title-underline"></div>
        </div>

        <div className="contact-grid-v2">
          {contactItems.map((item, index) => (
            item.link ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-v2"
                style={{ animationDelay: item.delay }}
              >
                <div className="card-shine"></div>
                <div className={`card-icon-wrapper ${item.color}`}>
                  <span className="card-icon">{item.icon}</span>
                </div>
                <div className="card-details">
                  <div className="card-label">{item.label}</div>
                  <div className="card-value">{item.value}</div>
                </div>
                <div className="card-arrow">→</div>
              </a>
            ) : (
              <div
                key={index}
                className="contact-card-v2"
                style={{ animationDelay: item.delay }}
              >
                <div className="card-shine"></div>
                <div className={`card-icon-wrapper ${item.color}`}>
                  <span className="card-icon">{item.icon}</span>
                </div>
                <div className="card-details">
                  <div className="card-label">{item.label}</div>
                  <div className="card-value">{item.value}</div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default About;

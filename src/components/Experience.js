import React, { useEffect, useRef } from 'react';
import resume from '../resume/resumeData.json';

function Experience() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <h2>Experience</h2>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>
        {resume.experience.map((exp, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-date">{exp.duration}</div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <div className="company-info">
                    <h4>{exp.company}</h4>
                    <div className="timeline-location">
                      <svg className="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                {exp.details && exp.details.length > 0 && (
                  <div className="timeline-details">
                    <h5>
                      <svg className="responsibilities-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Key Responsibilities & Achievements
                    </h5>
                    <ul className="experience-details">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="detail-item">
                          <div className="detail-content">
                            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

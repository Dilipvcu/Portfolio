import React, { useEffect, useRef } from 'react';
import resume from '../resume/resumeData.json';

function Education() {
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
      <h2>Education</h2>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>
        {resume.education.map((edu, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-date">{edu.duration}</div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3>{edu.degree}</h3>
                  <div className="institution-info">
                    <h4>{edu.institution}</h4>
                    <div className="timeline-location">
                      <svg className="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                      </svg>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                {edu.courses && edu.courses.length > 0 && (
                  <div className="timeline-courses">
                    <h5>
                      <svg className="courses-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" fill="currentColor"/>
                        <path d="m12 14 6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Key Courses
                    </h5>
                    <ul className="education-courses">
                      {edu.courses.map((c, i) => (
                        <li key={i} className="course-badge">
                          <div className="course-header">
                            <span className="course-name">{typeof c === 'string' ? c : c.name}</span>
                            {c.presentations && c.presentations.length > 0 && (
                              <div className="course-actions">
                                {c.presentations.map((p, j) => (
                                  <span
                                    key={j}
                                    className="course-action"
                                    title={`${p.title}: ${p.description}`}
                                  >
                                    {p.type}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          {c.presentations && c.presentations.length > 0 && (
                            <div className="course-presentations">
                              {c.presentations.map((p, j) => (
                                <div key={j} className="presentation-item">
                                  <strong>{p.type}: {p.title}</strong>
                                  <p>{p.description}</p>
                                </div>
                              ))}
                            </div>
                          )}
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

export default Education;

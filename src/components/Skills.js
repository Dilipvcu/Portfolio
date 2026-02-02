import React from 'react';
import resume from '../resume/resumeData.json';

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul className="skills-list">
        {resume.skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;

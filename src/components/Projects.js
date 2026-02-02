import React from 'react';
import resume from '../resume/resumeData.json';

import ecomImg from '../assets/dig.webp';
import debtImg from '../assets/debt.webp';
import amuseImg from '../assets/amu.webp';

const imageMap = {
	"Content-Based Image Retrieval": ecomImg,
	"Debt manager + AI Summarizer": debtImg,
	"Amusement park management system": amuseImg
};

function Projects() {
	return (
		<section>
			<h2>Projects</h2>
			<div className="projects-grid">
				{resume.projects.map((project, idx) => (
					<article key={idx} className="project-card">
						<div className="project-thumb">
							<img
								src={imageMap[project.name] || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60'}
								alt={project.name}
								loading="lazy"
							/>
						</div>
						<div className="project-content">
							<h3>{project.name}</h3>
							<p>{project.description}</p>
							{project.link && (
								<a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Projects;

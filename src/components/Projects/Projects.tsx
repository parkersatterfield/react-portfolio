import { useState } from 'react';
import Project from '../Project/Project';
import ProjectDetails from '../Project/ProjectDetails';
import { projects, type PortfolioProject } from './projectData';
import './Projects.css';

function Projects() {
    const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

    return (
        <section className="projectsSection" id="projects" aria-label="Projects">
            <p className="projectsDivider">WORK</p>
            <div className="projectsGrid">
                {projects.map(project => <Project key={project.name} project={project} onSelect={setSelectedProject} />)}
            </div>
            {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
}

export default Projects;

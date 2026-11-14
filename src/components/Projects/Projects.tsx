import Project from '../Project/Project';
import { projects } from './projectData';
import './Projects.css';

function Projects() {
    return (
        <section className="projectsSection" id="projects" aria-label="Projects">
            <div className="projectsGrid">
                {projects.map(project => <Project key={project.name} project={project} />)}
            </div>
        </section>
    );
}

export default Projects;

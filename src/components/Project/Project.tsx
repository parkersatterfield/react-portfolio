import type { PortfolioProject } from '../Projects/projectData';
import ProjectIcon from './ProjectIcon';
import './Project.css';

interface ProjectProps {
    project: PortfolioProject;
}

function Project({ project }: ProjectProps) {
    const lastWordStart = project.name.lastIndexOf(' ') + 1;

    return (
        <article className="projectCard">
            <ProjectIcon name={project.icon} />
            <h2>
                {project.link ? (
                    <a className="projectTitleLink" href={project.link.href} target="_blank" rel="noreferrer">
                        {project.name.slice(0, lastWordStart)}
                        <span className="projectTitleEnd">
                            {project.name.slice(lastWordStart)}<span className="projectArrow" aria-hidden="true">↗</span>
                        </span>
                    </a>
                ) : project.name}
            </h2>
            <p>{project.description}</p>
        </article>
    );
}

export default Project;

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
            {project.company && (
                <div className="projectCompany">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                        <path d="M5 21V3h14v18M3 21h18M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" />
                    </svg>
                    <span>{project.company}</span>
                </div>
            )}
            <p>{project.description}</p>
        </article>
    );
}

export default Project;

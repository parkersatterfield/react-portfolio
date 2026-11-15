import type { PortfolioProject } from '../Projects/projectData';
import ProjectIcon from './ProjectIcon';
import ProjectCompany from './ProjectCompany';
import './Project.css';

interface ProjectProps {
    project: PortfolioProject;
    onSelect: (project: PortfolioProject) => void;
}

function Project({ project, onSelect }: ProjectProps) {
    return (
        <article className={`projectCard${project.featured ? ' projectCardFeatured' : ''}`}>
            <ProjectIcon name={project.icon} />
            <h2>
                <button className="projectTitleLink" type="button" onClick={() => onSelect(project)} aria-haspopup="dialog">
                    {project.name}
                </button>
            </h2>
            {project.company && <ProjectCompany company={project.company} />}
            <p>
                <span className={project.mobileDescription ? 'projectDescriptionDesktop' : undefined}>{project.description}</span>
                {project.mobileDescription && <span className="projectDescriptionMobile">{project.mobileDescription}</span>}
            </p>
        </article>
    );
}

export default Project;

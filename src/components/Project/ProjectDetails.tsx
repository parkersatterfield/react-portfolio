import { useEffect, useRef } from 'react';
import type { PortfolioProject } from '../Projects/projectData';
import LinkArrow from '../LinkArrow';
import ProjectIcon from './ProjectIcon';
import ProjectCompany from './ProjectCompany';
import './ProjectDetails.css';

function ProjectDetails({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current!;
        const previousOverflow = document.body.style.overflow;
        dialog.showModal();
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);

    return (
        <dialog
            className="projectDetails"
            ref={dialogRef}
            aria-labelledby="project-details-title"
            onClose={onClose}
            onClick={event => {
                if (event.target === event.currentTarget) event.currentTarget.close();
            }}
        >
            <div className="projectDetailsHeader">
                <button className="projectDetailsClose" type="button" aria-label="Close project details" onClick={() => dialogRef.current?.close()} autoFocus>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false">
                        <path d="m6 6 12 12M6 18 18 6" />
                    </svg>
                </button>
            </div>
            <article className="projectDetailsContent">
                <ProjectIcon name={project.icon} />
                <h2 id="project-details-title">{project.name}</h2>
                {project.company && <ProjectCompany company={project.company} />}
                <p className="projectDetailsDescription">{project.details}</p>
                <ul className="projectTechnologies" aria-label="Project technologies">
                    {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
                </ul>
                {project.link && (
                    <a className="projectDetailsLink" href={project.link} target="_blank" rel="noreferrer">
                        Visit project <LinkArrow />
                    </a>
                )}
            </article>
        </dialog>
    );
}

export default ProjectDetails;

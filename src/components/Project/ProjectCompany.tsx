import './Project.css';

function ProjectCompany({ company }: { company: string }) {
    return (
        <div className="projectCompany">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 21V3h14v18M3 21h18M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" />
            </svg>
            <span>{company}</span>
        </div>
    );
}

export default ProjectCompany;

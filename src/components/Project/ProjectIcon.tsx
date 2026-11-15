const iconPaths = {
    graph: [
        'M8 6h8M7 8l4 8m6-8-4 8',
        'M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
    ],
    api: ['m8 7-5 5 5 5m8-10 5 5-5 5M13 5l-2 14'],
    cloud: ['M7 17H6a4 4 0 0 1-.5-8A6.5 6.5 0 0 1 18 8a4.5 4.5 0 0 1 0 9h-1', 'M12 12v9m-3-3 3 3 3-3'],
    server: ['M4 3h16v7H4ZM4 14h16v7H4ZM8 6.5h.01M8 17.5h.01M12 6.5h4M12 17.5h4'],
    radio: ['M12 14v7m-3 0h6', 'M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', 'M7 6a7 7 0 0 0 0 10m10-10a7 7 0 0 1 0 10M4 3a11 11 0 0 0 0 16M20 3a11 11 0 0 1 0 16'],
    pong: ['M4 5v9m16-4v9M12 2v3m0 14v3', 'M13 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'],
    terminal: ['M3 4h18v16H3Z', 'm7 9 3 3-3 3m6 0h4'],
    database: ['M20 6c0 2-3.6 3-8 3S4 8 4 6s3.6-3 8-3 8 1 8 3ZM4 6v12c0 2 3.6 3 8 3s8-1 8-3V6M4 12c0 2 3.6 3 8 3s8-1 8-3'],
    languages: ['M3 5h12M9 3v2M5 5c0 5 3 8 7 10M13 5c0 5-4 9-9 11M14 21l4-10 4 10m-6-4h4'],
};

export type ProjectIconName = keyof typeof iconPaths;

function ProjectIcon({ name }: { name: ProjectIconName }) {
    return (
        <svg className="projectIcon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            {iconPaths[name].map(path => <path key={path} d={path} />)}
        </svg>
    );
}

export default ProjectIcon;

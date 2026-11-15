import type { ProjectIconName } from '../Project/ProjectIcon';

export interface PortfolioProject {
    name: string;
    description: string;
    mobileDescription?: string;
    details: string;
    technologies: string[];
    featured?: boolean;
    icon: ProjectIconName;
    company?: string;
    link?: { href: string };
}

const esgDescription = 'One of the tech leads for EBSCO’s Scholarly Graph, working across ETL pipelines, data lake infrastructure, Apache Iceberg, and graph databases on AWS. ESG connects scholarly works, authors, organizations, and topics so researchers can trace citations and explore related research. At its September 2025 launch, EBSCO reported nearly 900 million entities and more than 3.8 billion relationships, with daily updates. The graph powers Citation Discovery in EBSCO Discovery Service and EBSCOhost, helping researchers follow a work’s references and see where it has been cited.';

export const projects: PortfolioProject[] = [
    {
        name: 'EBSCO Scholarly Graph',
        featured: true,
        company: 'EBSCO',
        icon: 'graph',
        description: esgDescription,
        mobileDescription: 'One of the tech leads for EBSCO’s Scholarly Graph, connecting scholarly works, authors, and organizations to help researchers discover related research. Built with ETL pipelines, Apache Iceberg, graph databases, and AWS.',
        details: esgDescription,
        technologies: ['ETL', 'Data lake', 'Apache Iceberg', 'Graph databases', 'AWS'],
        link: { href: 'https://about.ebsco.com/news-center/press-releases/ebsco-information-services-expands-linked-data-capabilities-with-ebsco-scholarly-graph' },
    },
    {
        name: 'HoldingsIQ API',
        company: 'EBSCO',
        icon: 'api',
        description: 'Backend services powering EBSCO’s knowledge-base APIs, helping customers manage holdings data and build integrations.',
        details: 'Backend services built with Java, Spring, and SQL Server for EBSCO’s knowledge-base APIs. HoldingsIQ helps customers manage their holdings data and build integrations around that information, connecting knowledge-base data with their own systems and workflows.',
        technologies: ['SQL Server', 'Java', 'Spring'],
        link: { href: 'https://developer.ebsco.com/knowledge-services/holdingsiq/reference' },
    },
    {
        name: 'Free Trial Automation',
        company: 'Fieldster',
        icon: 'cloud',
        description: 'Automated provisioning of Fieldster trial environments and databases so prospective customers can explore the CRM with their own data.',
        details: 'Automation built with .NET and Google Cloud for provisioning Fieldster trial environments and their databases. Prospective customers can explore the CRM using their own data, with the environment setup handled by the provisioning workflow.',
        technologies: ['Google Cloud', '.NET'],
        link: { href: 'https://trial.key7app.com/' },
    },
    {
        name: 'RaceMesh',
        icon: 'radio',
        description: 'Live race telemetry over LoRa, built for a friend racing in the 24 Hours of Lemons at Barber Motorsports Park.',
        details: 'Built for a friend racing in the 24 Hours of Lemons at Barber Motorsports Park. RaceMesh pulls live timing data from the Race-Monitor API in the pits and transmits it over LoRa using Meshtastic. A Pygame dashboard in the car displays race position and lap times without relying on cellular reception.',
        technologies: ['Python', 'LoRa', 'Meshtastic', 'Pygame', 'Race-Monitor API'],
        link: { href: 'https://github.com/parkersatterfield/racemesh' },
    },
    {
        name: 'Homelab',
        icon: 'server',
        description: 'A Linux MacBook running Open WebUI with an Ollama model and a shared file drive across devices on a Tailscale tailnet.',
        details: 'A MacBook running Linux and Docker, with Open WebUI connected to an Ollama model for local AI. It also hosts a shared file drive accessible across devices on the Tailscale tailnet.',
        technologies: ['Linux', 'Tailscale', 'Docker', 'Open WebUI', 'Ollama'],
    },
    {
        name: 'Jev Pong',
        icon: 'pong',
        description: 'A Pong demo where a System One model controls the opposing paddle, exploring real-time model decisions and API integration.',
        details: 'A Pong demo built with Next.js that puts a System One model in control of the opposing paddle. The game explores how model decisions can drive real-time gameplay through an API integration.',
        technologies: ['System One Models', 'Next.js'],
        link: { href: 'https://github.com/parkersatterfield/pong-ai-demo' },
    },
    {
        name: 'Nav-CLI',
        icon: 'terminal',
        description: 'An npm-published command-line tool that simplifies file-system navigation.',
        details: 'A Node.js command-line utility published on npm to simplify navigating the file system. It brings the navigation workflow into the terminal as an installable tool.',
        technologies: ['Node.js'],
        link: { href: 'https://www.npmjs.com/package/nav-cli' },
    },
    {
        name: 'XML to SQL',
        icon: 'database',
        description: 'Converts XML into SQL scripts, supporting data migration without granting access to a hosted database.',
        details: 'A tool for turning XML data into SQL scripts for migration. Generating scripts lets users move data into their own database without granting the tool access to a hosted database.',
        technologies: ['XML', 'SQL'],
        link: { href: 'https://www.xmltosql.com' },
    },
    {
        name: 'MultiLang',
        icon: 'languages',
        description: 'A multi-label text classification model that identifies multiple languages within a single string.',
        details: 'A text classification model built with Python and scikit-learn for identifying multiple languages within the same string. It treats language detection as a multi-label problem, allowing a piece of text to be associated with more than one language.',
        technologies: ['Python', 'scikit-learn'],
        link: { href: 'https://github.com/parkersatterfield/multilang/blob/main/multilang.ipynb' },
    },
];

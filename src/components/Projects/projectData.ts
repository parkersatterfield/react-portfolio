import type { ProjectIconName } from '../Project/ProjectIcon';

export interface PortfolioProject {
    name: string;
    description: string;
    icon: ProjectIconName;
    link?: { href: string };
}

export const projects: PortfolioProject[] = [
    {
        name: 'EBSCO Scholarly Graph (ESG)',
        icon: 'graph',
        description: 'ETL pipelines, data lake infrastructure, and graph databases powering EBSCO’s Scholarly Graph.',
        link: { href: 'https://connect.ebsco.com/s/article/What-is-the-EBSCO-Scholarly-Graph?language=en_US' },
    },
    {
        name: 'HoldingsIQ API',
        icon: 'api',
        description: 'Backend services powering EBSCO’s knowledge-base APIs, helping customers manage holdings data and build integrations.',
        link: { href: 'https://developer.ebsco.com/knowledge-services/holdingsiq/reference' },
    },
    {
        name: 'Free Trial Automation',
        icon: 'cloud',
        description: 'Automated provisioning of Fieldster trial environments and databases so prospective customers can explore the CRM with their own data.',
        link: { href: 'https://trial.key7app.com/' },
    },
    {
        name: 'Homelab',
        icon: 'server',
        description: 'A MacBook running Linux, hosting personal apps and services over Tailscale.',
    },
    {
        name: 'Jev Pong',
        icon: 'pong',
        description: 'A Pong demo where a System One model controls the opposing paddle, exploring real-time model decisions and API integration.',
        link: { href: 'https://github.com/parkersatterfield/pong-ai-demo' },
    },
    {
        name: 'Nav-CLI',
        icon: 'terminal',
        description: 'An npm-published command-line tool that simplifies file-system navigation.',
        link: { href: 'https://www.npmjs.com/package/nav-cli' },
    },
    {
        name: 'XML to SQL',
        icon: 'database',
        description: 'Converts XML into SQL scripts, supporting data migration without granting access to a hosted database.',
        link: { href: 'https://www.xmltosql.com' },
    },
    {
        name: 'MultiLang',
        icon: 'languages',
        description: 'A multi-label text classification model that identifies multiple languages within a single string.',
        link: { href: 'https://github.com/parkersatterfield/multilang/blob/main/multilang.ipynb' },
    },
];

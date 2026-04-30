const projectsData = [
    {
        title: 'EPCAD Intranet',
        description: 'Modernized the internal company intranet from the ground up, replacing a legacy HTML/CSS/JS site with a full-stack ASP.NET + Blazor application. Designed and built the database schema, UI, and business logic end-to-end. Continuously maintained and expanded the platform with new features based on user feedback.',
        role: 'Lead Developer',
        tech: [ 'ASP.NET', 'Blazor', 'Radzen', 'C#', 'SQL Server', 'HTML', 'CSS' ],
        highlights: [
            '151+ active internal users',
            'Built end-to-end as sole developer',
            'Replaced full legacy HTML/CSS/JS stack with modern .NET',
            'Ongoing feature additions and maintenance based on user feedback'
        ],
        isPrivate: true,
        repoUrl: 'https://github.com/Eli9Saavedra/EPCAD_Intranet.git',
        image: '/projects/epcad-intranet.png', 
        alt: 'Screenshot of the EPCAD Intranet homepage, showing a modern dashboard with company news, quick links, and user profile information.',
        slug: 'epcad-intranet'
    },
    {
        title: 'Requisitions Management System',
        description: 'Internal requisition system that replaced a paper-based approval workflow between the IT department and accounting. Employees can submit requests, route them through manager and accounting approval, and track status end-to-end. Built collaboratively as part of a small dev team.',
        role: 'Co-Developer',
        tech: ['ASP.NET', 'Blazor', 'C#', 'SQL Server'],
        highlights: [
            'Replaced legacy paper-based requisition workflow',
            'Multi-stage approval routing (requester → manager → accounting)',
            'End-to-end request lifecycle: creation, approval, tracking, fulfillment',
            'Built collaboratively with a 2-person dev team'
        ],
        isPrivate: true,
        image: '/projects/requisitions-system.png',
        alt: 'Screenshot of the Requisitions Management System',
        slug: 'requisitions'
    },
    {
        title: 'Public Hearing Queue',
        description: 'Live public queue system displayed on lobby TVs during property protest season at the appraisal district. Replaced a "sign-in and wait" experience with real-time visibility into who\'s next, showing the homeowner\'s name and Property ID. Two parallel queues — one for the 2nd-floor departments (Residential, BPP, Commercial) and one for the 3rd-floor ARB department — driven from the same display app via a parameter so both TVs run simultaneously. Pulls live check-in data from PACS, the in-house appraisal application.',
        role: 'Sole Developer',
        tech: ['ASP.NET', 'Blazor', 'C#', 'SQL Server'],
        highlights: [
            'Replaced sign-in-and-wait experience with live, transparent queue updates',
            'Displayed on lobby TVs during peak protest season (April–August)',
            'Two parallel queues (2nd-floor departments + 3rd-floor ARB) driven from a single parameterized app',
            'Backend integration with PACS to pull real-time check-in data'
        ],
        isPrivate: true,
        image: '/projects/public-hearing-queue.png',
        alt: 'Screenshot of the Public Hearing Queue display showing homeowner names and Property IDs.',
        slug: 'public-hearing-queue'
    }
]

export default projectsData
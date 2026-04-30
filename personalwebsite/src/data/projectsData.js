const projectsData = [
    {
        title: 'EPCAD Intranet',
        problem: 'The internal company intranet was a stale HTML/CSS/JS site that was hard to maintain, missing the workflows employees actually needed day-to-day, and required a full redeploy — deleting and reuploading every file — just to make small content changes.',
        description: 'Modernized the internal company intranet from the ground up, replacing a legacy HTML/CSS/JS site with a full-stack ASP.NET + Blazor application. Designed and built the database schema, UI, and business logic end-to-end. Continuously maintained and expanded the platform with new features based on user feedback.',
        contributions: [
            'Designed the SQL Server database schema end-to-end',
            'Built the entire Blazor + Radzen UI from scratch, including a 12-department hub and personalized "recent links" surfaced per user and per department',
            'Implemented all business logic and APIs in C# / ASP.NET',
            'Integrated the Microsoft Graph API against Entra ID to personalize the experience based on the signed-in employee\'s identity and department',
            'Built an in-app banner management system so non-technical staff can update content without developer involvement or downtime',
            'Continuously ship new features based on direct user feedback',
            'Owned deployment, maintenance, and support for the live system'
        ],
        role: 'Lead Developer',
        tech: [ 'ASP.NET', 'Blazor', 'Radzen', 'C#', 'SQL Server', 'Microsoft Graph API', 'Microsoft Entra ID', 'HTML', 'CSS' ],
        highlights: [
            'Adopted company-wide — used by all 151+ employees',
            'Daily-use surface area: time clock, announcements, documents, and department resources',
            '11+ modules including announcements, task list, time clock, evacuation info, and a 12-department hub',
            'Personalized "recent links" surfaced per user and per department',
            'In-app banner CMS for zero-downtime content updates',
            'Cut content updates from a full redeploy (delete + reupload every file) to seconds via the CMS',
            'Persistent global navigation across all pages so users never have to backtrack to the home page',
            'Migrated the building newsletter from email-only to a permanent, searchable spot on the intranet',
            'Light and dark mode theming',
            'Built end-to-end as sole developer',
            'Replaced full legacy HTML/CSS/JS stack with modern .NET'
        ],
        stats: [
            { value: '151+', label: 'Active users' },
            { value: '12', label: 'Departments served' },
            { value: '18mo+', label: 'In production' }
        ],
        isPrivate: true,
        repoUrl: 'https://github.com/Eli9Saavedra/EPCAD_Intranet.git',
        image: '/projects/epcad-intranet.png', 
        alt: 'Screenshot of the EPCAD Intranet homepage, showing a modern dashboard with company news, quick links, and user profile information.',
        slug: 'epcad-intranet'
    },
    {
        title: 'Requisitions Management System',
        problem: 'IT and accounting were routing purchase requests on paper, which meant lost forms, no audit trail, and no easy way to see where a request was stuck in the approval chain.',
        description: 'Internal requisition system that replaced a paper-based approval workflow between the IT department and accounting. Employees can submit requests, route them through manager and accounting approval, and track status end-to-end. Built collaboratively as part of a small dev team.',
        contributions: [
            'Co-designed the multi-stage approval workflow with my dev partner',
            'Built request submission and tracking screens in Blazor + Radzen',
            'Implemented role-based routing (requester → manager → accounting) in C# / ASP.NET',
            'Modeled the requisition + approval history schema in SQL Server',
            'Partnered with IT and accounting stakeholders to validate the workflow against real cases'
        ],
        role: 'Co-Developer',
        tech: ['ASP.NET', 'Blazor', 'C#', 'SQL Server'],
        highlights: [
            'Replaced legacy paper-based requisition workflow',
            'Multi-stage approval routing (requester → manager → accounting)',
            'End-to-end request lifecycle: creation, approval, tracking, fulfillment',
            'Built collaboratively with a 2-person dev team'
        ],
        stats: [
            { value: '3', label: 'Approval stages' },
            { value: '2', label: 'Departments served' },
            { value: 'Live', label: 'In production' }
        ],
        isPrivate: true,
        image: '/projects/requisitions-system.png',
        alt: 'Screenshot of the Requisitions Management System',
        slug: 'requisitions'
    },
    {
        title: 'Public Hearing Queue',
        problem: 'During protest season, homeowners signed in at the front desk and then sat in the lobby with no idea where they were in line, which created confusion, repeated front-desk questions, and a stressful wait.',
        description: 'Live public queue system displayed on lobby TVs during property protest season at the appraisal district. Replaced a "sign-in and wait" experience with real-time visibility into who\'s next, showing the homeowner\'s name and Property ID. Two parallel queues — one for the 2nd-floor departments (Residential, BPP, Commercial) and one for the 3rd-floor ARB department — driven from the same display app via a parameter so both TVs run simultaneously. Pulls live check-in data from PACS, the in-house appraisal application.',
        contributions: [
            'Designed a single parameterized Blazor display app that drives both lobby TVs',
            'Integrated with PACS to pull live check-in data in near real time',
            'Built the queue UI for readability at TV viewing distance (large names + Property IDs)',
            'Routed the 2nd-floor (Residential / BPP / Commercial) and 3rd-floor ARB queues from the same codebase',
            'Deployed and supported the system through peak protest season (April–August)'
        ],
        role: 'Sole Developer',
        tech: ['ASP.NET', 'Blazor', 'C#', 'SQL Server'],
        highlights: [
            'Replaced sign-in-and-wait experience with live, transparent queue updates',
            'Displayed on lobby TVs during peak protest season (April–August)',
            'Two parallel queues (2nd-floor departments + 3rd-floor ARB) driven from a single parameterized app',
            'Backend integration with PACS to pull real-time check-in data'
        ],
        stats: [
            { value: '2', label: 'Live lobby displays' },
            { value: '4', label: 'Departments served' },
            { value: '5mo', label: 'Peak season uptime' }
        ],
        isPrivate: true,
        image: '/projects/public-hearing-queue.png',
        alt: 'Screenshot of the Public Hearing Queue display showing homeowner names and Property IDs.',
        slug: 'public-hearing-queue'
    }
]

export default projectsData
export type PortfolioItem = {
    name: string;
    displayName: string;
    type: string;
    displayType: string;
    technologies: string[];
    images: string[];
    description: string;
    features: string[];
    role: string;
    liveLink?: string;
    githubLink?: string;
    codePenLink?: string;
}

export const data: PortfolioItem[] = [
    {
        name: 'rcs',
        displayName: 'RCS Union Software',
        type: 'rcs',
        displayType: 'RCS Union Software',
        technologies: [
            'Next.js',
            'Java Spring',
            'HTML',
            'CSS',
            'Javascript',
            'Angular',
            'Hibernate',
            'PSQL',
            'Jasper Reports',
        ],
        images: [
            './rcslogo.png',
        ],
        description: 'RCS Union Software is a suite of applications designed to help labor unions manage their membership, dues, accounting, payroll, and other administrative tasks. The software is built with a variety of technologies, including Next.js, Angular, Java Spring, Hibernate, PSQL, and Jasper Reports. My role on the project was to develop new features, fix bugs, and maintain the existing codebase.',
        features: [
            'Accounting and Payroll package designed specifically for Union financial record keeping and reporting responsibilities.',
            'Our most popular product streamlines LM-2/LM-3 Report preparation, eliminating up to 80% of the work.',
            'Complete your 990 in a fraction of the time, accurately and in sync with your LM.',
            'Track and store your grievance process in the cloud with everything you need at your fingertips.',
            'Keep Membership info up to date. Track dues collection from your members, both collected and uncollected.'
        ],
        role: 'Full Stack Developer',
        liveLink: 'https://www.rcsunionsoftware.com/',
    },
    {
        name: 'visitnorway',
        displayName: 'Visit Norway',
        type: 'simpleView',
        displayType: 'Simpleview',
        technologies: [
            'Vue',
            'Handlebars',
            'HTML',
            'CSS',
            'Javascript',
            'JQuery',
            'MongoDB',
        ],
        images: [
            './norway-lights.png',
            './norway2.webp',
            './norway3.webp',
            './norway4.webp',
            './norway5.webp',
        ],
        description: 'Visit Norway is the official travel and tourism website of Norway. My role on the project was to develop reusable components, fix bugs, peer review code changes, and maintain the existing codebase. As part of this project, I assisted in developing and deploying the Norway Lights website, which won an award for its innovative design and functionality.',
        features: [
            'Travel and Tourism website',
            'Show media collections in multiple formats',
            'Show listings, events, and coupons from partners.',
            'Create and show blog posts and articles',
            'Track visitor data for partners.',
            'Consume multiple APIs to predict when and where the Northern Lights will be visible.'
        ],
        role: 'Full Stack Developer',
        liveLink: 'https://www.visitnorway.com/',
    },
    {
        name: 'visitlasvegas',
        displayName: 'Visit Las Vegas',
        type: 'simpleView',
        displayType: 'Simpleview',
        technologies: [
            'Vue',
            'Handlebars',
            'HTML',
            'CSS',
            'Javascript',
            'JQuery',
            'MongoDB',
        ],
        images: [
            './vegas1.webp',
            './vegas2.webp',
            './vegas3.webp',
            './vegas4.webp',
            './vegas5.webp',
            './vegas6.webp',
        ],
        description: 'Visit Las Vegas is the official travel and tourism website of Las Vegas. My role on the project was to develop reusable components, fix bugs, peer review code changes, and maintain the existing codebase.^ One of my main projects was to participate in the Vegas Means Business site redesign, where I implemented design changes from Photoshop specs, peer reviewed code, created test pages for client feedback, and recommended and implemented changes based on client communication.^ Another of my notable projects on this site was to develop a reusable multiple-question questionnaire component that would calculate results and recommend attractions and venues. This component was used in a "What kind of Vegas wedding are you?" quiz',
        features: [
            'Travel and Tourism website',
            'Show media collections in multiple formats',
            'Show listings, events, and coupons from partners.',
            'Create and show blog posts and articles',
            'Track visitor data for partners.'
        ],
        role: 'Full Stack Developer',
        liveLink: 'https://www.visitlasvegas.com/',
    },
    {
        name: 'visitorlando',
        displayName: 'Visit Orlando',
        type: 'simpleView',
        displayType: 'Simpleview',
        technologies: [
            'Vue',
            'Handlebars',
            'HTML',
            'CSS',
            'Javascript',
            'JQuery',
            'MongoDB',
        ],
        images: [
            './orlando1.webp',
            './orlando2.webp',
            './orlando3.webp',
            './orlando4.webp',
        ],
        description: 'Visit Orlando is the official travel and tourism website of Orlando, Florida. My role on the project was to develop reusable components, fix bugs, peer review code changes, and maintain the existing codebase. \nMy major projects included: implementing a new design for the site, standardizing code across all microsites, developing a custom interactive map component that would show attractions, and other points of interest in the Orlando area, and implemented site-wide performance evaluation and improvement.',
        features: [
            'Travel and Tourism website',
            'Show media collections in multiple formats',
            'Show listings, events, and coupons from partners.',
            'Create and show blog posts and articles',
            'Track visitor data for partners.'
        ],
        role: 'Full Stack Developer',
        liveLink: 'https://www.visitorlando.com/',
    },
    {
        name: 'peninsularv',
        displayName: 'Peninsula RV',
        type: 'personal',
        displayType: 'Personal',
        technologies: [
            'ASP.NET',
            'C#',
            'HTML',
            'CSS',
            'Javascript',
            'JQuery',
            'Bootstrap',
            'MSSQL',
        ],
        images: [
            './penrv.png'
        ],
        description: 'Peninsula RV was a small RV dealership located in Sequim, Washington. The project was to develop tools to help manage all aspects of the business from service scheduling and history to sales, payroll, and financial reporting. I also developed a customer portal that allowed customers to view inventory.',
        features: [
            'Visitors can view basic business information',
            'Visitors can view inventory and photos',
            'Users can add customer info',
            'Users can add vehicle info',
            'Users can upload photos',
            'Users can add repair orders',
            'Users can print receipts for work',
            'Users can add consignment info and print contract',
            'Users can add vehicle sale info and print contracts and forms',
            'Users can track post-sale process through payoff, taxes, licensing, and viewing profit',
            'Users can generate salesman commission documents',
            'Users can track customer leads and search inventory with ranked results',
            'Admins can view monthly sales and tax reports',
            'Admins can generate payroll'
        ],
        role: 'Solo Project/Full Stack',
    },
    {
        name: 'nobrainermeals',
        displayName: 'No Brainer Meals',
        type: 'personal',
        displayType: 'Personal',
        technologies: [
            'ASP.NET',
            'C#',
            'HTML',
            'CSS',
            'Javascript',
            'Materialize',
            'MSSQL',
        ],
        images: [
            './nbm.png'
        ],
        description: 'No Brainer Meals is a project to develop a meal planning and grocery ordering web application. The application was designed to improve user experience and streamline meal planning for users.',
        features: [
            'Admin users can create recipes',
            'Admin users can upload photos',
            'Admin users can link suggested equipment',
            'Users can create accounts',
            'Recipes can have multiple ingredients sources with links, amounts, and prices',
            'Users can view price per serving for each recipe',
            'Users can view total cart price to purchase ingredients',
            'Users can alter recipe yield, which alters purchase amounts',
            'Users can view related recipes by similar ingredients',
            'Users can search by ingredient, method, or style',
            'Users can rate recipes',
            'Users can leave comments',
            'Users can follow links to buy directly online',
        ],
        role: 'Solo Project/Full Stack',
        liveLink: 'https://nobrainermeals.com/',
    }

];
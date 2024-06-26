import finra from "./companyLogos/finra.png";
import microsoft from "./companyLogos/microsoft.png";
import utari from "./companyLogos/utari.png";
import accenture from "./companyLogos/accenture.png";
import gomo from "./companyLogos/gomo.png";
import zionsbancorp from "./companyLogos/zions.png";

export const workExperience = [
  {
    company: "Zions Bancorporation",
    payroll: "Unisys",
    title: "Full Stack Developer",
    jobType: "Full Time",
    start: new Date("March 2024"),
    end: null,
    roles: [
      "Developed the RAAS CLI tool for Report Creation using Node & TypeScript, including parsers to extract text from undelimited data and converting it into pipe-separated values in the FINRA Unified Analytics Format.",
      "Facilitated Data-Marting and Reporting via Power BI, resulting in Possession or Control (POC) reports, leading to a 25% increase in data accessibility and insights for stakeholders.",
      "Collaborated with business stakeholders to ensure the tool met their requirements and was user-friendly, achieving a 90% satisfaction rate among end-users.",
      "Contributed to the development of features for the Data Services Query Engine using React, Redux Toolkit, Spring Boot & PostgreSQL, with a focus on building endpoints that connected to the S3 database and extracted data.",
      "Provided JSON results to be consumed by internal tech teams, enhancing data accessibility and integration, resulting in a 30% reduction in data retrieval time.",
      "Worked closely with org verticals to understand their needs and ensure seamless data retrieval and delivery, resulting in a 20% increase in data accuracy and efficiency.",
      "Drove the development of features for the STS (ETL) tool using React, TypeScript, Spring Boot, PostgreSQL & AWS, enabling tech teams to define and set up data flows by combining multiple data sources, applying filters, and writing to specified locations.",
      "Leveraged Spark to support large-scale data processing and transformation, achieving a 40% improvement in data processing speed.",
      "Collaborated with stakeholders to gather requirements and continuously improved the tool's functionality, leading to a 15% increase in user productivity.",
      "Collaborated with cross-functional teams, contributing to a cohesive and productive work environment, resulting in a 20% increase in team efficiency.",
      "Utilized a comprehensive tech stack including React, TypeScript, Redux Toolkit, Thunk, RTK, Java, Spring Boot, AWS, Jenkins, and PostgreSQL across all teams, enabling seamless integration and development processes.",
    ],
    techStack: [
      "react", "spring boot"
    ],
    logo: zionsbancorp,
  },
  {
    company: "Financial Industry Regulatory Authority",
    title: "Full Stack Developer",
    jobType: "Contract",
    start: new Date("March 2022"),
    end: new Date("March 2024"),
    roles: [
      "Developed the RAAS CLI tool for Report Creation using Node & TypeScript, including parsers to extract text from undelimited data and converting it into pipe-separated values in the FINRA Unified Analytics Format.",
      "Facilitated Data-Marting and Reporting via Power BI, resulting in Possession or Control (POC) reports, leading to a 25% increase in data accessibility and insights for stakeholders.",
      "Collaborated with business stakeholders to ensure the tool met their requirements and was user-friendly, achieving a 90% satisfaction rate among end-users.",
      "Contributed to the development of features for the Data Services Query Engine using React, Redux Toolkit, Spring Boot & PostgreSQL, with a focus on building endpoints that connected to the S3 database and extracted data.",
      "Provided JSON results to be consumed by internal tech teams, enhancing data accessibility and integration, resulting in a 30% reduction in data retrieval time.",
      "Worked closely with org verticals to understand their needs and ensure seamless data retrieval and delivery, resulting in a 20% increase in data accuracy and efficiency.",
      "Drove the development of features for the STS (ETL) tool using React, TypeScript, Spring Boot, PostgreSQL & AWS, enabling tech teams to define and set up data flows by combining multiple data sources, applying filters, and writing to specified locations.",
      "Leveraged Spark to support large-scale data processing and transformation, achieving a 40% improvement in data processing speed.",
      "Collaborated with stakeholders to gather requirements and continuously improved the tool's functionality, leading to a 15% increase in user productivity.",
      "Collaborated with cross-functional teams, contributing to a cohesive and productive work environment, resulting in a 20% increase in team efficiency.",
      "Utilized a comprehensive tech stack including React, TypeScript, Redux Toolkit, Thunk, RTK, Java, Spring Boot, AWS, Jenkins, and PostgreSQL across all teams, enabling seamless integration and development processes.",
    ],
    techStack: [
      "react",
    ],
    logo: finra,
  },
  {
    company: "Microsoft",
    payroll: "Infosys",
    title: "Software Development Engineer",
    jobType: "Contract",
    start: new Date("March 2020"),
    end: new Date("March 2022"),
    roles: [
      "Web Development of the Portals Product within the Microsoft Dynamics 365 XRM Suite using React and Fluent UI",
      "Implemented Feature Fixes for D365 Portals that serves as a B2B product built in React, Redux and TypeScript.",
      "Handled Customer Reported as well as Live-Site Incidents in real time built with React, C#, and Kusto.",
      "Created views and components in modern JavaScript ES6, HTML5, CSS3 with WCAG and MAS A11y standards.",
      "Configured pipelines and repo architectures to ensure code compatibility with CommonJS and Babel.",
      "Created a Test Suite from scratch using Jest Playwright and integrated it in the Azure DevOps pipeline.",
    ],
    logo: microsoft,
  },
  {
    company: "The University of Texas at Arlington Research Institute",
    title: "UI UX Developer",
    jobType: "Part Time",
    start: new Date("April 2019"),
    end: new Date("March 2020"),
    roles: [
      "Web App Development of Patient Data Reporting and Analytics using React and Java Spring Boot",
      "Implemented a web portal for an online view of data reports and graph analytics using React, Java and MySQL.",
      "Created Action Forms and Action classes for the modules deployed with Heroku.",
      "Worked with Webpack for bundling node modules and to transform front-end assets.",
      "Migrated SSC legacy Python 2.7 code base to Electron JavaScript ES6 for cross platform compatibility.",
    ],
    logo: utari,
  },
  {
    company: "Accenture",
    title: "Software Development Engineer",
    jobType: "Full Time",
    start: new Date("May 2015"),
    end: new Date("December 2017"),
    roles: [
      "Web development for Auto Insurance Systems using React and Node JS",
      "Developed features within Auto Insurance Systems for use across Europe.",
      "Implemented Web Services using JSON messages that consume REST APIs.",
      "Bundled the project with a webpack configuration and used Babel, Gulp for backward compatibility with custom polyfills and minified files respectively for performance improvement with IE support.",
      "Developed the application using React, TypeScript, SASS and AJAX on the presentation layer. The business layer was developed using Node and the persistent layer using NoSQL.",
      "Worked on AJAX implementation for retrieving the content and displaying it without reloading the existing page.",
      "Contributed to the application involving Java Spring Boot, MySQL, and the WebLogic server.",
    ],
    logo: accenture,
  },
  {
    company: "GO MO Group",
    payroll: "Wondersoft Multimedia Solutions",
    title: "Web Developer",
    jobType: "Contract",
    start: new Date("June 2014"),
    end: new Date("May 2015"),
    roles: [
      "Developed UI, cross-browser compatibility, created content, general web functions while maintaining client standards.",
      "Responsible web applications design with SASS & CSS with dynamic behavior such as variables, operations & functions.",
      "Used CMS such as WordPress and JS libraries for web development.",
      "Implemented services to consume REST APIs using Java Spring MVC.",
      "Extensively involved in database activities like designing tables, SQL queries using MS SQL Server in the application.",
    ],
    techStack: [
      "WordPress", "PHP",
    ],
    logo: gomo,
  },
];

export const workSummary = [
  "Over 8 years of expertise in analyzing, designing, developing, implementing, and testing web-based systems using front-end and back-end technologies, with a strong emphasis on React and TypeScript.",
  "Proficient in utilizing industry-standard SDLC methodologies such as Agile and Waterfall, ensuring efficient project execution and delivery.",
  "Demonstrated proficiency in creating user interface (UI) applications and professional web applications, employing web standards, HTML/HTML5, CSS/CSS3, JavaScript, Bootstrap, JSP, jQuery, JSON, Ajax, and Node.js.",
  "Experienced in all phases of the Software Development Life Cycle (SDLC), encompassing user interaction, business analysis/modeling, design/architecture, development, implementation, integration, documentation, testing, and deployment.",
  "Skilled in working with application servers such as IBM WebSphere, WebLogic, and Apache Tomcat, ensuring seamless deployment and high-performance web applications.",
  "Experience in implementing AWS solutions, leveraging services such as EC2, S3, RDS, EBS, Elastic Load Balancer, and Autoscaling groups.",
  "Proficient in both relational databases and NoSQL databases like MongoDB and MySQL, enabling effective data management and storage solutions.",
  "Specialized in designing and developing single-page applications (SPAs) using React, React Router, and React Redux from scratch, delivering optimized and interactive user experiences.",
  "Well-versed in version control systems such as GitHub, GitLab, Bitbucket, MS Visio, and SVN, ensuring efficient collaboration and code management.",
  "Proven record of configuring tasks with Gulp/Grunt to automate and enhance the application development workflow, increasing productivity and efficiency.",
  "Initiative-taking, dedicated, and adaptable, thriving in fast-paced, high-volume, deadline-driven environments.",
  "Excellent interpersonal, communication, time management, and teamwork skills, consistently delivering projects within set timelines, even under challenging circumstances.",
];

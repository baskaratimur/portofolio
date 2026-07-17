export type ExperienceDesc = string | {
  title: string;
  description: string;
  points: string[];
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: ExperienceDesc[];
}

export interface PortfolioData {
  profile: {
    fullName: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    summary: string;
    photo: string;
  };
  skills: { category: string; items: string[] }[];
  experience: Experience[];
  education: { degree: string; institution: string };
  certifications: { name: string; description: string }[];
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "BASKARA TIMUR",
    title: "QA Engineer & Test Automation Specialist",
    location: "Depok, West Java",
    phone: "08997775838",
    email: "baskaratimur2@gmail.com",
    linkedin: "https://www.linkedin.com/in/baskara-timur-71a979173/",
    summary: "Detail-oriented QA Engineer with extensive experience in manual and automated testing across web, mobile, Sensor IOT and API platforms. Focused on improving product quality through efficient automation and CI/CD pipeline integration.",
    photo: "baskara.jpg",
  },
  // projects: [
  //   {
  //     title: "Android Automation",
  //     stack: "Android WebdriverIO + Appium + TypeScript (BDD)",
  //     url: "https://github.com/baskaratimur/AndroidAutomation"
  //   },
  //   {
  //     title: "Web API Automation",
  //     stack: "Web API Playwright + TypeScript (Classic automation)",
  //     url: "https://github.com/baskaratimur/automation-web-api"
  //   }
  // ],
  skills: [
    { category: "Programming", items: ["TypeScript", "Python", "Golang"] },
    { category: "Automation", items: ["Playwright", "WebdriverIO", "Appium", "Selenium", "Postman"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "JMeter", "k6", "Jira", "Bitbucket"] },
    { category: "Soft Skills", items: ["Critical Thinking", "Teamwork", "Problem Solving", "Adaptability"] }
  ],
  experience: [
    {
      company: "Jejakin",
      role: "QA Engineer",
      period: "July 2024 - Present",
      description: [
        {
          title: "1. Web Automation – Product: CarbonIQ",
          description: "Architected a scalable automation framework using Playwright & TypeScript with an Atomic/Modular Testing strategy.",
          points: [
            "Core Responsibilities: Validating complex functionalities including Activity logging, Calculation engines, and Emission monitoring."
          ]
        },
        {
          title: "2. API Automation & Observability Engineer – Product: Atlas",
          description: "Developed a End-to-End User Journey testing framework using Playwright, focusing on the MRV (Measurement, Reporting, and Verification) ecosystem.",
          points: [
            "Domain Expertise: Comprehensive validation of the Atlas MRV pipeline with Bitbucket scheduler, covering Biodiversity, CSA, Geotagging, Tracking, Ground-truth, Soil-survey, and Trenches.",
            "Monitoring Ecosystem: Automated Alerting: Integrated real-time MS Teams webhooks for instant failure notification.",
            "Data-Driven Documentation: Each result running from pipeline will be delivered to database for documentation reporting."
          ]
        },
        {
          title: "3. Mobile Automation Engineer – Product: Atlas",
          description: "Developed modular testing using WebdriverIO and Appium with TypeScript.",
          points: [
            "Behavior Driven Development (BDD): Implemented Gherkin-based scenarios to ensure technical tests align perfectly with business requirements."
          ]
        },
        {
          title: "4. Manual & Field QA Testing",
          description: "Analyze the feature and creating the testcase with AI and Responsible for end-to-end manual testing, covering everything from system validation to real-world user experience in the field:",
          points: [
            "Web, Mobile, IoT & API Testing: Conducted functional testing on applications and validated backend data integration through manual API testing.",
            "Product UAT & User Training: Collaborated with the Product Team to execute User Acceptance Testing (UAT) and led direct application training for caretakers (end-users) to gather actionable field feedback."
          ]
        },
        {
          title: "5. Data Engineering",
          description: "On-call executions to maintain data integrity.",
          points: [
            "Helped other teams to fix their data issues using Python and Pandas."
          ]
        }
      ]
    },
    {
      company: "MNC Innovation Center",
      role: "QA Engineer",
      period: "January 2023 - June 2024",
      description: [
        "Manual Testing: Created test cases and collaborated across Native Mobile Apps, Web, and API platforms for cross-platform compatibility.",
        "Performance Engineering: Executed high-scale performance and load tests using k6 and JMeter to identify system bottlenecks.",
        "API Automation: Developed and maintained automated API test suites using JMeter for backend data integrity.",
        "Web Automation: Engineered frameworks using Selenium to reduce manual regression efforts and accelerate release cycles."
      ]
    },
    {
      company: "Tokopedia",
      role: "Manual QA Tester",
      period: "September 2021 - December 2022",
      description: [
        "Analyzed Rewards feature flow and compiled test cases in Xray.",
        "Prepared complex testing data (Campaign, Coupon, User Account).",
        "Reported and monitored bugs using Jira."
      ]
    }
  ],
  education: {
    degree: "Bachelor of Information Systems",
    institution: "Trilogi University",
  },
  certifications: [
    {
      name: "Junior Data Engineer",
      description: "Python for ETL/ELT projects."
    }
  ]
};

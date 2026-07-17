export const portfolioData = {
  profile: {
    fullName: "BASKARA TIMUR",
    title: "QA Engineer & Test Automation Specialist",
    location: "Depok, West Java",
    phone: "08997775838",
    email: "baskaratimur2@gmail.com",
    linkedin: "https://www.linkedin.com/in/baskara-timur-71a979173/",
    summary: "Detail-oriented QA Engineer with extensive experience in manual and automated testing across web, mobile, and API platforms. Focused on improving product quality through efficient automation and CI/CD pipeline integration.",
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
    { category: "Tools", items: ["Git", "JMeter", "k6", "Jira", "Bitbucket"] }
  ],
  experience: [
    {
      company: "Jejakin",
      role: "QA Engineer",
      period: "July 2024 - Present",
      description: [
        "1. Web Automation – Product : CarbonIQ\nArchitected a scalable automation framework using Playwright & TypeScript with an Atomic/Modular Testing strategy.\n- Core Responsibilities: Validating complex functionalities including Activity logging, Calculation engines, and Emission monitoring.",
        "2. API Automation & Observability Engineer – Product: Atlas\nDeveloped a End-to-End User Journey testing framework using Playwright, focusing on the MRV (Measurement, Reporting, and Verification) ecosystem\n- Domain Expertise: Comprehensive validation of the Atlas MRV pipeline with Bitbucket scheduler, covering Biodiversity, CSA, Geotagging, Tracking, Ground-truth, Soil-survey, and Trenches.\n- Monitoring Ecosystem: * Automated Alerting: Integrated real-time MS Teams webhooks for instant failure notification.\n- Data-Driven Documentation: Each result running from pipeline will be delivered to database for documentation reporting.",
        "3. Mobile Automation Engineer – Product: Atlas\nDeveloped modular testing using WebdriverIO and appium with typescript.\n- Behavior Driven Development (BDD): Implemented Gherkin-based scenarios to ensure technical tests align perfectly with business requirements.",
        "4. Manual & Field QA Testing \nResponsible for end-to-end manual testing, covering everything from system validation to real-world user experience in the field:\nWeb, Mobile, IoT & API Testing: Conducted functional testing on applications and validated backend data integration through manual API testing.\nProduct UAT & User Training: Collaborated with the Product Team to execute User Acceptance Testing (UAT) and led direct application training for caretakers (end-users) to gather actionable field feedback.",
        "5. Data Engineering\n- On-call executions : helped other team to fix their problem with the data using python and pandas."
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

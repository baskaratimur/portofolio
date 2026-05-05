export const portfolioData = {
  profile: {
    fullName: "BASKARA TIMUR",
    title: "QA Engineer & Test Automation Specialist",
    location: "Depok, Jawa Barat",
    phone: "08997775838",
    email: "baskaratimur2@gmail.com",
    linkedin: "https://www.linkedin.com/in/baskara-timur-71a979173/",
    summary: "QA Engineer yang berorientasi pada detail dengan pengalaman luas dalam pengujian manual dan otomatis di platform web, seluler, dan API. Fokus pada peningkatan kualitas produk melalui otomasi efisien dan integrasi pipeline CI/CD.",
    photo: "src/baskara.jpg",
  },
  projects: [
    {
      title: "Android Automation",
      stack: "Android WebdriverIO + Appium + TypeScript (BDD)",
      url: "https://github.com/baskaratimur/AndroidAutomation"
    },
    {
      title: "Web API Automation",
      stack: "Web API Playwright + TypeScript",
      url: "https://github.com/baskaratimur/APIweb"
    }
  ],
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
      period: "Juli 2024 - Sekarang",
      description: [
        "Web Automation (CarbonIQ): Architected a scalable framework using Playwright & TypeScript with an Atomic/Modular Testing strategy for activity logging and calculation engines.",
        "API Automation & Observability (Atlas): Developed E2E User Journey frameworks for the MRV ecosystem with Bitbucket scheduler and MS Teams webhook integration.",
        "Mobile Automation (Atlas): Developed atomic/modular testing using WebdriverIO and Appium with TypeScript and Behavior Driven Development (BDD).",
        "Manual QA (Atlas): Collaborated to isolate and reproduce complex bugs, improving the reliability of the mobile and API ecosystem.",
        "Data Engineering: Conducted on-call executions to fix data issues using Python and Pandas."
      ]
    },
    {
      company: "MNC Innovation Center",
      role: "QA Engineer",
      period: "Januari 2023 - Juni 2024",
      description: [
        "Manual Testing: Created test cases and collaborated across Native Mobile Apps, Web, and API platforms for cross-platform compatibility.",
        "Performance Engineering: Executed high-scale performance and load tests using k6 and JMeter to identify system bottlenecks.",
        "API Automation: Developed and maintained automated API test suites using JMeter for backend data integrity.",
        "Web Automation: Engineered frameworks using Selenium to reduce manual regression efforts and accelerate release cycles."
      ]
    },
    {
      company: "Tokopedia",
      role: "QA Tester Manual",
      period: "September 2021 - Desember 2022",
      description: [
        "Analisis flow fitur Rewards dan penyusunan test case di Xray.",
        "Persiapan data testing kompleks (Campaign, Coupon, User Account).",
        "Pelaporan dan monitoring bug melalui Jira."
      ]
    }
  ],
  education: {
    degree: "Sarjana Sistem Informasi",
    institution: "Universitas Trilogi",
  },
  certifications: [
    {
      name: "Data Engineer Pemula",
      description: "Python for ETL/ELT projects."
    }
  ]
};

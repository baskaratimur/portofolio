(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const a={profile:{fullName:"BASKARA TIMUR",location:"Depok, Jawa Barat",phone:"08997775838",email:"baskaratimur2@gmail.com",linkedin:"https://www.linkedin.com/in/baskara-timur-71a979173/",summary:"QA Engineer yang berorientasi pada detail dengan pengalaman luas dalam pengujian manual dan otomatis di platform web, seluler, dan API. Fokus pada peningkatan kualitas produk melalui otomasi efisien dan integrasi pipeline CI/CD.",photo:"pasfoto_baskaratimur.jpg"},projects:[{title:"Android Automation",stack:"Android WebdriverIO + Appium + TypeScript (BDD)",url:"https://github.com/baskaratimur/AndroidAutomation"},{title:"Web API Automation",stack:"Web API Playwright + TypeScript",url:"https://github.com/baskaratimur/APIweb"}],skills:[{category:"Programming",items:["TypeScript","Python","Golang"]},{category:"Automation",items:["Playwright","WebdriverIO","Appium","Selenium","Postman"]},{category:"Databases",items:["MySQL","MongoDB","PostgreSQL"]},{category:"Tools",items:["Git","JMeter","k6","Jira","Bitbucket"]}],experience:[{company:"Jejakin",role:"QA Engineer",period:"Juli 2024 - Sekarang",description:["Web Automation (CarbonIQ): Architected a scalable framework using Playwright & TypeScript with an Atomic/Modular Testing strategy for activity logging and calculation engines.","API Automation & Observability (Atlas): Developed E2E User Journey frameworks for the MRV ecosystem with Bitbucket scheduler and MS Teams webhook integration.","Mobile Automation (Atlas): Developed atomic/modular testing using WebdriverIO and Appium with TypeScript and Behavior Driven Development (BDD).","Manual QA (Atlas): Collaborated to isolate and reproduce complex bugs, improving the reliability of the mobile and API ecosystem.","Data Engineering: Conducted on-call executions to fix data issues using Python and Pandas."]},{company:"MNC Innovation Center",role:"QA Engineer",period:"Januari 2023 - Juni 2024",description:["Manual Testing: Created test cases and collaborated across Native Mobile Apps, Web, and API platforms for cross-platform compatibility.","Performance Engineering: Executed high-scale performance and load tests using k6 and JMeter to identify system bottlenecks.","API Automation: Developed and maintained automated API test suites using JMeter for backend data integrity.","Web Automation: Engineered frameworks using Selenium to reduce manual regression efforts and accelerate release cycles."]},{company:"Tokopedia",role:"QA Tester Manual",period:"September 2021 - Desember 2022",description:["Analisis flow fitur Rewards dan penyusunan test case di Xray.","Persiapan data testing kompleks (Campaign, Coupon, User Account).","Pelaporan dan monitoring bug melalui Jira."]}],education:{degree:"Sarjana Sistem Informasi",institution:"Universitas Trilogi"},certifications:[{name:"Data Engineer Pemula",description:"Python for ETL/ELT projects."}]},l=document.querySelector("#app"),c=()=>a.skills.map(e=>`
        <div class="mb-6 animate-fade-in-up">
            <h4 class="text-xs font-bold text-slate-400 border-b border-slate-200 pb-1 mb-3 uppercase tracking-widest">${e.category}</h4>
            <div class="flex flex-wrap gap-2">
                ${e.items.map(s=>`<span class="skill-badge">${s}</span>`).join("")}
            </div>
        </div>
    `).join(""),d=()=>a.experience.map(e=>`
        <div class="timeline-line animate-fade-in-up">
            <div class="timeline-dot"></div>
            <h3 class="text-xl font-bold font-sans text-slate-800">${e.role}</h3>
            <div class="flex items-center gap-2 mb-2">
                <span class="text-primary-600 font-semibold uppercase tracking-wider text-sm">${e.company}</span>
                <span class="text-slate-400 font-medium text-xs">• ${e.period}</span>
            </div>
            <ul class="space-y-2">
                ${e.description.map(s=>`<li class="text-slate-600 text-sm flex items-start">
                    <span class="text-primary-500 mr-2">▹</span>
                    <span>${s}</span>
                </li>`).join("")}
            </ul>
        </div>
    `).join(""),p=()=>a.certifications.map(e=>`
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-200 transition-all hover:bg-white animate-fade-in-up">
            <h4 class="font-bold text-slate-800 text-sm mb-1">${e.name}</h4>
            <p class="text-slate-500 text-xs">${e.description}</p>
        </div>
    `).join(""),m=()=>a.projects.map(e=>`
        <a href="${e.url}" target="_blank" class="block group card hover:border-primary-500 transition-all animate-fade-in-up">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">${e.title}</h3>
                <span class="text-slate-400 group-hover:text-primary-500 transition-colors">↗</span>
            </div>
            <p class="text-xs text-slate-500 font-medium">${e.stack}</p>
        </a>
    `).join("");l.innerHTML=`
<div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 px-6 py-4">
        <div class="max-w-6xl mx-auto flex justify-between items-center text-sm font-bold tracking-tighter">
            <div class="text-2xl font-black gradient-text">BT.</div>
            <div class="space-x-8 text-slate-500">
                <a href="#about" class="hover:text-primary-600 transition-colors uppercase">About</a>
                <a href="#experience" class="hover:text-primary-600 transition-colors uppercase">Experience</a>
                <a href="#skills" class="hover:text-primary-600 transition-colors uppercase">Skills</a>
                <a href="#contact" class="hover:text-primary-600 transition-colors uppercase">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="about" class="pt-32 pb-20 px-6 hero-gradient overflow-hidden">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6 order-2 lg:order-1 animate-fade-in-up">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-xs font-bold uppercase tracking-widest">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                    </span>
                    Available for Work
                </div>
                <h1 class="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
                    Hi, I'm <span class="gradient-text">${a.profile.fullName}</span>
                </h1>
                <p class="text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                    ${a.profile.summary}
                </p>
                <div class="flex gap-4 pt-4">
                    <a href="#experience" class="btn-primary flex items-center gap-2">View Experience</a>
                    <a href="mailto:${a.profile.email}" class="px-6 py-2 rounded-lg border-2 border-slate-200 font-semibold text-slate-600 hover:border-primary-500 hover:text-primary-600 transition-all">Contact Me</a>
                </div>
            </div>
            <div class="relative order-1 lg:order-2 flex justify-center animate-fade-in">
                <!-- Background decoration -->
                <div class="absolute -top-10 -right-10 w-64 h-64 bg-primary-200/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-200/50 rounded-full blur-3xl -z-10 animate-pulse" style="animation-delay: 2s"></div>
                
                <div class="relative p-2 bg-white rounded-3xl shadow-2xl rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 border border-slate-100 cursor-pointer">
                    <img src="${a.profile.photo}" alt="Profile" class="w-64 h-80 object-cover rounded-2xl shadow-inner">
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto py-20 px-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <!-- Left Column: Skills & Info -->
            <div class="lg:col-span-1 space-y-12">
                <!-- Skills -->
                <div id="skills" class="card shadow-primary-500/10 border-primary-100">
                    <h2 class="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Stack Expertise</h2>
                    ${c()}
                </div>

                <!-- Contact Info Card -->
                <div class="card bg-slate-900 text-white shadow-xl">
                    <h2 class="text-xl font-bold mb-6 text-primary-400 tracking-tighter">LET'S CONNECT</h2>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-4 group cursor-pointer">
                            <div class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                                <span class="text-xl">📍</span>
                            </div>
                            <span class="text-slate-300 font-medium group-hover:text-white transition-colors uppercase tracking-tight text-sm">${a.profile.location}</span>
                        </li>
                        <li class="flex items-center gap-4 group cursor-pointer">
                            <div class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                                <span class="text-xl">📧</span>
                            </div>
                            <span class="text-slate-300 font-medium group-hover:text-white transition-colors lowercase tracking-tight text-sm">${a.profile.email}</span>
                        </li>
                        <li class="flex items-center gap-4 group cursor-pointer">
                            <div class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                                <span class="text-xl">📞</span>
                            </div>
                            <span class="text-slate-300 font-medium group-hover:text-white transition-colors tracking-tight text-sm">${a.profile.phone}</span>
                        </li>
                        <li class="flex items-center gap-4 group cursor-pointer">
                            <a href="${a.profile.linkedin}" target="_blank" class="flex items-center gap-4 w-full">
                                <div class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                                    <span class="text-xl">🔗</span>
                                </div>
                                <span class="text-slate-300 font-medium group-hover:text-white transition-colors tracking-tight text-sm">LinkedIn Profile</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Right Column: Projects, Experience & Education -->
            <div id="experience" class="lg:col-span-2 space-y-16 mt-4">
                <div>
                  <h2 class="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4 tracking-tighter uppercase">
                    Automation Repositories
                    <span class="h-1 bg-slate-100 flex-grow rounded-full"></span>
                  </h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      ${m()}
                  </div>
                </div>

                <div>
                  <h2 class="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4 tracking-tighter uppercase">
                    Professional Experience
                    <span class="h-1 bg-slate-100 flex-grow rounded-full"></span>
                  </h2>
                  <div class="ml-4">
                      ${d()}
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Education -->
                    <div>
                        <h2 class="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Academic</h2>
                        <div class="card hover:border-primary-100">
                            <span class="text-primary-600 font-bold text-xs uppercase tracking-widest mb-1 block">${a.education.degree}</span>
                            <h3 class="text-lg font-bold text-slate-800">${a.education.institution}</h3>
                        </div>
                    </div>

                    <!-- Certifications -->
                    <div>
                        <h2 class="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Certifications</h2>
                        <div class="space-y-4">
                            ${p()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
`;

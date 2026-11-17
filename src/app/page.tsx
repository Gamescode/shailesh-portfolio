const skills = [
  ["Selenium", "6+ years", "✓"], ["Appium", "5+ years", "◉"],
  ["Flutter Automation", "4+ years", "◆"], ["Playwright", "4+ years", "◈"],
  ["Python", "Automation", "🐍"], ["Pytest", "Automation", "▥"],
  ["Java", "Programming", "♨"], ["JMeter", "Performance Testing", "⚒"],
  ["REST Assured", "API Testing", "◉"], ["TestNG", "Test Framework", "▦"],
  ["TypeScript", "Primary Language", "TS"], ["Jenkins", "CI/CD", "♟"],
  ["BDD / Gherkin", "Automation", "▣"], ["Cloud Execution", "Hands-on experience", "☁"],
];

const roles = [
  { company: "Petco", role: "SDET 3", period: "Nov 2023 – Present", mark: "🐾", bullets: ["Developing and enhancing automation frameworks using TypeScript and Playwright.", "Integrating Jenkins for CI/CD and test execution.", "Taking ownership of major framework components and mentoring engineers."] },
  { company: "Coding Ninjas", role: "SDET 2", period: "Oct 2022 – Nov 2023", mark: "C", bullets: ["Built end-to-end UI and API automation for e-learning workflows.", "Developed Python and Postman API automation, reducing manual testing effort by approximately 40%.", "Integrated suites into Jenkins and mentored team members."] },
  { company: "BlueStacks", role: "MTS-QA (Automation)", period: "Dec 2019 – Aug 2022", mark: "▰", bullets: ["Built and maintained desktop and mobile automation using Selenium and Appium.", "Implemented Flutter app automation using BDD with Gherkin and Appium.", "Performed performance validation, defect analysis and framework enhancement."] },
  { company: "Pure Software Pvt. Ltd.", role: "Test Engineer", period: "Jul 2019 – Dec 2019", mark: "P", bullets: ["Developed and executed manual and automated test cases for client applications.", "Worked with development teams to investigate defects, validate fixes and assess release readiness."] },
  { company: "Mobipact", role: "Software Engineer", period: "Nov 2018 – Jun 2019", mark: "M", bullets: ["Worked on ASP.NET-based payment applications.", "Performed SQL CRUD operations and validated API integrations and payment workflows."] },
  { company: "Keywords Studios", role: "QA Engineer", period: "Nov 2017 – Oct 2018", mark: "K", bullets: ["Performed functional, compatibility, regression and certification testing.", "Supported game testing across Xbox, PlayStation, Android, iOS and VR environments."] },
];

const leadership = [
  "Designed and architected test automation frameworks",
  "Built automation components from scratch and enhanced existing frameworks",
  "Mentored engineers and promoted maintainable test practices",
  "Led quality initiatives and CI/CD improvements",
];

const aiWork = [
  "Practical use of ChatGPT, Claude, Copilot and Cline",
  "AI-assisted testing, debugging and prompt engineering",
  "Exploring self-healing automation and AI-driven QA",
];

export default function Home() {
  return (
    <main className="portfolio-page min-h-screen overflow-hidden text-[#171d16]">
      <style>{`
        html { scroll-behavior: smooth; }
        .portfolio-page { background-color:#f7efd9; background-image:linear-gradient(rgba(250,245,226,.84),rgba(250,245,226,.84)),url('/images/side-foliage.png'); background-repeat:repeat-y; background-position:left top; background-size:84px auto; }
        .serif { font-family:Georgia,'Times New Roman',serif; }
        .hero { background:#23392f url('/images/hero-workspace.png') center right/cover no-repeat; }
        .hero-shade { background:linear-gradient(90deg,rgba(24,43,35,.98) 0%,rgba(24,43,35,.91) 31%,rgba(24,43,35,.44) 49%,rgba(24,43,35,0) 72%); }
        .paper { background:rgba(250,245,226,.76); }
        .skill-pill { background:rgba(222,225,190,.75); border:1px solid rgba(139,158,105,.12); }
        .section-rule { border-color:rgba(94,119,79,.38); }
        .project-card { background:rgba(255,252,237,.74); border:1px solid rgba(122,145,94,.38); box-shadow:0 3px 12px rgba(53,70,43,.07); }
        .project-image { object-fit:cover; }
        .soft-in { animation:softIn .7s ease both; }
        @keyframes softIn { from {opacity:0;transform:translateY(8px)} to {opacity:1;transform:translateY(0)} }
        @media (prefers-reduced-motion:reduce) { *,*::before,*::after { animation:none!important;scroll-behavior:auto!important; } }
        @media(max-width:767px) { .hero { background-position:58% center; } .hero-shade { background:linear-gradient(90deg,rgba(24,43,35,.96),rgba(24,43,35,.82) 62%,rgba(24,43,35,.38)); } .portfolio-page { background-size:42px auto; } }
      `}</style>

      <header className="hero relative min-h-[450px] text-[#fffbed] md:min-h-[440px]">
        <div className="hero-shade absolute inset-0" />
        <nav className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="serif text-2xl font-bold tracking-tight">SKR<span className="text-[#c9ed59]">.</span></a>
          <div className="hidden items-center gap-6 text-[14px] font-semibold md:flex">
            <a href="#about" className="hover:text-[#d6ed79]">About</a><a href="#expertise" className="hover:text-[#d6ed79]">Expertise</a><a href="#experience" className="hover:text-[#d6ed79]">Experience</a><a href="#projects" className="hover:text-[#d6ed79]">Projects</a><a href="#education" className="hover:text-[#d6ed79]">Education</a><a href="#contact" className="hover:text-[#d6ed79]">Contact</a>
          </div>
          <a href="/resume.pdf" download className="rounded-full bg-[#c9ed59] px-4 py-2 text-[15px] font-bold text-[#1b291e] shadow-md transition hover:-translate-y-0.5 hover:bg-[#d8f67c]">↓ &nbsp;Download Resume</a>
        </nav>
        <div id="top" className="relative z-10 mx-auto flex max-w-[1440px] items-center px-5 pb-12 pt-8 md:min-h-[345px] md:px-[5.2%] md:pb-10 md:pt-5">
          <div className="soft-in max-w-[390px]">
            <p className="mb-4 flex items-center gap-3 text-[14px] text-[#e6efc9]"><span className="h-[2px] w-10 bg-[#c9ed59]" />Software Quality Engineering · India</p>
            <h1 className="serif text-[48px] font-bold leading-[.94] tracking-[-.04em] sm:text-6xl">Shailesh Kr.<br /><span className="text-[#c9e77a]">Raghav.</span></h1>
            <p className="serif mt-4 text-lg font-semibold leading-snug">Senior SDET | Automation Architect</p>
            <p className="serif text-base font-semibold text-[#e8edda]">AI-Powered Quality Engineering</p>
            <p className="mt-4 max-w-[350px] text-[15px] leading-[1.65] text-[#f0f0df]">Passionate about building scalable test automation frameworks, ensuring quality, and driving innovation in software testing.</p>
            <div className="mt-5 flex flex-wrap gap-3"><a href="/resume.pdf" download className="rounded-lg bg-[#c9ed59] px-5 py-3 text-[16px] font-bold text-[#1d2b20] transition hover:bg-[#daf57e]">↓ &nbsp;Download Resume</a><a href="#contact" className="rounded-lg border border-white/80 px-5 py-3 text-[14px] font-semibold text-white hover:bg-white/10">✉ &nbsp;Contact Me</a></div>
          </div>
        </div>
      </header>

      <div className="paper relative mx-auto max-w-[1440px] px-5 md:px-[5.2%]">
        <section className="grid gap-7 border-b section-rule py-7 md:grid-cols-[.72fr_1.28fr] md:gap-8 md:py-8">
          <div id="about" className="md:border-r section-rule md:pr-8">
            <h2 className="serif mb-4 flex items-center gap-3 text-[24px] font-bold"><span className="text-2xl text-[#4e8351]">❧</span>About Me</h2>
            <p className="max-w-[390px] text-[15px] leading-[1.85]">With 9+ years of experience in software quality engineering, I specialize in test automation, framework architecture and building high-quality products. I enjoy mentoring teams and exploring cutting-edge technologies.</p>
          </div>
          <div id="expertise">
            <h2 className="serif mb-4 flex items-center gap-3 text-[24px] font-bold"><span className="text-2xl text-[#39784a]">✿</span>Technical Expertise</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
              {skills.map(([name, years, icon]) => <div key={name} className="skill-pill flex min-h-[52px] items-center gap-2 rounded-2xl px-3 py-2.5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/70 text-[18px] font-black text-[#3979a0]">{icon}</span><span className="min-w-0"><span className="block truncate text-[15px] font-semibold">{name}</span><span className="block text-[15px] leading-tight text-[#50594a]">{years}</span></span></div>)}
            </div>
          </div>
        </section>

        <section id="experience" className="py-7 md:py-8">
          <h2 className="serif mb-5 flex items-center gap-3 text-[24px] font-bold"><span className="text-xl text-[#3f7048]">▣</span>Professional Experience</h2>
          <div className="grid gap-x-8 md:grid-cols-2">
            {roles.map((job, i) => <article key={job.company} className={`relative grid grid-cols-[42px_1fr] gap-3 border-l border-[#9cac7d] pb-5 pl-3 ${i === 2 ? 'md:mb-0' : ''}`}>
              <span className="absolute -left-[5px] top-3 h-[10px] w-[10px] rounded-full bg-[#6b9b3c] ring-2 ring-[#e7edcf]" />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-2xl font-black text-[#287aa4] shadow-sm">{job.mark}</div>
              <div><div className="flex flex-wrap items-baseline justify-between gap-x-2"><h3 className="text-[16px] font-bold">{job.company}</h3><span className="text-[13px] text-[#495144]">{job.period}</span></div><p className="text-[15px] text-[#4e594b]">{job.role}</p><ul className="mt-1 list-disc space-y-[2px] pl-3 text-[12px] leading-[1.45] text-[#30372e]">{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></div>
            </article>)}
          </div>
        </section>

        <section className="grid gap-7 border-b section-rule pb-7 md:grid-cols-2 md:gap-10">
          <div className="md:border-r section-rule md:pr-8"><h2 className="serif mb-3 flex items-center gap-3 text-[22px] font-bold"><span className="text-[#4e8351]">♟</span>Engineering Leadership</h2><ul className="space-y-1.5 text-[15px]">{leadership.map(x => <li key={x} className="flex gap-2"><span className="font-bold text-[#6e9f3c]">✓</span>{x}</li>)}</ul></div>
          <div><h2 className="serif mb-3 flex items-center gap-3 text-[22px] font-bold"><span className="text-[#4e8351]">▦</span>AI and Emerging Technology</h2><ul className="space-y-1.5 text-[15px]">{aiWork.map(x => <li key={x} className="flex gap-2"><span className="font-bold text-[#6e9f3c]">✓</span>{x}</li>)}</ul></div>
        </section>

        <section id="projects" className="py-7 md:py-8">
          <h2 className="serif mb-4 flex items-center gap-3 text-[23px] font-bold"><span className="text-[#4e8351]">▦</span>Selected Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="project-card grid overflow-hidden rounded-xl sm:grid-cols-[44%_56%]"><img src="/images/project-kya-dekhein.png" alt="Illustrated preview of Kya Dekhein?" className="project-image h-full min-h-[140px] w-full" /><div className="p-4"><h3 className="serif text-[18px] font-bold">Kya Dekhein?</h3><p className="mt-2 text-[15px] leading-relaxed">A movie recommendation platform built with Next.js, TypeScript and TMDB.</p><a href="https://kya-dekhein.vercel.app/" target="_blank" rel="noreferrer" className="mt-3 inline-block rounded-full bg-[#c9ed59] px-4 py-2 text-[12px] font-bold text-[#243426] hover:bg-[#d8f67c]">View Project →</a></div></article>
            <article className="project-card grid overflow-hidden rounded-xl sm:grid-cols-[44%_56%]"><img src="/images/project-carry-my-net.png" alt="Illustrated preview of Carry My Net" className="project-image h-full min-h-[140px] w-full" /><div className="p-4"><h3 className="serif text-[18px] font-bold">Carry My Net</h3><p className="mt-2 text-[15px] leading-relaxed">Offline-first mobile app for seamless access to useful content without internet.</p><a href="https://github.com/Gamescode/carry-my-net" target="_blank" rel="noreferrer" className="mt-3 inline-block rounded-full bg-[#c9ed59] px-4 py-2 text-[12px] font-bold text-[#243426] hover:bg-[#d8f67c]">View Project →</a></div></article>
          </div>
        </section>

        <section id="education" className="grid gap-6 border-t section-rule py-7 md:grid-cols-[.9fr_1fr_1.45fr] md:gap-8">
          <div className="md:border-r section-rule md:pr-5"><h2 className="serif mb-3 text-[18px] font-bold">🎓 &nbsp;Education</h2><p className="text-[15px] leading-relaxed">B.Tech – Electronics and Communication Engineering<br />GGSIPU, 2017</p></div>
          <div className="md:border-r section-rule md:pr-5"><h2 className="serif mb-3 text-[18px] font-bold">✉ &nbsp;Contact</h2><a className="text-[15px] hover:underline" href="mailto:shaileshkraghav@gmail.com">✉ &nbsp;shaileshkraghav@gmail.com</a><div className="mt-3 flex gap-4 text-xl font-bold"><a aria-label="LinkedIn" href="https://linkedin.com/in/shailesh-kr-raghav-0394b5117/" target="_blank" rel="noreferrer">in</a><a aria-label="GitHub" href="https://github.com/Gamescode" target="_blank" rel="noreferrer">◉</a></div></div>
          <div id="contact"><h2 className="serif mb-3 text-[18px] font-bold">Send a Message</h2><form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-2"><div className="grid grid-cols-2 gap-2"><input required name="name" placeholder="Name" className="min-w-0 rounded-md border border-[#b9c1a7] bg-[#fffbed]/80 px-3 py-2 text-[15px] outline-none focus:border-[#6b8b54]" /><input required type="email" name="email" placeholder="Email" className="min-w-0 rounded-md border border-[#b9c1a7] bg-[#fffbed]/80 px-3 py-2 text-[15px] outline-none focus:border-[#6b8b54]" /></div><textarea required name="message" rows={3} placeholder="Your Message" className="w-full rounded-md border border-[#b9c1a7] bg-[#fffbed]/80 px-3 py-2 text-[15px] outline-none focus:border-[#6b8b54]" /><input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" /><div className="flex justify-end"><button type="submit" className="rounded-full bg-[#c9ed59] px-5 py-2.5 text-[15px] font-bold text-[#1d2b20] hover:bg-[#d8f67c]">Send Message</button></div></form></div>
        </section>
      </div>

      <footer className="relative min-h-[170px] bg-[#304b3d] bg-[url('/images/footer-landscape.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#183329]/85 via-[#183329]/25 to-transparent" /><div className="relative flex min-h-[170px] items-end justify-between gap-4 px-5 pb-5 pt-20 text-[12px] text-white md:px-[5.2%]"><p>© 2026 Shailesh Kr. Raghav. &nbsp;Built with passion for quality and innovation.</p><p className="whitespace-nowrap">Test · Automate · Innovate</p></div>
      </footer>
    </main>
  );
}

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  GraduationCap,
  Shield,
  Camera,
  Server,
  Cloud,
  Cpu,
  Sun,
  Moon,
  Rss,
  Link,
} from "lucide-react";

// ====== UI PRIMITIVES ======
const cn = (...xs) => xs.filter(Boolean).join(" ");

const Button = ({ as: Tag = "button", className = "", children, ...props }) => (
  <Tag
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
      "bg-purple-600 text-white hover:bg-purple-700 active:scale-95",
      "dark:bg-purple-500 dark:text-white dark:hover:bg-purple-600 dark:active:scale-95",
      className
    )}
    {...props}
  >
    {children}
  </Tag>
);

const OutlineButton = ({ as: Tag = "a", className = "", children, ...props }) => (
  <Tag
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
      "border border-slate-300 text-slate-900 hover:bg-slate-50 active:scale-95",
      "dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 dark:active:scale-95",
      className
    )}
    {...props}
  >
    {children}
  </Tag>
);

const Card = ({ className = "", children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={cn(
      "rounded-3xl border transition-all duration-300",
      "bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg",
      "dark:bg-white/5 dark:border-slate-700",
      className
    )}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={cn("p-6 border-b border-slate-200 dark:border-slate-700", className)}>{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>
);

const CardContent = ({ className = "", children }) => (
  <div className={cn("p-6", className)}>{children}</div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 drop-shadow-lg dark:text-white"
      >
        {title}
      </motion.h2>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="rounded-full px-3 py-1 text-sm border bg-white/60 dark:bg-slate-800/80 dark:border-slate-700 backdrop-blur shadow-sm">
    {children}
  </span>
);

// ====== CONFIGURABLE DATA ======
const PROFILE = {
  name: "Susan Chaudhary",
  tagline: "Cybersecurity Professional & Tech Enthusiast",
  learning: ["Threat Intelligence", "Cloud Security", "Scripting", "Penetration Testing"],
  interests: ["CTF", "Bug Bounty", "Automation", "IOT Security"],
  quote: "Do it right, or don't do it at all.",
  email: "susankhakman@gmail.com",
  location: "Birmingham, UK",
  github: "https://github.com/Mystifiedsus",
  linkedin: "https://www.linkedin.com/in/susan-chaudhary-8b476a264",
  medium: "https://medium.com/@susankhakman",
  cvUrl: "/susan-chaudhary-cv.pdf",
  profilePic: "/susan-chaudhary-photo.jpg",
  heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
};

const SKILLS = [
  { title: "Cloud & Networking", icon: Cloud, items: ["AWS", "Azure", "GCP", "NGINX", "Apache", "SSH", "VPN/Tailscale"] },
  { title: "Security Tools", icon: Shield, items: ["Burp Suite", "Nmap", "Wireshark", "FFUF", "Metasploit", "John the Ripper"] },
  { title: "DevOps / Platforms", icon: Server, items: ["Docker", "Git/GitHub/GitLab", "Linux (Debian, Kali, Ubuntu)", "Windows"] },
  { title: "Programming", icon: Cpu, items: ["Python", "JavaScript", "Bash", "PowerShell", "C"] },
  { title: "Automation", icon: ExternalLink, items: ["Python", "REST API", "Terraform", "CloudFormation Template", "Bash"] },
  { title: "Media Studio", icon: Camera, items: ["Graphic Design & Presentation Design", "Product Photography"] },
];

const EXPERIENCE = [
    {
    role: "Associate Cyber Security Research Analyst",
    org: "Vairav Technology (Bāgmatī, Nepal)",
    logo: "https://placehold.co/100x100/818cf8/ffffff?text=VT",
    start: "Jul 2023",
    end: "Present",
    bullets: [
      "Cloud Security & Infrastructure Management: Deployed and configured vulnerable environments across AWS, GCP, and Azure. Utilized Terraform for infrastructure as code to manage resources, improving efficiency and reducing costs.",
      "Security Product & Tooling: Benchmarked and configured firewalls and cloud security products from leading vendors, including Palo Alto, Fortinet, Checkpoint, WatchGuard, and Barracuda. Tested and provided critical feedback on internally developed security tools.",
      "Risk Mitigation & Client Relations: Designed and executed comprehensive security test cases. Communicated directly with clients and vendors to understand requirements, discuss technical solutions, and present findings.",
      "Training & Reporting: Mentored and guided new trainees and interns on cybersecurity best practices and operational procedures. Maintained and filed reports on operational efficiency and project outcomes."
    ],
  },
  {
    role: "Cyber Security Research Analyst (Trainee)",
    org: "Vairav Technology",
    logo: "https://placehold.co/100x100/818cf8/ffffff?text=VT",
    start: "May 2023",
    end: "Jun 2023",
    bullets: [
      "Threat Analysis: Performed threat intelligence for adware and phishing URLs. Gained hands-on experience in analyzing browser exploits, XSS, and DDoS attacks.",
      "Security Testing: Assisted with testing and evaluating firewall solutions from various vendors, documenting findings in detailed reports."
    ],
  },
  {
    role: "Cyber Security Research Analyst (Internship)",
    org: "Vairav Technology",
    logo: "https://placehold.co/100x100/818cf8/ffffff?text=VT",
    start: "Feb 2023",
    end: "Apr 2023",
    bullets: [
      "Operational Support: Conducted tests and documented overall cybersecurity operations, providing key insights and filling scorecards.",
      "Vulnerability Assessment: Focused on browser-based vulnerabilities, assisting in running tests to identify and report on issues."
    ],
  },
];

const COMMUNITIES = [
  { role: "Founder", org: "Ethical HCK Community", start: "Sep 2021", end: "Present", link: "https://ethicalcommunity.heraldcollege.edu.np/", bullets: ["Founded a community dedicated to ethical hacking and cybersecurity awareness.", "Organized events, workshops, and public speaking sessions on topics of ethical hacking and cybersecurity best practices."] },
  { role: "Team Lead", org: "BizCore Community", start: "Aug 2021", end: "Aug 2023", link: "https://bizcorecommunity.heraldcollege.edu.np/", bullets: ["Led and managed team activities, focusing on leadership and cybersecurity.", "Conducted presentations and workshops to raise awareness on various cybersecurity topics."] },
];

const EDUCATION = [
  { title: "MSc in Cyber Security", org: "University of Wolverhampton", date: "Est. March 2026" },
  { title: "BSc (Hons) Computer Science", org: "Herald College Kathmandu", date: "2021 to 2023" },
];

const CERTS = [
  { title: "Malware Analysis Path Completion", date: "Jul 10, 2024" },
  { title: "SOC Analyst Path Completion", date: "Sep 2, 2025" },
  { title: "LetsDefend", date: "Sep 2, 2025" },
];

const PROJECTS = [
  { title: "Retro Tech Laptop Story", desc: "A blog post detailing the transformation of a vintage ThinkPad into a capable daily driver using budget-friendly hardware upgrades and the power of Linux.", image: "https://placehold.co/600x400/818cf8/ffffff?text=Retro+Laptop", link: "https://medium.com/@susankhakman/the-most-powerful-33-laptop-ive-ever-built-a-retro-tech-story-3f5e8ec6de5d", tags: ["Linux", "Hardware", "DIY", "Project", "ThinkPad"] },
  { title: "Phishing URL Downloader", desc: "A Python script to automate phishing URL collection from various threat intelligence feeds.", image: "https://placehold.co/600x400/4f46e5/ffffff?text=Python+Script", link: "https://github.com/Mystifiedsus/Phishing", tags: ["Python", "Scripting", "Cybersecurity", "Automation"] },
  { title: "Graphic Design for Community", desc: "Designing presentation slides and forms for various college community events.", image: "https://placehold.co/600x400/10b981/ffffff?text=Graphic+Design", link: "#", tags: ["Graphic Design", "Presentation", "Community"] },
];

// ====== MAIN COMPONENT ======
export default function App() {
  const [theme, setTheme] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"));

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl">Susan Chaudhary</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#certs" className="hover:text-purple-400 transition-colors">Certifications</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#communities" className="hover:text-purple-400 transition-colors">Community</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <OutlineButton as="a" href={PROFILE.cvUrl} download="Susan-Chaudhary-CV.pdf" className="hidden md:flex">
              <Download className="size-4" /> CV
            </OutlineButton>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-1 inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 size-10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="size-5 text-yellow-300" /> : <Moon className="size-5 text-purple-600" />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden py-24 md:py-32 bg-slate-100 dark:bg-slate-900">
          <div className="absolute inset-0 -z-10 opacity-10">
            <img src={PROFILE.heroImage} alt="Abstract background" className="w-full h-full object-cover object-center"/>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="rounded-3xl border transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-xl p-6 md:p-10 dark:bg-white/5 dark:border-slate-700">
              <div className="flex flex-col items-center md:flex-row-reverse md:items-center gap-8">
                <div className="relative size-48 md:size-64 rounded-full shadow-lg shrink-0">
                  <img src={PROFILE.profilePic} alt="Susan Chaudhary" className="w-full h-full rounded-full object-cover border-4 border-purple-600 dark:border-purple-500"/>
                  <div className="absolute inset-0 rounded-full ring-2 ring-purple-400/50" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400">Hello, I am</p>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2 text-slate-900 dark:text-white">{PROFILE.name}</h1>
                  <p className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-300">{PROFILE.tagline}</p>
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">{PROFILE.learning.map(s => <Badge key={s}>{s}</Badge>)}</div>
                  <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">{PROFILE.interests.map(s => <Badge key={s}>{s}</Badge>)}</div>
                  <p className="mt-6 italic text-slate-600 dark:text-slate-400">⚡ Fav quote: "{PROFILE.quote}"</p>
                  <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                    <Button as="a" href="#projects">View Projects</Button>
                    <OutlineButton href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</OutlineButton>
                    <OutlineButton href={PROFILE.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</OutlineButton>
                    <OutlineButton href={PROFILE.medium} target="_blank" rel="noreferrer"><Rss className="size-4" /> Medium</OutlineButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="skills" title="My Skills">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map(group => (
              <Card key={group.title} className="h-full">
                <CardHeader><CardTitle><span className="inline-flex items-center gap-2 text-slate-900 dark:text-white">{React.createElement(group.icon, { className: "size-5 text-purple-600 dark:text-purple-400" })} {group.title}</span></CardTitle></CardHeader>
                <CardContent><div className="flex flex-wrap gap-2 text-slate-700 dark:text-slate-300">{group.items.map(i => <Badge key={i}>{i}</Badge>)}</div></CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Work Experience">
          <div className="grid gap-6">
            {EXPERIENCE.map((exp, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-start">
                  <img src={exp.logo} alt={`${exp.org} logo`} className="w-14 h-14 rounded-xl object-contain border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                      <span className="text-slate-500 dark:text-slate-400">• {exp.org}</span>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{exp.start} – {exp.end}</div>
                    <ul className="list-disc ml-5 mt-3 space-y-2 text-slate-700 dark:text-slate-300">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="certs" title="Awards & Certifications">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle><span className="inline-flex items-center gap-2 text-slate-900 dark:text-white"><Award className="size-5 text-purple-600 dark:text-purple-400"/> Awards & Certs</span></CardTitle></CardHeader>
              <CardContent className="space-y-3 text-slate-700 dark:text-slate-300">{CERTS.map(c => (<div key={c.title} className="flex items-center justify-between gap-4"><div>{c.title}</div><div className="text-sm text-slate-600 dark:text-slate-400 shrink-0">{c.date}</div></div>))}</CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle><span className="inline-flex items-center gap-2 text-slate-900 dark:text-white"><GraduationCap className="size-5 text-purple-600 dark:text-purple-400"/> Education</span></CardTitle></CardHeader>
              <CardContent className="space-y-3 text-slate-700 dark:text-slate-300">{EDUCATION.map(e => (<div key={e.title} className="flex items-center justify-between gap-4"><div><div className="font-medium">{e.title}</div><div className="text-slate-600 dark:text-slate-400 text-sm">{e.org}</div></div><div className="text-sm text-slate-600 dark:text-slate-400 shrink-0">{e.date}</div></div>))}</CardContent>
            </Card>
          </div>
        </Section>

        <Section id="projects" title="My Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(p => (
              <Card key={p.title} className="overflow-hidden h-full flex flex-col group">
                <div className="relative w-full h-48">
                  <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                  <a href={p.link} target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><ExternalLink className="size-8 text-white"/></a>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow"><h3 className="text-lg font-semibold leading-tight text-slate-900 dark:text-white">{p.title}</h3><p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{p.desc}</p></div>
                  <div className="mt-4 flex flex-wrap gap-2">{p.tags.map(t => <Badge key={t}>{t}</Badge>)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8"><OutlineButton href={PROFILE.github} target="_blank" rel="noreferrer"><Github className="size-4" /> View More on GitHub</OutlineButton></div>
        </Section>
        
        <Section id="communities" title="College & Community Involvement">
          <div className="grid md:grid-cols-2 gap-6">
            {COMMUNITIES.map((comm, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-semibold text-slate-900 dark:text-white">{comm.role}</h3><span className="text-slate-500 dark:text-slate-400">• {comm.org}</span></div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-3">{comm.start} – {comm.end}</div>
                  <ul className="list-disc ml-5 space-y-1 text-slate-700 dark:text-slate-300">{comm.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
                  <a href={comm.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 hover:underline mt-4">Visit Community Page <ExternalLink className="size-3" /></a>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Get In Touch">
          <div className="flex justify-center">
            <Card className="p-6 md:p-8 max-w-lg text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ready to Connect?</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">I'm always open to new opportunities and collaborations. Feel free to reach out via email or connect on social media.</p>
              <div className="mt-6 flex justify-center"><Button as="a" href={`mailto:${PROFILE.email}`}><Mail className="size-4" /> Say Hello</Button></div>
              <div className="flex justify-center gap-4 mt-4">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><Linkedin/></a>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><Github/></a>
                <a href={PROFILE.medium} target="_blank" rel="noreferrer" aria-label="Medium" className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><Rss/></a>
              </div>
            </Card>
          </div>
        </Section>
      </main>

      <footer className="py-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#communities" className="hover:text-purple-400 transition-colors">Community</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


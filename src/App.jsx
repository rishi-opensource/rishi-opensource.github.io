import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github, Linkedin, Mail, BookOpen, ExternalLink, ChevronRight,
    Terminal, Cpu, Code2, Layers, Briefcase, Award,
    MessageSquare, Sparkles, Send, Download, Menu, X, Rocket
} from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'AI Workflow', href: '#ai-workflow' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="container-custom flex justify-between items-center">
                <motion.a
                    href="#"
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                    whileHover={{ scale: 1.05 }}
                >
                    RS
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        className="px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all text-sm font-medium"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-dark border-b border-white/10 py-6 px-4 flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-400 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/Resume.pdf"
                            target="_blank"
                            className="w-full text-center py-3 rounded-lg bg-primary/10 text-primary font-medium"
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                            AI-Driven Software Engineer
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Building scalable platforms with an <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">AI-native mindset.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                            8+ years of experience in backend systems, cloud platforms, and developer tooling. Currently architecting data intelligence at <span className="text-white font-medium">Deliveroo</span>.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-full bg-white text-dark font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg shadow-white/5"
                            >
                                View Projects <ChevronRight size={18} />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold backdrop-blur-sm hover:bg-white/10 transition-colors"
                            >
                                Contact Me
                            </motion.a>
                        </div>

                        <div className="mt-16 flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
                            <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Expertise:</span>
                            <div className="flex flex-wrap gap-6 text-sm font-medium">
                                <span>Golang</span>
                                <span>Python</span>
                                <span>Kubernetes</span>
                                <span>AWS</span>
                                <span>Terraform</span>
                                <span>Distributed Systems</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

const ValueProp = () => {
    const values = [
        {
            icon: <Terminal size={24} className="text-primary" />,
            title: "8+ Years of Production Experience",
            description: "Delivering mission-critical backend and platform systems at scale for global companies like Deliveroo."
        },
        {
            icon: <Sparkles size={24} className="text-accent" />,
            title: "AI-Native Engineering Workflow",
            description: "Leveraging Claude Code, Cursor, and Windsurf to accelerate development, debugging, and architecture design."
        },
        {
            icon: <Layers size={24} className="text-secondary" />,
            title: "Scalable Infrastructure",
            description: "Building resilient cloud-native systems with Kubernetes, AWS, and modern DevOps practices."
        }
    ];

    return (
        <section id="about" className="py-20 bg-white/[0.02]">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-white/10 transition-all hover:translate-y-[-4px]"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                                {v.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AIWorkflow = () => {
    const steps = [
        {
            title: "AI-Assisted Architecture",
            desc: "Using LLMs to explore multiple design patterns and edge cases before a single line of code is written.",
            icon: <Cpu size={20} />
        },
        {
            title: "Accelerated Implementation",
            desc: "Integrating tools like Claude Code and Windsurf to handle boilerplate and scaffolding, focusing manual effort on core logic.",
            icon: <Code2 size={20} />
        },
        {
            title: "AI-Driven Debugging",
            desc: "Employing agentic workflows to trace complex bugs and suggest fixes across large-scale distributed systems.",
            icon: <Terminal size={20} />
        },
        {
            title: "Automated Governance",
            desc: "Building AI-powered tools for data compliance, lineage, and metadata management (e.g., DataHub at Deliveroo).",
            icon: <Briefcase size={20} />
        }
    ];

    return (
        <section id="ai-workflow" className="py-24 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        The AI-Native Force Multiplier
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I don't just use AI; I integrate it into the core of my engineering lifecycle to ship faster, safer, and cleaner code.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-6 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h4 className="font-bold mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Callout box */}
                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 text-center">
                    <h3 className="text-2xl font-bold mb-4">"AI is the new compiler."</h3>
                    <p className="text-gray-300 max-w-xl mx-auto">
                        I advocate for workflows where AI agents handle the routine while engineers focus on high-level system reasoning and product impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FeaturedProjects = () => {
    const projects = [
        {
            title: "vim-claude-code",
            desc: "A flagship Vim plugin that integrates Claude Code directly into developer workflows. Enabling seamless AI assistance within the editor.",
            tags: ["VimScript", "Python", "Claude API", "AI Agents"],
            link: "https://github.com/rishi-opensource/vim-claude-code",
            featured: true
        },
        {
            title: "OpenMetadata HPA",
            desc: "Enabled Horizontal Pod Autoscaling in OpenMetadata Helm charts to ensure enterprise-scale scalability.",
            tags: ["Kubernetes", "Helm", "Distributed Systems"],
            link: "https://github.com/open-metadata/openmetadata-helm-charts/pull/329",
            featured: false
        },
        {
            title: "Crypto-CLI",
            desc: "A robust Unix-style CLI tool written in Clojure for advanced cryptographic security operations.",
            tags: ["Clojure", "Cryptography", "Security"],
            link: "https://github.com/rishi-opensource/Crypto-CLI",
            featured: false
        },
        {
            title: "Blockchain (Python)",
            desc: "A foundational blockchain implementation demonstrating the principles of immutable ledgers and peer-to-peer validation.",
            tags: ["Python", "Blockchain", "Distributed Systems"],
            link: "https://github.com/rishi-opensource/blockchain",
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white/[0.01]">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
                        <p className="text-gray-400">Open source contributions and engineering experiments.</p>
                    </div>
                    <a href="https://github.com/rishi-opensource" target="_blank" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        See more on GitHub <ChevronRight size={20} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className={`group relative p-8 rounded-2xl border ${project.featured ? 'border-primary/30 bg-primary/5' : 'border-white/5 bg-white/[0.02]'} hover:border-white/20 transition-all`}
                            whileHover={{ y: -5 }}
                        >
                            {project.featured && (
                                <span className="absolute top-4 right-8 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Flagship Project</span>
                            )}
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/5">{tag}</span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                            >
                                View Repository <ExternalLink size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    const jobs = [
        {
            company: "Deliveroo",
            role: "Software Engineer II — Data Intelligence",
            period: "Oct 2022 – Present",
            points: [
                "Architecting the Data Compliance Platform for GDPR workflows and data retention.",
                "Scaling metadata lineage with DataHub on Kubernetes (EKS).",
                "Leading cross-region disaster recovery for mission-critical datastores.",
                "Strengthening infra standards with Terraform best practices."
            ]
        },
        {
            company: "BetterWorks",
            role: "Software Engineer — Integration Team",
            period: "Oct 2020 – Oct 2022",
            points: [
                "Launched a greenfield IPaaS resulting in 6x integration velocity.",
                "Pioneered 'plug-and-play' onboarding for integration partners.",
                "Architected scalable microservices for distributed data sync."
            ]
        },
        {
            company: "Karix Mobile",
            role: "Software Engineer",
            period: "Sept 2018 – Oct 2020",
            points: [
                "Built Kubernetes engine for WhatsApp business onboarding.",
                "Designed high-throughput messaging systems for global scale."
            ]
        },
        {
            company: "Chumbak Design",
            role: "Software Engineer",
            period: "Jan 2018 – Sept 2018",
            points: [
                "Developed REST APIs for the Chumbak platform using Python and Django.",
                "Built an internal attendance monitor desktop application for employees."
            ]
        },
        {
            company: "DoubleSpring Media",
            role: "Backend Developer",
            period: "June 2017 – Jan 2018",
            points: [
                "Developed REST APIs in Python/Django for core products including CRM, HRM, and Project Management systems."
            ]
        },
        {
            company: "Concur Technologies (SAP)",
            role: "Software Engineering Intern",
            period: "May 2016 – July 2016",
            points: [
                "Developed a Unix/Linux CLI tool in Clojure to handle information security issues with cryptographic applications."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24">
            <div className="container-custom">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Career Journey</h2>
                <div className="space-y-12 max-w-4xl mx-auto">
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden" />

                            <div className="md:grid md:grid-cols-4 md:gap-8">
                                <div className="mb-4 md:mb-0">
                                    <span className="text-primary font-mono text-sm uppercase tracking-wider">{job.period}</span>
                                    <h3 className="text-2xl font-bold mt-1">{job.company}</h3>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-xl font-medium mb-4 text-white/90">{job.role}</p>
                                    <ul className="space-y-3">
                                        {job.points.map((point, k) => (
                                            <li key={k} className="flex gap-3 text-gray-400 leading-relaxed">
                                                <span className="text-primary pt-1.5">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Writing = () => {
    const posts = [
        { title: "Procedural abstraction", date: "Jul 18, 2018" },
        { title: "Probabilistic algorithms (Fermat test)", date: "Jul 9, 2018" },
        { title: "Procedures and processes", date: "Jul 8, 2018" }
    ];

    return (
        <section className="py-24 bg-white/[0.01]">
            <div className="container-custom">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold">Writing</h2>
                    <a href="https://medium.com/@rishi-tech" target="_blank" className="text-primary flex items-center gap-2 font-semibold">
                        Medium <ExternalLink size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <a
                            key={i}
                            href="https://medium.com/@rishi-tech"
                            target="_blank"
                            className="block p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                        >
                            <span className="text-xs text-gray-500 mb-2 block">{post.date}</span>
                            <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{post.title}</h4>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-t from-dark to-white/[0.02]">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Let's build the future of engineering.</h2>
                        <p className="text-xl text-gray-400 mb-12">
                            Looking for a Senior Backend or Platform Engineer who understands the power of AI-native workflows? I'm open to discussing impact-driven roles.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <a
                                href="mailto:rshkntshrm@gmail.com"
                                className="w-full md:w-auto px-10 py-5 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all glow-primary"
                            >
                                <Mail size={20} /> rshkntshrm@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rishi-sharma-07a3aaba/"
                                target="_blank"
                                className="w-full md:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                            >
                                <Linkedin size={20} /> LinkedIn
                            </a>
                        </div>

                        <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-8 text-gray-500">
                            <a href="https://github.com/rishi-opensource" className="hover:text-white transition-colors flex items-center gap-2">
                                <Github size={20} /> GitHub
                            </a>
                            <a href="https://medium.com/@rishi-tech" className="hover:text-white transition-colors flex items-center gap-2">
                                <BookOpen size={20} /> Medium
                            </a>
                            <span className="flex items-center gap-2">
                                <Send size={20} /> +91 9694319495
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
            <div className="container-custom">
                <p>© {new Date().getFullYear()} Rishi Sharma. Built with <span className="text-white">React + Vite + Tailwind</span>. Hosted on GitHub Pages.</p>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary/30">
            <Navbar />
            <Hero />
            <ValueProp />
            <AIWorkflow />
            <FeaturedProjects />
            <Experience />
            <Writing />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Settings, Cpu, Layers, Eye, MessageCircle, Printer, Star, Mail, Phone, MapPin,
  Linkedin, Facebook, ArrowUpRight, Menu, X, Play, FileText, Clock, Users, Box,
  Wrench, Database, Target, Package, Cog, GraduationCap, Briefcase, ZoomIn, CheckCircle2
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/Reveal";
import exhaustManifold from "@/assets/exhaust-manifold.jpg";
import cylinderPiston from "@/assets/cylinder-piston.jpg";
import sheetMetalBracket from "@/assets/sheet-metal-bracket.jpg";
import tubesHoses from "@/assets/tubes-hoses.jpg";
import controlPanelBox from "@/assets/control-panel-box.jpg";
import coolingSystem from "@/assets/cooling-system.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '', company: '', email: '', phone: '', message: ''
  });
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mdkddjdb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          'Company': formData.company,
          'Email': formData.email,
          'Phone': formData.phone,
          'Message': formData.message
        }),
      });
      if (response.ok) {
        toast({ title: "Message sent", description: "Thanks — I'll get back to you soon." });
        setFormData({ fullName: '', company: '', email: '', phone: '', message: '' });
      } else throw new Error();
    } catch {
      toast({ title: "Error", description: "Failed to send. Try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Components' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: 'Exhaust Manifold',
      image: exhaustManifold,
      desc: 'Designed complex manifold geometry for diesel engines with optimized gas flow paths and thermal management. Validated thermal stress through FEA.',
      material: 'Ductile Iron',
      process: 'Sand Casting',
      application: 'Off‑Highway Diesel Engines',
      software: 'Creo, ANSYS, GD&T',
      highlights: [
        'Optimized runner geometry for balanced back‑pressure',
        'Thermal + structural FEA to validate fatigue life',
        'DFM review with foundry for cast‑ability',
      ],
    },
    {
      title: 'Cylinder & Piston Assembly',
      image: cylinderPiston,
      desc: 'Detailed models and GD&T‑compliant drawings for high‑performance engine assemblies. Tolerance stack‑up ensures optimal combustion.',
      material: 'Aluminum Alloy',
      process: 'Die Casting',
      application: 'High‑Performance Engines',
      software: 'Creo, NX, Windchill',
      highlights: [
        'Full 3D assembly with motion clearance checks',
        'Tolerance stack‑up per ASME Y14.5',
        'Production drawings released to global suppliers',
      ],
    },
    {
      title: 'Sheet Metal Bracket',
      image: sheetMetalBracket,
      desc: 'Engine mounting and structural support design with cost‑optimized bend sequences and DFMEA methodology.',
      material: 'Steel',
      process: 'Stamping',
      application: 'Engine Mounting Systems',
      software: 'Creo Sheet Metal, DFMEA',
      highlights: [
        'Flat‑pattern optimization to reduce scrap',
        'Bend sequence tuned for tooling cost',
        'DFMEA to eliminate weld distortion risks',
      ],
    },
    {
      title: 'Tubes & Hoses',
      image: tubesHoses,
      desc: 'Routed engine fluid lines for fuel, oil, and coolant systems — minimising interference and pressure drops.',
      material: 'Steel & Rubber',
      process: 'Tube Bending',
      application: 'Fuel, Oil & Coolant Lines',
      software: 'Creo Piping, Cabling',
      highlights: [
        'Full routing with clash detection',
        'Bend‑radius optimization for flow',
        'Clip and clamp placement per NVH targets',
      ],
    },
    {
      title: 'Control Panel Box',
      image: controlPanelBox,
      desc: 'Housings for control and sensor components with IP‑rated sealing, thermal management and EMI shielding.',
      material: 'Aluminum',
      process: 'CNC Machining',
      application: 'Engine Control & Sensor Modules',
      software: 'Creo, SolidWorks',
      highlights: [
        'IP67 sealing with gasket design',
        'Thermal analysis for electronics cooling',
        'EMI shielding integrated into housing',
      ],
    },
    {
      title: 'Cooling System',
      image: coolingSystem,
      desc: 'Modeled and optimised airflow parts — radiator shrouds and fan assemblies with CFD analysis review.',
      material: 'Plastic Composite',
      process: 'Injection Molding',
      application: 'Radiator & Fan Assemblies',
      software: 'Creo, CFD Tools',
      highlights: [
        'CFD‑guided shroud geometry',
        'Fan blade profile for peak efficiency',
        'Mold‑flow analysis for uniform walls',
      ],
    },
  ];



  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVIGATION */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="font-display text-2xl font-semibold tracking-tight">Golam Faruk</div>

            <div className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1.5">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-mint rounded-full transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:inline-flex bg-foreground text-background hover:bg-foreground/90 rounded-full h-11 px-6 font-semibold"
            >
              Let's talk
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </Button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:bg-mint rounded-2xl"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 animate-fade-up">
              <span className="pill">
                <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                Senior Mechanical Design Engineer
              </span>

              <h1 className="font-display text-[15vw] leading-[0.92] sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-semibold">
                The engineer<br />
                behind precision<br />
                <span className="italic text-foreground/60">machinery.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Over a decade turning engineering concepts into production‑ready designs
                for John Deere, Arctic Cat and Caterpillar — using Creo, SolidWorks, CATIA V5 and NX.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full h-14 px-8 text-base font-semibold"
                >
                  View my work
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base font-semibold border-foreground/20 hover:bg-mint"
                >
                  Start a project
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-6 text-sm text-muted-foreground">
                <div>
                  <div className="font-display text-3xl text-foreground">10+</div>
                  <div>Years experience</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="font-display text-3xl text-foreground">5000+</div>
                  <div>CAD models built</div>
                </div>
                <div className="w-px h-10 bg-border hidden sm:block" />
                <div className="hidden sm:block">
                  <div className="font-display text-3xl text-foreground">10+</div>
                  <div>Global brands</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative animate-fade-in">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-mint aspect-[4/5]">
                <img
                  src="/golam-faruk.png"
                  alt="Golam Faruk, Mechanical Design Engineer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-3xl p-5 shadow-elevated border border-border max-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Available</span>
                </div>
                <p className="text-sm text-muted-foreground">Currently open for new engineering collaborations.</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-accent rounded-3xl p-5 shadow-soft rotate-3">
                <Cog className="w-8 h-8 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32 px-6 lg:px-10">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto">

          <div className="max-w-4xl mb-16">
            <span className="pill mb-6">About me</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
              Experienced Mechanical Design Engineer with proven technical expertise.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-mint rounded-[2rem] p-8 lg:p-12">
              <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
                I'm <strong className="text-foreground">Golam Faruk</strong>, a Mechanical Design Engineer with over a decade of
                experience in 3D modeling, product development, and engine component design for global brands like
                John Deere, Arctic Cat, and Caterpillar. My expertise includes Solid Modeling, Sheet Metal,
                Casting Design, GD&T, BOM, and Tolerance Stack‑Up using Creo, SolidWorks, CATIA V5, and NX.
              </p>
              <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mt-6">
                I specialise in designing brackets, manifolds, hoses, cylinders, pistons and control systems —
                transforming engineering concepts into production‑ready solutions with a focus on innovation,
                precision, and manufacturing efficiency.
              </p>
              <Button
                onClick={() => window.open('/Resume-GolamFaruk.pdf', '_blank')}
                className="mt-8 bg-foreground text-background hover:bg-foreground/90 rounded-full h-12 px-6 font-semibold"
              >
                <FileText className="w-4 h-4 mr-2" />
                See my resume
              </Button>
            </div>

            <div className="bg-accent rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between min-h-[280px]">
              <Briefcase className="w-10 h-10 text-foreground" />
              <div>
                <div className="font-display text-5xl lg:text-6xl font-semibold leading-none">Currently</div>
                <p className="mt-3 text-foreground/80">
                  Designing diesel engine systems at <strong>John Deere Power Systems</strong>, Iowa.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, num: '10+', label: 'Years of experience', hint: 'In mechanical design engineering' },
              { icon: FileText, num: '100+', label: 'Projects completed', hint: 'Complex mechanical & engine components' },
              { icon: Users, num: '10+', label: 'Global collaborations', hint: 'John Deere, Caterpillar & Arctic Cat' },
              { icon: Box, num: '5000+', label: 'CAD models built', hint: 'Detailed parts, prototypes & releases' },
            ].map((s, i) => (
              <div key={i} className="bg-background border border-border rounded-[1.75rem] p-6 hover:bg-mint-soft transition-colors">
                <s.icon className="w-6 h-6 text-foreground/70 mb-6" />
                <div className="font-display text-5xl font-semibold leading-none mb-2">{s.num}</div>
                <div className="font-semibold text-foreground">{s.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.hint}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mt-20">
            <div className="max-w-3xl mb-10">
              <span className="pill mb-4">Technical expertise</span>
              <h3 className="font-display text-4xl md:text-5xl font-semibold">
                Tools, methods and systems I work with every day.
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Settings, title: 'Design tools', accent: 'bg-accent', skills: ['Creo', 'SolidWorks', 'CATIA V5', 'NX', 'AutoCAD', 'Autodesk Inventor'] },
                { icon: Wrench, title: 'Engineering expertise', accent: 'bg-secondary-soft', skills: ['GD&T', 'Tolerance Stack‑Up', 'FEA Review', 'FMEA', 'DFMEA', 'BOM Creation', 'Design Validation'] },
                { icon: Database, title: 'Data & systems', accent: 'bg-mint', skills: ['SAP', 'Windchill', 'PDM‑Link', 'Teamcenter', 'Minitab', 'Excel', 'PowerPoint'] },
                { icon: Target, title: 'Professional strengths', accent: 'bg-accent-soft', skills: ['Product Optimization', 'Cross‑Functional Collaboration', 'Root Cause Analysis', 'Prototype Development'] },
              ].map((cat, i) => (
                <div key={i} className="bg-background border border-border rounded-[1.75rem] p-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${cat.accent} flex items-center justify-center`}>
                      <cat.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h4 className="font-display text-2xl font-semibold">{cat.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(s => (
                      <span key={s} className="px-4 py-2 rounded-full bg-mint-soft border border-border text-sm font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 lg:py-32 px-6 lg:px-10 bg-mint-soft">
        <Reveal variant="slide-left" className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-16">
            <span className="pill mb-6">My experience</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
              A decade across industry‑leading engineering teams.
            </h2>
          </div>

          <div className="mb-16">
            <h3 className="font-display text-3xl font-semibold mb-8 flex items-center gap-3">
              <Settings className="w-7 h-7 text-foreground/70" />
              Work history
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { period: '2019 – Present', title: 'Design Engineer', company: 'US Tech Solutions · Client: John Deere Power Systems, Iowa, USA', desc: 'Lead design and development of casting, sheet metal, and engine components including tubes, hoses, manifolds, and filters for diesel engines. Conduct design reviews, GD&T validation, and root cause analysis (8D) while collaborating with global teams for cost and complexity improvements.', logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025406/rsz_john-deere-logo_1_hq5svg.png', bg: 'bg-accent' },
                { period: '2014 – 2019', title: 'Engineer Design', company: 'Arctic Cat · Thief River Falls, MN, USA', desc: 'Designed and developed ATV engine components such as cylinders, pistons, connecting rods, oil pans, and PTO covers. Supported prototype builds, validation testing, and cost optimization.', logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1761054561/articcat.png', bg: 'bg-mint' },
                { period: '2012 – 2013', title: 'Project Engineer', company: 'Belcan Engineering Group · Client: Caterpillar, Lafayette, IN', desc: 'Led multiple projects for marine and locomotive engines under the NPI program. Designed fuel and oil system components, performed FEA and DFMEA, and managed supplier validation documentation (APQP, PPAP).', logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_caterpillar-logo_1_xhw8fl.png', bg: 'bg-secondary-soft' },
                { period: '2008 – 2012', title: 'Design Engineer', company: 'Geometric Americas Inc. · Client: Caterpillar, Mossville, IL', desc: 'Developed Tier 4 Exhaust Module and Cab components, including SCR and DPF assemblies. Coordinated validation testing and design releases via Teamcenter.', logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_caterpillar-logo_1_xhw8fl.png', bg: 'bg-accent-soft' },
              ].map((job, i) => (
                <article key={i} className="bg-background border border-border rounded-[1.75rem] p-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className={`${job.bg} rounded-2xl h-20 w-40 flex items-center justify-center p-4`}>
                      <img src={job.logo} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-mint-soft border border-border rounded-full px-3 py-1.5 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl font-semibold mb-1">{job.title}</h4>
                  <p className="text-sm font-medium text-foreground/70 mb-4">{job.company}</p>
                  <p className="text-foreground/70 leading-relaxed">{job.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-foreground/70" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { period: '2009', degree: 'Master of Applied Science', field: 'Mechanical Engineering', inst: 'University of Windsor, Canada' },
                { period: '2006', degree: 'Bachelor of Applied Science', field: 'Mechanical Engineering', inst: 'University of Windsor, Canada' },
              ].map((ed, i) => (
                <article key={i} className="bg-background border border-border rounded-[1.75rem] p-8 hover:shadow-soft transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="bg-accent-soft rounded-2xl h-20 w-40 flex items-center justify-center p-4">
                      <img src="https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_university-of-windsor-logo_1_xxdeqt.png" alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-mint-soft border border-border rounded-full px-3 py-1.5">
                      {ed.period}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl font-semibold mb-1">{ed.degree}</h4>
                  <p className="text-sm font-medium text-foreground/70">{ed.field}</p>
                  <p className="text-foreground/60 mt-2">{ed.inst}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32 px-6 lg:px-10">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="pill mb-6">My services</span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
                Engineering, from concept to production.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              Comprehensive design solutions tailored to bring complex machinery concepts to life —
              built with precision, delivered on time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Settings, title: '3D Machinery Design', desc: 'Complete machinery design from concept to production‑ready models with precision engineering.' },
              { icon: Layers, title: 'CAD Drafting', desc: 'Technical drawings and detailed blueprints for manufacturing and assembly processes.' },
              { icon: Eye, title: 'Machinery Visualization', desc: 'Photorealistic renderings and animations to showcase your machinery designs.' },
              { icon: MessageCircle, title: 'Design Consultation', desc: 'Expert advice on design optimization, feasibility studies, and technical solutions.' },
              { icon: Printer, title: '3D Printing Models', desc: 'Prototype development and 3D printing preparation for rapid testing and validation.' },
              { icon: Cpu, title: 'Custom Design Projects', desc: 'Tailored design solutions for unique machinery requirements and specialized applications.' },
            ].map((s, i) => (
              <div
                key={i}
                className="group bg-background border border-border rounded-[1.75rem] p-8 hover:bg-mint transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-mint group-hover:bg-background flex items-center justify-center transition-colors">
                    <s.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </section>

      {/* COMPONENTS EXPERTISE */}
      <section id="projects" className="py-24 lg:py-32 px-6 lg:px-10 bg-mint-soft">
        <Reveal variant="slide-left" className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-16">
            <span className="pill mb-6">Components expertise</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
              Highlighting precision‑driven designs.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedProject(i)}
                className="group text-left bg-background border border-border rounded-[1.75rem] overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`View details for ${c.title}`}
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-mint">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end justify-between p-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-background/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-foreground">
                      <Eye className="w-3.5 h-3.5" /> View details
                    </span>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground shadow-soft">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">{c.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-5 line-clamp-2">{c.desc}</p>
                  <div className="flex gap-2 flex-wrap pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1.5 text-xs font-semibold">
                      <Package className="w-3.5 h-3.5" /> {c.material}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold">
                      <Cog className="w-3.5 h-3.5" /> {c.process}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </Reveal>

      </section>

      {/* REVIEWS */}
      <section className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="pill mb-6">Client reviews</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
              What industry professionals say.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'David McAllister', pos: 'Senior Product Manager, John Deere', img: 'https://iili.io/FgRZ8ut.jpg', review: "Working with Golam has been a game‑changer for our engineering team. His precision in 3D modeling helped us accelerate our product development pipeline significantly.", bg: 'bg-accent' },
              { name: 'Linda Carver', pos: 'R&D Lead Engineer, Komatsu America', img: 'https://iili.io/FgRmNWX.webp', review: "Golam's design consultation brought fresh insights to our electric loader project. Every step reflected his passion and technical mastery.", bg: 'bg-mint' },
              { name: 'Carlos Mendes', pos: 'Operations Director, BuildTech Machinery', img: 'https://iili.io/Fg595Ol.jpg', review: "What sets Golam apart is his ability to turn complex machinery concepts into accurate, functional 3D models — a real impact on prototyping speed.", bg: 'bg-secondary-soft' },
            ].map((t, i) => (
              <article key={i} className={`${t.bg} rounded-[1.75rem] p-8 flex flex-col`}>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-foreground text-foreground" />)}
                </div>
                <blockquote className="font-display text-xl leading-snug mb-8 flex-1">
                  "{t.review}"
                </blockquote>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative rounded-2xl overflow-hidden mb-6 group">
                      <img src={t.img} alt="" className="w-full h-36 object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                        <div className="bg-background rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-foreground ml-0.5 fill-foreground" />
                        </div>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <iframe
                      width="100%" height="500"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title={`${t.name} review`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </DialogContent>
                </Dialog>

                <div className="flex items-center gap-3 pt-6 border-t border-foreground/10">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-foreground/70">{t.pos}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 px-6 lg:px-10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            <img src="https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025406/rsz_john-deere-logo_1_hq5svg.png" alt="John Deere" className="h-10 opacity-70 hover:opacity-100 transition" loading="lazy" />
            <img src="https://res.cloudinary.com/dvo0eiqb1/image/upload/v1761054561/articcat.png" alt="Arctic Cat" className="h-10 opacity-70 hover:opacity-100 transition" loading="lazy" />
            <img src="https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_caterpillar-logo_1_xhw8fl.png" alt="Caterpillar" className="h-10 opacity-70 hover:opacity-100 transition" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-10">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto">

          <div className="bg-foreground text-background rounded-[2.5rem] p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <span className="inline-flex items-center rounded-full border border-background/20 bg-background/5 px-4 py-2 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                  Let's connect
                </span>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
                  Have a project<br />in mind?
                </h2>
                <p className="text-lg text-background/70 max-w-md">
                  Ready to bring your machinery vision to life? Send me a note — I typically respond within 24 hours.
                </p>

                <div className="space-y-6 pt-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@golamfaruk.com' },
                    { icon: Phone, label: 'Phone', value: '+1 022 444 55 55' },
                    { icon: MapPin, label: 'Address', value: '123 Cinnamon Lane, Waterloo, Iowa' },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-background/10 flex items-center justify-center flex-shrink-0">
                        <c.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-background/60">{c.label}</div>
                        <div className="text-lg font-medium">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-background/60 mb-3">Follow</div>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/golam-faruk-2b947519" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 rounded-full bg-background/10 hover:bg-accent hover:text-foreground px-5 h-11 text-sm font-semibold transition-colors">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="https://www.facebook.com/mdgolam.faruk.773" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 rounded-full bg-background/10 hover:bg-accent hover:text-foreground px-5 h-11 text-sm font-semibold transition-colors">
                      <Facebook className="w-4 h-4" /> Facebook
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-background text-foreground rounded-[2rem] p-8 lg:p-10 space-y-4">
                <h3 className="font-display text-2xl font-semibold mb-6">Send a message</h3>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Full name *</label>
                  <Input name="fullName" value={formData.fullName} onChange={handleInputChange} required
                    className="h-12 rounded-2xl border-border bg-mint-soft focus-visible:ring-accent" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Company</label>
                  <Input name="company" value={formData.company} onChange={handleInputChange}
                    className="h-12 rounded-2xl border-border bg-mint-soft focus-visible:ring-accent" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Email *</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required
                      className="h-12 rounded-2xl border-border bg-mint-soft focus-visible:ring-accent" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Phone</label>
                    <Input name="phone" type="tel" value={formData.phone} onChange={handleInputChange}
                      className="h-12 rounded-2xl border-border bg-mint-soft focus-visible:ring-accent" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Message *</label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} required
                    className="rounded-2xl border-border bg-mint-soft focus-visible:ring-accent" />
                </div>
                <Button type="submit" disabled={isSubmitting}
                  className="w-full h-13 rounded-2xl bg-foreground text-background hover:bg-foreground/90 font-semibold text-base py-4">
                  {isSubmitting ? 'Sending…' : (
                    <>Send message <ArrowUpRight className="ml-2 w-4 h-4" /></>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </Reveal>

      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 lg:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display text-xl font-semibold">Golam Faruk</div>
          <div className="text-sm text-muted-foreground">© 2023 Golam Faruk. All rights reserved.</div>
          <div className="text-sm text-muted-foreground">
            Developed by{' '}
            <a href="https://mdhazrat.com" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-accent-foreground hover:underline">
              Hazrat Ali
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

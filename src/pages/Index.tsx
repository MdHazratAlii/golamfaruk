import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader, SheetClose } from "@/components/ui/sheet";
import {
  Settings, Cpu, Layers, Eye, MessageCircle, Printer, Star, Mail, Phone, MapPin,
  Linkedin, Facebook, ArrowUpRight, Menu, X, Play, FileText, Clock, Users, Box,
  Wrench, Database, Target, Package, Cog, GraduationCap, Briefcase, ZoomIn, CheckCircle2
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/Reveal";
import { LordIcon } from "@/components/LordIcon";
import exhaustManifold from "@/assets/exhaust-manifold.jpg";
import cylinderPiston from "@/assets/cylinder-piston.jpg";
import sheetMetalBracket from "@/assets/sheet-metal-bracket.jpg";
import tubesHoses from "@/assets/tubes-hoses.jpg";
import controlPanelBox from "@/assets/control-panel-box.jpg";
import coolingSystem from "@/assets/cooling-system.jpg";
const golamFarukHero = "/golam-faruk.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '', company: '', email: '', phone: '', message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
          isScrolled || isMenuOpen
            ? 'bg-background/70 backdrop-blur-lg border-b border-border shadow-soft'
            : 'bg-transparent border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`flex items-center justify-between transition-all duration-300 ease-out ${isScrolled ? 'h-16' : 'h-20'}`}>
            <div className="font-display text-2xl font-semibold tracking-tight">Golam Faruk</div>

            <div className={`hidden lg:flex items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-300 ease-out ${
              isScrolled ? 'border-border bg-background/60 backdrop-blur' : 'border-foreground/10 bg-background/30 backdrop-blur-sm'
            }`}>
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
              className="btn-shine hidden lg:inline-flex bg-foreground text-background hover:bg-secondary rounded-full h-11 px-6 font-semibold shadow-soft hover:shadow-gold transition-all duration-500"
            >
              Let's talk
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </Button>

            {/* Mobile menu trigger */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-nav-menu"
                  className="lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-foreground hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                >
                  {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                id="mobile-nav-menu"
                className="w-[85vw] sm:w-96 bg-background/95 backdrop-blur-xl border-l border-border p-0 flex flex-col"
              >
                <SheetHeader className="px-6 pt-6 pb-2 text-left">
                  <SheetTitle className="font-display text-xl font-semibold tracking-tight">
                    Navigation
                  </SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground">
                    Jump to a section of the site.
                  </SheetDescription>
                </SheetHeader>

                <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
                  <ul className="space-y-1">
                    {navLinks.map(link => (
                      <li key={link.id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.id)}
                          className="w-full text-left px-4 py-3 min-h-11 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-mint rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t border-border p-6">
                  <SheetClose asChild>
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-foreground text-background hover:bg-secondary rounded-full h-12 font-semibold shadow-soft"
                    >
                      Let's talk
                      <ArrowUpRight className="ml-1 w-4 h-4" aria-hidden="true" />
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative scroll-mt-20 min-h-screen pt-28 lg:pt-24 pb-10 px-6 lg:px-10 flex items-center overflow-hidden"
      >
        {/* Animated soft gradient background */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-70 animate-gradient-pan"
            style={{
              background:
                'linear-gradient(120deg, hsl(var(--mint)) 0%, hsl(var(--background)) 40%, hsl(var(--accent) / 0.35) 100%)',
              backgroundSize: '200% 200%',
            }}
          />
          <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-accent/30 blur-3xl animate-blob-drift" />
          <div className="absolute top-1/3 -right-32 w-[560px] h-[560px] rounded-full bg-mint blur-3xl animate-blob-drift-slow" />
          <div className="absolute -bottom-40 left-1/3 w-[460px] h-[460px] rounded-full bg-secondary/20 blur-3xl animate-blob-drift" style={{ animationDelay: '-8s' }} />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 animate-fade-up">
              <span className="pill">
                <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                Senior Mechanical Design Engineer
              </span>

              <h1 className="font-display font-semibold leading-[0.95] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem]">
                The engineer<br />
                behind precision<br />
                <span className="italic text-gradient-title">machinery.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Over a decade turning engineering concepts into production‑ready designs
                for John Deere, Arctic Cat and Caterpillar — using Creo, SolidWorks, CATIA V5, NX and more.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="btn-shine bg-foreground text-background hover:bg-secondary rounded-full h-11 lg:h-12 px-6 lg:px-7 text-sm font-semibold shadow-elevated hover:shadow-gold transition-all duration-500"
                >
                  View my work
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="rounded-full h-11 lg:h-12 px-6 lg:px-7 text-sm font-semibold border-2 border-foreground/30 bg-transparent hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                >
                  Start a project
                </Button>
              </div>

              <div className="flex items-center gap-5 sm:gap-6 pt-2 text-xs text-muted-foreground">
                <div>
                  <div className="font-display text-xl sm:text-2xl text-foreground">10+</div>
                  <div>Years experience</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <div className="font-display text-xl sm:text-2xl text-foreground">5000+</div>
                  <div>CAD models built</div>
                </div>
                <div className="w-px h-8 bg-border hidden sm:block" />
                <div className="hidden sm:block">
                  <div className="font-display text-xl sm:text-2xl text-foreground">10+</div>
                  <div>Global brands</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative animate-fade-in hidden lg:block">
              <div className="relative aspect-[4/5] max-h-[calc(100vh-6rem)] w-[115%] -ml-[7.5%] mx-auto flex items-end justify-center">
                {/* Soft glow behind the transparent portrait */}
                <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-accent/40 via-mint to-secondary/20 blur-3xl animate-blob-drift-slow" />
                </div>
                <img
                  src={golamFarukHero}
                  alt="Golam Faruk, Mechanical Design Engineer"
                  className="relative w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.25)]"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background rounded-2xl p-4 shadow-elevated border border-border max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">Available</span>
                </div>
                <p className="text-xs text-muted-foreground">Currently open for new engineering collaborations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ABOUT */}
      <section id="about" className="min-h-screen flex items-center py-20 lg:py-24 px-6 lg:px-10">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto w-full">

          <div className="max-w-4xl mb-16">
            <span className="pill mb-6">About me</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
              Experienced Mechanical Design Engineer with <span className="text-gradient-title">proven technical expertise.</span>
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
              { icon: 'https://cdn.lordicon.com/fdxqrdfe.json', num: '10+', label: 'Years of experience', hint: 'In mechanical design engineering' },
              { icon: 'https://cdn.lordicon.com/nocovwne.json', num: '100+', label: 'Projects completed', hint: 'Complex mechanical & engine components' },
              { icon: 'https://cdn.lordicon.com/yxczfiyc.json', num: '10+', label: 'Global collaborations', hint: 'John Deere, Caterpillar & Arctic Cat' },
              { icon: 'https://cdn.lordicon.com/iltqorsz.json', num: '5000+', label: 'CAD models built', hint: 'Detailed parts, prototypes & releases' },
            ].map((s, i) => (
              <Reveal key={i} variant="fade-up" delay={i * 90}>
                <div className="group bg-card border border-border rounded-[1.75rem] p-6 hover-lift hover:border-accent/50 hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="mb-6">
                    <LordIcon src={s.icon} colors="primary:#181e15,secondary:#18f0bf" size={32} mode="once" />
                  </div>
                  <div className="font-display text-5xl font-semibold leading-none mb-2">{s.num}</div>
                  <div className="font-semibold text-foreground">{s.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.hint}</div>
                </div>
              </Reveal>
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
                { icon: 'https://cdn.lordicon.com/jkzgajyr.json', title: 'Design tools', accent: 'bg-accent', skills: ['Creo', 'SolidWorks', 'CATIA V5', 'NX', 'AutoCAD', 'Autodesk Inventor'] },
                { icon: 'https://cdn.lordicon.com/kndkiwmf.json', title: 'Engineering expertise', accent: 'bg-secondary-soft', skills: ['GD&T', 'Tolerance Stack‑Up', 'FEA Review', 'FMEA', 'DFMEA', 'BOM Creation', 'Design Validation'] },
                { icon: 'https://cdn.lordicon.com/axteoudt.json', title: 'Data & systems', accent: 'bg-mint', skills: ['SAP', 'Windchill', 'PDM‑Link', 'Teamcenter', 'Minitab', 'Excel', 'PowerPoint'] },
                { icon: 'https://cdn.lordicon.com/qhviklyi.json', title: 'Professional strengths', accent: 'bg-accent-soft', skills: ['Product Optimization', 'Cross‑Functional Collaboration', 'Root Cause Analysis', 'Prototype Development'] },
              ].map((cat, i) => (
                <Reveal key={i} variant={i % 2 === 0 ? 'slide-left' : 'slide-right'} delay={i * 100}>
                  <div className="group bg-background border border-border rounded-[1.75rem] p-8 hover:shadow-soft hover:-translate-y-1 hover:border-accent/50 transition-all duration-500 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${cat.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <LordIcon src={cat.icon} colors="primary:#181e15,secondary:#18f0bf" size={22} mode="once" />
                      </div>
                      <h4 className="font-display text-2xl font-semibold">{cat.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map(s => (
                        <span key={s} className="px-4 py-2 rounded-full bg-mint-soft border border-border text-sm font-medium hover:bg-accent hover:border-accent transition-colors duration-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>



      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="min-h-screen flex items-center py-20 lg:py-24 px-6 lg:px-10 bg-mint-soft">
        <Reveal variant="slide-left" className="max-w-7xl mx-auto w-full">

          <div className="max-w-3xl mb-16">
            <span className="pill mb-6">My experience</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
              A decade across <span className="text-gradient-title">industry‑leading</span> engineering teams.
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
                <article key={i} className="group bg-card border border-border rounded-[1.75rem] p-8 hover-lift hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
                <article key={i} className="group bg-card border border-border rounded-[1.75rem] p-8 hover-lift hover:border-accent/40 transition-all duration-500">
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
      <section id="services" className="min-h-screen flex items-center py-20 lg:py-24 px-6 lg:px-10">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto w-full">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="pill mb-6">My services</span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
                Engineering, from <span className="text-gradient-title">concept to production.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              Comprehensive design solutions tailored to bring complex machinery concepts to life —
              built with precision, delivered on time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: 'https://cdn.lordicon.com/hwjcdycb.json', title: '3D Machinery Design', desc: 'Complete machinery design from concept to production‑ready models with precision engineering.' },
              { icon: 'https://cdn.lordicon.com/rmkahxvq.json', title: 'CAD Drafting', desc: 'Technical drawings and detailed blueprints for manufacturing and assembly processes.' },
              { icon: 'https://cdn.lordicon.com/msoeawqm.json', title: 'Machinery Visualization', desc: 'Photorealistic renderings and animations to showcase your machinery designs.' },
              { icon: 'https://cdn.lordicon.com/hrjifpbq.json', title: 'Design Consultation', desc: 'Expert advice on design optimization, feasibility studies, and technical solutions.' },
              { icon: 'https://cdn.lordicon.com/qhgmphtg.json', title: '3D Printing Models', desc: 'Prototype development and 3D printing preparation for rapid testing and validation.' },
              { icon: 'https://cdn.lordicon.com/surcxhka.json', title: 'Custom Design Projects', desc: 'Tailored design solutions for unique machinery requirements and specialized applications.' },
            ].map((s, i) => (
              <Reveal key={i} variant="fade-up" delay={i * 80}>
                <div
                  className="group bg-card border border-border rounded-[1.75rem] p-8 hover-lift hover:border-accent/50 hover:bg-secondary hover:text-secondary-foreground transition-all duration-500 relative overflow-hidden h-full"
                >
                  <div className="flex items-center justify-between mb-10 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-mint group-hover:bg-accent group-hover:scale-110 flex items-center justify-center transition-all duration-500">
                      <LordIcon
                        src={s.icon}
                        colors="primary:#181e15,secondary:#18f0bf"
                        size={32}
                        mode="once"
                        speed={1}
                      />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3 relative z-10">{s.title}</h3>
                  <p className="text-foreground/70 group-hover:text-secondary-foreground/80 leading-relaxed relative z-10 transition-colors">{s.desc}</p>
                </div>
              </Reveal>
            ))}

          </div>
        </Reveal>

      </section>

      {/* COMPONENTS EXPERTISE */}
      <section id="projects" className="min-h-screen flex items-center py-20 lg:py-24 px-6 lg:px-10 bg-mint-soft">
        <Reveal variant="slide-left" className="max-w-7xl mx-auto w-full">

          <div className="max-w-3xl mb-16">
            <span className="pill mb-6">Components expertise</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
              Highlighting <span className="text-gradient-title">precision‑driven</span> designs.
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

      {/* PROJECT LIGHTBOX */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-border rounded-[1.75rem]">
          {selectedProject !== null && (() => {
            const p = projects[selectedProject];
            const goPrev = () => setSelectedProject((selectedProject - 1 + projects.length) % projects.length);
            const goNext = () => setSelectedProject((selectedProject + 1) % projects.length);
            return (
              <div className="grid md:grid-cols-2 max-h-[85vh] overflow-y-auto">
                <div className="relative bg-mint md:sticky md:top-0 md:h-full">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover aspect-[4/3] md:aspect-auto md:min-h-[420px]" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous project"
                      className="w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition"
                    >
                      <ArrowUpRight className="w-4 h-4 -rotate-[135deg]" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Next project"
                      className="w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background transition"
                    >
                      <ArrowUpRight className="w-4 h-4 rotate-45" />
                    </button>
                  </div>
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/95 backdrop-blur px-3 py-1.5 text-xs font-semibold">
                    {selectedProject + 1} / {projects.length}
                  </span>
                </div>
                <div className="p-8 lg:p-10 space-y-6">
                  <div>
                    <span className="pill mb-4">{p.application}</span>
                    <DialogTitle className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                      {p.title}
                    </DialogTitle>
                    <DialogDescription className="mt-3 text-foreground/70 leading-relaxed">
                      {p.desc}
                    </DialogDescription>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-mint p-4">
                      <div className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Material</div>
                      <div className="flex items-center gap-2 font-semibold"><Package className="w-4 h-4" /> {p.material}</div>
                    </div>
                    <div className="rounded-2xl bg-accent-soft p-4">
                      <div className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Process</div>
                      <div className="flex items-center gap-2 font-semibold"><Cog className="w-4 h-4" /> {p.process}</div>
                    </div>
                    <div className="rounded-2xl border border-border p-4 col-span-2">
                      <div className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Software & Tools</div>
                      <div className="flex items-center gap-2 font-semibold"><Cpu className="w-4 h-4" /> {p.software}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-3">Highlights</div>
                    <ul className="space-y-2">
                      {p.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-3 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>



      {/* REVIEWS */}
      <section className="min-h-screen flex items-center py-20 lg:py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto w-full">
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
        <div className="max-w-7xl mx-auto w-full">
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
      <section id="contact" className="min-h-screen flex items-center py-20 lg:py-24 px-6 lg:px-10">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto w-full">

          <div className="bg-foreground text-background rounded-[2.5rem] p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <span className="inline-flex items-center rounded-full border border-background/20 bg-background/5 px-4 py-2 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                  Let's connect
                </span>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">
                  Have a project<br />in <span className="text-gradient-gold">mind?</span>
                </h2>
                <p className="text-lg text-background/70 max-w-md">
                  Ready to bring your machinery vision to life? Send me a note — I typically respond within 24 hours.
                </p>

                <div className="space-y-6 pt-6">
                  {[
                    { icon: 'https://cdn.lordicon.com/rjzlnunf.json', label: 'Email', value: 'hello@golamfaruk.com' },
                    { icon: 'https://cdn.lordicon.com/ojnjgkun.json', label: 'Phone', value: '+1 022 444 55 55' },
                    { icon: 'https://cdn.lordicon.com/abfverha.json', label: 'Address', value: '123 Cinnamon Lane, Waterloo, Iowa' },
                  ].map((c, i) => (
                    <Reveal key={i} variant="slide-left" delay={i * 120}>
                      <div className="group flex items-start gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-background/10 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                          <LordIcon src={c.icon} colors="primary:#18f0bf,secondary:#ffffff" size={22} mode="once" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-background/60">{c.label}</div>
                          <div className="text-lg font-medium">{c.value}</div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="pt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-background/60 mb-3">Follow</div>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/golam-faruk-2b947519" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 rounded-full bg-background/10 hover:bg-accent hover:text-foreground hover:-translate-y-0.5 px-5 h-11 text-sm font-semibold transition-all duration-300">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="https://www.facebook.com/mdgolam.faruk.773" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 rounded-full bg-background/10 hover:bg-accent hover:text-foreground hover:-translate-y-0.5 px-5 h-11 text-sm font-semibold transition-all duration-300">
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

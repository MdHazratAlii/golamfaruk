
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Cpu, Layers, Eye, MessageCircle, Printer, Star, Mail, Phone, MapPin, Linkedin, Facebook, ChevronRight, Menu, X, Play, FileText, Building, Calendar, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();
  
  const titles = ["Creative 3D Designer", "Dreamweaver", "3D Sorcerer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(prev => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdkddjdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          'Company': formData.company,
          'Email': formData.email,
          'Phone': formData.phone,
          'Message': formData.message
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeClick = () => {
    window.open('/Resume-GolamFaruk.pdf', '_blank');
  };

  return (
    <div className="font-poppins bg-light-ash text-charcoal overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-pure-white/95 backdrop-blur-lg z-50 border-b border-silver/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-charcoal">Golam Faruk</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-soft-gray hover:text-electric-blue transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-soft-gray hover:text-electric-blue transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-soft-gray hover:text-electric-blue transition-colors">Experience</button>
              <button onClick={() => scrollToSection('services')} className="text-soft-gray hover:text-electric-blue transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-soft-gray hover:text-electric-blue transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-soft-gray hover:text-electric-blue transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-pure-white border-t border-silver/30">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-soft-gray hover:text-electric-blue">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-soft-gray hover:text-electric-blue">About</button>
              <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-soft-gray hover:text-electric-blue">Experience</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-soft-gray hover:text-electric-blue">Services</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-soft-gray hover:text-electric-blue">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-soft-gray hover:text-electric-blue">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-hero-gradient">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-neon-lime/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-electric-blue/20 transform rotate-45 blur-2xl animate-rotate-3d"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Enhanced */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block bg-electric-blue/10 px-4 py-2 rounded-full">
                  <span className="text-electric-blue font-semibold text-sm">SENIOR 3D MACHINERY DESIGNER</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-charcoal">
                  Hi, I'm <br />
                  <span className="bg-gradient-to-r from-electric-blue to-neon-lime bg-clip-text text-transparent">
                    Golam Faruk
                  </span>
                </h1>
              </div>
              
              <div className="h-20 flex items-center">
                <div className="relative">
                  {titles.map((title, index) => (
                    <span 
                      key={index} 
                      className={`absolute text-2xl md:text-3xl font-medium text-soft-gray transition-all duration-1000 ${
                        currentTitle === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                      }`}
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-soft-gray leading-relaxed max-w-lg">
                With over a decade of expertise, I bring your machinery visions to life through precision 3D design and innovative CAD solutions at John Deere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-electric-blue/25 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline" 
                  className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
            
            {/* Hero Image - Enhanced */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-lime/20 rounded-3xl transform rotate-6 scale-105 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-electric-blue/10 to-transparent rounded-3xl transform -rotate-3 scale-110"></div>
                <img 
                  src="https://iili.io/FgzMbHJ.jpg" 
                  alt="Golam Faruk - Senior 3D Machinery Designer" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute -bottom-6 -right-6 bg-pure-white rounded-2xl p-4 shadow-2xl border border-silver/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-lime rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-charcoal">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">About Me</h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              A seasoned 3D designer with 10+ years of experience, currently working at John Deere, 
              specializing in precision machinery design and innovative CAD solutions.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: '10+', label: 'YEARS OF EXPERIENCE', icon: Calendar },
              { number: '5000+', label: 'PROJECTS COMPLETED', icon: CheckCircle },
              { number: '100+', label: 'HAPPY CLIENTS', icon: Award },
              { number: '300+', label: 'PROTOTYPES BUILT', icon: Settings }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <stat.icon className="w-8 h-8 text-electric-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-electric-blue mb-2">{stat.number}</div>
                <div className="text-sm font-semibold text-soft-gray">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Info */}
            <div className="space-y-8 animate-slide-in">
              <Card className="p-8 shadow-xl border-0 bg-card-gradient">
                <h3 className="text-2xl font-bold mb-6 text-charcoal">Quick Profile</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-soft-gray">Age:</div>
                    <div className="font-semibold text-charcoal">52 years</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-electric-blue" />
                    <div className="font-semibold text-charcoal">Waterloo, Iowa, USA</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-electric-blue" />
                    <div className="font-semibold text-charcoal">hello@golamfaruk.com</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-electric-blue" />
                    <div className="font-semibold text-charcoal">+1 022 444 05 05</div>
                  </div>
                </div>
                <Button 
                  onClick={handleResumeClick}
                  className="w-full mt-6 bg-electric-blue hover:bg-electric-blue/90 text-white py-3 font-semibold rounded-xl transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  See My Resume
                </Button>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-8 animate-slide-in-right">
              <h3 className="text-3xl font-bold mb-8 text-charcoal">Explore My Skillset</h3>
              
              {[
                { name: 'AutoCAD', level: 95, description: 'Precision technical drawings and 2D/3D modeling' },
                { name: 'SketchUp', level: 90, description: '3D modeling and architectural visualization' },
                { name: 'Solid Edge', level: 85, description: 'Advanced CAD design and simulation' },
                { name: 'Draft', level: 90, description: 'Technical documentation and blueprints' }
              ].map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg text-charcoal">{skill.name}</h4>
                    <span className="text-electric-blue font-bold text-lg">{skill.level}%</span>
                  </div>
                  <p className="text-sm text-soft-gray mb-3">{skill.description}</p>
                  <div className="w-full bg-light-ash rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-electric-blue to-neon-lime h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - New */}
      <section id="experience" className="py-20 bg-light-ash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">My Experience</h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              A journey through industry-leading companies and cutting-edge projects
            </p>
          </div>

          {/* Work History */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-charcoal flex items-center">
              <Settings className="w-8 h-8 text-electric-blue mr-3" />
              Work History
            </h3>
            
            <div className="space-y-8">
              {[
                {
                  period: '2019 – Present',
                  title: 'Design Engineer – John Deere',
                  description: 'Contributing to innovative 3D designs across a range of machinery.',
                  logo: 'https://i0.wp.com/golamfaruk.com/wp-content/uploads/2023/09/deere-logo-agriculture.png'
                },
                {
                  period: '2018 – 2019',
                  title: 'Design Engineer – Komatsu America Corp.',
                  description: 'Helped shape design strategies and machinery innovations.',
                  logo: 'https://i0.wp.com/golamfaruk.com/wp-content/uploads/2023/10/Komatsu-America-Corp.png'
                },
                {
                  period: '2012 – 2013',
                  title: 'Project Engineer – Caterpillar Inc.',
                  description: 'Led engineering projects, driving technological advancements.',
                  logo: 'https://i0.wp.com/golamfaruk.com/wp-content/uploads/2023/10/Caterpillar-Inc.png'
                },
                {
                  period: '2008 – 2012',
                  title: 'Design Engineer – Caterpillar Inc.',
                  description: 'Developed robust machinery design solutions.',
                  logo: 'https://i0.wp.com/golamfaruk.com/wp-content/uploads/2023/10/Caterpillar-Inc.png'
                }
              ].map((job, index) => (
                <Card key={index} className="p-6 bg-pure-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <img src={job.logo} alt="Company Logo" className="w-20 h-20 object-contain" />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold text-charcoal">{job.title}</h4>
                        <Badge className="bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 w-fit">
                          {job.period}
                        </Badge>
                      </div>
                      <p className="text-soft-gray">{job.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-charcoal flex items-center">
              <GraduationCap className="w-8 h-8 text-electric-blue mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  period: '2006 – 2009',
                  degree: 'MASc in Mechanical Engineering – University of Windsor',
                  logo: 'https://iili.io/FgugwG9.png'
                },
                {
                  period: '2003 – 2006',
                  degree: 'BASc in Mechanical Engineering – University of Windsor',
                  logo: 'https://iili.io/FgugwG9.png'
                }
              ].map((edu, index) => (
                <Card key={index} className="p-6 bg-pure-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-right" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <img src={edu.logo} alt="University Logo" className="w-16 h-16 object-contain" />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h4 className="text-lg font-bold text-charcoal">{edu.degree}</h4>
                        <Badge className="bg-neon-lime/10 text-charcoal hover:bg-neon-lime/20 w-fit">
                          {edu.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">My Services</h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              Comprehensive 3D design solutions tailored to bring your machinery concepts to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "3D Machinery Design",
                description: "Complete machinery design from concept to production-ready models with precision engineering."
              },
              {
                icon: Layers,
                title: "CAD Drafting",
                description: "Technical drawings and detailed blueprints for manufacturing and assembly processes."
              },
              {
                icon: Eye,
                title: "Machinery Visualization",
                description: "Photorealistic renderings and animations to showcase your machinery designs."
              },
              {
                icon: MessageCircle,
                title: "Design Consultation",
                description: "Expert advice on design optimization, feasibility studies, and technical solutions."
              },
              {
                icon: Printer,
                title: "3D Printing Models",
                description: "Prototype development and 3D printing preparation for rapid testing and validation."
              },
              {
                icon: Cpu,
                title: "Custom Design Projects",
                description: "Tailored design solutions for unique machinery requirements and specialized applications."
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-card-gradient hover:bg-pure-white animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-lime rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-charcoal">{service.title}</h3>
                  <p className="text-soft-gray mb-6 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-light-ash">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Recent Projects</h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              A showcase of innovative machinery designs and successful project implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Autonomous Harvester Design",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
                category: "Agriculture",
                description: "Next-generation automated harvesting system with AI-powered navigation and crop recognition."
              },
              {
                title: "Hydraulic Excavator Redesign",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
                category: "Construction",
                description: "Enhanced hydraulic system design for improved efficiency and reduced environmental impact."
              },
              {
                title: "Smart Tractor Cockpit Interface",
                image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop",
                category: "Agriculture",
                description: "Ergonomic cockpit design with integrated digital displays and intuitive control systems."
              },
              {
                title: "Electric Mini Loader Concept",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
                category: "Industrial",
                description: "Compact electric loader design optimized for urban construction and material handling."
              },
              {
                title: "Forklift Visualization & Animation",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
                category: "Logistics",
                description: "Comprehensive 3D visualization and operational animation for warehouse equipment."
              },
              {
                title: "Heavy Duty Crane 3D Printing Prototype",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
                category: "Construction",
                description: "Detailed prototype modeling for large-scale crane components and assembly validation."
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-pure-white animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-electric-blue hover:bg-electric-blue/90 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors text-charcoal">
                    {project.title}
                  </h3>
                  <p className="text-soft-gray leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Redesigned with 3 Reviews */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">Client Reviews</h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              Hear what industry professionals say about working with me
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "Design Manager at ABC Manufacturing",
                image: "https://images.unsplash.com/photo-1494790108755-2616b169a2a9?w=150&h=150&fit=crop&crop=face",
                review: "Golam's innovative 3D modeling has significantly enhanced our product development process. His attention to detail and technical expertise is unmatched.",
                rating: 5,
                videoUrl: "#"
              },
              {
                name: "Michael Chen",
                position: "Project Director at TechCorp Industries",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                review: "Working with Golam was a game-changer for our machinery designs. His precision and creativity delivered beyond our expectations.",
                rating: 5,
                videoUrl: "#"
              },
              {
                name: "Emily Rodriguez",
                position: "Engineering Lead at Future Dynamics",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                review: "Golam's expertise in 3D design and his collaborative approach made our complex project a success. Highly recommend his services.",
                rating: 5,
                videoUrl: "#"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card-gradient border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-electric-blue/20"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-soft-gray leading-relaxed mb-6 italic">
                    "{testimonial.review}"
                  </blockquote>
                  <div className="font-bold text-lg text-charcoal">{testimonial.name}</div>
                  <div className="text-electric-blue font-medium text-sm">{testimonial.position}</div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                  onClick={() => window.open(testimonial.videoUrl, '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Video Review
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders Section - Updated */}
      <section className="py-16 bg-light-ash">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
            <img 
              src="https://i0.wp.com/golamfaruk.com/wp-content/uploads/2023/09/deere-logo-agriculture.png" 
              alt="John Deere" 
              className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img 
              src="https://i0.wp.com/golamfaruk.com/wp-content/uploads/2023/10/Komatsu-America-Corp.png" 
              alt="Komatsu America Corp" 
              className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img 
              src="https://i0.wp.com/golamfaruk.com/wp-content/uploads/2023/10/Caterpillar-Inc.png" 
              alt="Caterpillar Inc" 
              className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced with Formspree */}
      <section id="contact" className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your machinery vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-gray-700 animate-slide-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name *" 
                    required
                    className="bg-white/5 border-gray-600 text-white placeholder-gray-300" 
                  />
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company" 
                    className="bg-white/5 border-gray-600 text-white placeholder-gray-300" 
                  />
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    placeholder="Email Address *" 
                    required
                    className="bg-white/5 border-gray-600 text-white placeholder-gray-300" 
                  />
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-white/5 border-gray-600 text-white placeholder-gray-300" 
                  />
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..." 
                    rows={6} 
                    required
                    className="bg-white/5 border-gray-600 text-white placeholder-gray-300" 
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white py-6 text-lg font-semibold transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-electric-blue mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-gray-300">hello@golamfaruk.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-electric-blue mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Phone</div>
                    <div className="text-gray-300">+1 022 444 55 55</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-electric-blue mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Address</div>
                    <div className="text-gray-300">123 Cinnamon Lane<br />Waterloo, Iowa</div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-electric-blue hover:border-electric-blue hover:text-white transition-all duration-300"
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                    onClick={() => window.open('https://facebook.com', '_blank')}
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2023 Golam Faruk. All rights reserved.
            </div>
            <div className="text-gray-400">
              Developed by{' '}
              <a 
                href="https://mdhazrat.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-electric-blue hover:text-neon-lime font-semibold transition-colors duration-300"
              >
                Hazrat Ali
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

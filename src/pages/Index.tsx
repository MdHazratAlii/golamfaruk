import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Settings, Cpu, Layers, Eye, MessageCircle, Printer, Star, Mail, Phone, MapPin, Linkedin, Facebook, ChevronRight, Menu, X, Play, FileText, Building, Calendar, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

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
    <div className="font-poppins bg-[#f9fafb] text-[#111827] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white backdrop-blur-lg z-50 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-[#111827]">Golam Faruk</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[#4b5563] hover:text-[#2563eb] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-[#4b5563] hover:text-[#2563eb] transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-[#4b5563] hover:text-[#2563eb] transition-colors">Experience</button>
              <button onClick={() => scrollToSection('services')} className="text-[#4b5563] hover:text-[#2563eb] transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-[#4b5563] hover:text-[#2563eb] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-[#4b5563] hover:text-[#2563eb] transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#e5e7eb]">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-[#4b5563] hover:text-[#2563eb]">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-[#4b5563] hover:text-[#2563eb]">About</button>
              <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-[#4b5563] hover:text-[#2563eb]">Experience</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-[#4b5563] hover:text-[#2563eb]">Services</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-[#4b5563] hover:text-[#2563eb]">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-[#4b5563] hover:text-[#2563eb]">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - 100vh */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-[#eff6ff] px-6 py-3 rounded-full">
                  <span className="text-[#2563eb] font-semibold text-sm">SENIOR 3D MACHINERY DESIGNER</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#111827]">
                  Hi, I'm <br />
                  <span className="text-[#2563eb]">Golam Faruk</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-[#4b5563]">
                  Creative 3D Designer & Dreamweaver
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-[#4b5563] leading-relaxed max-w-lg">
                With over a decade of expertise, I bring your machinery visions to life through precision 3D design and innovative CAD solutions at John Deere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
                >
                  View My Work
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline" 
                  className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="/golam-faruk.png" 
                  alt="Golam Faruk - Senior 3D Machinery Designer" 
                  className="relative z-10 w-full h-auto rounded-2xl object-cover"/>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#e5e7eb]">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#111827]">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - 100vh */}
      <section id="about" className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">About Me</h2>
            <p className="text-xl text-[#4b5563] max-w-3xl mx-auto">
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
              <Card key={index} className="text-center p-6 bg-white border border-[#e5e7eb] shadow-lg hover:shadow-xl transition-all duration-300">
                <stat.icon className="w-8 h-8 text-[#2563eb] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#2563eb] mb-2">{stat.number}</div>
                <div className="text-sm font-semibold text-[#4b5563]">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Info */}
            <div className="space-y-8">
              <Card className="p-8 shadow-lg border border-[#e5e7eb] bg-white">
                <h3 className="text-2xl font-bold mb-6 text-[#111827]">Quick Profile</h3>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-[#4b5563]">Age:</div>
                      <div className="font-semibold text-[#111827]">52 years</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#2563eb]" />
                      <div className="font-semibold text-[#111827]">Waterloo, Iowa, USA</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#2563eb]" />
                      <div className="font-semibold text-[#111827]">hello@golamfaruk.com</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#2563eb]" />
                      <div className="font-semibold text-[#111827]">+1 022 444 05 05</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#e5e7eb]">
                    <p className="text-[#4b5563] leading-relaxed mb-4">
                      Passionate about transforming complex engineering concepts into innovative 3D designs. 
                      Specialized in creating precision machinery models that bridge the gap between concept and reality.
                    </p>
                    <p className="text-[#4b5563] leading-relaxed mb-4">
                      My expertise spans across AutoCAD, SketchUp, Solid Edge, and technical drafting, enabling me to deliver comprehensive design solutions from initial concept through to production-ready models.
                    </p>
                    <p className="text-[#4b5563] leading-relaxed">
                      With a Master's degree in Mechanical Engineering from the University of Windsor and extensive experience at industry leaders like John Deere, Komatsu America Corp., and Caterpillar Inc., I bring both academic rigor and practical expertise to every project.
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={handleResumeClick}
                  className="w-full mt-6 bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 font-semibold rounded-lg transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  See My Resume
                </Button>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8 text-[#111827]">Explore My Skillset</h3>
              
              {[
                { name: 'AutoCAD', level: 95, description: 'Precision technical drawings and 2D/3D modeling for complex machinery designs with industry-standard accuracy and professional documentation.' },
                { name: 'SketchUp', level: 90, description: '3D modeling and architectural visualization with advanced rendering capabilities for conceptual design and client presentations.' },
                { name: 'Solid Edge', level: 85, description: 'Advanced CAD design and simulation for engineering solutions, parametric modeling, and assembly management for complex projects.' },
                { name: 'Draft', level: 90, description: 'Technical documentation and blueprints with industry-standard precision, including detailed assembly instructions and manufacturing specifications.' }
              ].map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg text-[#111827]">{skill.name}</h4>
                    <span className="text-[#2563eb] font-bold text-lg">{skill.level}%</span>
                  </div>
                  <p className="text-sm text-[#4b5563] mb-3">{skill.description}</p>
                  <div className="w-full bg-[#e5e7eb] rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-[#2563eb] h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - 100vh */}
      <section id="experience" className="min-h-screen flex items-center bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">My Experience</h2>
            <p className="text-xl text-[#4b5563] max-w-3xl mx-auto">
              A journey through industry-leading companies and cutting-edge projects
            </p>
          </div>

          {/* Work History */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-[#111827] flex items-center">
              <Settings className="w-8 h-8 text-[#2563eb] mr-3" />
              Work History
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  period: '2019 – Present',
                  title: 'Design Engineer – John Deere',
                  description: 'Contributing to innovative 3D designs across a range of machinery.',
                  logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025406/rsz_john-deere-logo_1_hq5svg.png'
                },
                {
                  period: '2018 – 2019',
                  title: 'Design Engineer – Komatsu America Corp.',
                  description: 'Helped shape design strategies and machinery innovations.',
                  logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_komatsu-logo_1_i6redl.png'
                },
                {
                  period: '2012 – 2013',
                  title: 'Project Engineer – Caterpillar Inc.',
                  description: 'Led engineering projects, driving technological advancements.',
                  logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_caterpillar-logo_1_xhw8fl.png'
                },
                {
                  period: '2008 – 2012',
                  title: 'Design Engineer – Caterpillar Inc.',
                  description: 'Developed robust machinery design solutions.',
                  logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_caterpillar-logo_1_xhw8fl.png'
                }
              ].map((job, index) => (
                <Card key={index} className="p-6 bg-white border border-[#e5e7eb] shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img src={job.logo} alt="Company Logo" className="w-40 h-20 object-contain" />
                      <Badge className="bg-[#eff6ff] text-[#2563eb] hover:bg-[#dbeafe]">
                        {job.period}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#111827] mb-2">{job.title}</h4>
                      <p className="text-[#4b5563]">{job.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#111827] flex items-center">
              <GraduationCap className="w-8 h-8 text-[#2563eb] mr-3" />
              Education
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  period: '2006 – 2009',
                  degree: 'MASc in Mechanical Engineering – University of Windsor',
                  logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_university-of-windsor-logo_1_xxdeqt.png'
                },
                {
                  period: '2003 – 2006',
                  degree: 'BASc in Mechanical Engineering – University of Windsor',
                  logo: 'https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_university-of-windsor-logo_1_xxdeqt.png'
                }
              ].map((edu, index) => (
                <Card key={index} className="p-6 bg-white border border-[#e5e7eb] shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img src={edu.logo} alt="University Logo" className="w-40 h-20 object-contain" />
                      <Badge className="bg-green-100 text-[#111827] hover:bg-green-200">
                        {edu.period}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-bold text-[#111827]">{edu.degree}</h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">My Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white shadow-lg animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden bg-white shadow-lg animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Client Reviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what industry professionals say about working with me
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                  name: "David McAllister",
                  position: "Senior Product Manager, John Deere",
                  image: "https://iili.io/FgRZ8ut.jpg", // Placeholder image, replace with real client photo if available
                  review: "Working with Golam has been a game-changer for our engineering team. His precision in 3D modeling and deep understanding of machinery functionality helped us accelerate our product development pipeline significantly.",
                  rating: 5,
                  videoThumbnail: "https://iili.io/FgRZ8ut.jpg", // optional
                  videoUrl: "https://youtu.be/dQw4w9WgXcQ"
                },
                {
                  name: "Linda Carver",
                  position: "R&D Lead Engineer, Komatsu America",
                  image: "https://iili.io/FgRmNWX.webp",
                  review: "Golam's design consultation brought fresh insights to our electric loader project. From initial sketches to final CAD drafts, every step reflected his passion and technical mastery.",
                  rating: 5,
                  videoThumbnail: "https://iili.io/FgRmNWX.webp",
                  videoUrl: "https://youtu.be/dQw4w9WgXcQ"
                },
                {
                  name: "Carlos Mendes",
                  position: "Operations Director, BuildTech Machinery",
                  image: "https://iili.io/Fg595Ol.jpg",
                  review: "What sets Golam apart is his ability to turn complex machinery concepts into accurate and functional 3D models. His custom design solutions have made a real impact on our prototyping speed and investor demos.",
                  rating: 5,
                  videoThumbnail: "https://iili.io/Fg595Ol.jpg",
                  videoUrl: "https://youtu.be/dQw4w9WgXcQ"
                }

            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 font-medium text-sm">{testimonial.position}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </blockquote>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative cursor-pointer group">
                      <img 
                        src={testimonial.videoThumbnail} 
                        alt="Video thumbnail" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                        <div className="bg-blue-600 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <iframe
                      width="100%"
                      height="400"
                      src={testimonial.videoUrl.replace('youtu.be/', 'youtube.com/embed/')}
                      title={`${testimonial.name} Review`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </DialogContent>
                </Dialog>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders Section */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img 
              src="https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025406/rsz_john-deere-logo_1_hq5svg.png" 
              alt="John Deere" 
              className="h-12 hover:scale-110 transition-all duration-300"
            />
            <img 
              src="https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_komatsu-logo_1_i6redl.png" 
              alt="Komatsu America Corp" 
              className="h-12 hover:scale-110 transition-all duration-300"
            />
            <img 
              src="https://res.cloudinary.com/dvo0eiqb1/image/upload/v1754025405/rsz_caterpillar-logo_1_xhw8fl.png" 
              alt="Caterpillar Inc" 
              className="h-12 hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Contact Section - 100vh */}
      <section id="contact" className="min-h-screen flex items-center bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your machinery vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-[#E8EAF6] border border-gray-200 rounded-xl shadow-lg animate-slide-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name *" 
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500" 
                  />
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company" 
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500" 
                  />
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    placeholder="Email Address *" 
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500" 
                  />
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500" 
                  />
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..." 
                    rows={6} 
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500" 
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">Email</div>
                    <div className="text-gray-300 text-lg mb-2">hello@golamfaruk.com</div>
                    <div className="text-sm text-gray-400">Professional inquiries and project discussions. I typically respond within 24 hours.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">Phone</div>
                    <div className="text-gray-300 text-lg mb-2">+1 022 444 55 55</div>
                    <div className="text-sm text-gray-400">Available Mon-Fri, 9AM-6PM CST. For urgent project consultations and direct communication.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">Address</div>
                    <div className="text-gray-300 text-lg mb-2">123 Cinnamon Lane<br />Waterloo, Iowa</div>
                    <div className="text-sm text-gray-400">Open to remote collaboration worldwide. Local meetings available for major projects.</div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button 
                    className="bg-[#0077B5] hover:bg-[#005885] text-white transition-all duration-300"
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    className="bg-[#1877F2] hover:bg-[#166FE5] text-white transition-all duration-300"
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
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
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


import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Cpu, 
  Layers, 
  Eye, 
  MessageCircle, 
  Printer,
  Star,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = [
    "Creative 3D Designer",
    "Dreamweaver",
    "3D Sorcerer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-poppins bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Golam Faruk</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-emerald-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Services</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <br />
                <span className="text-emerald-600">Golam Faruk</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <span className="text-xl md:text-2xl text-gray-600 font-medium">
                  {titles.map((title, index) => (
                    <span
                      key={index}
                      className={`absolute transition-opacity duration-1000 ${
                        currentTitle === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {title}
                    </span>
                  ))}
                </span>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                With over a decade of expertise, I bring your machinery visions to life through precision 3D design and innovative CAD solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
                <img
                  src="https://iili.io/FgzMbHJ.jpg"
                  alt="Golam Faruk - 3D Machinery Designer"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seasoned 3D designer with 10+ years of experience, currently working at John Deere, 
              specializing in precision machinery design and innovative CAD solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">5000+</div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-700 font-medium">Happy Clients</div>
                </div>
              </div>

              {/* Profile Info */}
              <Card className="p-6 shadow-lg border-0 bg-gray-50">
                <h3 className="text-2xl font-bold mb-4">Quick Profile</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-600">Age:</div>
                    <div className="font-semibold">52 years</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <div className="font-semibold">Waterloo, Iowa, USA</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div className="font-semibold">hello@golamfaruk.com</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <div className="font-semibold">+1 022 444 05 05</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-8">Explore My Skillset</h3>
              
              {[
                { name: 'AutoCAD', level: 95, description: 'Precision technical drawings and 2D/3D modeling' },
                { name: 'SketchUp', level: 90, description: '3D modeling and architectural visualization' },
                { name: 'Solid Edge', level: 85, description: 'Advanced CAD design and simulation' },
                { name: 'Draft', level: 90, description: 'Technical documentation and blueprints' }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                    <span className="text-emerald-600 font-bold">{skill.level}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{skill.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Services</h2>
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white group-hover:bg-emerald-700">
                    Start Project
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Projects</h2>
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed">
              "Golam's innovative 3D modeling has significantly enhanced our product development process. 
              His attention to detail and technical expertise is unmatched."
            </blockquote>
            <div className="pt-8">
              <div className="font-bold text-xl text-gray-900">Sarah Johnson</div>
              <div className="text-emerald-600 font-medium">Design Manager at ABC Manufacturing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-600">John Deere</div>
            <div className="text-2xl font-bold text-gray-600">Komatsu</div>
            <div className="text-2xl font-bold text-gray-600">Caterpillar</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your machinery vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/5 border-gray-600 text-white placeholder-gray-300"
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/5 border-gray-600 text-white placeholder-gray-300"
                  />
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-white/5 border-gray-600 text-white placeholder-gray-300"
                  />
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-500 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-gray-300">hello@golamfaruk.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-emerald-500 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Phone</div>
                    <div className="text-gray-300">+1 022 444 55 55</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-500 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Address</div>
                    <div className="text-gray-300">123 Cinnamon Lane<br />Waterloo, Iowa</div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-emerald-600 hover:border-emerald-600">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600">
                    <Facebook className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2023 Golam Faruk. All rights reserved.
            </div>
            <div className="text-gray-400">
              Developed by <span className="text-emerald-500 font-semibold">Hazrat Ali</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

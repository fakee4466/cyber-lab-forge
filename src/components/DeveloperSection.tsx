import { Github, Linkedin, Instagram, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const developers = [
  {
    name: "Sanskruti Mhatre",
    role: "Docker Image Architect & App Developer",
    portfolio: "https://sanskrutimhatre.tech",
    github: "https://github.com/SanskrutiMhatre",
    linkedin: "https://linkedin.com/in/SanskrutiMhatre",
    instagram: "https://www.instagram.com/sanskrutimhatre_",
    email: "mhatresanskruti42@gmail.com"
  },
  {
    name: "Ammar Nagarji",
    role: "Docker Image Architect & App Developer",
    portfolio: "https://www.nagarji.in/",
    github: "https://github.com/ammar2123",
    linkedin: "https://linkedin.com/in/ammar-nagarji",
    instagram: "https://instagram.com/ammarnagarji_",
    email: "ammar@nagarji.in"
  }
];

const DeveloperSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
          Developer <span className="text-primary">Credits</span>
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-16 animate-fade-in delay-200">
          "Both developers contributed equally to the containers and the application."
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {developers.map((dev, index) => (
            <div 
              key={index}
              className="bg-card border border-glow/20 rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Developer Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {dev.name}
                </h3>
                <p className="text-primary text-lg font-semibold">
                  {dev.role}
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-glow/40 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.open(dev.portfolio, '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Portfolio
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-glow/40 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.open(dev.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-glow/40 hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
                  onClick={() => window.open(dev.linkedin, '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-glow/40 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  onClick={() => window.open(dev.instagram, '_blank')}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-glow/40 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.open(`mailto:${dev.email}`, '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
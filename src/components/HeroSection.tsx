import { Button } from "@/components/ui/button";
import { Download, Container } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 particles opacity-20" />
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Animated Docker Container SVG */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Container className="w-24 h-24 text-primary animate-spin-slow" />
            <Container className="w-16 h-16 text-secondary animate-spin-slow absolute top-4 left-4 opacity-60" />
            <Container className="w-12 h-12 text-accent animate-spin-slow absolute top-6 left-6 opacity-40" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-primary neon-flicker">Docker</span>
          <span className="text-foreground">Labs</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-secondary mb-4 animate-fade-in delay-200">
          "Next-Gen Labs. Powered by Docker."
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in delay-300">
          "Your Labs. Modular. Scalable. Smart."
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up delay-500">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-glow hover:shadow-glow-intense transition-all duration-300 neon-flicker group"
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download Desktop App (.deb)
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-glow rounded-lg opacity-20 float-animation" />
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-secondary rounded-lg opacity-20 float-animation delay-100" />
        <div className="absolute top-1/4 right-10 w-12 h-12 border border-accent rounded-lg opacity-20 float-animation delay-200" />
      </div>
    </section>
  );
};

export default HeroSection;
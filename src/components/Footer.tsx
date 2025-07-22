import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-subtle border-t border-glow/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span className="text-muted-foreground">DockerLabs © 2025</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span className="text-muted-foreground">Built with</span>
            <Heart className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-muted-foreground">by</span>
            <span className="text-primary font-semibold">Sanskruti Mhatre</span>
            <span className="text-muted-foreground">&</span>
            <span className="text-secondary font-semibold">Ammar Nagarji</span>
          </div>
          
          <div className="text-muted-foreground">
            Developed at <span className="text-accent font-semibold">A.P. Shah Institute of Technology</span>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-8 pt-6">
            <div className="w-2 h-2 rounded-full bg-primary shadow-glow animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-secondary shadow-glow animate-pulse delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-accent shadow-glow animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
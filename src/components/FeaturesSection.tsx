import { 
  Package, 
  Settings, 
  Monitor, 
  Brain, 
  Shield, 
  BookOpen 
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Pre-configured Docker containers",
    description: "Ready-to-use environments with all dependencies pre-installed",
    delay: "0"
  },
  {
    icon: Settings,
    title: "One-click .deb desktop app",
    description: "Built with Electron.js for seamless user experience",
    delay: "100"
  },
  {
    icon: Monitor,
    title: "Cross-platform support",
    description: "Works on Linux and Windows systems",
    delay: "200"
  },
  {
    icon: Brain,
    title: "Curriculum-aligned container mapping",
    description: "Containers designed to match academic requirements",
    delay: "300"
  },
  {
    icon: Shield,
    title: "Secure & isolated execution",
    description: "Each lab runs in its own secure container environment",
    delay: "400"
  },
  {
    icon: BookOpen,
    title: "Auto-updated documentation",
    description: "Built-in documentation interface with real-time updates",
    delay: "500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Key <span className="text-primary">Features</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-glow/20 rounded-2xl p-6 shadow-glow hover:shadow-glow-intense transition-all duration-300 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300 mr-4" />
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed group-hover:text-card-foreground transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
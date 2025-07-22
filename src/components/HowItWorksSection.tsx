import { Download, Play, Folder, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download the .deb app",
    description: "Get our lightweight desktop application",
    color: "text-primary"
  },
  {
    icon: Play,
    title: "Install & launch the desktop GUI",
    description: "Simple installation process with intuitive interface",
    color: "text-secondary"
  },
  {
    icon: Folder,
    title: "Select your lab",
    description: "Choose from Security, DevOps, Blockchain, Python, and more",
    color: "text-accent"
  },
  {
    icon: Rocket,
    title: "Click 'Start' – container runs in seconds",
    description: "Instant lab environment, no waiting time",
    color: "text-primary"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          How It <span className="text-primary">Works</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 shadow-glow"></div>
              
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-card border border-glow/20 rounded-2xl p-6 shadow-glow hover:shadow-glow-intense transition-all duration-300">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-16 h-16 bg-card border-2 border-glow rounded-full flex items-center justify-center shadow-glow-intense">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-card border border-glow/20 rounded-2xl p-6 shadow-glow hover:shadow-glow-intense transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full border-2 border-glow flex items-center justify-center mr-4`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="text-sm font-bold text-primary">
                    Step {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
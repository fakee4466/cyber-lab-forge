import { Target, Zap } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-card border border-glow/20 rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 animate-fade-in">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-primary">Vision</h2>
            </div>
            <p className="text-lg text-card-foreground leading-relaxed">
              Revolutionize the academic lab experience by providing consistent, scalable, 
              and easily accessible software environments through containerization.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-card border border-glow/20 rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 animate-fade-in delay-200">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-secondary mr-4" />
              <h2 className="text-3xl font-bold text-secondary">Mission</h2>
            </div>
            <ul className="space-y-4 text-lg text-card-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-4 mt-3 shadow-glow"></div>
                Deliver zero-setup lab environments via Docker
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-4 mt-3 shadow-glow"></div>
                Minimize setup complexity and compatibility issues
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-4 mt-3 shadow-glow"></div>
                Empower educators and students with instant access to modern labs
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-4 mt-3 shadow-glow"></div>
                Promote open-source, scalable solutions for education
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
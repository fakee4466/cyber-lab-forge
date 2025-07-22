import { Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Rocket className="w-16 h-16 text-primary animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
            About <span className="text-primary">DockerLabs</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in delay-200">
            DockerLabs brings academic labs into the future. Traditional software installations 
            are inconsistent, time-consuming, and error-prone.
          </p>
          
          <div className="bg-card border border-glow/20 rounded-2xl p-8 shadow-glow mb-8 animate-slide-up delay-300">
            <p className="text-lg text-card-foreground mb-6 leading-relaxed">
              Instead, DockerLabs provides:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-primary shadow-glow"></div>
                <span className="text-card-foreground">Pre-configured container environments</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-secondary shadow-glow"></div>
                <span className="text-card-foreground">Easy access via a desktop GUI launcher (.deb)</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-primary shadow-glow"></div>
                <span className="text-card-foreground">Ready-to-run labs in Networking, Security, Blockchain</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-secondary shadow-glow"></div>
                <span className="text-card-foreground">Python, DevOps, and more</span>
              </div>
            </div>
          </div>
          
          <div className="text-2xl font-bold text-center animate-fade-in delay-500">
            <span className="text-muted-foreground">No more manual setups. Just </span>
            <span className="text-primary neon-flicker">Download</span>
            <span className="text-muted-foreground">. </span>
            <span className="text-secondary neon-flicker">Launch</span>
            <span className="text-muted-foreground">. </span>
            <span className="text-accent neon-flicker">Learn</span>
            <span className="text-muted-foreground">.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Github, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">15 let • Programátor</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Šimon</span>{" "}
            <span className="text-gradient">Plojhar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono animate-fade-in" style={{ animationDelay: "0.2s" }}>
            @plojharsim
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Mladý vývojář s vášní pro vytváření moderních webových aplikací a učení se novým technologiím.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="glow" size="lg" asChild>
              <a href="#projekty">
                Moje projekty
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#kontakt">
                <Mail className="mr-2 h-5 w-5" />
                Kontaktuj mě
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://github.com/plojharsim"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-10 animate-bounce">
            <a href="#o-mne" className="inline-flex text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

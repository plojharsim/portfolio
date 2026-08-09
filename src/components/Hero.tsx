import { Mail, ArrowDown, Youtube, Github, Bot, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 md:py-0">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10 px-4 pt-12 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 md:mb-8 animate-fade-in">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">Digitální řešení & Automatizace</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Pomáhám lidem a malým firmám <br className="hidden sm:inline" />
            <span className="text-gradient">řešit digitální problémy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-muted-foreground mb-2 md:mb-4 font-mono animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Šimon Plojhar • @plojharsim
          </p>

          {/* Description */}
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Tvořím moderní weby, automatizuji rutinní úkoly, propojuji AI nástroje a vyvíjím řešení na míru, která vám ušetří čas a posunou vaše podnikání dopředu.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground font-mono animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <span className="flex items-center gap-1 bg-card/60 px-3 py-1.5 rounded-md border border-border">
              <Globe className="h-4 w-4 text-primary" /> Weby na míru
            </span>
            <span className="flex items-center gap-1 bg-card/60 px-3 py-1.5 rounded-md border border-border">
              <Zap className="h-4 w-4 text-primary" /> Automatizace
            </span>
            <span className="flex items-center gap-1 bg-card/60 px-3 py-1.5 rounded-md border border-border">
              <Bot className="h-4 w-4 text-primary" /> AI & Nástroje
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="glow" size="lg" asChild>
              <a href="#kontakt">
                Chci řešení na míru
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projekty">
                Ukázky práce
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-6 md:mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://github.com/plojharsim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profil"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://youtube.com/@plojharsim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Kanál"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Youtube className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://discord.com/invite/EpESXnmW8Y"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord Komunita"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#o-mne" 
        className="absolute bottom-2 md:bottom-8 left-0 right-0 flex justify-center animate-bounce z-10 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
</dyad-file>

<dyad-write path="src/components/About.tsx" description="Přetvoření sekce 'O mně' na přehled služeb a řešení na míru.">
import { Globe, Zap, Bot, Cpu } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Globe,
      title: "Weby & Prezentace",
      description: "Moderní, rychlé a responzivní webové stránky pro malé firmy, živnostníky i osobní projekty.",
    },
    {
      icon: Zap,
      title: "Automatizace procesů",
      description: "Ušetřete čas automatizací opakovaných činností, propojením služeb a zefektivněním práce.",
    },
    {
      icon: Bot,
      title: "AI & Nástroje na míru",
      description: "Zapojení umělé inteligence do vašeho workflow, vývoj vlastních aplikací a skriptů na míru.",
    },
  ];

  return (
    <section id="o-mne" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// SLUŽBY & ŘEŠENÍ</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              S čím vám mohu <span className="text-gradient">pomoci?</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ať už potřebujete nový web, chcete zautomatizovat nepřehledné procesy nebo využít AI ve vaší praxi, pomohu vám najít to nejlepší řešení.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 card-shadow flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Code snippet / Summary box */}
          <div className="mt-16 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-muted-foreground">reseni.ts</span>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const mojeSluzby = {
  weby: ["Prezentační weby", "Webové aplikace", "Moderní design & SEO"],
  automatizace: ["Aplikace na míru", "Propojení systémů", "Skripty & AI asistenti"],
  pristup: "Osobní konzultace, řešení na míru a zaměření na reálný přínos pro vás"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
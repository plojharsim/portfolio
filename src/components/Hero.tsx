import { Github, Mail, ArrowDown, Youtube, Sparkles, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10 px-4 pt-12 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs md:text-sm font-mono text-primary">Digitální řešení • Weby • Automatizace</span>
          </div>

          {/* Main Headline requested by user */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Pomáhám lidem a malým firmám <span className="text-gradient">řešit digitální problémy</span>.
          </h1>

          {/* Subtitle requested by user */}
          <p className="text-lg md:text-2xl font-medium text-foreground/90 max-w-3xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Weby, automatizace, vlastní nástroje, AI a další řešení na míru.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Přeměním vaše výzvy a časově náročné procesy v efektivní digitální pomocníky. Šetřete čas, zrychlete svou práci a získejte moderní webové prezentace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="glow" size="lg" asChild>
              <a href="#kontakt">
                <Zap className="mr-2 h-5 w-5" />
                Mám problém k řešení
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projekty">
                <Globe className="mr-2 h-5 w-5" />
                Ukázky řešení
              </a>
            </Button>
          </div>

          {/* Social / Direct contacts */}
          <div className="flex justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://github.com/plojharsim"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com/@plojharsim"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
              title="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="mailto:plojharsim@gmail.com"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300"
              title="E-mail"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#o-mne" 
        className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce z-10 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
</dyad-file>

<dyad-write path="src/components/About.tsx" description="Úprava sekce O mně zaměřené na řešení problémů a hodnotu pro klienty">
import { Wrench, Bot, Cpu, CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Wrench,
      title: "Řešení na míru",
      description: "Nekupujte předražené generické systémy. Vytvořím nástroj nebo web přesně tak, jak potřebujete.",
    },
    {
      icon: Bot,
      title: "Automatizace & AI",
      description: "Zbavte se opakující se práce. Propojím vaše aplikace a využiji AI pro zrychlení běžných úkolů.",
    },
    {
      icon: Cpu,
      title: "Rychle a bez komplikací",
      description: "Jednoduchá komunikace, přímočaře k cíli a zaměření na funkční výsledek bez zbytečných průtahů.",
    },
  ];

  return (
    <section id="o-mne" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// JAK POMÁHÁM</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Můj přístup k <span className="text-gradient">vašim výzvám</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologie mají lidem práci usnadňovat, ne komplikovat. Zaměřuji se na hledání nejjednoduššího a nejefektivnějšího řešení pro vaše podnikání nebo osobní projekty.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 card-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Code snippet / Services preview */}
          <div className="mt-16 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-muted-foreground">reseni_na_miru.ts</span>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const reseniProVas = {
  autor: "Šimon Plojhar",
  cil: "Šetřit váš čas a zjednodušovat digitální procesy",
  coResim: [
    "Tvorba moderních webů a vstupních stránek",
    "Automatizace e-mailů, dat a rutinní práce",
    "Integrace AI pomocníků do vašeho workflow",
    "Tvorba jednodušších interních aplikací a skriptů"
  ],
  pristup: "Rychlý, přímý a orientovaný na reálný výsledek"
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
import { Globe, Cpu, Wrench } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Weby na míru",
      description: "Přehledné, rychlé a moderní webové stránky či prezentace, které zaujmou zákazníky a přinesou výsledky.",
    },
    {
      icon: Cpu,
      title: "Automatizace & AI",
      description: "Šetřím váš čas. Automatizuji opakující se procesy a zapojuji chytré AI nástroje přímo do vašeho podnikání.",
    },
    {
      icon: Wrench,
      title: "Vlastní nástroje",
      description: "Potřebujete specifické řešení? Navrhnu a vyvinu interní nástroje a aplikace přesně podle vašich potřeb.",
    },
  ];

  return (
    <section id="o-mne" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// JAK VÁM POMÁHÁM</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Řešení pro váš <span className="text-gradient">digitální růst</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jsem Šimon Plojhar. Pomáhám jednotlivcům a malým firmám zjednodušovat práci, 
              špatně fungující procesy nahrazovat automatizací a budovat profesionální webovou prezentaci.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Code snippet */}
          <div className="mt-16 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-muted-foreground">sluzby.ts</span>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const mojeSluzby = {
  weby: "Prezentační i funkční weby na míru",
  automatizace: "Propojení systémů a úspora času",
  ai: "Zapojení AI asistentů do vašich procesů",
  nastroje: "Interní aplikace a utility na zakázku",
  pristup: "Osobní konzultace & hledání nejlepšího řešení"
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
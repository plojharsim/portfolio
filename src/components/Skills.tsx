import { Globe, Cpu, Bot, Code, Settings, Sparkles } from "lucide-react";

const Skills = () => {
  const services = [
    {
      icon: Globe,
      title: "Weby & Prezentace",
      description: "Přehledné, rychlé a moderní webové stránky zaměřené na konverze a jednoduchou správu.",
      tags: ["React", "HTML/CSS", "Tailwind", "SEO"],
    },
    {
      icon: Cpu,
      title: "Automatizace procesů",
      description: "Propojení různých služeb a skriptů pro ušetření desítek hodin měsíčně při rutinních úkolech.",
      tags: ["Python", "Bash", "API Integrace", "Webhooks"],
    },
    {
      icon: Bot,
      title: "AI a chytré nástroje",
      description: "Využití umělé inteligence pro generování obsahu, zpracování dat a zrychlení firemních postupů.",
      tags: ["AI Prompty", "Automation", "Workflow", "Data"],
    },
  ];

  return (
    <section id="dovednosti" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// SLUŽBY & ŘEŠENÍ</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Co pro vás mohu <span className="text-gradient">vytvořit</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ať už potřebujete nový web, zautomatizovat tabulky nebo vytvořit vlastní pomocný nástroj.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex flex-col hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { Globe, Terminal, Cpu } from "lucide-react";

const Skills = () => {
  const toolCategories = [
    {
      icon: Globe,
      title: "Weby a webové aplikace",
      description: "Moderní a přehledné webové prezentace a rozhraní zaměřené na srozumitelnost a rychlost.",
      tools: ["HTML / CSS", "Tailwind UI", "React"],
    },
    {
      icon: Terminal,
      title: "Automatizace a skripty",
      description: "Nástroje a skripty pro zrychlení práce, zpracování dat a řešení rutinních úkolů.",
      tools: ["Python", "Bash skripty", "Linux"],
    },
    {
      icon: Cpu,
      title: "AI a další nástroje",
      description: "Využití moderních AI systémů, verzovacích nástrojů a efektivního vývojového prostředí.",
      tools: ["AI & Prompting", "Git & GitHub", "VS Code"],
    },
  ];

  return (
    <section id="dovednosti" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// NÁSTROJE & ŘEŠENÍ</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Moje <span className="text-gradient">nástroje</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologie pro mě nejsou produktem samotným, ale nástroji, které používám k řešení konkrétních problémů.
            </p>
          </div>

          {/* Tool cards grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {toolCategories.map((category) => (
              <div
                key={category.title}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {tool}
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

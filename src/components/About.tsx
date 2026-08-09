import { Globe, Cpu, Bot } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Globe,
      title: "Weby na míru",
      description: "Přehledné, moderní a rychlé webové stránky pro osobní prezentaci, ubytování či služby s důrazem na konverze.",
    },
    {
      icon: Cpu,
      title: "Automatizace & Nástroje",
      description: "Šetřím váš čas vytvořením skriptů, aplikací a automatizovaných procesů na míru vašim potřebám.",
    },
    {
      icon: Bot,
      title: "AI a chytrá řešení",
      description: "Propojení moderních technologií a umělé inteligence pro zjednodušení každodenní práce a zefektivnění podnikání.",
    },
  ];

  return (
    <section id="sluzby" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// CO NABÍZÍM & O MNĚ</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              S čím vám mohu <span className="text-gradient">pomoci?</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jsem Šimon Plojhar (@plojharsim) a spojuji nadšení pro kód, vývoj a technologie k řešení reálných digitálních výzev jednotlivců i malých firem.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Code snippet / Overview */}
          <div className="mt-16 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-muted-foreground">sluzby.ts</span>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const reseniNaMiru = {
  vyvojar: "Šimon Plojhar (@plojharsim)",
  zamereoni: "Pomoc malým firmám & jednotlivcům",
  sluzby: [
    "Weby a landing pages na míru",
    "Automatizace úkolů & skripty",
    "Interní nástroje & vývoj",
    "AI integrace"
  ],
  pristup: "Najít nejjednodušší a nejefektivnější řešení problému"
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
</dyad-file>

<dyad-write path="src/components/Skills.tsx" description="Úprava sekce dovedností se zaměřením na nástroje pro řešení problémů">
const Skills = () => {
  const skillCategories = [
    {
      title: "Tvorba webů",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "React & TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Automatizace & Vývoj",
      skills: [
        { name: "Python skripty", level: 85 },
        { name: "Linux & Server hosting", level: 80 },
        { name: "Bash & CLI", level: 70 },
      ],
    },
    {
      title: "Nástroje & AI",
      skills: [
        { name: "AI Asistenti & Prompty", level: 90 },
        { name: "Git & GitHub", level: 75 },
        { name: "VS Code & Figma", level: 85 },
      ],
    },
  ];

  return (
    <section id="dovednosti" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// TECHNOLOGIE & NÁSTROJE</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Čím realizuji <span className="text-gradient">vaše projekty</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Používám moderní technologie a nástroje, díky kterým doručuji rychlá a spolehlivá řešení.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <h4 className="text-xl font-semibold mb-6 text-primary">{category.title}</h4>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground font-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${catIndex * 0.2 + skillIndex * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
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
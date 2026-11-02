type Frequency = "Každodenně" | "Pravidelně" | "Učím se";

interface Skill {
  name: string;
  use: string;
  frequency: Frequency;
}

const frequencyStyles: Record<Frequency, string> = {
  "Každodenně": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  "Pravidelně": "bg-primary/10 text-primary border-primary/20",
  "Učím se": "bg-amber-500/10 text-amber-500 border-amber-500/20",
};

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", use: "Webové prezentace i aplikace jako Classmate", frequency: "Pravidelně" },
      { name: "HTML", use: "Základ každého webu, který stavím", frequency: "Pravidelně" },
      { name: "Tailwind", use: "Rychlé stylování rozhraní", frequency: "Učím se" },
      { name: "TypeScript", use: "Typově bezpečný kód v Reactu", frequency: "Učím se" },
    ],
  },
  {
    title: "Backend a systémy",
    skills: [
      { name: "Python", use: "Můj první jazyk, skripty a nástroje", frequency: "Každodenně" },
      { name: "Bash", use: "Práce v terminálu a správa serverů", frequency: "Pravidelně" },
      { name: "Linux", use: "Desktop i server, Raspberry Pi, selfhosting", frequency: "Každodenně" },
    ],
  },
  {
    title: "Nástroje",
    skills: [
      { name: "AI a vibecoding", use: "Vývoj s AI asistenty, včetně MCP", frequency: "Každodenně" },
      { name: "VS Code", use: "Hlavní editor", frequency: "Každodenně" },
      { name: "Git a GitHub", use: "Verzování a nasazení přes Vercel", frequency: "Pravidelně" },
      { name: "Figma", use: "Návrhy rozhraní", frequency: "Učím se" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="dovednosti" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// DOVEDNOSTI</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Moje <span className="text-gradient">technologie</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologie a nástroje, se kterými pracuji a neustále se v nich zlepšuji.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <h4 className="text-xl font-semibold mb-6 text-primary">{category.title}</h4>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full border text-xs font-mono whitespace-nowrap ${frequencyStyles[skill.frequency]}`}
                        >
                          {skill.frequency}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.use}</p>
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

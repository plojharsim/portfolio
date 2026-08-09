const Skills = () => {
  const skillCategories = [
    {
      title: "Weby & Frontend",
      skills: [
        { name: "HTML & CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "React & TypeScript", level: 75 },
      ],
    },
    {
      title: "Automatizace & Backend",
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash / Skripty", level: 70 },
        { name: "AI Nástroje & API", level: 85 },
      ],
    },
    {
      title: "Nástroje & Správa",
      skills: [
        { name: "VS Code / Vývoj", level: 90 },
        { name: "Git & GitHub", level: 75 },
        { name: "Linux & Hosting", level: 80 },
      ],
    },
  ];

  return (
    <section id="dovednosti" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// DOVEDNOSTI & NÁSTROJE</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Co používám <span className="text-gradient">k řešení problémů</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moderní technologie a nástroje, se kterými tvořím rychlá, spolehlivá a efektivní řešení.
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
const Skills = () => {
  const skillCategories = [
    {
      title: "Webová řešení",
      skills: [
        { name: "React / HTML / CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Automatizace & Backend",
      skills: [
        { name: "Python (Skripty & Boty)", level: 90 },
        { name: "Bash & Linux servery", level: 75 },
      ],
    },
    {
      title: "Nástroje & AI",
      skills: [
        { name: "AI Integrace & Prompty", level: 90 },
        { name: "Git & Správa kódu", level: 75 },
        { name: "Figma (UI Návrhy)", level: 60 },
      ],
    },
  ];

  return (
    <section id="dovednosti" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// TECHNOLOGICKÉ ZÁZEMÍ</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              S čím <span className="text-gradient">pracuji</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Spatřuji smysl v moderních technologiích, které přinášejí rychlá a efektivní řešení.
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
const Skills = () => {
  const skillCategories = [
    {
      title: "Tvorba webů",
      skills: [
        { name: "React & TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Přehledný design", level: 85 },
      ],
    },
    {
      title: "Automatizace & Backend",
      skills: [
        { name: "Python skripty", level: 85 },
        { name: "Bash & Linux servery", level: 70 },
        { name: "API integrace", level: 75 },
        { name: "Supabase & Databáze", level: 65 },
      ],
    },
    {
      title: "AI & Nástroje",
      skills: [
        { name: "AI nástroje & integrace", level: 90 },
        { name: "VS Code & Git", level: 85 },
        { name: "Figma (prototypy)", level: 60 },
        { name: "Řešení problémů", level: 90 },
      ],
    },
  ];

  return (
    <section id="dovednosti" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// TECHNOLOGIE & PŘÍSTUP</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Nástroje, které <span className="text-gradient">používám</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sleduji moderní trendy a používám spolehlivé technologie, které zaručují kvalitu a rychlost.
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
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
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
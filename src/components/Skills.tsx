const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 65 },
        { name: "Tailwind", level: 30 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash", level: 60 },
      ],
    },
    {
      title: "Nástroje",
      skills: [
        { name: "Git", level: 60 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 45 },
        { name: "AI", level: 85 },
      ],
    },
  ];

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

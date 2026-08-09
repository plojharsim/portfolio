const Skills = () => {
  const serviceCategories = [
    {
      title: "Weby & Prezentace",
      skills: [
        { name: "Responzivní weby & Landing pages", level: 90 },
        { name: "Uživatelská přívětivost (UX/UI)", level: 85 },
        { name: "Moderní design & Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Automatizace & Skripty",
      skills: [
        { name: "Python skripty na zpracování dat", level: 90 },
        { name: "Propojení systémů a API", level: 80 },
        { name: "Linux & Serverový selfhosting", level: 75 },
      ],
    },
    {
      title: "Nástroje & AI",
      skills: [
        { name: "Využití AI pro zrychlení procesů", level: 90 },
        { name: "Vlastní miniaplikace na míru", level: 85 },
        { name: "Git & Bezpečné nasazení", level: 80 },
      ],
    },
  ];

  return (
    <section id="dovednosti" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// CO DOKÁŽU VYŘEŠIT</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Oblasti <span className="text-gradient">mých dovedností</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nástroje a technologie, které používám k řešení reálných digitálních potřeb.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, catIndex) => (
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
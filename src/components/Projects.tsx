import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Portfolio Web",
      description: "Moje osobní portfolio vytvořené pomocí React a Tailwind CSS. Moderní design s animacemi.",
      tags: ["React", "TypeScript", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Todo Aplikace",
      description: "Jednoduchá ale funkční todo aplikace s možností ukládání úkolů do local storage.",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "#",
    },
    {
      title: "Discord Bot",
      description: "Multifunkční Discord bot pro správu serveru a zábavné příkazy.",
      tags: ["Python", "Discord.py"],
      github: "#",
    },
  ];

  return (
    <section id="projekty" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-sm font-mono text-primary mb-4">// PROJEKTY</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Na čem <span className="text-gradient">pracuji</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ukázka mých projektů, na kterých jsem pracoval nebo právě pracuji.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col hover:-translate-y-2 ${
                  isVisible ? "animate-scale-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View more */}
          <div className={`text-center mt-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
            <Button variant="outline" asChild>
              <a href="https://github.com/plojharsim" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Více na GitHubu
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
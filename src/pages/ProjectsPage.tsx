import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Folder, Code2, Layout, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
  // Seznam všech projektů
  const allProjects = [
    {
      title: "Seply",
      description: "Profesionální webová prezentace pro servis plynových kotlů. Zaměřeno na konverzi a přehlednost služeb.",
      tags: ["Web", "React", "Tailwind"],
      demo: "https://seply.cz",
      icon: Layout,
    },
    {
      title: "Učení bylo mučení",
      description: "Moderní vzdělávací platforma využívající AI pro zefektivnění učení a tvorbu studijních materiálů.",
      tags: ["AI", "Vzdělávání", "React"],
      demo: "https://uceni.plojharsim.cz",
      icon: Code2,
    },
    {
      title: "Portfolio v1",
      description: "Moje první verze portfolia, kde jsem se učil základy webového vývoje a animací.",
      tags: ["HTML", "CSS", "JS"],
      github: "https://github.com/plojharsim",
      icon: Folder,
    },
    {
      title: "Discord Bot",
      description: "Vlastní bot pro správu komunity s funkcemi pro moderování a zábavu.",
      tags: ["Python", "API"],
      github: "https://github.com/plojharsim",
      icon: Database,
    },
    {
      title: "Batch Tools",
      description: "Sada užitečných skriptů pro Windows, které mi usnadňují každodenní práci se soubory.",
      tags: ["Batch", "Automation"],
      github: "https://github.com/plojharsim",
      icon: Smartphone,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Moje <span className="text-gradient">Projekty</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kompletní seznam mých prací, od webových aplikací až po drobné skripty a experimenty.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {project.description}
                  </p>

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
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Call to Action */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Chceš vidět víc?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Většinu svého kódu sdílím jako open-source na GitHubu. Sleduj moji aktivitu a přispěj k mým projektům.
          </p>
          <Button variant="glow" size="lg" asChild>
            <a href="https://github.com/plojharsim" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Můj GitHub profil
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
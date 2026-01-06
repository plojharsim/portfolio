import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Folder, Code2, Layout, Database, Smartphone, ShoppingCart, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsPage = () => {
  // Definice barev pro statusy
  const getStatusDetails = (status: string) => {
    switch (status) {
      case "Vydáno":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Ve vývoji":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Plánováno":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  // Seznam všech projektů se statusy
  const allProjects = [
    {
      title: "Panorama house Brdy",
      description: "Webová prezentace pro soukromé ubytování v Brdech. Zaměřeno na přehlednost a jednoduchost rezervace.",
      status: "Vydáno",
      tags: ["Web", "React", "Tailwind"],
      demo: "https://panoramahousebrdy.cz",
      icon: Layout,
    },
    {
      title: "Seply",
      description: "Profesionální webová prezentace pro servis plynových kotlů. Zaměřeno na konverzi a přehlednost služeb.",
      status: "Vydáno",
      tags: ["Web", "React", "Tailwind"],
      demo: "https://seply.cz",
      icon: Layout,
    },
    {
      title: "Veselé Vánoce",
      description: "Vánoční webová stránka s odpočtem a interaktivními prvky, vytvořená pro sváteční náladu.",
      status: "Vydáno",
      tags: ["Next.js", "React", "TypeScript"],
      demo: "https://vanoce.plojharsim.cz", // Předpokládám demo URL
      icon: Gift,
    },
    {
      title: "Discord Bot",
      description: "Vlastní bot pro správu komunity s funkcemi pro moderování a zábavu.",
      status: "Ve vývoji",
      tags: ["Python", "API"],
      github: "https://github.com/plojharsim",
      icon: Database,
    },
    {
      title: "Batch Tools",
      description: "Sada užitečných skriptů pro Windows, které mi usnadňují každodenní práci se soubory.",
      status: "Plánováno",
      tags: ["Batch", "Automatizace"],
      github: "https://github.com/plojharsim",
      icon: Smartphone,
    },
  ];

  const sortOrder: { [key: string]: number } = {
    "Vydáno": 1,
    "Ve vývoji": 2,
    "Plánováno": 3,
  };

  const sortedProjects = allProjects.sort((a, b) => {
    return (sortOrder[a.status] || 99) - (sortOrder[b.status] || 99);
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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

      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project, index) => {
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

                  <div className="mb-3">
                    <Badge variant="outline" className={`font-mono text-[10px] uppercase tracking-wider ${getStatusDetails(project.status)}`}>
                      {project.status}
                    </Badge>
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
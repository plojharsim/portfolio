import { ExternalLink, Folder, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();

  const getStatusDetails = (status: string) => {
    switch (status) {
      case "Vydáno": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Ve vývoji": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const featuredProjects = projects.filter(project =>
    project.slug === "edu-plojharsim" || project.slug === "iot-meteostanice"
  );

  return (
    <section id="projekty" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-4">// PROJEKTY</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Na čem <span className="text-gradient">pracuji</span></h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ukázka mých nejzajímavějších projektů.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {featuredProjects.map((project) => (
            <div key={project.slug} className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-2">
                  {project.demo && (
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="mb-2">
                <Badge variant="outline" className={`font-mono text-[10px] uppercase tracking-wider ${getStatusDetails(project.status)}`}>
                  {project.status}
                </Badge>
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">{tag}</span>
                ))}
              </div>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link to={`/projekty/${project.slug}`}>Zobrazit detaily</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="glow" onClick={() => navigate("/projekty")}>
            Zobrazit všechny projekty <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
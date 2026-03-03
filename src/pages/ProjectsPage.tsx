import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Layout, GraduationCap, Home, Gift, Thermometer, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  const getStatusDetails = (status: string) => {
    switch (status) {
      case "Vydáno": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Ve vývoji": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const projectIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "Edu | by plojharsim": GraduationCap,
    "Panorama house Brdy": Home,
    "Seply": Layout,
    "Veselé Vánoce": Gift,
    "IoT Meteostanice v2": Thermometer,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Moje <span className="text-gradient">Projekty</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Kompletní seznam mých prací, od webových aplikací po hardware.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = projectIcons[project.title] || Layout;
              return (
                <div key={index} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      {project.demo && (
                        <a href={project.demo} className="p-2 text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
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
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">{tag}</span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                      <Link to={`/projekty/${project.slug}`}>
                        Více o projektu <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
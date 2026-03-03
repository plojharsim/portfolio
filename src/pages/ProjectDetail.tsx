import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Tag, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projekty" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/projekty">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na projekty
            </Link>
          </Button>

          <div className="grid gap-12">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                  {project.status}
                </Badge>
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Tag className="h-3 w-3" /> {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {project.demo && (
                  <Button variant="glow" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Navštívit web
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Gallery Placeholder */}
            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div key={i} className="aspect-video rounded-2xl bg-muted/50 border border-border overflow-hidden flex items-center justify-center">
                    <img src={img} alt={`${project.title} náhled ${i+1}`} className="w-full h-full object-cover opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  </div>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Info className="h-5 w-5" />
                <h2 className="text-2xl font-bold m-0 text-foreground">O projektu</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.longDescription || "K tomuto projektu zatím není k dispozici podrobnější popis."}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
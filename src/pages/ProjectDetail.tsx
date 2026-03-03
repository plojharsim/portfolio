import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projekty" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/projekty">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na projekty
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wider text-primary border-primary/20 bg-primary/5">
                  {project.status}
                </Badge>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            </div>
            
            <div className="flex gap-3">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="glow" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Navštívit web
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="grid gap-12">
            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {project.images.map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-border aspect-video">
                    <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                    <feature.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
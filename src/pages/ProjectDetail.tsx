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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4">{project.status}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.demo && (
                  <Button variant="glow" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
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

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Technologie</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {project.images && project.images.length > 0 && (
                <div className="rounded-2xl overflow-hidden border border-border aspect-video">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {project.longDescription && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">O projektu</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              )}

              {project.features && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Klíčové funkce</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
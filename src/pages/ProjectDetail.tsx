import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Cpu, Layout, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projekty" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
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
                <Badge variant="outline" className="font-mono text-[10px] uppercase bg-primary/10 text-primary border-primary/20">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="font-mono text-[10px] uppercase">
                  {project.status}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </div>
            
            <div className="flex gap-3">
              {project.github && (
                <Button variant="outline" size="lg" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="glow" size="lg" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Layout className="h-6 w-6 text-primary" /> O projektu
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {project.features && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" /> Klíčové funkce
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/50">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">// Technologie</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.hardware && (
                <div>
                  <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="h-4 w-4" /> Hardware
                  </h3>
                  <ul className="space-y-2">
                    {project.hardware.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
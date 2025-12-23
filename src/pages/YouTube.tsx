import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Youtube, Play, Users, Video, Bell, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTube = () => {
  const stats = [
    { label: "Odběratelé", value: "100+", icon: Users },
    { label: "Nahraná videa", value: "10+", icon: Video },
    { label: "Pravidelnost", value: "Týdně", icon: Bell },
  ];

  const featuredVideos = [
    {
      title: "Můj názor na AI na YouTube",
      description: "Hlubší pohled na to, jak umělá inteligence mění tvorbu obsahu.",
      id: "placeholder1", // Zde můžeš později doplnit skutečné ID videa
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Jak začít s programováním",
      description: "Tipy pro ty, kteří chtějí začít kódovat stejně jako já.",
      id: "placeholder2",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 mb-6">
            <Youtube className="h-5 w-5" />
            <span className="text-sm font-medium">Tvůrce obsahu</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Můj <span className="text-gradient">YouTube</span> Kanál
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Tady sdílím svou cestu programátora, názory na technologie a tutoriály. Sleduj mě a buď u toho!
          </p>
          <Button variant="glow" size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none shadow-[0_0_20px_rgba(220,38,38,0.3)]" asChild>
            <a href="https://youtube.com/@plojharsim" target="_blank" rel="noopener noreferrer">
              Odebírat kanál
            </a>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center">
                <stat.icon className="h-8 w-8 text-primary mb-4" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center underline decoration-primary/30 underline-offset-8">Vybraná videa</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden border border-border bg-card transition-all hover:border-primary/50">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                      <Play className="h-8 w-8 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                  <p className="text-muted-foreground mb-4">{video.description}</p>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                      Přehrát na YouTube <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-red-600/10 to-primary/10 border border-red-500/20">
            <h2 className="text-3xl font-bold mb-4">Staň se součástí komunity</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nezmeškej žádné nové video. Odebírej můj kanál a zapni si zvoneček!
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8" asChild>
              <a href="https://youtube.com/@plojharsim" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" /> ODEBÍRAT
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YouTube;
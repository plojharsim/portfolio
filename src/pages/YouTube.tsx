import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Youtube, Play, Users, Video, Bell, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface YouTubeVideo {
  title: string;
  link: string;
  guid: string;
  thumbnail: string;
  pubDate: string;
}

const YouTube = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // SEM VLOŽ SVÉ CHANNEL ID (najdeš ho v nastavení YouTube -> Pokročilé nastavení)
  // Pro @plojharsim zkusíme najít ID, pokud ho nemáš, zkus použít toto:
  const CHANNEL_ID = "UCv_wP9_3oYlUe7K9wTzKx_A"; 

  const stats = [
    { label: "Odběratelé", value: "100+", icon: Users },
    { label: "Nahraná videa", value: "10+", icon: Video },
    { label: "Pravidelnost", value: "Týdně", icon: Bell },
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      setError(false);
      try {
        // Používáme Channel ID, což je jediný 100% spolehlivý způsob pro RSS
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const latestVideos = data.items.slice(0, 2).map((item: any) => ({
            title: item.title,
            link: item.link,
            guid: item.guid,
            thumbnail: item.thumbnail || `https://i.ytimg.com/vi/${item.guid.split(':')[2]}/maxresdefault.jpg`,
            pubDate: new Date(item.pubDate).toLocaleDateString('cs-CZ')
          }));
          setVideos(latestVideos);
        } else {
          // Pokud rss2json selže nebo nevrátí položky
          console.warn("YouTube RSS feed nevrátil žádná data. Zkontroluj Channel ID.");
          setError(true);
        }
      } catch (err) {
        console.error("Chyba při načítání videí:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [CHANNEL_ID]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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
            Sleduješ @plojharsim? Tady najdeš moji nejnovější tvorbu, názory na technologie a tutoriály.
          </p>
          <Button variant="glow" size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none shadow-[0_0_20px_rgba(220,38,38,0.3)]" asChild>
            <a href="https://youtube.com/@plojharsim" target="_blank" rel="noopener noreferrer">
              Odebírat kanál
            </a>
          </Button>
        </div>
      </section>

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

      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold underline decoration-primary/30 underline-offset-8">Nejnovější videa</h2>
            {!isLoading && !error && (
              <Button variant="link" asChild className="text-muted-foreground hover:text-primary">
                <a href="https://youtube.com/@plojharsim/videos" target="_blank" rel="noopener noreferrer">
                  Zobrazit vše <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="h-10 w-10 text-primary animate-spin" />
              <p className="text-muted-foreground animate-pulse">Načítám nejnovější tvorbu...</p>
            </div>
          ) : error || videos.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-card/30">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold mb-2">Nepodařilo se načíst videa</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6 px-4">
                Může to být způsobeno ochranou soukromí nebo dočasným výpadkem služby. Podívej se prosím přímo na můj YouTube kanál.
              </p>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://youtube.com/@plojharsim" target="_blank" rel="noopener noreferrer">
                  Otevřít YouTube kanál <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden border border-border bg-card transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform shadow-xl">
                        <Play className="h-8 w-8 fill-current" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                       <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                         {video.pubDate}
                       </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
                    <Button variant="outline" size="sm" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                      <a href={video.link} target="_blank" rel="noopener noreferrer">
                        Přehrát video <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-red-600/10 to-primary/10 border border-red-500/20 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Chceš víc obsahu?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Každý týden sdílím nové zkušenosti. Staň se součástí komunity a nenech si nic utéct!
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 scale-110 transition-transform hover:scale-115" asChild>
              <a href="https://youtube.com/@plojharsim" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" /> ODEBÍRAT @plojharsim
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
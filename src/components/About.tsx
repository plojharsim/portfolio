import { Globe, Bot, Wrench, Sparkles } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Globe,
      title: "Weby & Prezentace",
      description: "Přehledné, moderní a rychlé webové stránky pro malé firmy i jednotlivce, zaměřené na získávání zákazníků.",
    },
    {
      icon: Bot,
      title: "Automatizace & AI",
      description: "Propojení systémů, zrychlení rutinních procesů a využití AI pro úsporu vašeho času a nákladů.",
    },
    {
      icon: Wrench,
      title: "Vlastní nástroje",
      description: "Drobné i větší skripty, aplikace a nástroje vytvořené přesně podle vašich konkrétních potřeb.",
    },
  ];

  return (
    <section id="o-mne" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// CO DĚLÁM A JAK POMÁHÁM</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Řešení pro váš <span className="text-gradient">digitální svět</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jsem Šimon, mladý vývojář a nadšenec do technologií. Místo složitých řešení stavím na jednoduchosti, 
              funkčnosti a reálném přínosu pro vaše podnikání nebo projekt.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Code/Philosophy snippet */}
          <div className="mt-16 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-2 text-muted-foreground">reseni.ts</span>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const mojeSluzby = {
  vyvojarsim: "Šimon Plojhar",
  cil: "Pomáhat lidem a firmám zefektivnit digitální procesy",
  oblasti: ["Weby na míru", "Automatizace", "AI integrace", "Nástroje"],
  pristup: "Najít nejjednodušší funkční řešení pro váš konkrétní problém"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
</dyad-file>

<dyad-write path="src/components/Contact.tsx" description="Aktualizace kontaktní sekce s textem podle zadání uživatele">
import { Github, Send, Copy, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const emailAddress = "plojharsim@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    
    navigator.clipboard.writeText(emailAddress).then(() => {
      toast.success("E-mailová adresa zkopírována!", {
        description: emailAddress,
      });
    }).catch(() => {
      toast.error("Nepodařilo se zkopírovat e-mail.");
    });
  };

  return (
    <section id="kontakt" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-sm font-mono text-primary mb-4">// KONTAKT</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Pojďme <span className="text-gradient">spolupracovat</span>
          </h3>
          
          {/* Text dle přání uživatele */}
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-10 text-left sm:text-center">
            <p className="text-lg md:text-xl font-medium text-foreground mb-2 flex items-center justify-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary inline" />
              Nevíte přesně, co potřebujete?
            </p>
            <p className="text-muted-foreground text-base">
              Popište mi problém a společně najdeme řešení.
            </p>
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="glow" 
              size="lg" 
              onClick={handleCopyEmail}
            >
              <Copy className="mr-2 h-5 w-5" />
              Kopírovat e-mail
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${emailAddress}`}>
                <Send className="mr-2 h-5 w-5" />
                Napsat e-mail
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/plojharsim" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Email display */}
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
            <Send className="h-5 w-5 text-primary" />
            <span className="font-mono text-muted-foreground">{emailAddress}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
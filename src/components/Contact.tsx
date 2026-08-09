import { Github, Send, Copy, HelpCircle } from "lucide-react";
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
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-sm font-mono text-primary mb-4">// KONTAKT</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Pojďme najít <span className="text-gradient">řešení</span>
          </h3>

          {/* Banner message */}
          <div className="p-6 mb-8 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex-shrink-0 flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground mb-1">
                Nevíte přesně, co potřebujete?
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Popište mi problém a společně najdeme nejvhodnější řešení – ať už jde o jednoduchý web, automatizaci nebo zrychlení vaší práce.
              </p>
            </div>
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
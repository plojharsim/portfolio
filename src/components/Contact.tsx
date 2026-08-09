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
            Pojďme vyřešit <span className="text-gradient">váš problém</span>
          </h3>
          
          {/* Callout Box pro nerozhodnuté klienty */}
          <div className="p-6 md:p-8 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm mb-10 text-left md:text-center relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <HelpCircle className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xl font-medium text-foreground">
                  Nevíte přesně, co potřebujete?
                </p>
                <p className="text-muted-foreground mt-1">
                  Popište mi problém a společně najdeme řešení.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            Máte nápad na nový web, potřebujete zrychlit nebo zautomatizovat svoji práci? 
            Napište mi na e-mail a dohodneme se na dalším postupu!
          </p>

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
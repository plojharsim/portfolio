import { Github, Send, Copy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const emailAddress = "kontakt@plojharsim.cz";

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
          <p className="text-sm font-mono text-primary mb-4">// KONTAKT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Máte problém <span className="text-gradient">nebo nápad?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Napište mi, i když přesně nevíte, jaké řešení potřebujete. 
            Působím v Příbrami a řeším digitální výzvy pro lidi a malé firmy z celé ČR. Popište mi svůj problém a společně najdeme nejlepší cestu.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="glow" 
              size="lg" 
              asChild
            >
              <a href={`mailto:${emailAddress}?subject=Popis%20probl%C3%A9mu`}>
                Popište mi svůj problém <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleCopyEmail}
            >
              <Copy className="mr-2 h-5 w-5" />
              Kopírovat e-mail
            </Button>
          </div>

          {/* Email display and GitHub */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <Send className="h-5 w-5 text-primary" />
              <span className="font-mono text-muted-foreground">{emailAddress}</span>
            </div>
            <a
              href="https://github.com/plojharsim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 hover:border-primary/50 backdrop-blur-sm text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span className="font-mono">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
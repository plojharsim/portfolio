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
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-sm font-mono text-primary mb-4">// KONTAKT</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Nevíte přesně, <span className="text-gradient">co potřebujete?</span>
          </h3>
          <p className="text-xl text-foreground font-medium mb-4">
            Popište mi problém a společně najdeme řešení.
          </p>
          <p className="text-muted-foreground text-base max-w-xl mx-auto mb-10">
            Ať už hledáte nový web, zrychlení firemních procesů, automatizaci nebo pomoc s AI – napište mi a nezávazně to probereme.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="glow" size="lg" asChild>
              <a href={`mailto:${emailAddress}?subject=Dotaz%20ohledně%20digitálního%20řešení`}>
                <MessageSquare className="mr-2 h-5 w-5" />
                Napsat e-mail
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
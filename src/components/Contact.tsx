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
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Pojďme najít <span className="text-gradient">řešení</span>
          </h3>
          
          {/* Požadovaný text */}
          <div className="p-6 rounded-2xl bg-card/60 border border-border mb-8 backdrop-blur-sm">
            <div className="flex justify-center mb-3 text-primary">
              <MessageSquare className="h-8 w-8" />
            </div>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              Nevíte přesně, co potřebujete?
            </p>
            <p className="text-lg text-muted-foreground">
              Popište mi váš problém a společně najdeme to nejlepší řešení.
            </p>
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
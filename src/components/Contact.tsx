import { Github, Send, Copy } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
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
          <h2 className="text-sm font-mono text-primary mb-4">// KONTAKT</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Pojďme <span className="text-gradient">spolupracovat</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-10">
            Máš zajímavý projekt nebo nápad? Rád si popovídám! 
            Neváhej mě kontaktovat.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Tlačítko pro kopírování e-mailu - nyní je to čistý Button */}
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
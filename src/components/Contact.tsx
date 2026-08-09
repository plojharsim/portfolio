import { Send, Copy, MessageSquare, Lightbulb } from "lucide-react";
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
            Pojďme vyřešit váš <span className="text-gradient">problém</span>
          </h3>

          {/* Requested prompt text */}
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm mb-10 max-w-xl mx-auto">
            <div className="flex justify-center mb-3">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xl font-medium text-foreground">
              Nevíte přesně, co potřebujete? Popište mi problém a společně najdeme řešení.
            </p>
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="glow" size="lg" asChild>
              <a href={`mailto:${emailAddress}?subject=Dotaz%20na%20digit%C3%A1ln%C3%AD%20%C5%99e%C5%A1en%C3%AD`}>
                <Send className="mr-2 h-5 w-5" />
                Napsat mi e-mail
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
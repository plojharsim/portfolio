import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2024 Šimon Plojhar.</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              Vytvořeno s <Heart className="h-4 w-4 text-primary fill-primary" /> v České republice
            </span>
          </div>
          
          <div className="font-mono text-sm text-muted-foreground">
            @plojharsim
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

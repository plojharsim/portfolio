import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();

  // V reálné aplikaci by se data načítala z API nebo CMS na základě ID
  const post = {
    title: "Proč jsem začal programovat v 15 letech",
    date: "15. března 2024",
    readTime: "5 min čtení",
    author: "Šimon Plojhar",
    content: `
      <p>Programování pro mě nebylo jen o psaní kódu. Byla to cesta k pochopení toho, jak funguje svět kolem nás, který je stále více digitální.</p>
      
      <h2>Začátek cesty</h2>
      <p>Všechno to začalo, když jsem se začal zajímat o to, jak se vlastně tvoří webové stránky, které denně navštěvuji. Ta možnost vytvořit něco z ničeho jen pomocí klávesnice mě naprosto fascinovala.</p>
      
      <h2>Proč právě teď?</h2>
      <p>Věřím, že čím dříve člověk začne, tím přirozenější pro něj technologie budou. V 15 letech mám dostatek času na experimentování a učení se z chyb, aniž by mě tlačily pracovní termíny.</p>
      
      <blockquote>
        "Programování je nejbližší věc k magii, kterou v našem světě máme."
      </blockquote>
      
      <h2>Co dál?</h2>
      <p>Mým cílem je neustále se zlepšovat v Reactu a TypeScriptu. Každý projekt mě posouvá o kus dál a těším se na to, co přinese budoucnost.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-16 px-4">
        <div className="container max-w-3xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na blog
            </Link>
          </Button>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-y border-border py-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </header>

          <div 
            className="prose prose-invert prose-primary max-w-none text-lg leading-relaxed text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-4">Zaujal tě článek?</h3>
            <p className="mb-6">
              Sleduj mě na sociálních sítích nebo mi napiš, pokud máš nějaký dotaz nebo nápad na spolupráci.
            </p>
            <Button variant="glow" asChild>
              <Link to="/#kontakt">Kontaktuj mě</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
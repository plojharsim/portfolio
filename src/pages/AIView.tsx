import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Sparkles, Shield, Lightbulb, Zap, Users } from "lucide-react";

const AIView = () => {
  const perspectives = [
    {
      title: "AI jako nástroj",
      description: "Vnímám AI jako mocný nástroj, který může pomáhat lidem být produktivnější a kreativnější. Není to náhrada za lidské myšlení, ale jeho rozšíření.",
      icon: Zap,
    },
    {
      title: "Kreativita a AI",
      description: "AI mi pomáhá při programování a učení nových věcí. Je to skvělý pomocník pro generování nápadů a řešení problémů.",
      icon: Sparkles,
    },
    {
      title: "Odpovědné využívání",
      description: "Je důležité používat AI zodpovědně a kriticky přemýšlet nad tím, co nám říká. AI může dělat chyby a je na nás, abychom je rozpoznali.",
      icon: Shield,
    },
    {
      title: "Budoucnost s AI",
      description: "Věřím, že AI bude hrát stále větší roli v našich životech. Proto se snažím pochopit, jak funguje a jak ji můžeme využít k lepšímu.",
      icon: Lightbulb,
    },
    {
      title: "AI v programování",
      description: "Jako mladý programátor používám AI nástroje k učení a zrychlení práce. Pomáhá mi pochopit složité koncepty a debugovat kód.",
      icon: Brain,
    },
    {
      title: "Lidský element",
      description: "I přes všechny výhody AI věřím, že lidská kreativita, empatie a kritické myšlení zůstanou nenahraditelné.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-medium">Pohled mladého programátora</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Můj pohled na <span className="text-gradient">AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jako někdo, kdo vyrůstá ve světě umělé inteligence, sdílím své myšlenky a zkušenosti s touto fascinující technologií.
          </p>
        </div>
      </section>

      {/* Perspectives Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perspectives.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground mb-4">
              "AI je nástroj, který rozšiřuje naše možnosti, ale nenahrazuje naše myšlení."
            </blockquote>
            <p className="text-muted-foreground">— Můj pohled</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Chceš se bavit o AI?
          </h2>
          <p className="text-muted-foreground mb-6">
            Rád si popovídám o umělé inteligenci a jejím využití v programování.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIView;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, BookOpen, Code, Users, Rocket, Lightbulb, Globe, Zap } from "lucide-react";

const MyFuture = () => {
  const goals = [
    {
      title: "Technologické dovednosti",
      description: "Chci se naučit nové programovací jazyky a frameworky, které mi pomohou stát se lepším vývojářem.",
      items: [
        "Zvládnout TypeScript na pokročilé úrovni",
        "Naučit se Next.js a React Native",
        "Získat zkušenosti s Node.js a databázemi",
        "Porozumět UI/UX designu a Figma",
      ],
      icon: Code,
    },
    {
      title: "Projekty, které chci vytvořit",
      description: "Mám nápady na aplikace, které by mohly pomáhat lidem v každodenním životě.",
      items: [
        "Vzdělávací platformu s AI asistentem",
        "Aplikaci pro správu osobních financí",
        "Open-source nástroj pro vývojáře",
        "Mobilní aplikaci pro produktivitu",
      ],
      icon: Rocket,
    },
    {
      title: "Osobní rozvoj",
      description: "Kromě technických dovedností chci rozvíjet i své měkké dovednosti.",
      items: [
        "Zlepšit komunikační schopnosti",
        "Naučit se efektivně prezentovat nápady",
        "Rozvíjet kritické myšlení",
        "Stát se lepším týmovým hráčem",
      ],
      icon: Users,
    },
  ];

  const visions = [
    {
      title: "Profesionální vývojář",
      description: "Stát se full-stack vývojářem, který dokáže vytvářet komplexní webové aplikace.",
      icon: Zap,
    },
    {
      title: "Open-source přispěvatel",
      description: "Aktivně přispívat do open-source projektů a pomáhat komunitě.",
      icon: Globe,
    },
    {
      title: "Mentor pro začátečníky",
      description: "Sdílet své znalosti a pomáhat dalším mladým lidem vstoupit do světa programování.",
      icon: Lightbulb,
    },
    {
      title: "Vlastní startup",
      description: "Založit vlastní technologickou firmu, která bude řešit reálné problémy lidí.",
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Target className="h-5 w-5" />
            <span className="text-sm font-medium">Moje cíle a sny</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Moje <span className="text-gradient">Budoucnost</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mý cíle, sny a plány do budoucna jako mladého programátora. Kam se chci vydat a co chci dosáhnout.
          </p>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Co <span className="text-gradient">chci dosáhnout</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Konkrétní cíle a dovednosti, které se chci naučit v blízké i vzdálenější budoucnosti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                  <p className="text-muted-foreground mb-4">{goal.description}</p>
                  <ul className="space-y-2">
                    {goal.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Má <span className="text-gradient">vize</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jak si představuji svou budoucnost a jaké jsou mé dlouhodobé cíle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visions.map((vision, index) => {
              const Icon = vision.icon;
              return (
                <div key={index} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{vision.title}</h3>
                  <p className="text-muted-foreground">{vision.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground mb-4">
              "Budoucnost patří těm, kdo se dnes učí."
            </blockquote>
            <p className="text-muted-foreground">— Moje motto</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyFuture;
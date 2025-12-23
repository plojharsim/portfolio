import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: "proc-jsem-zacal-programovat",
      title: "Proč jsem začal programovat v 15 letech",
      excerpt: "Moje cesta k prvnímu řádku kódu a co mě na tom nejvíc baví.",
      date: "15. března 2024",
      readTime: "5 min čtení",
      category: "Osobní",
    },
    {
      id: "python-vs-javascript",
      title: "Python vs JavaScript: Co si vybrat?",
      excerpt: "Srovnání dvou nejoblíbenějších jazyků pro začátečníky z mého pohledu.",
      date: "10. března 2024",
      readTime: "8 min čtení",
      category: "Technologie",
    },
    {
      id: "budoucnost-web-vyvoje",
      title: "Jak vidím budoucnost webového vývoje",
      excerpt: "Trendy, které mě zaujaly, a kam si myslím, že web směřuje.",
      date: "1. března 2024",
      readTime: "6 min čtení",
      category: "Vize",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Můj <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sdílím své zkušenosti, postřehy a novinky ze světa technologií.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono text-xs uppercase">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-muted-foreground text-lg mb-6">
                  {post.excerpt}
                </p>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                >
                  Číst více <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
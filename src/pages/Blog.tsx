import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

const Blog = () => {
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
          {blogPosts.length > 0 ? (
            <div className="grid gap-8">
              {blogPosts.map((post) => (
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
          ) : (
            <div className="text-center py-24 px-6 rounded-3xl border border-dashed border-border bg-card/30 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-8">
                <BookOpen className="h-10 w-10 text-primary/40" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Zatím ticho po pěšině...</h2>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                Na prvních článcích usilovně pracuji. Brzy se tu objeví první texty o mých projektech a technologiích.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
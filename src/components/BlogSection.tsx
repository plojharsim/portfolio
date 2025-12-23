import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

const BlogSection = () => {
  const navigate = useNavigate();
  
  // Zobrazíme pouze první 2 nejnovější články
  const featuredPosts = blogPosts.slice(0, 2);

  const handleShowAllPosts = () => {
    navigate("/blog");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section id="blog-preview" className="py-24 relative overflow-hidden">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4">// BLOG</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Poslední <span className="text-gradient">články</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sdílím své myšlenky a zkušenosti ze světa technologií.
            </p>
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono text-[10px] uppercase">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Číst <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" onClick={handleShowAllPosts}>
              Přejít na blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
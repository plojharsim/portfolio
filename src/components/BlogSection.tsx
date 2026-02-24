import { Calendar, Clock, ArrowRight, MessageSquareOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

const BlogSection = () => {
  const navigate = useNavigate();
  
  // Seřadíme články tak, aby ty naposledy přidané byly nahoře a vezmeme první dva
  const featuredPosts = [...blogPosts].reverse().slice(0, 2);
  const postCount = featuredPosts.length;

  const handleShowAllPosts = () => {
    navigate("/blog");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Dynamické třídy pro grid
  const gridClasses = postCount === 1 
    ? "grid md:grid-cols-1 gap-8 mb-12 max-w-md mx-auto" // Centrování jednoho článku
    : "grid md:grid-cols-2 gap-8 mb-12"; // Standardní layout pro dva články

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

          {/* Posts grid / Empty state */}
          {postCount > 0 ? (
            <>
              <div className={gridClasses}>
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
            </>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 rounded-2xl border border-dashed border-border bg-card/30 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <MessageSquareOff className="h-8 w-8 text-primary/40" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Zatím žádné články</h4>
              <p className="text-muted-foreground max-w-sm">
                Na blogu se zatím nic neobjevilo, ale brzy sem určitě něco napíšu. Sleduj mě, ať ti nic neuteče!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
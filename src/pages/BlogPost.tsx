import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MyStory from "./pages/MyStory";
// import AIView from "./pages/AIView"; // Odstraněno
// import MyFuture from "./pages/MyFuture"; // Odstraněno
import ProjectsPage from "./pages/ProjectsPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import YouTube from "./pages/YouTube";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/muj-pribeh" element={<MyStory />} />
          <Route path="/projekty" element={<ProjectsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/youtube" element={<YouTube />} />
          {/* Odstraněné routy:
          <Route path="/pohled-na-ai" element={<AIView />} />
          <Route path="/moje-budoucnost" element={<MyFuture />} />
          */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import EffectsProvider from "@/components/EffectsProvider";
import Index from "./pages/Index";
// import AIView from "./pages/AIView"; // Odstraněno
// import MyFuture from "./pages/MyFuture"; // Odstraněno
const MyStory = lazy(() => import("./pages/MyStory"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <EffectsProvider />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/muj-pribeh" element={<MyStory />} />
          <Route path="/projekty" element={<ProjectsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* Odstraněné routy:
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/pohled-na-ai" element={<AIView />} />
          <Route path="/moje-budoucnost" element={<MyFuture />} />
          */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
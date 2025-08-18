import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ProjectDetails from "./pages/ProjectDetails";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Activities from "./pages/Activities";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import Contact from "./pages/Contact";
import LaunchingEvent from "./pages/LaunchingEvent";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WhatWeDo from "./pages/OurThematicAreas";
 
import NotFound from "./pages/NotFound";
import OurThematicAreas from "./pages/OurThematicAreas";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamMember />} />
          <Route path="/what-we-do" element={<OurThematicAreas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/launching-event" element={<LaunchingEvent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/air-quality-nexus-center">
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

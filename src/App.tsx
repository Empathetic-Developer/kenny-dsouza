import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import HowToUseLovable from "./pages/HowToUseLovable";
import NotFound from "./pages/NotFound";
import RouteChangeScrollToTop from "./components/RouteChangeScrollToTop";
import ClickSpark from "../src/reactbits/ClickSpark/ClickSpark.jsx";
import Recommendations from "./components/Recommendations.js";
import Awards from "./components/Awards.js";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Your content here */}
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* basename="/kenny-dsouza/"> */}
        <HashRouter>
          <RouteChangeScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/how-to-use-lovable" element={<HowToUseLovable />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
      </ClickSpark>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

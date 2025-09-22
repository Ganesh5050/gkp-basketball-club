import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initAnalytics, trackPageView } from "@/lib/analytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Google Analytics tracking ID - replace with your actual ID when deploying
const GA_TRACKING_ID = "G-XXXXXXXXXX";

// Analytics wrapper component
const AnalyticsWrapper = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Initialize analytics once
    window.GA_TRACKING_ID = GA_TRACKING_ID;
    initAnalytics(GA_TRACKING_ID);
  }, []);
  
  useEffect(() => {
    // Track page views when location changes
    trackPageView(location.pathname, document.title);
  }, [location]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsWrapper />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

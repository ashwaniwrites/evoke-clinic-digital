import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MarketingLayout } from "@/layouts/MarketingLayout";
import { BookingLayout } from "@/layouts/BookingLayout";
import Index from "./pages/Index.tsx";
import TreatmentsPage from "./pages/TreatmentsPage.tsx";
import TreatmentDetail from "./pages/TreatmentDetail.tsx";
import LocationDetail from "./pages/LocationDetail.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import { BookStep1, BookStep2, BookStep3 } from "./pages/BookingPages.tsx";
import NotFound from "./pages/NotFound.tsx";
import { PageLoader } from "@/components/ui/PageLoader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "lenis/dist/lenis.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SmoothScroll>
        <PageLoader />
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:slug" element={<TreatmentDetail />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/doctors" element={<div className="pt-20 min-h-screen container mx-auto px-4 py-12"><h1 className="display-hero text-evoke-navy">Our Doctors</h1><p className="text-evoke-textMuted mt-4">Coming soon.</p></div>} />
            <Route path="/results" element={<div className="pt-20 min-h-screen container mx-auto px-4 py-12"><h1 className="display-hero text-evoke-navy">Results Gallery</h1><p className="text-evoke-textMuted mt-4">Coming soon.</p></div>} />
            <Route path="/about" element={<div className="pt-20 min-h-screen container mx-auto px-4 py-12"><h1 className="display-hero text-evoke-navy">About Evoke</h1><p className="text-evoke-textMuted mt-4">Coming soon.</p></div>} />
            <Route path="/blog" element={<div className="pt-20 min-h-screen container mx-auto px-4 py-12"><h1 className="display-hero text-evoke-navy">Knowledge Hub</h1><p className="text-evoke-textMuted mt-4">Coming soon.</p></div>} />
            <Route path="/blog/:slug" element={<div className="pt-20 min-h-screen container mx-auto px-4 py-12"><h1 className="display-hero text-evoke-navy">Article</h1><p className="text-evoke-textMuted mt-4">Coming soon.</p></div>} />
          </Route>
          <Route element={<BookingLayout />}>
            <Route path="/book" element={<BookStep1 />} />
            <Route path="/book/slot" element={<BookStep2 />} />
            <Route path="/book/confirm" element={<BookStep3 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </SmoothScroll>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

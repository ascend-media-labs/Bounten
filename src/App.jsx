import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import AboutUs from './pages/AboutUs';
import Benefits from './pages/Benefits';
import Gallery from './pages/Gallery';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';

// Automatically scroll window to top on route transition, or smooth scroll to hash anchor
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
  }, [pathname, hash]);

  return null;
}

// Inner Content Component to access useLocation for silky page transitions
function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area with Route Animation */}
      <main className="flex-grow">
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/return-and-refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Floating WhatsApp Enquiry Button */}
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

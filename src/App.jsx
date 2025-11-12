import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import { Home } from "./pages/Home";
import Nav from "./components/Nav"; 
import Footer from "./components/Footer";
import ChatNow from "./pages/ChatNow";
import Contact from "./pages/Contact";
import TextLine from "./pages/TextLine";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Test from "./pages/test";


// ------------------------------------------------------
// ROOT WRAPPER
// ------------------------------------------------------

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}

// ------------------------------------------------------
// APP SHELL — layout + routing + nav state
// ------------------------------------------------------
function AppShell() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef(null);

  // accessibility: esc to close, focus trap, body scroll lock
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && open && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="min-h-screen text-neutral-900 bg-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-emerald-50)_0%,var(--color-white)_28%,var(--color-white)_100%)]"></div>

      <Nav
        location={location}
        open={open}
        setOpen={setOpen}
        panelRef={panelRef}
        shouldReduceMotion={shouldReduceMotion}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.25 } }}
          exit={{ opacity: 0, y: -6, transition: { duration: shouldReduceMotion ? 0 : 0.18 } }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="py-12 md:py-16">
            <Routes location={location}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/text-line" element={<TextLine />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chatnow" element={<ChatNow />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}



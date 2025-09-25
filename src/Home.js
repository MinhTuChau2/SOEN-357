import Introduction from './sections/Introduction';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Research from './sections/Research';
import Analysis from './sections/Analysis';
import VisualDesign from './sections/VisualDesign';
import FinalDesign from './sections/FinalDesign';
import Conclusion from './sections/Conclusion';
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from './Logomaybe 3.jfif';

import Personas from './sections/Personas';
import Sketch from './sections/Sketch';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  const menuItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Problem", id: "problem" },
    { label: "Solution", id: "solution" },
    { label: "Research", id: "research" },
    { label: "Analysis", id: "analysis" },
    { label: "Visual Design", id: "visual-design" },
    { label: "Final Design", id: "final-design" },
    { label: "Conclusion", id: "conclusion" },
  ];

  // scroll listener
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });
    setTimeout(() => setIsOpen(false), 220);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      {/* Floating Toolbar */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            ref={headerRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="toolbar"
          >
             <img
                src={Logo}
                alt="Logo"
                className="hero-logo"
              />
            <div className="relative">
              <button
                className="toolbar-button"
                onClick={() => setIsOpen((s) => !s)}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Dropdown menu */}
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="toolbar-dropdown"
                  >
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToId(item.id);
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW Interactive Hero Header */}
    <section className="hero-section">
  {/* Logo */}
 
  {/* Title */}
  <h1 className="hero-title">WELCOME TO "NAME"</h1>

  {/* Subtitle */}
  <p className="hero-subtitle">
    Minhtu Chau - 40232883
  </p>
</section>


      {/* Content */}
     <main className="p-6 max-w-5xl mx-auto space-y-16 mt-12">
        <Introduction />
        <Problem />
        <Solution />
        <Research />
        <Analysis />
        <VisualDesign />
        <Personas/>
        <FinalDesign />
        <Sketch/>
        <Conclusion />
</main>
    </div>
  );
}
    

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from './logoforminiproject.png';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Problem", id: "problem" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
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
    Name of the people
  </p>
</section>


      {/* Content */}
      <main className="p-6 max-w-3xl mx-auto space-y-12 mt-12">
        <section id="home">
          <article>
            <h2 className="text-3xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-600">
              A clean and smooth user interface improves user experience and
              engagement.
            </p>
          </article>
        </section>

        <section id="problem">
          <article>
            <h2 className="text-3xl font-semibold mb-2">The Problem</h2>
            <p className="text-gray-600">
              Smooth animations guide the user’s eye, provide feedback, and
              create a modern feel.
            </p>
          </article>
        </section>

        <section id="about">
          <article>
            <h2 className="text-3xl font-semibold mb-2">Our Solution</h2>
            <p className="text-gray-600">
              Overly complex layouts can overwhelm users. A simple,
              well-structured design allows the content to shine.
            </p>
          </article>
        </section>

        <section id="contact">
          <article>
            <h2 className="text-3xl font-semibold mb-2">Research</h2>
            <p className="text-gray-600">
              Reach out to us anytime — we love hearing from readers and
              collaborators.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
    
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Instagram, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "À Propos" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-light tracking-wide"
            >
              <span className="text-rose-600">Beauty's</span>{" "}
              <span className="text-gray-900">Reyyan</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <span
                  className={`text-sm tracking-wide transition-colors ${
                    location.pathname === item.path
                      ? "text-rose-600"
                      : "text-gray-700 hover:text-rose-600"
                  }`}
                >
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/beautys_reyyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="tel:+32489141781"
              className="flex items-center space-x-2 px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">Réserver</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-rose-100"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 ${
                  location.pathname === item.path
                    ? "text-rose-600 bg-rose-50"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-4 py-4">
              <a
                href="https://www.instagram.com/beautys_reyyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-rose-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="tel:+32489141781"
                className="flex items-center space-x-2 px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">Réserver</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
import { NavLink, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "@/assets/beautys-reyyan-logo.png";
import { BookingModal } from "./BookingModal";
import { siteConfig } from "../siteConfig";

const links = [
  { name: "Accueil", path: "/" },
  { name: "À Propos", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Formations", path: "/formation" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: siteConfig.instagramUrl },
  { label: "Facebook", href: siteConfig.facebookUrl },
];

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out-expo ${
          scrolled ? "py-4 bg-[#FCFBF9]/80 backdrop-blur-md shadow-sm" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo (Left) */}
          <NavLink to="/" className="flex items-center gap-3 relative z-20 shrink-0">
            <img src={logoImg} alt="Beauty's Reyyan Logo" className="h-12 lg:h-14 w-auto object-contain drop-shadow-sm" />
            <span 
              className="text-[#4A3C31] text-lg lg:text-xl tracking-widest hidden md:block whitespace-nowrap" 
              style={{ fontFamily: "'Italiana', serif" }}
            >
              Beauty's Reyyan
            </span>
          </NavLink>

          {/* Desktop Nav (Center) */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 xl:space-x-8 text-xs uppercase tracking-widest font-medium text-[#70655B] w-max">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative overflow-hidden group py-2 ${
                    isActive ? "text-[#4A3C31]" : "hover:text-[#4A3C31] transition-colors"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4A3C31] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B89C8A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out-expo" />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA (Right) */}
          <div className="hidden md:block relative z-20">
            <button onClick={() => openBookingModal()} className="group flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#E6DECE] hover:border-[#B89C8A] text-sm font-medium tracking-wide text-[#4A3C31] transition-all duration-300 overflow-hidden relative cursor-pointer">
               <span className="relative z-10 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#B89C8A] animate-pulse"></span>
                 Prendre Rendez-vous
               </span>
               <div className="absolute inset-0 bg-[#F4EFE6] transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out-expo z-0" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-[#4A3C31] z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#FCFBF9] pt-28 px-6 flex flex-col h-screen"
          >
            <nav className="flex flex-col gap-6 text-3xl font-serif text-[#4A3C31]">
              {links.map((link) => (
                 <NavLink key={link.path} to={link.path} className="flex items-center justify-between border-b border-[#E6DECE] pb-4">
                    {link.name}
                    <ArrowRight className="w-5 h-5 text-[#B89C8A]" />
                 </NavLink>
              ))}
            </nav>
            <div className="mt-12">
               <button onClick={() => openBookingModal()} className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-[#4A3C31] text-white text-lg cursor-pointer">
                 Prendre Rendez-vous
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative flex-grow pt-28">
        <AnimatePresence mode="wait">
           <motion.div
             key={location.pathname}
             initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
             exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
             className="min-h-screen"
           >
              <Outlet />
           </motion.div>
        </AnimatePresence>
      </main>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      <footer className="bg-[#FCFBF9] border-t border-[#E6DECE] py-16 px-6 md:px-12 mt-20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                 <img src={logoImg} alt="Beauty's Reyyan Logo" className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm" />
                 <span 
                   className="text-[#4A3C31] text-2xl sm:text-3xl tracking-widest mt-2 sm:mt-0" 
                   style={{ fontFamily: "'Italiana', serif" }}
                 >
                   Beauty's Reyyan
                 </span>
               </div>
               <p className="max-w-sm text-[#70655B] text-sm leading-relaxed">
                 Où l'esthétique avancée rencontre les soins sur-mesure. Révélez votre beauté naturelle avec nos traitements spécialisés et nos formations professionnelles.
               </p>
            </div>
            
            <div className="space-y-6">
               <h4 className="font-medium tracking-widest uppercase text-xs text-[#4A3C31]">Menu</h4>
               <nav className="flex flex-col gap-3 text-sm text-[#70655B]">
                 {links.map((link) => (
                    <NavLink key={link.path} to={link.path} className="hover:text-[#B89C8A] transition-colors">{link.name}</NavLink>
                 ))}
               </nav>
            </div>

            <div className="space-y-6">
               <h4 className="font-medium tracking-widest uppercase text-xs text-[#4A3C31]">Coordonnées</h4>
               <address className="not-italic text-sm text-[#70655B] leading-relaxed">
                 {siteConfig.address.street}, <br/>
                 {siteConfig.address.postalCode} {siteConfig.address.city} <br/>
                 {siteConfig.address.country} <br/><br/>
                 <a href={siteConfig.phoneHref} className="hover:text-[#B89C8A]">{siteConfig.phoneDisplay}</a>
                 <br/>
                 <a href={siteConfig.emailHref} className="hover:text-[#B89C8A]">{siteConfig.email}</a>
               </address>
            </div>
         </div>
         <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#E6DECE] flex flex-col md:flex-row items-center justify-between text-xs text-[#70655B]">
           <p>© {new Date().getFullYear()} Beauty's Reyyan. Tous droits réservés.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             {socialLinks.map((link) => (
               <a
                 key={link.label}
                 href={link.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-[#4A3C31]"
               >
                 {link.label}
               </a>
             ))}
           </div>
         </div>
      </footer>
    </>
  );
}

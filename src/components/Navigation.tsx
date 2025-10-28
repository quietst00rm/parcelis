import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const headerBg = scrolled || !isHomePage 
    ? "bg-white/95 shadow-sm" 
    : "bg-white/90 shadow-md";
  
  const textColor = scrolled || !isHomePage 
    ? "text-foreground" 
    : "text-foreground";
  
  const menuIconColor = scrolled || !isHomePage 
    ? "text-foreground" 
    : "text-foreground";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`} style={{ backdropFilter: 'blur(12px)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-[72px]">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PARCELIS" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 relative ${textColor} hover:text-primary nav-link-animated`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/apply" 
              className="btn btn-primary h-12 px-6 text-base inline-flex items-center gap-2"
            >
              Apply Now
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className={menuIconColor} />
            ) : (
              <Menu size={24} className={menuIconColor} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-out Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-primary z-50 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 px-6 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white text-lg font-medium py-3 px-4 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Apply Button */}
        <div className="px-6 mt-8">
          <Link 
            to="/apply" 
            className="btn btn-primary w-full bg-white text-primary hover:bg-white/90"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, FileText } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
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
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://claims.myparcelis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary h-12 px-6 text-base inline-flex items-center gap-2"
            >
              <FileText size={16} />
              File a Claim
            </a>
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

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`md:hidden fixed top-0 left-0 w-screen h-screen bg-primary z-50 flex flex-col items-center justify-center transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 text-white z-51"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white text-2xl font-medium hover:opacity-80 transition-opacity"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Action Buttons */}
          <a
            href="https://claims.myparcelis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-white/10 text-white hover:bg-white/20 border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText size={20} />
            File a Claim
          </a>
          <Link
            to="/apply"
            className="bg-white text-primary hover:bg-white/95 px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Apply Now
            <ChevronRight size={20} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

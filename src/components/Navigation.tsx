import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50" style={{ height: '80px' }}>
      <div className="container mx-auto px-4 h-[80px]">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PARCELIS" className="h-12 w-auto brightness-200" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-text-secondary hover:text-primary transition-all duration-300 text-base font-bold relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-hover transition-all hover:shadow-[0_0_20px_rgba(0,229,212,0.4)] px-6 py-2 rounded-lg font-bold">
              <Link to="/apply">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Content */}
          <div className="md:hidden fixed inset-0 z-45 pointer-events-none">
            {/* Spacer for header */}
            <div className="h-[80px]" />
            
            {/* Menu items container */}
            <div className="bg-background h-[calc(100vh-80px)] pointer-events-auto animate-in slide-in-from-right duration-300">
              <div className="flex flex-col items-center justify-center h-full px-4 gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-white text-2xl font-bold hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="w-full max-w-xs bg-primary text-primary-foreground hover:bg-primary-hover text-lg py-6 font-bold">
                  <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;

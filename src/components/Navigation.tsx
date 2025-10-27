import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-dark border-b border-primary-medium z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PARCELIS" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground hover:text-primary-light-tint transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="hero" className="bg-background text-primary hover:bg-background/90">
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Link
              to="/login"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-dark border-b border-primary-medium">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground hover:text-primary-light-tint transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="hero" className="w-full bg-background text-primary hover:bg-background/90">
              <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </Button>
            <Link
              to="/login"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

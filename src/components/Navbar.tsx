import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import logo from "@/assets/logo.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Check if we're on a white background page (Terms, Privacy)
  const isWhiteBgPage = ["/terms", "/privacy", "/our-partners"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Self-Insurance Risks", path: "/risk-calculator" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  // Determine if navbar should have white background
  const hasWhiteBackground = scrolled || isWhiteBgPage || isOpen;

  // Dynamic Styles
  const navBackgroundClass = hasWhiteBackground ? "bg-white shadow-md" : "bg-transparent";

  const textColorClass = hasWhiteBackground ? "text-gray-600" : "text-white drop-shadow-md";
  const hoverColorClass = hasWhiteBackground ? "hover:text-brand" : "hover:text-blue-200";
  const activeColorClass = hasWhiteBackground
    ? "text-brand font-bold"
    : "text-white font-bold underline decoration-2 underline-offset-4";

  const applyButtonClass = hasWhiteBackground
    ? "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20"
    : "bg-white hover:bg-gray-100 text-brand shadow-lg";

  const fileClaimButtonClass = hasWhiteBackground
    ? "text-gray-700 hover:text-brand font-medium"
    : "bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg backdrop-blur-sm font-medium transition-all";

  // Hamburger icon color
  const mobileIconColor = hasWhiteBackground ? "#4f46e5" : "#ffffff";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={hasWhiteBackground ? logo : logoWhite}
                alt="PARCELIS Logo"
                className="h-10 w-auto transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path) ? activeColorClass : `${textColorClass} ${hoverColorClass}`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://claims.myparcelis.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm transition-colors ${fileClaimButtonClass}`}
            >
              File a Claim
            </a>
            <Link
              to="/apply"
              className={`text-sm font-bold px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 ${applyButtonClass}`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Actions (Claim Button + Menu) */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile File a Claim Button (Moved here) */}
            {!isOpen && (
              <a
                href="https://claims.myparcelis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand text-xs font-bold px-3 py-2 rounded-lg shadow-md border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                File a Claim
              </a>
            )}

            {/* Mobile Menu Button - Seamless style */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-colors"
              style={{
                color: mobileIconColor,
                // Background color removed for seamless look
              }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full rounded-b-3xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                  isActive(link.path) ? "text-brand bg-brand-50" : "text-gray-700 hover:text-brand hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-2">
              {/* File a claim removed from here as it is now in the top bar */}
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

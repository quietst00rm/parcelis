import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import logoColor from "@/assets/color1_logo_transparent_background.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "Self-Insurance Risk Calculator", path: "/risk-calculator" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Pages with purple hero backgrounds
  const purpleHeroPages = ["/", "/how-it-works", "/pricing", "/about", "/contact", "/faq", "/apply"];
  const hasPurpleHero = purpleHeroPages.includes(location.pathname);
  const isRiskCalculatorPage = location.pathname === "/risk-calculator";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Navbar is white (solid) when scrolled OR mobile menu is open
  const isNavbarWhite = scrolled || mobileMenuOpen;
  
  // Use dark text when navbar is white OR on non-purple pages
  const useDarkText = isNavbarWhite || (!hasPurpleHero && !isRiskCalculatorPage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavbarWhite ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={useDarkText ? logoColor : logoWhite}
              alt="PARCELIS"
              className="h-10 lg:h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Mobile File a Claim Button - Always visible in topbar */}
          <a
            href="https://claims.myparcelis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex items-center gap-1.5 px-3 py-2 text-sm font-semibold bg-white text-brand rounded-lg transition-colors hover:bg-gray-50 shadow-sm"
          >
            <FileText size={16} />
            <span>File a Claim</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? useDarkText
                      ? "text-brand font-bold"
                      : "text-white font-bold underline decoration-2 underline-offset-4"
                    : useDarkText
                      ? "text-slate-900 hover:text-brand"
                      : "text-white hover:text-blue-200 drop-shadow-md"
                }`}
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
              className={`text-sm transition-colors font-medium ${
                useDarkText
                  ? "text-gray-700 hover:text-brand"
                  : "bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm"
              }`}
            >
              File a Claim
            </a>
            <Link
              to="/apply"
              className={`text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 ${
                useDarkText
                  ? "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20"
                  : "bg-white hover:bg-gray-100 text-brand shadow-lg"
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Apply Now
            </Link>
          </div>

          {/* Hamburger Menu Button - Seamless without container */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} className={useDarkText ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu size={28} className={useDarkText ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 pb-6 rounded-b-2xl">
          <div className="px-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive(link.path) ? "text-brand bg-brand/5" : "text-gray-700 hover:text-brand hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-2">
              <Link
                to="/apply"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="w-full text-center bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-lg shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

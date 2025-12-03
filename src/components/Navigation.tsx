import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import logo from "@/assets/logo.png";

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
  const isRiskCalculatorPage = location.pathname === "/risk-calculator";
  const purpleHeroPages = ["/", "/how-it-works", "/pricing", "/about", "/contact", "/apply", "/faq"];
  const hasPurpleHero = purpleHeroPages.includes(location.pathname);

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

  // ==========================================
  // COLOR LOGIC
  // ==========================================

  // 1. Trigger "Light Mode" (White Background)
  const isLightMode = scrolled || mobileMenuOpen || (!hasPurpleHero && !isRiskCalculatorPage);

  // 2. DEFINE COLORS
  const COLOR_WHITE = "#ffffff";

  // This is the "Purple/Blue" brand color commonly used (Indigo-600).
  // If your specific purple is different, change this Hex code!
  const COLOR_BRAND = "#4f46e5";

  // 3. LOGO FILTER
  // If we are in Light Mode, we try to turn the White logo into Dark Blue/Purple.
  // 'brightness(0)' makes it Black.
  // The complex filter below attempts to tint it Blue/Purple.
  // If this looks wrong, change it to just: { filter: 'brightness(0)' } for pure Black.
  const logoStyle = isLightMode
    ? {
        filter:
          "brightness(0) saturate(100%) invert(24%) sepia(96%) saturate(7460%) hue-rotate(261deg) brightness(93%) contrast(101%)",
      }
    : {};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isLightMode ? "bg-white shadow-md" : "bg-transparent glass-nav"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            {/* LOGO: Uses the Purple/Blue filter defined above */}
            <img
              src={logo}
              alt="PARCELIS"
              className="h-10 lg:h-20 w-auto transition-all duration-300"
              style={logoStyle}
            />
          </Link>

          {/* Mobile File a Claim Button */}
          <a
            href="https://claims.myparcelis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex items-center gap-1.5 px-4 py-2 text-sm font-semibold border-2 rounded-lg transition-colors"
            style={{
              // Force Purple/Blue border and text
              borderColor: isLightMode ? COLOR_BRAND : COLOR_WHITE,
              color: isLightMode ? COLOR_BRAND : COLOR_WHITE,
              backgroundColor: isLightMode ? "rgba(79, 70, 229, 0.05)" : "rgba(255, 255, 255, 0.1)",
            }}
          >
            <FileText size={16} color={isLightMode ? COLOR_BRAND : COLOR_WHITE} />
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
                    ? isLightMode
                      ? "text-brand font-bold"
                      : "text-white font-bold underline decoration-2 underline-offset-4"
                    : isLightMode
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
              className={`text-sm transition-colors ${
                isLightMode
                  ? "text-gray-700 hover:text-brand font-medium"
                  : "bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm font-medium transition-all"
              }`}
            >
              File a Claim
            </a>
            <Link
              to="/apply"
              className={`text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 ${
                isLightMode
                  ? "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20"
                  : "bg-white hover:bg-gray-100 text-brand shadow-lg"
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Apply Now
            </Link>
          </div>

          {/* 
              HAMBURGER / CLOSE BUTTON
              Forces the icon color to be Purple/Blue (COLOR_BRAND) when menu is open
          */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none"
            style={{
              backgroundColor: isLightMode ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)",
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              // OPEN STATE (X Icon): Force Purple/Blue
              <X size={28} color={COLOR_BRAND} />
            ) : (
              // CLOSED STATE (Menu Icon): Purple/Blue if Scrolled, otherwise White
              <Menu size={28} color={isLightMode ? COLOR_BRAND : COLOR_WHITE} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl absolute w-full shadow-xl rounded-b-2xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive(link.path) ? "text-brand bg-brand-50" : "text-gray-700 hover:text-brand hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-2">
              <a
                href="https://claims.myparcelis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-brand font-bold bg-white border border-gray-200 py-3 rounded-lg hover:bg-gray-50"
              >
                File a Claim
              </a>
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

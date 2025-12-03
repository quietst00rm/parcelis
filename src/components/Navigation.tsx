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

  // =========================================================
  // LOGIC: DETERMINE COLORS
  // =========================================================

  // 1. Is the background white?
  // YES if: Scrolled OR Menu Open OR Not on Purple Hero
  const isBackgroundWhite = scrolled || mobileMenuOpen || (!hasPurpleHero && !isRiskCalculatorPage);

  // 2. FORCE COLORS based on background
  // If background is white, text MUST be black.
  const isDarkText = isBackgroundWhite;

  // 3. CSS Classes
  const navClasses = isBackgroundWhite ? "bg-white shadow-md" : "bg-transparent glass-nav";

  // 4. Logo Filter
  // If the background is white, we invert the White Logo to make it Black.
  const logoStyle = isDarkText ? { filter: "invert(1) brightness(0)" } : {};

  // 5. Icon Color (Hex Code)
  // We use this to force the icon color via inline styles
  const iconColor = isDarkText ? "#000000" : "#ffffff";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            {/* 
                👇 FORCE LOGO COLOR 
                We use the style prop to physically invert the colors of the image.
                This overrides any CSS class issues.
            */}
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
            // 👇 FORCE BUTTON COLORS VIA INLINE STYLE
            style={{
              borderColor: isDarkText ? "#4f46e5" : "#ffffff",
              color: isDarkText ? "#4f46e5" : "#ffffff",
              backgroundColor: isDarkText ? "rgba(79, 70, 229, 0.05)" : "rgba(255, 255, 255, 0.1)",
            }}
          >
            <FileText size={16} color={isDarkText ? "#4f46e5" : "#ffffff"} />
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
                    ? isDarkText
                      ? "text-brand font-bold"
                      : "text-white font-bold underline decoration-2 underline-offset-4"
                    : isDarkText
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
                isDarkText
                  ? "text-gray-700 hover:text-brand font-medium"
                  : "bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm font-medium transition-all"
              }`}
            >
              File a Claim
            </a>
            <Link
              to="/apply"
              className={`text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 ${
                isDarkText
                  ? "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20"
                  : "bg-white hover:bg-gray-100 text-brand shadow-lg"
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Apply Now
            </Link>
          </div>

          {/* 
              👇 FORCE HAMBURGER/CLOSE ICON COLOR
              We use `style={{ color: ... }}` directly on the button and the icon.
              This makes it impossible for Tailwind to keep it white.
          */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none transition-colors"
            style={{
              color: iconColor,
              backgroundColor: isDarkText ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)",
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} style={{ color: "#000000", stroke: "#000000" }} />
            ) : (
              <Menu size={28} style={{ color: iconColor, stroke: iconColor }} />
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

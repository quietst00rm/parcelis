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

  // =======================================================
  //  THE FIX:
  //  The Navbar ONLY turns white if we SCROLL.
  //  Opening the menu (mobileMenuOpen) does NOT force it to white anymore.
  // =======================================================

  // 1. Determine if we are in "White Background Mode"
  // We only want the white background if the user has scrolled down.
  // If they are at the top, it stays transparent (showing the hero).
  const isNavbarWhite = scrolled;

  // 2. Define Colors based on Scroll State
  const COLOR_WHITE = "#ffffff";
  const COLOR_BRAND = "#4f46e5";
  const COLOR_BLACK = "#0f172a";

  // If scrolled (White BG), use Brand/Black color.
  // If at top (Transparent BG), use White color.
  const activeTextColor = isNavbarWhite ? COLOR_BLACK : COLOR_WHITE;
  const activeIconColor = isNavbarWhite ? COLOR_BRAND : COLOR_WHITE;

  // 3. Logo Filter
  // If background is white (scrolled), invert the logo to make it dark.
  // If transparent (top), keep it natural (white).
  const logoFilter = isNavbarWhite
    ? "invert(1) brightness(0)" // Turns white logo black/dark
    : "none"; // Keeps white logo white

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavbarWhite ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="PARCELIS"
              className="h-10 lg:h-20 w-auto transition-all duration-300"
              style={{ filter: logoFilter }}
            />
          </Link>

          {/* Mobile File a Claim Button */}
          <a
            href="https://claims.myparcelis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex items-center gap-1.5 px-4 py-2 text-sm font-semibold border-2 rounded-lg transition-colors"
            style={{
              borderColor: activeIconColor,
              color: activeIconColor,
              backgroundColor: isNavbarWhite ? "rgba(79, 70, 229, 0.05)" : "rgba(255, 255, 255, 0.1)",
            }}
          >
            <FileText size={16} color={activeIconColor} />
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
                    ? isNavbarWhite
                      ? "text-brand font-bold"
                      : "text-white font-bold underline decoration-2 underline-offset-4"
                    : isNavbarWhite
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
                isNavbarWhite
                  ? "text-gray-700 hover:text-brand font-medium"
                  : "bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm font-medium transition-all"
              }`}
            >
              File a Claim
            </a>
            <Link
              to="/apply"
              className={`text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 ${
                isNavbarWhite
                  ? "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20"
                  : "bg-white hover:bg-gray-100 text-brand shadow-lg"
              }`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Apply Now
            </Link>
          </div>

          {/* 
              HAMBURGER MENU BUTTON
              Since the header is transparent (when at top), 
              the 'activeIconColor' will be WHITE.
              This means the Close (X) button will be visible against the purple Hero.
          */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} color={activeIconColor} /> : <Menu size={28} color={activeIconColor} />}
          </button>
        </div>
      </div>

      {/* 
          MOBILE MENU PANEL
          We add 'top-20' so it starts below the header, leaving the header transparent.
      */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 pb-6 rounded-b-2xl">
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

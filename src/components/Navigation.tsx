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
  
  // Pages with purple hero backgrounds that need transparent nav when not scrolled
  const purpleHeroPages = ['/', '/how-it-works', '/pricing', '/about', '/contact', '/apply', '/faq'];
  const hasPurpleHero = purpleHeroPages.includes(location.pathname);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  // Dynamic Styles
  // Purple hero pages: Transparent when not scrolled, white text
  // Risk calculator: Always transparent background
  // Other pages or scrolled: Glass nav with dark text
  const navBackgroundClass = scrolled 
    ? 'glass-nav' 
    : (hasPurpleHero || isRiskCalculatorPage ? 'bg-transparent' : 'glass-nav');
    
  const textColorClass = (scrolled || (!hasPurpleHero && !isRiskCalculatorPage)) ? 'text-gray-600' : 'text-white drop-shadow-md';
  const hoverColorClass = (scrolled || (!hasPurpleHero && !isRiskCalculatorPage)) ? 'hover:text-brand' : 'hover:text-blue-200';
  const activeColorClass = (scrolled || (!hasPurpleHero && !isRiskCalculatorPage)) ? 'text-brand font-bold' : 'text-white font-bold underline decoration-2 underline-offset-4';
  
  // Button logic:
  // Static on purple hero: White Background, Purple Text
  // Scrolled or non-purple pages: Purple Background, White Text
  const applyButtonClass = (scrolled || (!hasPurpleHero && !isRiskCalculatorPage))
    ? 'bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20'
    : 'bg-white hover:bg-gray-100 text-brand shadow-lg';

  const fileClaimButtonClass = (scrolled || (!hasPurpleHero && !isRiskCalculatorPage))
    ? 'text-gray-700 hover:text-brand font-medium'
    : 'bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm font-medium transition-all';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PARCELIS" className="h-10 lg:h-20 w-auto" />
          </Link>

          {/* Mobile File a Claim Button - Center */}
          <a
            href="https://claims.myparcelis.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`lg:hidden flex items-center gap-1.5 px-4 py-2 text-sm font-semibold border-2 rounded-lg transition-colors ${
              (scrolled || (!hasPurpleHero && !isRiskCalculatorPage))
                ? 'text-brand border-brand hover:bg-brand/5'
                : 'text-white border-white hover:bg-white/10'
            }`}
          >
            <FileText size={16} className={(scrolled || (!hasPurpleHero && !isRiskCalculatorPage)) ? 'text-brand' : 'text-white'} />
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
                    ? activeColorClass
                    : `${textColorClass} ${hoverColorClass}`
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
              className={`text-sm transition-colors ${fileClaimButtonClass}`}
            >
              File a Claim
            </a>
            <Link
              to="/apply"
              className={`text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 ${applyButtonClass}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none ${textColorClass} ${hoverColorClass}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full shadow-xl rounded-b-3xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                  isActive(link.path)
                    ? 'text-brand bg-brand-50'
                    : 'text-gray-700 hover:text-brand hover:bg-gray-50'
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
                className="w-full text-center text-brand font-bold bg-white border border-gray-200 py-3 rounded-xl hover:bg-gray-50"
              >
                File a Claim
              </a>
              <Link
                to="/apply"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="w-full text-center bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl shadow-md"
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

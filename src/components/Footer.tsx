import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-primary-medium">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logoWhite} alt="PARCELIS" className="h-8 mb-4" />
            <p className="text-sm text-primary-foreground/80">
              Merchant-first shipping insurance with comprehensive coverage.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-light-tint transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-primary-foreground/70 hover:text-primary-light-tint transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-primary-foreground/70 hover:text-primary-light-tint transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-light-tint transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-primary-light-tint transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-primary-light-tint transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@parcelis.com" className="text-sm text-primary-foreground/70 hover:text-primary-light-tint transition-colors">
                  support@parcelis.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-medium text-center text-sm text-primary-foreground/70">
          <p>© 2025 PARCELIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

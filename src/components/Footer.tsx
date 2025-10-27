import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import hartfordLogo from "@/assets/logos/hartford.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="PARCELIS" className="h-8 mb-4" />
            <p className="text-sm text-muted-foreground">
              Merchant-first shipping insurance backed by The Hartford.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@parcelis.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  support@parcelis.com
                </a>
              </li>
              <li>
                <a href="tel:+18005551234" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (800) 555-1234
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-semibold mb-2">Underwritten by:</p>
              <img src={hartfordLogo} alt="The Hartford insurance logo" className="h-8 object-contain" />
              <p className="text-xs text-muted-foreground mt-2">Licensed Reinsurance Provider</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 PARCELIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

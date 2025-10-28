import { Link } from "react-router-dom";
import { Shield, Mail, Linkedin, Twitter } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(237_67%_19%)] text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logoWhite} alt="PARCELIS" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Turn package protection into profit. Zero hassle. Real insurance.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Product Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-4">
              <li>
                <a href="/#how-it-works" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#platforms" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  Platforms
                </a>
              </li>
              <li>
                <a href="/#calculator" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  Calculator
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & Contact Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-white/70 hover:text-white transition-colors inline-block">
                  Terms of Use
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h4>
              <a href="mailto:hello@parcelis.com" className="text-base text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                <Mail size={16} />
                hello@parcelis.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} PARCELIS. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-sm text-white/60">
            <span>Underwritten by</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
              <Shield size={18} className="text-white/80" />
              <span className="font-semibold text-white/90">The Hartford</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

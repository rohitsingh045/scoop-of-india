import { Heart, IceCream, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden border-t border-white/10 mt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IceCream className="w-8 h-8 text-primary" />
              <div>
                <span className="text-xl font-bold text-white block">नमस्ते भारत</span>
                <span className="text-xs text-white/70">ICE CREAM</span>
              </div>
            </div>
            <p className="text-sm text-white/80">
              हर स्वाद में एक मुस्कान — A smile in every scoop 🍨✨
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-white hover:text-accent transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-sm text-white/70 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-sm text-white/70">Ice Cream Cones</li>
              <li className="text-sm text-white/70">Kulfi</li>
              <li className="text-sm text-white/70">Ice Cream Bars</li>
              <li className="text-sm text-white/70">Family Packs</li>
              <li className="text-sm text-white/70">Party Packs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>123 Ice Cream Street, Delhi, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>info@namastebharat.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>in India</span>
            </div>
            <p className="text-sm text-white/70">
              © 2024 Namaste Bharat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

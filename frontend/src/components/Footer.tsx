import { Link } from "react-router-dom";
import footerImage from "@/assets/footer-cyberpunk.jpg";

export const Footer = () => {
  return (
    <footer className="relative z-20 overflow-hidden border-t border-primary/30" style={{background: 'none'}}>
      {/* Background Image with Fade Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${footerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-cyber-dark/80" style={{zIndex: 2}} />
      </div>
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative" style={{zIndex: 3}}>
        {/* Brand & Slogan */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-primary">OmniBOTix</span>
          </div>
          <p className="text-muted-foreground mb-2">The Future of AI Automation</p>
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} OmniBOTix Inc. All rights reserved.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-primary">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-accent transition-colors text-foreground">Home</Link></li>
            <li><Link to="/agents" className="hover:text-accent transition-colors text-foreground">Browse Agents</Link></li>
            <li><Link to="/custom" className="hover:text-accent transition-colors text-foreground">Create Custom</Link></li>
            <li><Link to="/build" className="hover:text-accent transition-colors text-foreground">Build Service</Link></li>
            <li><Link to="/dashboard" className="hover:text-accent transition-colors text-foreground">Dashboard</Link></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3 text-primary">Company</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-accent transition-colors text-foreground">About Us</a></li>
            <li><a href="#careers" className="hover:text-accent transition-colors text-foreground">Careers</a></li>
            <li><a href="#blog" className="hover:text-accent transition-colors text-foreground">Blog</a></li>
            <li><a href="#support" className="hover:text-accent transition-colors text-foreground">Support</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-primary">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@omnibotix.com" className="hover:text-accent transition-colors text-foreground">support@omnibotix.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-accent transition-colors text-foreground">+1 (234) 567-890</a></li>
            <li>Address: <span className="text-muted-foreground">123 Cyber Ave, Tech City, 90001</span></li>
          </ul>
        </div>
      </div>
      <div className="w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary animate-pulse relative" style={{zIndex: 3}} />
    </footer>
  );
};

export default Footer; 
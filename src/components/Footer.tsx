import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" }
  ];



  return (
    <footer className="glass-effect border-t border-border/50 py-12 sm:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
              <img 
                src="/lovable-uploads/d8014c2c-0d0b-4866-974f-ace3b84333d0.png" 
                alt="E-CELL LNCTE Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-shimmer">E-CELL LNCTE</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
              Fostering innovation and entrepreneurship at Lakshmi Narayan College of Technology. 
              Building the next generation of entrepreneurs.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-xl glass-effect text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm">e-cell@lncte.ac.in</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-start justify-center lg:justify-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-center lg:text-left">
                  Lakshmi Narayan College of Technology,<br />
                  Bhopal, Madhya Pradesh
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} E-CELL LNCTE. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
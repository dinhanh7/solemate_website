import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@/assets/solemate_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#dudoan", label: "Dự đoán bàn chân bẹt" },
    { href: "#solution", label: "Giải pháp" },
    { href: "#khac", label: "Khác" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="top-0 left-0 right-0 z-[100] bg-[#1C3D7A] backdrop-blur-sm border-b border-border/20">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#!" className="flex items-center">
          <img src={logoImage} alt="SOLEMATE" className="h-16 md:h-20" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu - Sheet Component */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="p-2 text-white"
              aria-label="Toggle menu"
              style={{ visibility: isMenuOpen ? 'hidden' : 'visible' }}
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary text-foreground"
              aria-label="Close menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <nav className="flex flex-col gap-6 mt-8">
              <a href="#!" className="flex items-center mb-4">
                <img src={logoImage} alt="SOLEMATE" className="h-16" />
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

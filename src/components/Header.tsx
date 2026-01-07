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
    <header className="top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#!" className="flex items-center">
          <img src={logoImage} alt="SOLEMATE" className="h-10 md:h-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu - Sheet Component */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="p-2"
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
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
              aria-label="Close menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <nav className="flex flex-col gap-6 mt-8">
              <a href="#!" className="flex items-center mb-4">
                <img src={logoImage} alt="SOLEMATE" className="h-10" />
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

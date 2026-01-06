import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#!", label: "Trang chủ", active: true },
    { href: "#dudoan", label: "Dự đoán bàn chân bẹt" },
    { href: "#service", label: "Dịch vụ" },
    { href: "#khac", label: "Khác" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#!" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-primary">SOLEMATE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? "nav-link-active" : "nav-link"}
            >
              {link.label}
            </a>
          ))}
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-background z-40 md:hidden">
          <nav className="container py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-lg ${link.active ? "nav-link-active" : "nav-link"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

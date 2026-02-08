import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Automatización", href: "#proceso" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-gradient-to-b from-black/70 via-black/20 to-transparent backdrop-blur-sm py-6 border-b-0"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src={isScrolled ? "/logo-negra.png" : "/logo-blanco.png"}
            alt="AlekAgency Logo"
            className="h-12 w-auto drop-shadow-md transition-opacity duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors font-medium text-shadow-sm hover:underline underline-offset-4 ${isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/90 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="btn-pulse-glow border-0 shadow-lg group" asChild>
            <a
              href="https://cal.com/alek-nava-i4gvq6/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Agendar llamada
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 absolute top-full left-0 right-0 shadow-2xl animate-fade-in-down">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors py-3 text-lg border-b border-white/5 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="btn-pulse-glow border-0 w-full mt-4 py-6 text-lg"
              asChild
            >
              <a
                href="https://cal.com/alek-nava-i4gvq6/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar llamada
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

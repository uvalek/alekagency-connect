import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold text-white mb-4 block">
              AlekAgency
            </span>
            <p className="text-white/70 mb-6">
              Automatizamos tu marketing para convertir atención en clientes. Creatividad y tecnología trabajando juntas 24/7.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#planes" className="text-white/70 hover:text-white transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-white/70 hover:text-white transition-colors">
                  Cómo funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:agencyalek@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  agencyalek@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/522461957348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  246 195 7348
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/alekagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                  @alekagency
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} AlekAgency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

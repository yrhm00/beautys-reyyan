import { Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-rose-50 to-white border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-light">
              <span className="text-rose-600">Beauty's</span>{" "}
              <span className="text-gray-900">Reyyan</span>
            </h3>
            <p className="text-sm text-gray-600">
              Votre destination pour la beauté et le bien-être.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/beautys_reyyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rose-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
              <Clock size={16} className="mr-2" />
              Horaires
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Lun - Ven: 9h00 - 19h00</li>
              <li>Samedi: 10h00 - 18h00</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Rue des Hauchies 93<br />6060 Gilly, Belgique</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone size={16} />
                <a href="tel:+32489141781" className="hover:text-rose-600 transition-colors">
                  +32 489 14 17 81
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail size={16} />
                <a href="mailto:contact@beautysreyyan.fr" className="hover:text-rose-600 transition-colors">
                  contact@beautysreyyan.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-100 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Beauty's Reyyan. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
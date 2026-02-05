import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ifs-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">IFS Healthcare Limited</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Providing specialized health sector services to private and public organizations across Nigeria, Africa, and the Middle East.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ifshealthcare" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/IFS-Healthcare-107510284496795" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ifshealthcare/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/ifs-healthcare/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-ifs-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-ifs-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-ifs-red transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-ifs-red transition-colors">Contact Support</Link></li>
              <li><Link to="#" className="hover:text-ifs-red transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-ifs-red transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Facilities Management</li>
              <li>Healthcare Resourcing</li>
              <li>Healthcare Financing</li>
              <li>Diaspora Skills Repatriation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-ifs-red flex-shrink-0" />
                <span>5a Eunice Tutorial Close,<br />Gbagada Phase II,<br />Gbagada, Lagos</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-ifs-red flex-shrink-0" />
                <span>+234-812 820 8855</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-ifs-red flex-shrink-0" />
                <span>info@ifshealthcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} IFS Healthcare Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
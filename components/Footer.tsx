import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816"
                alt="FOLICEA Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold">FOLICEA</h3>
                <p className="text-sm text-gray-400">Summit 2025</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Federation of Liberian Communities in East Africa - Building bridges, 
              strengthening bonds, and creating lasting impact across our diaspora.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100063613104073" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-gray-300 hover:text-white transition-colors">
                  Event Agenda
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-gray-300 hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-gray-300 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>



          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-liberian-red flex-shrink-0" />
                <a href="mailto:foliceasummit@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  foliceasummit@gmail.com
                </a>
              </div>
                             <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Phone className="w-5 h-5 text-liberian-red" />
                </div>
                <div>
                  <p className="text-gray-300">+250 792 109 775 | +250 791 349 853</p>
                  <div className="flex items-center mt-1">
                    <MessageCircle className="w-4 h-4 text-liberian-red mr-2" />
                    <a 
                      href="https://wa.me/231776038583" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      WhatsApp: +231 776 038 583
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 FOLICEA Summit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

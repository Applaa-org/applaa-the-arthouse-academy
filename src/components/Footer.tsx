import { Link } from '@tanstack/react-router';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 9 && currentHour < 21;

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-xl font-bold">The ArtHouse</span>
                <span className="block text-sm text-blue-200">Academy</span>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Nurturing creativity and artistic excellence in the heart of the UK since 2010.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-blue-100 hover:text-white transition-colors">Our Courses</Link></li>
              <li><Link to="/gallery" className="text-blue-100 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-blue-100 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/booking" className="text-blue-100 hover:text-white transition-colors">Enrollment</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-blue-200" />
                <div>
                  <p className="text-blue-100">123 Creative Street</p>
                  <p className="text-blue-100">London, UK, SW1A 1AA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-200" />
                <p className="text-blue-100">+44 20 7123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-200" />
                <p className="text-blue-100">info@arthouseacademy.co.uk</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Monday - Friday</span>
                <span className="text-blue-100">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Saturday</span>
                <span className="text-blue-100">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Sunday</span>
                <span className="text-blue-100">10:00 AM - 4:00 PM</span>
              </div>
              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span className={`font-medium ${isOpen ? 'text-green-300' : 'text-red-300'}`}>
                    {isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-blue-100 mb-4">Subscribe to our newsletter for updates and special offers</p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white/50"
              />
              <button className="px-6 py-2 bg-yellow-500 text-blue-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 The ArtHouse Academy. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">GDPR Compliance</a>
            </div>
          </div>
        </div>
      </div>

      <MadeWithApplaa />
    </footer>
  );
}
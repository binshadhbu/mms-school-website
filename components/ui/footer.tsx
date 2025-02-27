

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full bg-gray-900 text-white py-10 mt-20">
      <div className="container  lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="flex items-center gap-2">
              <Phone size={18} /> +91 XXXXXXXXXX
            </p>
            <p className="flex items-center gap-2 mt-2">
              <Mail size={18} /> example@email.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <MapPin size={18} /> Address Placeholder
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-400">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Twitter size={24} />
              </Link>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Find Us</h2>
            <div className="w-full h-40 bg-gray-700 flex items-center justify-center">
              <span>Map Placeholder</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>{new Date().getFullYear()} MMS School</p>
        </div>
      </div>
    </footer>


  );
};

export default Footer;


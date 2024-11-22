import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <SocialLink href="#" icon={<Twitter className="h-6 w-6" />} />
          <SocialLink href="#" icon={<Github className="h-6 w-6" />} />
          <SocialLink href="#" icon={<Mail className="h-6 w-6" />} />
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} SubTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-gray-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default Footer;
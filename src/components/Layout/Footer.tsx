import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white dark:bg-dark-primary border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-4">
              WebDesign
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Creating stunning websites that make an impact. Modern solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-neon-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Design',
                'Web Development',
                'E-commerce',
                'SEO Optimization',
                'Mobile Apps',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-neon-blue transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get in touch with us for your next project
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-neon-blue transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} WebDesign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    console.log('Initial theme check:', saved);
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
      console.log('Setting initial dark mode');
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
      console.log('Setting initial light mode');
    }
  }, []);

  const toggleDarkMode = () => {
    console.log('Toggle clicked! Current darkMode:', darkMode);
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Switched to dark mode');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Switched to light mode');
    }

    // Debug: Check if class was actually added/removed
    setTimeout(() => {
      const hasDarkClass = document.documentElement.classList.contains('dark');
      console.log('Dark class present:', hasDarkClass);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/10 dark:bg-gray-900/80 border border-gray-300/20 dark:border-white/20' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <img src="/logo.png" alt="Global Pro Tech Logo" className="h-10 w-auto" />
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a key={item.name} href={item.href} whileHover={{ y: -2 }} className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition-colors duration-200 font-medium">
                {item.name}
              </motion.a>
            ))}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Get Quote</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full border border-gray-300/20 dark:border-white/20 bg-white/10 dark:bg-gray-800 hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-gray-300/20 dark:border-white/20 bg-white/10 dark:bg-gray-800 hover:bg-white/20 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition-colors duration-200">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden backdrop-blur-md bg-white/10 dark:bg-gray-900/80 border border-gray-300/20 dark:border-white/20 rounded-lg mt-2 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-400 transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Get Quote</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
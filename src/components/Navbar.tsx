"use client"
import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { scrollToTop } from "../utils/scroll"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes and handle smooth scroll
  useEffect(() => {
    setIsOpen(false)
    // Add a small delay to ensure the new page content is loaded
    setTimeout(() => scrollToTop(0), 100)
  }, [location])

  const handleNavigation = (path: string) => {
    if (location.pathname === path) {
      // If we're already on the page, just scroll to top
      scrollToTop(0)
    }
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={() => handleNavigation('/')}
            >
              <img 
                src="/images/logo.png" 
                alt="SpendSync Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF0080] to-[#7928CA]">
                SpendSync
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["features", "about", "blog"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className={`relative text-gray-300 hover:text-white transition-colors group`}
                onClick={() => handleNavigation(`/${item}`)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF0080] to-[#7928CA] transition-all duration-300 group-hover:w-full ${
                    location.pathname === `/${item}` ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-b-lg shadow-lg">
                {["features", "about", "blog"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/${item}`}
                      className={`block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 ${
                        location.pathname === `/${item}` ? "bg-gray-800 text-white" : ""
                      }`}
                      onClick={() => handleNavigation(`/${item}`)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar


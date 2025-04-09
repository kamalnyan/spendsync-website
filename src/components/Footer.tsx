"use client"
import React from "react"
import { Link } from "react-router-dom"
import { Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import AnimationContainer from "./animations/AnimationContainer"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { appConfig } from "../config/appConfig"

const Footer = () => {
  const { scrollToTop } = useScrollToTop()

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/kamalnyan_?igsh=MTU1cGF4aTN2NDM5Nw%3D%3D&utm_source=qr",
      label: "Instagram" 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/kamal-nayan-582506256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      label: "LinkedIn" 
    },
  ]

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" },
        { name: "App Details", href: "/app-details" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only scroll to top for internal links
    if (!e.currentTarget.getAttribute('href')?.startsWith('http')) {
      scrollToTop()
    }
  }

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* 3D Background Element */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
        <AnimationContainer type="footer" height="h-64" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF0080] to-[#7928CA]"
            >
              {appConfig.name}
            </Link>
            <p className="mt-4 text-gray-400">Your personal finance companion for smart money management.</p>
          </div>

          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      onClick={handleLinkClick}
                      className="text-gray-400 hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} {appConfig.name}. Developed by Kamal Nayan.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


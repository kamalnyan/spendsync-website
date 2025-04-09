import React, { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Check if theme exists in localStorage
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      // Check if user prefers dark mode
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      
      // Return saved theme or preference or default to light
      return savedTheme || (prefersDark ? "dark" : "light")
    }
    return "light" // Default theme
  })

  // Apply theme to document when it changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </motion.button>
  )
}

export default ThemeToggle 
import React from "react"
import { motion } from "framer-motion"
import AppDetailsComponent from "../components/AppDetails"

const AppDetailsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8">App Details</h1>
      <AppDetailsComponent />
    </motion.div>
  )
}

export default AppDetailsPage 
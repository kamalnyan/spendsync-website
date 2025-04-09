import React from "react"
import { motion } from "framer-motion"
import { Clock, Calendar, Download, Shield, Star, Smartphone } from "lucide-react"
import { usePlayStore } from "../hooks/usePlayStore"
import { appConfig } from "../config/appConfig"

const AppDetails = () => {
  const appData = usePlayStore("com.rml.spendsync")

  const appMetadata = [
    { icon: <Star size={20} />, label: "Version", value: appConfig.version },
    { icon: <Calendar size={20} />, label: "Updated on", value: "28 Mar 2025" },
    { icon: <Smartphone size={20} />, label: "Requires Android", value: appConfig.platform.requirements[0] },
    { icon: <Download size={20} />, label: "Downloads", value: appData.isLoading ? "Loading..." : appData.downloads },
    { icon: <Shield size={20} />, label: "Content rating", value: "Everyone" },
    { icon: <Clock size={20} />, label: "Released on", value: "4 Feb 2025" },
  ]

  const keyFeatures = [
    {
      title: "Expense & Income Tracking",
      description: "Log daily expenses and income effortlessly. Categorize transactions for clearer financial insights. View your financial history by day, week, or month."
    },
    {
      title: "Budget Management",
      description: "Set spending limits for different categories. Monitor your budget in real-time. Visualize usage with charts and gauges."
    },
    {
      title: "Goals Management",
      description: "Define financial goals with deadlines. Track progress and prioritize important objectives. Keep all goals organized in one place."
    },
    {
      title: "Reminders",
      description: "Set reminders for bills and financial events. Receive local notifications to stay on schedule."
    },
    {
      title: "Expense Splitting",
      description: "Create groups to manage shared expenses. Split costs among members and track balances. Edit expenses and settle debts with ease."
    },
    {
      title: "Analytics",
      description: "Explore spending patterns with detailed visualizations. Compare income and expenses over time. Gain insights for smarter financial decisions."
    },
    {
      title: "Security",
      description: "Secure authentication via Firebase Auth. Encrypted storage of sensitive data with Firebase Firestore. Privacy-focused design for peace of mind."
    }
  ]

  const additionalFeatures = [
    "Customizable currency for local relevance",
    "Push notifications and in-app updates for the latest features",
    "Crash reporting and analytics for ongoing improvements"
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white">
        <h2 className="text-2xl font-bold">{appConfig.name}</h2>
        <p className="mt-2">{appConfig.description}</p>
      </div>
      
      <div className="p-6">
        <div className="mb-8">
          <p className="text-gray-700 dark:text-gray-300">
            {appConfig.name} is a feature-rich personal finance application designed to help you take control of your financial life. 
            Built with Flutter for a seamless cross-platform experience, it offers tools to track expenses and income, 
            manage budgets, set financial goals, and split expenses with friends—all within a secure and user-friendly environment.
          </p>
        </div>

        {/* App Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {appMetadata.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="text-primary-500 dark:text-primary-400">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <div className="space-y-6">
            {keyFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-primary-500 dark:border-primary-400 pl-4"
              >
                <h4 className="font-semibold text-lg">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {additionalFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {appConfig.name} combines powerful financial tools with an intuitive interface, making it ideal for both individual budgeting and group expense management.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Developed by {appConfig.company.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppDetails 
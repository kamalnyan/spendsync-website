import React from "react"
import { motion } from "framer-motion"
import { Clock, Calendar, Download, Shield, Star, Smartphone } from "lucide-react"
import { usePlayStore } from "../hooks/usePlayStore"
import { appConfig } from "../config/appConfig"
import { Skeleton } from "./ui/skeleton"

const AppDetails = () => {
  const appData = usePlayStore("com.rml.spendsync")

  // Function to render star rating
  const renderStarRating = (rating: string) => {
    if (rating === "New") {
      return (
        <div className="flex items-center">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            New
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Not enough ratings yet</span>
        </div>
      );
    }
    
    const numRating = parseFloat(rating);
    if (isNaN(numRating)) return null;
    
    return (
      <div className="flex items-center">
        <div className="flex mr-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className={`${
                star <= numRating
                  ? "text-yellow-400 fill-yellow-400"
                  : star - 0.5 <= numRating
                  ? "text-yellow-400 fill-yellow-400 opacity-50"
                  : "text-gray-300 dark:text-gray-600"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium">{numRating.toFixed(1)}</span>
      </div>
    );
  };

  const appMetadata = [
    { icon: <Star size={20} />, label: "Version", value: appConfig.version },
    { icon: <Calendar size={20} />, label: "Updated on", value: "28 Mar 2025" },
    { icon: <Smartphone size={20} />, label: "Requires Android", value: appConfig.platform.requirements[0] },
    { icon: <Download size={20} />, label: "Downloads", value: appData.isLoading ? <Skeleton className="w-16 h-5" /> : appData.downloads },
    { 
      icon: <Star size={20} />, 
      label: "Rating", 
      value: appData.isLoading ? <Skeleton className="w-24 h-5" /> : renderStarRating(appData.rating),
      isComponent: true
    },
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

  // Add a banner for new app notice
  const NewAppBanner = () => (
    <div className="bg-gradient-to-r from-blue-500 to-violet-500 text-white p-3 rounded-md mb-6">
      <div className="flex items-center">
        <Star className="mr-2" size={18} fill="white" />
        <p className="text-sm font-medium">
          {appConfig.name} is new to the Play Store! Be one of the first to rate it and help others discover this app.
        </p>
      </div>
    </div>
  );

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

        {/* New App Banner */}
        {appData.rating === "New" && !appData.isLoading && <NewAppBanner />}

        {/* App Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {appMetadata.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="text-primary-500 dark:text-primary-400">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                {item.isComponent ? (
                  item.value
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Play Store Link */}
        <div className="mb-8">
          <a 
            href="https://play.google.com/store/apps/details?id=com.rml.spendsync" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <Download size={18} className="mr-2" />
            View on Google Play
          </a>
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
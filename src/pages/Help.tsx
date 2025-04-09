import React from "react"
import { motion } from "framer-motion"
import { 
  HelpCircle, Trash2, UserX, Mail, Search, 
  BookOpen, ShieldCheck, MessageSquare, AlertTriangle, 
  ArrowRight, Layers, FileQuestion, PhoneCall 
} from "lucide-react"
import { Link } from "react-router-dom"

const Help = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
            Help & Support Center
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Find answers to common questions and learn how to make the most of your SpendSync experience.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for help topics..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl 
                        bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 
                        focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Layers className="mr-2 h-6 w-6 text-primary-500" />
            Quick Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-700">
              <BookOpen className="h-8 w-8 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Learn the basics of SpendSync and set up your account.</p>
              <Link to="/help/getting-started" className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center">
                Read guide <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-700">
              <ShieldCheck className="h-8 w-8 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Account Security</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Protect your account and understand our security features.</p>
              <Link to="/help/account-security" className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center">
                Read guide <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-700">
              <MessageSquare className="h-8 w-8 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Can't find what you need? Our team is here to help you.</p>
              <a href="#contact" className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center">
                Contact us <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FileQuestion className="mr-2 h-6 w-6 text-primary-500" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div id="data-deletion" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start">
                <Trash2 className="h-6 w-6 text-primary-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">How to Delete Your Data</h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    If you only want to delete specific data (such as Expenses, Goals, Incomes, and Reminders) while keeping your account active:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                    <ol className="list-decimal ml-5 space-y-2">
                      <li>Open the SpendSync app</li>
                      <li>Go to Profile → Settings</li>
                      <li>Select <span className="font-medium">Delete Data</span></li>
                      <li>Confirm the deletion</li>
                    </ol>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Once confirmed, all your Expenses, Goals, Incomes, and Reminders will be permanently removed from our servers. Your account details will remain intact.
                  </p>
                </div>
              </div>
            </div>

            <div id="account-deletion" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start">
                <UserX className="h-6 w-6 text-primary-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">How to Delete Your Account</h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    If you want to permanently delete your entire account and all associated data, including user details and authentication:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
                    <ol className="list-decimal ml-5 space-y-2">
                      <li>Open the SpendSync app</li>
                      <li>Go to Profile → Settings</li>
                      <li>Select <span className="font-medium">Delete Account</span></li>
                      <li>Confirm the deletion by entering your password</li>
                    </ol>
                  </div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Once confirmed, the following will be deleted:
                  </p>
                  <ul className="list-disc ml-5 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Your user account and authentication</li>
                    <li>All associated data, including Expenses, Goals, Incomes, and Reminders</li>
                  </ul>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mr-2 flex-shrink-0" />
                      <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                        This action is irreversible, and all your data will be permanently removed from our servers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8 border border-primary-100 dark:border-primary-800/40">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <PhoneCall className="h-16 w-16 text-primary-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Need Further Assistance?</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you encounter any issues or need help with account or data deletion, our support team is ready to assist you.
              </p>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <a href="mailto:uic.23mca20237@gmail.com" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  uic.23mca20237@gmail.com
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Help 
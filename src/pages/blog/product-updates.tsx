import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight, Star, Gift, RefreshCw, BarChart4, PieChart, Layers, DollarSign, Users, AlertCircle, ShieldCheck, Zap } from "lucide-react"
import GlassmorphismCard from "../../components/ui/GlassmorphismCard"

const ProductUpdatesBlog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 scroll-smooth bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-primary-500 hover:text-primary-400 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to blogs</span>
          </Link>
          <div className="flex flex-wrap text-sm text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Product Updates</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full dark:bg-purple-900 dark:text-purple-200 flex items-center">
              <RefreshCw className="w-3 h-3 mr-1" />
              Updates
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-200 flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Version 1.2.5
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            What's New in SpendSync: Exciting Features in Our Latest Update
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
            <div className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>April 28, 2023</span>
            </div>
            <div className="flex items-center mr-4">
              <Clock className="w-4 h-4 mr-2" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              <span>Product Release</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            We're thrilled to announce the release of SpendSync v1.2.5, packed with powerful new features 
            and improvements designed to transform your financial management experience. 
            Let's explore what's new and how these updates can help you take control of your finances.
          </p>
          
          {/* Table of Contents */}
          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-8">
            <h2 className="text-lg font-semibold mb-3 flex items-center">
              <Gift className="w-5 h-5 mr-2 text-primary-500" />
              What's Inside This Release
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#expense-tracking" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Enhanced Expense Tracking
                </a>
              </li>
              <li>
                <a href="#budget-management" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Improved Budget Management
                </a>
              </li>
              <li>
                <a href="#analytics" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Advanced Analytics
                </a>
              </li>
              <li>
                <a href="#group-expenses" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Group Expense Enhancements
                </a>
              </li>
              <li>
                <a href="#security" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Security Improvements
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Content Column */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {/* Introduction Section */}
              <p className="lead">
                At SpendSync, we're committed to continuously improving your experience. 
                Our latest update reflects feedback from our vibrant community and introduces 
                powerful capabilities to make managing your finances simpler and more effective than ever.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-5 rounded-lg my-6 border border-blue-100 dark:border-blue-800">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Release Highlights</h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    Smart category management with AI-powered suggestions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    Dynamic budget adjustment based on spending patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    Interactive analytics dashboards with predictive insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    One-tap settlement for group expenses
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 font-bold mr-2">✓</span>
                    Enhanced security with biometric authentication
                  </li>
                </ul>
              </div>
              
              {/* Section 1 */}
              <h2 id="expense-tracking" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
                <DollarSign className="w-6 h-6 mr-2 text-primary-500" />
                Enhanced Expense Tracking
              </h2>
              
              <p>
                We've revolutionized expense tracking to make it more intuitive and powerful:
              </p>
              
              <h3>Improved Category Management</h3>
              <p>
                Categories are now more flexible and customizable:
              </p>
              <ul>
                <li><strong>Smart categorization</strong> uses machine learning to automatically assign categories with higher accuracy</li>
                <li><strong>Custom category hierarchies</strong> allow you to create parent-child relationships (e.g., "Dining Out" under "Food")</li>
                <li><strong>Category merging</strong> lets you consolidate similar categories without losing historical data</li>
              </ul>
              
              <h3>Smart Transaction Recognition</h3>
              <p>
                The app now recognizes recurring transactions and merchant patterns:
              </p>
              <ul>
                <li>Automatic flagging of duplicate transactions</li>
                <li>Recurring transaction detection with adjustable reminder settings</li>
                <li>Merchant intelligence that learns your spending habits at specific businesses</li>
              </ul>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 my-6">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Pro Tip
                </h4>
                <p className="mt-1 text-blue-600 dark:text-blue-400 text-sm">
                  Try using the new transaction tagging feature to add custom labels like "Tax Deductible" or "Vacation" across different categories for more flexible reporting.
                </p>
              </div>
              
              {/* Section 2 */}
              <h2 id="budget-management" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
                <PieChart className="w-6 h-6 mr-2 text-primary-500" />
                Improved Budget Management
              </h2>
              
              <p>
                Budgeting gets a major upgrade with these powerful new capabilities:
              </p>
              
              <h3>Dynamic Budget Adjustment</h3>
              <p>
                Your budgets can now adapt to real-world situations:
              </p>
              <ul>
                <li>Automatic budget rollover options for unused amounts</li>
                <li>Seasonal budget adjustment based on historical spending patterns</li>
                <li>One-time expense accommodation that doesn't disrupt your regular budget</li>
              </ul>
              
              <h3>Budget Health Score</h3>
              <p>
                We've introduced a holistic budget health metric that:
              </p>
              <ul>
                <li>Evaluates your overall financial health with a simple 0-100 score</li>
                <li>Provides actionable suggestions to improve your budget management</li>
                <li>Tracks improvement over time with visual progress indicators</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Budget Templates</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Ready-made budget frameworks based on income level and financial goals</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Smart Alerts</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Contextual notifications that adapt to your spending patterns</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Forecasting</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Predictive analysis that shows where you'll end the month</p>
                </div>
              </div>
              
              {/* Section 3 */}
              <h2 id="analytics" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
                <BarChart4 className="w-6 h-6 mr-2 text-primary-500" />
                Advanced Analytics
              </h2>
              
              <p>
                Gain deeper insights into your financial habits with our enhanced analytics:
              </p>
              
              <h3>Interactive Dashboards</h3>
              <p>
                Our completely redesigned analytics section features:
              </p>
              <ul>
                <li>Customizable dashboard with drag-and-drop widgets</li>
                <li>Interactive charts that respond to your touch for detailed breakdowns</li>
                <li>Comparison views that show month-over-month and year-over-year changes</li>
              </ul>
              
              <h3>Predictive Insights</h3>
              <p>
                Our new AI-powered analytics can now:
              </p>
              <ul>
                <li>Forecast upcoming expenses based on historical patterns</li>
                <li>Identify potential savings opportunities with concrete suggestions</li>
                <li>Project long-term financial trends based on current behavior</li>
              </ul>
              
              {/* Section 4 */}
              <h2 id="group-expenses" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
                <Users className="w-6 h-6 mr-2 text-primary-500" />
                Group Expense Enhancements
              </h2>
              
              <p>
                Sharing expenses gets even easier with these improvements:
              </p>
              
              <h3>Simplified Settlement</h3>
              <p>
                We've streamlined the process of settling debts:
              </p>
              <ul>
                <li>One-tap settlement using popular payment platforms</li>
                <li>Settlement optimization that minimizes the number of transactions needed</li>
                <li>Partial settlement support for flexible repayment options</li>
              </ul>
              
              <h3>Group Templates</h3>
              <p>
                Create standardized expense-sharing arrangements:
              </p>
              <ul>
                <li>Recurring group expenses with automatic splitting</li>
                <li>Custom splitting ratios that can be saved as templates</li>
                <li>Household expense management with specialized tools for roommates and families</li>
              </ul>
              
              {/* Section 5 */}
              <h2 id="security" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
                <ShieldCheck className="w-6 h-6 mr-2 text-primary-500" />
                Security & Performance Improvements
              </h2>
              
              <p>
                We've strengthened the foundation of SpendSync:
              </p>
              
              <h3>Enhanced Security</h3>
              <ul>
                <li>Biometric authentication support for faster, more secure access</li>
                <li>End-to-end encryption for all financial data</li>
                <li>Privacy mode that hides sensitive information when sharing your screen</li>
              </ul>
              
              <h3>Performance Optimization</h3>
              <ul>
                <li>30% faster app startup time</li>
                <li>Reduced memory usage for better performance on all devices</li>
                <li>Improved offline mode that syncs seamlessly when connection is restored</li>
                <li>Battery optimization for extended usage between charges</li>
              </ul>
              
              <h2 className="flex items-center mt-10 text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
                <Layers className="w-6 h-6 mr-2 text-primary-500" />
                Coming Soon
              </h2>
              
              <p>
                We're already working on the next wave of innovations:
              </p>
              <ul>
                <li><strong>Financial Goals 2.0</strong> – Enhanced goal tracking with milestone celebrations</li>
                <li><strong>Investment Integration</strong> – Connect and monitor your investment accounts</li>
                <li><strong>AI Financial Assistant</strong> – Get personalized financial advice and answers to your questions</li>
              </ul>
              
              <blockquote className="border-l-4 border-primary-500 pl-4 italic my-8">
                "We built these updates based directly on your feedback. Our mission is to continuously evolve SpendSync into the most powerful yet simple-to-use financial management tool available."
                <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400">— The SpendSync Team</footer>
              </blockquote>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 my-10 text-white">
                <h3 className="text-xl font-bold mb-2">Update to SpendSync v1.2.5 Today</h3>
                <p className="mb-4">These new features are available now on the Google Play Store. Update your app to start experiencing the improved SpendSync.</p>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.rml.spendsync&pcampaignid=web_share" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Update SpendSync
                </a>
              </div>
              
              <h2 className="flex items-center mt-10 text-2xl font-bold">
                <Zap className="w-6 h-6 mr-2 text-primary-500" />
                Thank You
              </h2>
              
              <p>
                We want to thank our amazing community for your continued support and feedback. Your suggestions directly 
                influence our development roadmap, and we're committed to making SpendSync better with every update.
              </p>
              
              <p>
                Have a question, suggestion, or found a bug? We'd love to hear from you! Reach out through the in-app 
                support or email us at uic.23mca20237@gmail.com.
              </p>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Version Details</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Version</div>
                    <div className="font-semibold">1.2.5</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Released</div>
                    <div className="font-semibold">April 28, 2023</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Platform</div>
                    <div className="font-semibold">Android 6.0+</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Size</div>
                    <div className="font-semibold">24.8 MB</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Related Articles</h3>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/blog/financial-tips" 
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>Master Your Personal Finances with SpendSync</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog/group-expenses" 
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>Never Split the Bill Again: Managing Group Expenses</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog/security" 
                      className="text-primary-600 dark:text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>How SpendSync Keeps Your Financial Data Secure</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Share Your Feedback</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  We'd love to hear what you think about the new features. Your feedback helps us improve.
                </p>
                <a 
                  href="mailto:uic.23mca20237@gmail.com" 
                  className="w-full inline-block text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm px-4 py-2.5 transition-colors"
                >
                  Send Feedback
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductUpdatesBlog 
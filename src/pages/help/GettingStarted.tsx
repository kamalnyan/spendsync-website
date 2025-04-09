import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, BookOpen, CheckCircle, Smartphone, 
  DollarSign, PieChart, User, Settings, Bell, 
  Shield, HelpCircle, Download, ChevronRight
} from "lucide-react";

const GettingStarted = () => {
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
          <Link to="/help" className="text-primary-500 hover:text-primary-400 hover:underline inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Help Center
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-12">
          <div className="inline-flex items-center mb-4 bg-primary-900/30 text-primary-400 px-4 py-2 rounded-full">
            <BookOpen className="w-5 h-5 mr-2" />
            <span>Beginner Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Getting Started with SpendSync
          </h1>
          
          <div className="prose prose-lg prose-invert mb-8 max-w-none">
            <p className="lead text-xl text-gray-300">
              Welcome to SpendSync! This guide will walk you through the basics of setting up your account 
              and using the app's core features to manage your finances effectively.
            </p>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="mb-12 p-6 bg-gray-800 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            <li>
              <a href="#installation" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Installing the App
              </a>
            </li>
            <li>
              <a href="#account-setup" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Setting Up Your Account
              </a>
            </li>
            <li>
              <a href="#dashboard" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Navigating the Dashboard
              </a>
            </li>
            <li>
              <a href="#tracking" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Tracking Expenses
              </a>
            </li>
            <li>
              <a href="#budgeting" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Creating Your First Budget
              </a>
            </li>
            <li>
              <a href="#notifications" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Setting Up Notifications
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <section id="installation" className="mb-12">
            <div className="flex items-center mb-4">
              <Download className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">1. Installing the App</h2>
            </div>

            <p>
              The first step is to download and install SpendSync on your device. The app is available on both iOS and Android platforms.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">iOS Installation</h3>
                <ol className="list-decimal ml-5 space-y-2">
                  <li>Open the App Store on your iOS device</li>
                  <li>Search for "SpendSync"</li>
                  <li>Tap "Get" or the download icon</li>
                  <li>Authenticate with Face ID, Touch ID, or your Apple ID password</li>
                  <li>Wait for the installation to complete</li>
                </ol>
              </div>

              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Android Installation</h3>
                <ol className="list-decimal ml-5 space-y-2">
                  <li>Open the Google Play Store on your Android device</li>
                  <li>Search for "SpendSync"</li>
                  <li>Tap "Install"</li>
                  <li>Review and accept permissions</li>
                  <li>Wait for the installation to complete</li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 my-6">
              <h4 className="font-semibold text-blue-300 flex items-center m-0 mb-2">
                <HelpCircle className="w-5 h-5 mr-2" />
                Tip
              </h4>
              <p className="text-blue-400 text-sm m-0">
                Make sure your device is running the latest operating system for optimal performance. SpendSync requires iOS 13+ or Android 8.0+.
              </p>
            </div>
          </section>

          <section id="account-setup" className="mb-12">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">2. Setting Up Your Account</h2>
            </div>

            <p>
              After installing the app, you'll need to create an account to start tracking your finances.
            </p>

            <ol className="space-y-6 my-6">
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Launch the App</h3>
                <p className="m-0">
                  Open SpendSync on your device. You'll be greeted with a welcome screen.
                </p>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Choose Sign-Up Method</h3>
                <p className="mb-3">
                  You can create an account using:
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Email and password</li>
                  <li>Google account</li>
                  <li>Apple ID (iOS only)</li>
                </ul>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Complete Your Profile</h3>
                <p className="mb-3">
                  Enter the following information:
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Your name</li>
                  <li>Currency preference</li>
                  <li>Monthly income (optional)</li>
                </ul>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Set Security Preferences</h3>
                <p className="mb-3">
                  Configure how you'll access your account:
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Enable biometric authentication (fingerprint/face recognition)</li>
                  <li>Set up a PIN code as a backup</li>
                </ul>
              </li>
            </ol>

            <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 my-6">
              <h4 className="font-semibold text-green-300 flex items-center m-0 mb-2">
                <CheckCircle className="w-5 h-5 mr-2" />
                Success!
              </h4>
              <p className="text-green-400 text-sm m-0">
                Once you've completed these steps, your account is ready! You'll be directed to the main dashboard.
              </p>
            </div>
          </section>

          <section id="dashboard" className="mb-12">
            <div className="flex items-center mb-4">
              <Smartphone className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">3. Navigating the Dashboard</h2>
            </div>

            <p>
              The dashboard is your financial command center. Here's what you'll find:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Overview Section</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Balance Summary:</strong> Your current financial snapshot</li>
                  <li><strong>Monthly Spending:</strong> Visual representation of expenses</li>
                  <li><strong>Recent Transactions:</strong> Your latest financial activities</li>
                  <li><strong>Budget Progress:</strong> How you're tracking against your budgets</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Bottom Navigation</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Home:</strong> Return to the dashboard</li>
                  <li><strong>Transactions:</strong> View and add expenses/income</li>
                  <li><strong>Budget:</strong> Manage your spending categories</li>
                  <li><strong>Reports:</strong> Detailed financial analysis</li>
                  <li><strong>Profile:</strong> Account settings and preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="tracking" className="mb-12">
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">4. Tracking Expenses</h2>
            </div>

            <p>
              Recording your expenses is easy with SpendSync. Here's how to get started:
            </p>

            <ol className="space-y-4 my-6">
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Add a Transaction</h3>
                <p className="mb-3">
                  Tap the "+" button in the bottom center of the screen from any tab.
                </p>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Enter Transaction Details</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Amount spent</li>
                  <li>Category (e.g., Groceries, Transportation, Entertainment)</li>
                  <li>Date (defaults to today)</li>
                  <li>Note (optional)</li>
                  <li>Attach receipt image (optional)</li>
                </ul>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Save Transaction</h3>
                <p className="m-0">
                  Tap "Save" to record the expense. It will immediately appear in your Recent Transactions and affect your budget calculations.
                </p>
              </li>
            </ol>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 my-6">
              <h4 className="font-semibold text-blue-300 flex items-center m-0 mb-2">
                <HelpCircle className="w-5 h-5 mr-2" />
                Tip
              </h4>
              <p className="text-blue-400 text-sm m-0">
                Get in the habit of recording transactions immediately after making a purchase. This ensures accuracy and helps you maintain awareness of your spending.
              </p>
            </div>
          </section>

          <section id="budgeting" className="mb-12">
            <div className="flex items-center mb-4">
              <PieChart className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">5. Creating Your First Budget</h2>
            </div>

            <p>
              Budgeting is the heart of financial management. Follow these steps to set up your first budget:
            </p>

            <ol className="space-y-4 my-6">
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Access the Budget Tab</h3>
                <p className="mb-3">
                  Tap the "Budget" icon in the bottom navigation bar.
                </p>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Create a New Budget</h3>
                <p className="mb-3">
                  Tap "Create Budget" or the "+" button to start a new budget.
                </p>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Select Category</h3>
                <p className="mb-3">
                  Choose a spending category for this budget (e.g., Groceries, Rent, Entertainment).
                </p>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Set Amount and Period</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Enter the maximum amount you want to spend</li>
                  <li>Select the period (weekly, monthly, etc.)</li>
                  <li>Set start date (typically beginning of month)</li>
                </ul>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Save and Monitor</h3>
                <p className="m-0">
                  Tap "Save" to create your budget. You'll now be able to track your spending against this limit on your dashboard.
                </p>
              </li>
            </ol>

            <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4 my-6">
              <h4 className="font-semibold text-purple-300 flex items-center m-0 mb-2">
                <HelpCircle className="w-5 h-5 mr-2" />
                Pro Tip
              </h4>
              <p className="text-purple-400 text-sm m-0">
                Start with your essential categories first (housing, food, transportation) before creating budgets for discretionary spending. This ensures necessities are covered first.
              </p>
            </div>
          </section>

          <section id="notifications" className="mb-12">
            <div className="flex items-center mb-4">
              <Bell className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">6. Setting Up Notifications</h2>
            </div>

            <p>
              Notifications help you stay on track with your budgets and financial goals. Here's how to configure them:
            </p>

            <ol className="space-y-4 my-6">
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Access Notification Settings</h3>
                <p className="mb-3">
                  Go to Profile → Settings → Notifications
                </p>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Configure Budget Alerts</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Toggle "Budget Warnings" to ON</li>
                  <li>Set threshold alerts (e.g., 50%, 75%, 90% of budget)</li>
                  <li>Choose notification frequency</li>
                </ul>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Set Up Recurring Reminders</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Bill payment reminders</li>
                  <li>Weekly spending summaries</li>
                  <li>Monthly budget resets</li>
                </ul>
              </li>
              
              <li className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Save Preferences</h3>
                <p className="m-0">
                  Tap "Save" to apply your notification settings.
                </p>
              </li>
            </ol>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 my-6">
              <h4 className="font-semibold text-blue-300 flex items-center m-0 mb-2">
                <HelpCircle className="w-5 h-5 mr-2" />
                Tip
              </h4>
              <p className="text-blue-400 text-sm m-0">
                Make sure to allow SpendSync to send notifications in your device settings for these alerts to work properly.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 my-10">
            <h3 className="text-xl font-bold mb-4 text-white">Ready to Take Control of Your Finances?</h3>
            <p className="text-white mb-6">
              Now that you know the basics, you're ready to start your journey toward better financial management with SpendSync. Remember, consistency is key!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/help/account-security" 
                className="inline-flex items-center bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Shield className="w-5 h-5 mr-2" />
                Next: Account Security
              </Link>
              <Link 
                to="/help" 
                className="inline-flex items-center border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Return to Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GettingStarted; 
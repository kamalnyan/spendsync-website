import React from "react"
import { motion } from "framer-motion"
import {
  Shield, FileText, Database, Lock, Eye, Server, Share2, UserCheck,
  UserX, MessageSquare, Bell, ChevronRight, Calendar, AlertTriangle,
  CheckCircle2, Globe, Users, AlertCircle, FileEdit, Mail
} from "lucide-react"

const Privacy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Last Updated: {currentDate}</span>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At SpendSync, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you use our application.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-primary-500" />
            Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#introduction" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 1. Introduction
            </a>
            <a href="#collection" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 2. Information We Collect
            </a>
            <a href="#usage" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 3. How We Use Your Information
            </a>
            <a href="#storage" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 4. Data Storage and Security
            </a>
            <a href="#third-party" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 5. Third-Party Services
            </a>
            <a href="#sharing" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 6. Data Sharing and Disclosure
            </a>
            <a href="#rights" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 7. Your Rights and Choices
            </a>
            <a href="#children" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 8. Children's Privacy
            </a>
            <a href="#changes" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 9. Changes to This Policy
            </a>
            <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 10. Contact Us
            </a>
            <a href="#consent" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              <ChevronRight className="w-4 h-4 mr-1" /> 11. Consent
            </a>
          </div>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          {/* Introduction Section */}
          <section id="introduction" className="mb-12">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">1. Introduction</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <p>
                SpendSync ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4 border border-blue-100 dark:border-blue-800">
                <div className="flex">
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-blue-700 dark:text-blue-400 text-sm m-0">
                    By using SpendSync, you consent to the data practices described in this Privacy Policy. 
                    If you do not agree to these policies, please do not use our application.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Information Collection Section */}
          <section id="collection" className="mb-12">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">2. Information We Collect</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-primary-500" />
                  2.1 Personal Information
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Email address (for authentication and account management)</li>
                  <li>User preferences and settings</li>
                  <li>Financial transaction data you choose to input</li>
                  <li>Device information (device type, operating system version)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-primary-500" />
                  2.2 Automatically Collected Information
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Usage statistics and analytics</li>
                  <li>Crash reports and error logs</li>
                  <li>Device identifiers</li>
                  <li>Internet connectivity status</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information Section */}
          <section id="usage" className="mb-12">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">3. How We Use Your Information</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <p>We use the collected information for:</p>
              <div className="grid md:grid-cols-2 gap-4 my-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3">
                    <Server className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium m-0">App Functionality</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm m-0">Providing and maintaining our services</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3">
                    <Bell className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium m-0">Notifications</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm m-0">Sending important updates and alerts</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3">
                    <Share2 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium m-0">Analytics</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm m-0">Analyzing usage patterns and app performance</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3">
                    <Lock className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium m-0">Security</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm m-0">Debugging and fixing technical issues</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Storage Section */}
          <section id="storage" className="mb-12">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">4. Data Storage and Security</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-primary-500" />
                  4.1 Local Storage
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Your financial data is stored locally on your device</li>
                  <li>User preferences are stored using secure storage methods</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-primary-500" />
                  4.2 Cloud Storage
                </h3>
                <p>We use Firebase services for:</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Authentication</li>
                  <li>Analytics</li>
                  <li>Crash reporting</li>
                  <li>Push notifications</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                <div className="flex">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-green-700 dark:text-green-400 text-sm m-0">
                    We implement various security measures including encryption, secure authentication, 
                    and regular security audits to protect your personal and financial information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Services Section */}
          <section id="third-party" className="mb-12">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">5. Third-Party Services</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <p>The App uses the following third-party services:</p>
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden my-4">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Firebase</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Authentication, analytics, crash reporting, and notifications</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Google Mobile Ads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Displaying advertisements</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Google Play Services</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">App functionality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Each of these services may collect information as governed by their respective privacy policies. 
                We recommend reviewing their policies for more information.
              </p>
            </div>
          </section>

          {/* Data Sharing Section */}
          <section id="sharing" className="mb-12">
            <div className="flex items-center mb-4">
              <Share2 className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">6. Data Sharing and Disclosure</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800 mb-4">
                <div className="flex">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                  <p className="text-yellow-700 dark:text-yellow-400 text-sm m-0">
                    <strong>We do not sell your personal information.</strong>
                  </p>
                </div>
              </div>
              <p>We may share your information with:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Service providers who assist in operating our App</li>
                <li>Law enforcement when required by law</li>
                <li>Third parties in connection with a business transfer</li>
              </ul>
            </div>
          </section>

          {/* Your Rights Section */}
          <section id="rights" className="mb-12">
            <div className="flex items-center mb-4">
              <UserCheck className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">7. Your Rights and Choices</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <p>You have the right to:</p>
              <div className="grid md:grid-cols-2 gap-4 my-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2">Access</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm m-0">View your personal information</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2">Correction</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm m-0">Update inaccurate data</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2">Deletion</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm m-0">Delete your account and associated data</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2">Control</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm m-0">Manage notification preferences</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                To exercise these rights, please use the app settings or contact us using the information provided below.
              </p>
            </div>
          </section>

          {/* Children's Privacy Section */}
          <section id="children" className="mb-12">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">8. Children's Privacy</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <p>
                The App is not intended for use by children under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and believe that your child has 
                provided us with personal information, please contact us immediately.
              </p>
            </div>
          </section>

          {/* Changes to Policy Section */}
          <section id="changes" className="mb-12">
            <div className="flex items-center mb-4">
              <FileEdit className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">9. Changes to This Privacy Policy</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4 border border-blue-100 dark:border-blue-800">
                <p className="text-blue-700 dark:text-blue-400 text-sm m-0">
                  We encourage you to review this Privacy Policy periodically for any changes. Changes to this 
                  Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section id="contact" className="mb-12">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">10. Contact Us</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 inline-flex items-center mt-2">
                <Mail className="w-5 h-5 text-primary-500 mr-2" />
                <a href="mailto:uic.23mca20237@gmail.com" className="text-primary-600 dark:text-primary-400 font-medium">
                  uic.23mca20237@gmail.com
                </a>
              </div>
            </div>
          </section>

          {/* Consent Section */}
          <section id="consent" className="mb-12">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">11. Consent</h2>
            </div>
            <div className="pl-0 md:pl-11">
              <p>
                By using the App, you consent to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border border-primary-100 dark:border-primary-800/40 text-center">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Your Privacy is Our Priority</h3>
          <p className="mb-0 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            At SpendSync, we're committed to protecting your data while providing powerful financial management tools. 
            If you have any concerns or questions about your privacy, please don't hesitate to reach out to our team.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Privacy 
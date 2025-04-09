import React from "react";
import { motion } from "framer-motion";
import { Shield, FileText, AlertCircle, Lock, Globe, CreditCard, BellRing, AlertOctagon, FileEdit, Power, ExternalLink, BadgeAlert, Scale, Users, BookOpen, MessageSquare } from "lucide-react";

const Terms = () => {
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
            Terms of Service
          </h1>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6">
            <FileText className="w-5 h-5 mr-2" />
            <span>Last Updated: {currentDate}</span>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              These terms establish the rules and regulations for using SpendSync's services. By accessing our application, you agree to these terms.
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
            <a href="#acceptance" className="text-primary-600 dark:text-primary-400 hover:underline">1. Acceptance of Terms</a>
            <a href="#description" className="text-primary-600 dark:text-primary-400 hover:underline">2. Service Description</a>
            <a href="#account" className="text-primary-600 dark:text-primary-400 hover:underline">3. Account Registration</a>
            <a href="#content" className="text-primary-600 dark:text-primary-400 hover:underline">4. User Content</a>
            <a href="#ip" className="text-primary-600 dark:text-primary-400 hover:underline">5. Intellectual Property</a>
            <a href="#third-party" className="text-primary-600 dark:text-primary-400 hover:underline">6. Third-Party Services</a>
            <a href="#privacy" className="text-primary-600 dark:text-primary-400 hover:underline">7. Data Privacy</a>
            <a href="#payments" className="text-primary-600 dark:text-primary-400 hover:underline">8. Subscriptions</a>
            <a href="#ads" className="text-primary-600 dark:text-primary-400 hover:underline">9. Advertisements</a>
            <a href="#warranties" className="text-primary-600 dark:text-primary-400 hover:underline">10. Disclaimer</a>
            <a href="#liability" className="text-primary-600 dark:text-primary-400 hover:underline">11. Limitation of Liability</a>
            <a href="#changes" className="text-primary-600 dark:text-primary-400 hover:underline">12. Changes to Terms</a>
            <a href="#termination" className="text-primary-600 dark:text-primary-400 hover:underline">13. Termination</a>
            <a href="#export" className="text-primary-600 dark:text-primary-400 hover:underline">14. Export Control</a>
            <a href="#governing" className="text-primary-600 dark:text-primary-400 hover:underline">15. Governing Law</a>
            <a href="#children" className="text-primary-600 dark:text-primary-400 hover:underline">16. Children's Privacy</a>
            <a href="#agreement" className="text-primary-600 dark:text-primary-400 hover:underline">17. Entire Agreement</a>
            <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline">18. Contact Information</a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-12 p-6 border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800 rounded-xl">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-500 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">Important Notice</h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                By downloading, installing, or using the SpendSync mobile application ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 id="acceptance" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">1</span>
            Acceptance of Terms
          </h2>
          <p>
            By using SpendSync, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, as well as our Privacy Policy. These terms constitute a legally binding agreement between you and SpendSync.
          </p>

          <h2 id="description" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">2</span>
            Service Description
          </h2>
          <p>
            SpendSync is an expense tracking application that helps users manage personal finances, track expenses, set budgets, analyze spending patterns, split expenses, set financial goals, and receive reminders.
          </p>

          <h2 id="account" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">3</span>
            Account Registration and Security
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">3.1.</span> To use certain features of the App, you may need to create an account using your email address.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">3.2.</span> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">3.3.</span> You agree to provide accurate and complete information when creating your account and to update your information as necessary.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">3.4.</span> You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
          </div>

          <h2 id="content" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">4</span>
            User Content and Conduct
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">4.1.</span> You are solely responsible for all financial data, expenses, income information, and other content that you input into the App ("User Content").</p>
            <p className="flex items-start"><span className="font-semibold mr-2">4.2.</span> By inputting User Content into the App, you grant us a non-exclusive, worldwide, royalty-free license to use, process, and store such content solely for the purpose of providing and improving the App's services to you.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">4.3.</span> You agree not to use the App to:</p>
            <ul className="pl-8 list-disc space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe the rights of others</li>
              <li>Transmit any material that is unlawful, harmful, threatening, abusive, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to the App or its related systems</li>
            </ul>
          </div>

          <h2 id="ip" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">5</span>
            Intellectual Property Rights
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">5.1.</span> The App, including all content, features, and functionality, is owned by SpendSync and is protected by copyright, trademark, and other intellectual property laws.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">5.2.</span> You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material in the App, except as automatically occurs in the normal course of using the App.</p>
          </div>

          <h2 id="third-party" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">6</span>
            Third-Party Services
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">6.1.</span> The App integrates with various third-party services, including but not limited to:</p>
            <ul className="pl-8 list-disc space-y-2">
              <li>Firebase (for authentication, analytics, crash reporting, and cloud storage)</li>
              <li>Google Mobile Ads (for in-app advertisements)</li>
              <li>Google Play Services</li>
              <li>Payment processors (where applicable)</li>
            </ul>
            <p className="flex items-start"><span className="font-semibold mr-2">6.2.</span> Your use of these third-party services is subject to their respective terms of service and privacy policies.</p>
          </div>

          <h2 id="privacy" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">7</span>
            <Lock className="w-6 h-6 mr-2 text-primary-500" />
            Data Privacy and Security
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">7.1.</span> We implement various security measures, including encryption, to protect your personal and financial data.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">7.2.</span> We collect and process your data as described in our Privacy Policy.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">7.3.</span> While we take reasonable precautions to protect your data, no method of transmission or storage is 100% secure. We cannot guarantee absolute security of your data.</p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4 border border-blue-100 dark:border-blue-900">
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                For complete details about how we handle your personal information, please refer to our <a href="/privacy" className="font-semibold underline">Privacy Policy</a>.
              </p>
            </div>
          </div>

          <h2 id="payments" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">8</span>
            <CreditCard className="w-6 h-6 mr-2 text-primary-500" />
            Subscription and Payments
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">8.1.</span> Some features of the App may require payment or subscription. Pricing and payment terms will be clearly displayed before you make any purchase.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">8.2.</span> All purchases are final and non-refundable unless required by applicable law.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">8.3.</span> Subscriptions will automatically renew unless canceled at least 24 hours before the end of the current billing period.</p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <h4 className="font-semibold mb-2">Payment Information Security</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                We use industry-standard encryption to protect your payment information. We do not store complete credit card details on our servers.
              </p>
            </div>
          </div>

          <h2 id="ads" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">9</span>
            <Globe className="w-6 h-6 mr-2 text-primary-500" />
            Advertisements
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">9.1.</span> The App may display advertisements provided by third-party ad networks.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">9.2.</span> Ad networks may use device identifiers and other technologies to improve ad targeting.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">9.3.</span> You can adjust your device settings to limit ad tracking as permitted by your device.</p>
          </div>

          <h2 id="warranties" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">10</span>
            <AlertOctagon className="w-6 h-6 mr-2 text-primary-500" />
            Disclaimer of Warranties
          </h2>
          <div className="pl-0 md:pl-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 border-l-4 border-gray-400 dark:border-gray-600">
              <p className="flex items-start font-medium"><span className="font-semibold mr-2">10.1.</span> THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND.</p>
              <p className="flex items-start font-medium mt-2"><span className="font-semibold mr-2">10.2.</span> TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              <p className="flex items-start font-medium mt-2"><span className="font-semibold mr-2">10.3.</span> We do not warrant that the App will be uninterrupted or error-free, that defects will be corrected, or that the App is free of viruses or other harmful components.</p>
            </div>
          </div>

          <h2 id="liability" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">11</span>
            <Shield className="w-6 h-6 mr-2 text-primary-500" />
            Limitation of Liability
          </h2>
          <div className="pl-0 md:pl-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 border-l-4 border-gray-400 dark:border-gray-600">
              <p className="flex items-start font-medium"><span className="font-semibold mr-2">11.1.</span> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
              <p className="flex items-start font-medium mt-2"><span className="font-semibold mr-2">11.2.</span> Our total liability for any claims under these terms shall not exceed the amount you have paid to use the App in the past six months (or $10 if you have not made any payments).</p>
            </div>
            <p className="flex items-start"><span className="font-semibold mr-2">11.3.</span> The App is not intended to provide financial, investment, or tax advice. Any financial decisions you make based on information from the App are at your own risk.</p>
          </div>

          <h2 id="changes" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">12</span>
            <FileEdit className="w-6 h-6 mr-2 text-primary-500" />
            Changes to Terms
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">12.1.</span> We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes through the App or by other means.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">12.2.</span> Your continued use of the App after such modifications constitutes your acceptance of the updated terms.</p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4 border border-blue-100 dark:border-blue-900">
              <p className="text-blue-800 dark:text-blue-300 text-sm flex items-start">
                <BellRing className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>We encourage you to review these Terms regularly to stay informed of any updates.</span>
              </p>
            </div>
          </div>

          <h2 id="termination" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">13</span>
            <Power className="w-6 h-6 mr-2 text-primary-500" />
            Termination
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">13.1.</span> We may terminate or suspend your account and access to the App at any time, without prior notice or liability, for any reason.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">13.2.</span> You may terminate your use of the App by uninstalling it from your device and discontinuing its use.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">13.3.</span> Upon termination, the provisions of these Terms that by their nature should survive termination shall remain in effect.</p>
          </div>

          <h2 id="export" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">14</span>
            <ExternalLink className="w-6 h-6 mr-2 text-primary-500" />
            Export Control
          </h2>
          <div className="pl-0 md:pl-12">
            <p>You agree to comply with all applicable export control laws and regulations in your use of the App.</p>
          </div>

          <h2 id="governing" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">15</span>
            <Scale className="w-6 h-6 mr-2 text-primary-500" />
            Governing Law and Dispute Resolution
          </h2>
          <div className="pl-0 md:pl-12">
            <p className="flex items-start"><span className="font-semibold mr-2">15.1.</span> These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles.</p>
            <p className="flex items-start"><span className="font-semibold mr-2">15.2.</span> Any dispute arising out of or relating to these Terms or the App shall be exclusively settled through binding arbitration.</p>
          </div>

          <h2 id="children" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">16</span>
            <Users className="w-6 h-6 mr-2 text-primary-500" />
            Children's Privacy
          </h2>
          <div className="pl-0 md:pl-12">
            <p>The App is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13.</p>
            
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg my-4 border border-red-100 dark:border-red-900">
              <p className="text-red-800 dark:text-red-300 text-sm flex items-start">
                <BadgeAlert className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.</span>
              </p>
            </div>
          </div>

          <h2 id="agreement" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">17</span>
            <BookOpen className="w-6 h-6 mr-2 text-primary-500" />
            Entire Agreement
          </h2>
          <div className="pl-0 md:pl-12">
            <p>These Terms, together with the Privacy Policy, constitute the entire agreement between you and SpendSync regarding the App and supersede all prior agreements and understandings.</p>
          </div>

          <h2 id="contact" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center border-b pb-3 mt-8">
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-3 flex items-center justify-center text-sm font-bold">18</span>
            <MessageSquare className="w-6 h-6 mr-2 text-primary-500" />
            Contact Information
          </h2>
          <div className="pl-0 md:pl-12">
            <p>If you have any questions or concerns about these Terms of Service, please contact us at:</p>
            <p><a href="mailto:support@spendsync.com" className="text-primary-500 hover:text-primary-600">support@spendsync.com</a></p>
          </div>

          {/* Final section with security badge */}
          <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center">
            <Shield className="w-10 h-10 text-primary-500 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Secure & Compliant</h3>
              <p className="text-gray-600 dark:text-gray-400">
                SpendSync is committed to maintaining the highest standards of data protection and legal compliance.
                Our Terms of Service are designed to protect both our users and our platform.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pb-4 border-t border-gray-200 dark:border-gray-700">
            <p className="mt-4 italic text-center">
              By using SpendSync, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by them.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms; 
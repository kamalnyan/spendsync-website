import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Calendar, Clock, Tag, ChevronRight, Lock, ShieldCheck, 
  EyeOff, Key, Fingerprint, Smartphone, CheckCircle2, AlertTriangle, 
  Settings, Users, Server, Share2, Cloud, Shield, TrendingUp,
  Twitter, Facebook, Mail
} from "lucide-react";

const SecurityBlog = () => {
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
          <Link to="/blog" className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Posts
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
            Your Money, Your Data: How SpendSync Keeps Your Financial Information Secure
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 gap-4 mb-6">
            <span className="inline-flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              November 5, 2023
            </span>
            <span className="inline-flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              7 min read
            </span>
            <span className="inline-flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              Security
            </span>
          </div>
          
          <div className="prose prose-lg dark:prose-invert mb-8 max-w-none">
            <p className="lead text-xl text-gray-700 dark:text-gray-300">
              When it comes to financial apps, security isn't just a feature—it's a foundation. 
              In this article, we'll explain SpendSync's comprehensive approach to protecting your 
              financial data and why security is at the core of everything we build.
            </p>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">What We'll Cover</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            <li>
              <a href="#importance" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Why Financial Data Security Matters
              </a>
            </li>
            <li>
              <a href="#approach" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> SpendSync's Security Approach
              </a>
            </li>
            <li>
              <a href="#features" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Key Security Features
              </a>
            </li>
            <li>
              <a href="#local-vs-cloud" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Local vs. Cloud: Our Hybrid Model
              </a>
            </li>
            <li>
              <a href="#best-practices" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> User Security Best Practices
              </a>
            </li>
            <li>
              <a href="#future" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Future Security Enhancements
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section id="importance" className="mb-12">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Why Financial Data Security Matters</h2>
            </div>

            <p>
              Your financial data is among the most sensitive information you possess. It reveals your spending 
              habits, income level, financial priorities, and even your daily routines. In the wrong hands, 
              this information can be used for identity theft, fraud, or targeted scams.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg my-6 border border-red-100 dark:border-red-800">
              <div className="flex">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-red-700 dark:text-red-300 font-medium m-0 mb-2">The Cost of Security Breaches</h3>
                  <p className="text-red-600 dark:text-red-400 m-0">
                    According to recent studies, the average financial impact of a data breach involving personal 
                    financial information can exceed $3,500 per affected individual. Beyond financial costs, 
                    victims often spend hundreds of hours resolving resulting identity theft issues.
                  </p>
                </div>
              </div>
            </div>

            <p>
              For a financial management app like SpendSync, security isn't just about protecting data—it's about 
              preserving trust. Our users trust us with insights into their financial lives, and we take that 
              responsibility seriously.
            </p>
          </section>

          <section id="approach" className="mb-12">
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">SpendSync's Security Approach</h2>
            </div>

            <p>
              Our security philosophy is built on three core principles:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Privacy by Design</h3>
                <p className="text-gray-600 dark:text-gray-400 m-0">
                  Security considerations are integrated from the earliest design phase, not added as an afterthought.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <EyeOff className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Data Minimization</h3>
                <p className="text-gray-600 dark:text-gray-400 m-0">
                  We collect only what's necessary and give users control over what's stored and shared.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Server className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Defense in Depth</h3>
                <p className="text-gray-600 dark:text-gray-400 m-0">
                  Multiple layers of security controls protect your data, so no single point of failure exists.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg my-6 border border-blue-100 dark:border-blue-800">
              <blockquote className="text-blue-700 dark:text-blue-400 italic m-0">
                "Security is not just a feature or a checkbox—it's a continuous process that requires vigilance, 
                adaptation, and commitment."
              </blockquote>
            </div>
          </section>

          <section id="features" className="mb-12">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Key Security Features</h2>
            </div>

            <p>
              SpendSync incorporates multiple security features designed to keep your financial data protected at all times:
            </p>

            <div className="space-y-6 my-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="flex items-center text-lg font-medium mb-3">
                  <Key className="w-5 h-5 text-primary-500 mr-2" />
                  End-to-End Encryption
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All sensitive financial data in SpendSync is encrypted using AES-256, one of the strongest 
                  encryption standards available. This applies to data both at rest (stored on your device) 
                  and in transit (when data is synchronized).
                </p>
                <div className="mt-4 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <p className="text-sm m-0">
                    <strong>Technical Note:</strong> Our implementation uses a combination of symmetric and asymmetric 
                    encryption to ensure that even our own engineers cannot access your unencrypted financial information.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="flex items-center text-lg font-medium mb-3">
                  <Fingerprint className="w-5 h-5 text-primary-500 mr-2" />
                  Biometric Authentication
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SpendSync supports fingerprint and facial recognition on compatible devices, allowing for 
                  secure, convenient access without compromising security. Biometric data never leaves your 
                  device and is processed using your device's secure enclave.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="flex items-center text-lg font-medium mb-3">
                  <Smartphone className="w-5 h-5 text-primary-500 mr-2" />
                  Device-Based Security
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We use your device's built-in security capabilities, including secure keystores and 
                  protected storage areas, to store sensitive information like authentication tokens and encryption keys.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="flex items-center text-lg font-medium mb-3">
                  <Settings className="w-5 h-5 text-primary-500 mr-2" />
                  Customizable Security Settings
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SpendSync lets you decide how stringent your security measures should be. Options include:
                </p>
                <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Requiring authentication for every app open</li>
                  <li>Masking sensitive numbers by default</li>
                  <li>Auto-lock timers (from immediate to 5 minutes)</li>
                  <li>App lock notifications</li>
                  <li>Blocking screenshots within the app</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="flex items-center text-lg font-medium mb-3">
                  <Users className="w-5 h-5 text-primary-500 mr-2" />
                  Secure Sharing Controls
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  When sharing financial information (like group expenses), SpendSync implements granular 
                  permissions that ensure parties only see what they need to see. All shared data is 
                  encrypted and requires explicit consent before being visible to others.
                </p>
              </div>
            </div>
          </section>

          <section id="local-vs-cloud" className="mb-12">
            <div className="flex items-center mb-4">
              <Cloud className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Local vs. Cloud: Our Hybrid Model</h2>
            </div>

            <p>
              SpendSync uses a hybrid approach to data storage, balancing security with convenience:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-3">Local Storage Priorities</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <strong>Transaction Details:</strong> Your specific transactions, including amounts, vendors, 
                    and categories, are stored primarily on your device
                  </li>
                  <li>
                    <strong>Account Balances:</strong> Current balances and financial snapshots remain local
                  </li>
                  <li>
                    <strong>Budget Settings:</strong> Your personal budget configurations stay on-device
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-400 m-0">
                    <strong>Advantage:</strong> Maximum privacy and security, with data accessible even offline
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-3">Cloud Storage Elements</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <strong>Anonymized Statistics:</strong> Aggregated, de-identified spending patterns for 
                    generating insights (never linked to your identity)
                  </li>
                  <li>
                    <strong>Backup Encryption Keys:</strong> Securely stored recovery information 
                    (encrypted with your personal key)
                  </li>
                  <li>
                    <strong>Shared Expenses:</strong> Only when explicitly shared with specific users
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-400 m-0">
                    <strong>Advantage:</strong> Enables multi-device sync and provides recovery options
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 p-5 rounded-lg my-6 border border-primary-100 dark:border-primary-800/50">
              <h4 className="font-medium text-primary-800 dark:text-primary-300 mb-2">User Control</h4>
              <p className="text-primary-700 dark:text-primary-400 m-0">
                SpendSync puts you in control of your data. You can choose to disable cloud syncing entirely, 
                adjust what gets synchronized, or opt for complete local-only operation, though this will 
                limit certain features like cross-device access and shared expenses.
              </p>
            </div>
          </section>

          <section id="best-practices" className="mb-12">
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">User Security Best Practices</h2>
            </div>

            <p>
              While we've built robust security into SpendSync, your practices also play a critical role in 
              protecting your financial data. Here are our recommendations:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/50 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 dark:text-primary-300 font-semibold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Use Biometric Authentication</h3>
                    <p className="text-gray-600 dark:text-gray-400 m-0">
                      Enable fingerprint or facial recognition for SpendSync access instead of relying solely on a PIN.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/50 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 dark:text-primary-300 font-semibold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Keep Your Device Updated</h3>
                    <p className="text-gray-600 dark:text-gray-400 m-0">
                      Regularly update your device's operating system and SpendSync app to benefit from the latest security patches.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/50 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 dark:text-primary-300 font-semibold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Set Shorter Auto-Lock Timers</h3>
                    <p className="text-gray-600 dark:text-gray-400 m-0">
                      Configure SpendSync to lock quickly when not in use, especially if you often use the app in public places.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/50 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 dark:text-primary-300 font-semibold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Be Selective About Shared Expenses</h3>
                    <p className="text-gray-600 dark:text-gray-400 m-0">
                      Only share the specific expense details required for group activities, not your entire financial profile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/50 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 dark:text-primary-300 font-semibold mr-4 flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Review Access Regularly</h3>
                    <p className="text-gray-600 dark:text-gray-400 m-0">
                      Periodically check which devices are connected to your SpendSync account and revoke access for any you no longer use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="future" className="mb-12">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Future Security Enhancements</h2>
            </div>

            <p>
              Security is never "finished." SpendSync is committed to continuously improving our security features. 
              Coming in future updates:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Advanced Authentication Options</h3>
                <p className="text-gray-600 dark:text-gray-400 m-0">
                  Support for hardware security keys and multi-factor authentication for additional account protection.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Enhanced Privacy Controls</h3>
                <p className="text-gray-600 dark:text-gray-400 m-0">
                  More granular controls over data retention periods and automatic data purging options.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Security Health Score</h3>
                <p className="text-gray-600 dark:text-gray-400 m-0">
                  A personalized dashboard showing how well your account is protected and suggesting improvements.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Improved Anomaly Detection</h3>
                <p className="text-gray-600 dark:text-gray-400 m-0">
                  AI-powered monitoring to alert you of unusual patterns that might indicate unauthorized access.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg my-6 border border-yellow-100 dark:border-yellow-800">
              <h4 className="font-medium mb-3">Our Security Commitment</h4>
              <p className="m-0">
                SpendSync is committed to maintaining the highest standards of security to protect your 
                financial information. We regularly conduct security audits, penetration testing, and 
                code reviews to identify and address potential vulnerabilities before they can be exploited.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-xl border border-primary-100 dark:border-primary-800/50 text-center my-8">
            <h3 className="text-2xl font-bold mb-3 text-primary-800 dark:text-primary-300">Security Without Sacrifice</h3>
            <p className="text-primary-700 dark:text-primary-400 mb-4 max-w-2xl mx-auto">
              With SpendSync, you don't have to choose between powerful financial management and robust security. 
              We deliver both, ensuring that your sensitive financial data remains protected while providing the 
              insights you need to take control of your finances.
            </p>
            <Link to="/help" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
              Learn More About Our Security
            </Link>
          </div>

          {/* Share Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Share2 className="w-5 h-5 mr-2 text-primary-500" />
              Share This Article
            </h3>
            <div className="flex space-x-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=Your Money, Your Data: How SpendSync Keeps Your Financial Information Secure&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] hover:bg-[#1a94df] text-white px-4 py-2 rounded-lg flex items-center"
              >
                <Twitter className="w-5 h-5 mr-2" />
                <span>Twitter</span>
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] hover:bg-[#166fe0] text-white px-4 py-2 rounded-lg flex items-center"
              >
                <Facebook className="w-5 h-5 mr-2" />
                <span>Facebook</span>
              </a>
              <a 
                href={`mailto:?subject=Your Money, Your Data: How SpendSync Keeps Your Financial Information Secure&body=I thought you might find this article interesting: ${encodeURIComponent(window.location.href)}`}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
            <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/product-updates" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <h4 className="font-medium text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400">What's New in SpendSync v1.2.5</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Learn about our recent security enhancements and new features.</p>
                  </div>
                </div>
              </Link>
              <Link to="/blog/group-expenses" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <h4 className="font-medium text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400">The Ultimate Guide to Sharing Expenses Securely</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">How to manage group finances while maintaining privacy and security.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityBlog; 
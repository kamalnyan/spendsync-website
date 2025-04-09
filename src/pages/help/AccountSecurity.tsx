import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Shield, Lock, Fingerprint, HelpCircle, 
  ChevronRight, Eye, EyeOff, Key, AlertTriangle, 
  CheckCircle2, Smartphone, Settings, BookOpen
} from "lucide-react";

const AccountSecurity = () => {
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
            <Shield className="w-5 h-5 mr-2" />
            <span>Security Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Protecting Your Financial Data
          </h1>
          
          <div className="prose prose-lg prose-invert mb-8 max-w-none">
            <p className="lead text-xl text-gray-300">
              At SpendSync, we take the security of your financial information seriously.
              This guide explains our security features and best practices to keep your data safe.
            </p>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="mb-12 p-6 bg-gray-800 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            <li>
              <a href="#security-features" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> SpendSync Security Features
              </a>
            </li>
            <li>
              <a href="#authentication" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Authentication Options
              </a>
            </li>
            <li>
              <a href="#encryption" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Data Encryption
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Privacy Controls
              </a>
            </li>
            <li>
              <a href="#best-practices" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Security Best Practices
              </a>
            </li>
            <li>
              <a href="#account-recovery" className="text-primary-400 hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-1" /> Account Recovery Options
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <section id="security-features" className="mb-12">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">SpendSync Security Features</h2>
            </div>

            <p>
              SpendSync implements multiple layers of security to protect your sensitive financial information:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Lock className="w-5 h-5 text-primary-500 mr-2" />
                  Secure Authentication
                </h3>
                <p className="m-0">
                  Multiple authentication methods including biometrics, PIN codes, and strong passwords ensure only you can access your account.
                </p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Key className="w-5 h-5 text-primary-500 mr-2" />
                  End-to-End Encryption
                </h3>
                <p className="m-0">
                  All financial data is encrypted on your device and during transmission using AES-256, one of the strongest encryption standards available.
                </p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Eye className="w-5 h-5 text-primary-500 mr-2" />
                  Privacy Controls
                </h3>
                <p className="m-0">
                  Customize exactly what data is stored, synced to the cloud, or shared with others through granular permission settings.
                </p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Smartphone className="w-5 h-5 text-primary-500 mr-2" />
                  Device Security Integration
                </h3>
                <p className="m-0">
                  SpendSync leverages your device's built-in security features, including secure keystores and protected storage areas.
                </p>
              </div>
            </div>
          </section>

          <section id="authentication" className="mb-12">
            <div className="flex items-center mb-4">
              <Fingerprint className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Authentication Options</h2>
            </div>

            <p>
              SpendSync offers several authentication methods to balance security and convenience:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Biometric Authentication</h3>
                <p className="mb-3">
                  Use your device's fingerprint scanner or facial recognition for quick and secure access.
                </p>
                <div className="bg-green-900/20 border border-green-800 rounded-lg p-3">
                  <p className="text-green-400 text-sm m-0 flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recommended for the best balance of security and convenience</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">PIN Code</h3>
                <p className="mb-3">
                  Set a 6-digit PIN code as a backup or primary authentication method.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-3">
                  <p className="text-yellow-400 text-sm m-0 flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Choose a unique PIN that you don't use for other accounts or your device</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 my-6">
              <h3 className="text-lg font-medium mb-3">How to Set Up Authentication</h3>
              <ol className="list-decimal ml-5 space-y-3">
                <li>
                  <p className="mb-1">Go to <strong>Profile → Settings → Security</strong></p>
                </li>
                <li>
                  <p className="mb-1">Tap <strong>Authentication Methods</strong></p>
                </li>
                <li>
                  <p className="mb-1">Select your preferred method(s):</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Fingerprint / Face ID</li>
                    <li>PIN Code</li>
                    <li>Password</li>
                  </ul>
                </li>
                <li>
                  <p className="mb-1">Follow the on-screen instructions to complete setup</p>
                </li>
              </ol>
            </div>
          </section>

          <section id="encryption" className="mb-12">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Data Encryption</h2>
            </div>

            <p>
              SpendSync uses industry-standard encryption to protect your financial data:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">On-Device Encryption</h3>
                <p className="mb-3">
                  Your financial data is encrypted on your device using AES-256 encryption. This ensures that even if your device is lost or stolen, your data remains secure.
                </p>
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-3">
                  <p className="text-blue-400 text-sm m-0 flex items-start">
                    <HelpCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Make sure your device lock screen is enabled for an additional layer of protection</span>
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Transmission Encryption</h3>
                <p className="m-0">
                  When data is synchronized between your device and our servers, it's protected by TLS 1.3 (Transport Layer Security), the latest protocol for secure data transmission.
                </p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Encryption Keys</h3>
                <p className="m-0">
                  Your encryption keys are generated on your device and never transmitted to our servers in an unencrypted form. This ensures that only you can decrypt and access your financial data.
                </p>
              </div>
            </div>
          </section>

          <section id="privacy" className="mb-12">
            <div className="flex items-center mb-4">
              <EyeOff className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Privacy Controls</h2>
            </div>

            <p>
              SpendSync gives you control over your data privacy through various settings:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Data Storage Options</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Local Only:</strong> Keep all data on your device</li>
                  <li><strong>Cloud Sync:</strong> Securely back up encrypted data</li>
                  <li><strong>Selective Sync:</strong> Choose which data to sync</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-3">Sharing Controls</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Granular Permissions:</strong> Share only specific expenses</li>
                  <li><strong>Masked Values:</strong> Hide exact amounts when sharing</li>
                  <li><strong>Time-Limited Access:</strong> Set expiration for shared data</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 my-6">
              <h3 className="text-lg font-medium mb-3">How to Configure Privacy Settings</h3>
              <ol className="list-decimal ml-5 space-y-2">
                <li>
                  <p className="mb-1">Go to <strong>Profile → Settings → Privacy</strong></p>
                </li>
                <li>
                  <p className="mb-1">Choose your preferred data storage option</p>
                </li>
                <li>
                  <p className="mb-1">Configure sharing preferences</p>
                </li>
                <li>
                  <p className="mb-1">Set visibility options for specific financial data</p>
                </li>
              </ol>
            </div>
          </section>

          <section id="best-practices" className="mb-12">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Security Best Practices</h2>
            </div>

            <p>
              Follow these recommendations to maximize the security of your SpendSync account and financial data:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Settings className="w-5 h-5 text-primary-500 mr-2" />
                  Enable the Strongest Authentication
                </h3>
                <p className="m-0">
                  Use biometric authentication when available. Set a strong PIN code as a backup. Never use simple PINs like "123456" or your birth date.
                </p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Smartphone className="w-5 h-5 text-primary-500 mr-2" />
                  Keep Your Device Secure
                </h3>
                <p className="m-0">
                  Enable your device's lock screen with a strong password, PIN, or biometric protection. Keep your device's operating system and apps updated.
                </p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <EyeOff className="w-5 h-5 text-primary-500 mr-2" />
                  Enable Auto-Lock
                </h3>
                <p className="m-0">
                  Configure SpendSync to automatically lock after a period of inactivity (recommended: 1-5 minutes). This prevents unauthorized access if you leave your device unattended.
                </p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-primary-500 mr-2" />
                  Be Cautious with Public Wi-Fi
                </h3>
                <p className="m-0">
                  Avoid accessing financial information on public or unsecured Wi-Fi networks. Use a VPN for additional protection when on public networks.
                </p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Eye className="w-5 h-5 text-primary-500 mr-2" />
                  Enable Mask Mode
                </h3>
                <p className="m-0">
                  Use SpendSync's mask mode to hide sensitive financial information when in public places or when someone might be looking over your shoulder.
                </p>
              </div>
            </div>
          </section>

          <section id="account-recovery" className="mb-12">
            <div className="flex items-center mb-4">
              <Key className="w-8 h-8 text-primary-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold m-0">Account Recovery Options</h2>
            </div>

            <p>
              If you forget your PIN or password, or lose access to your biometric authentication, you can recover your account using these methods:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Email Recovery</h3>
                <p className="mb-3">
                  We can send a secure recovery link to your verified email address. This link will expire after 30 minutes.
                </p>
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Tap "Forgot Password" on the login screen</li>
                  <li>Enter your email address</li>
                  <li>Check your email for the recovery link</li>
                  <li>Follow the instructions to reset your authentication</li>
                </ol>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium mb-2">Recovery Code</h3>
                <p className="mb-3">
                  When you first set up your account, SpendSync provides a unique recovery code. Store this code in a secure place separate from your device.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-3">
                  <p className="text-yellow-400 text-sm m-0 flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>If you haven't saved your recovery code yet, go to Profile → Settings → Security → Recovery Code to generate and save it now.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-5 my-6">
              <h3 className="text-lg font-medium mb-3 text-red-300">Important Note on Data Recovery</h3>
              <p className="text-red-400 m-0">
                If you've chosen the "Local Only" storage option and lose access to your device without a backup, your data cannot be recovered. We recommend enabling secure cloud sync to prevent data loss.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 my-10">
            <h3 className="text-xl font-bold mb-4 text-white">Your Security is Our Priority</h3>
            <p className="text-white mb-6">
              SpendSync is committed to protecting your financial information with the highest security standards. By following the best practices in this guide, you can ensure that your data remains safe and private.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/help/getting-started" 
                className="inline-flex items-center bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Previous: Getting Started
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

export default AccountSecurity; 
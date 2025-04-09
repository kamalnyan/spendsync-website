"use client"
import React, { useEffect, useState } from "react"
import { ArrowRight, PieChart, Wallet, Users, Bell, BarChart3, Shield, Globe, Smartphone, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import HeroSection from "../components/ui/hero-section"
import FeatureCard from "../components/ui/feature-card"
import AnimatedGradientBorder from "../components/ui/animated-gradient-border"
import AnimatedText from "../components/ui/animated-text"
import FeatureIllustration from "../components/ui/FeatureIllustration"
import { GooglePlayLogo } from "../components/ui/google-play-logo"
import { AppleLogo } from "../components/ui/apple-logo"
import { ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Reveal } from "../components/ui/reveal"
import LavaLampEffect from "../components/ui/LavaLampEffect"
import { usePlayStore } from "../hooks/usePlayStore"
import GlassmorphismCard from "../components/ui/GlassmorphismCard"
import useSEO from "../utils/seo"
import { generateStructuredData } from "../utils/seo"
import { Helmet } from "react-helmet-async"

const Home = () => {
  const [user, setUser] = useState({ name: "" })
  const [isClient, setIsClient] = useState(false)
  const appData = usePlayStore("com.rml.spendsync")

  useEffect(() => {
    setIsClient(true)
  }, [])

  const features = [
    {
      id: "expense-tracking",
      icon: <Wallet className="w-8 h-8 text-white" />,
      title: "Expense Tracking",
      description:
        "Real-time expense logging with voice input support, receipt scanning, and multiple currency support.",
      details: [
        "Real-time expense logging",
        "Voice input support",
        "Receipt scanning",
        "Multiple currency support"
      ]
    },
    {
      id: "budgeting",
      icon: <PieChart className="w-8 h-8 text-white" />,
      title: "Budget Management",
      description: "Monthly budget planning with customizable spending limits and visual progress indicators.",
      details: [
        "Monthly budget planning",
        "Customizable spending limits",
        "Visual progress indicators",
        "Budget alerts"
      ]
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Smart Analytics",
      description: "Interactive spending charts and detailed financial reports with custom date range analysis.",
      details: [
        "Interactive spending charts",
        "Detailed financial reports",
        "Custom date range analysis",
        "Spending pattern detection"
      ]
    },
    {
      id: "bill-splitting",
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Split Expenses",
      description: "Group expense management with easy bill splitting and settlement tracking.",
      details: [
        "Group expense management",
        "Easy bill splitting",
        "Settlement tracking",
        "Expense reminders"
      ]
    },
    {
      id: "reminders",
      icon: <Bell className="w-8 h-8 text-white" />,
      title: "Smart Reminders",
      description: "Bill payment alerts and custom financial reminders to keep you on track.",
      details: [
        "Bill payment alerts",
        "Custom financial reminders",
        "Payment due notifications",
        "Recurring bill tracking"
      ]
    },
    {
      id: "security",
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Security Features",
      description: "Secure authentication with data encryption and cloud backup capabilities.",
      details: [
        "Secure authentication",
        "Data encryption",
        "Cloud backup",
        "Biometric login"
      ]
    },
  ]

  const techSpecs = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Platforms",
      specs: ["Android 6.0 or higher", "iOS version coming soon"],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Framework",
      specs: ["Built with Flutter", "Firebase Backend"],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      specs: ["Data Encryption", "Secure Authentication"],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Features",
      specs: ["Offline Support", "Cloud Sync"],
    },
  ]

  // Add SEO hook at the start of the component
  useSEO({
    title: "Personal Finance Management",
    description: "SpendSync - Your comprehensive personal finance companion that combines powerful features with an intuitive interface to make money management simple and effective.",
    keywords: "personal finance, budget tracker, expense management, money app, financial planning",
    type: "website",
    canonical: "https://spendsync.app/"
  });
  
  // Generate structured data
  const structuredData = generateStructuredData("home");

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="relative overflow-hidden bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-40">
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-4">
                  <AnimatedGradientBorder className="w-40 h-8" borderWidth={2} speed={5}>
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-full">
                      <p className="text-sm font-bold">Version 1.2.5</p>
                    </div>
                  </AnimatedGradientBorder>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="relative">
                    <span className="relative z-10">Master Your Finances with </span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#FF0080] to-[#7928CA] opacity-60"></span>
                  </span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7928CA]">
                    SpendSync
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  The complete expense tracking and budgeting app that helps you take control of your finances, plan your budget,
                  and achieve your financial goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button
                    className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] hover:opacity-90 rounded-full px-8 py-6 transition-all"
                    size="lg"
                    onClick={() => window.open("https://play.google.com/store/apps/details?id=com.rml.spendsync&pcampaignid=web_share", "_blank")}
                  >
                    <GooglePlayLogo className="mr-2 h-5 w-5" />
                    Download for Android
                  </Button>
                  <Button
                    className="bg-gray-800 hover:bg-gray-700 rounded-full px-8 py-6 transition-all"
                    variant="outline"
                    size="lg"
                    disabled
                  >
                    <AppleLogo className="mr-2 h-5 w-5" />
                    <span className="opacity-70">iOS App Coming Soon</span>
                  </Button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <div className="flex -space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-gray-900 bg-gradient-to-r from-[#FF0080] to-[#7928CA]"
                        ></div>
                      ))}
                    </div>
                    {appData.isLoading ? (
                      <div className="ml-2 animate-pulse">Loading...</div>
                    ) : (
                      <div className="ml-2">{appData.downloads} Downloads</div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(parseFloat(appData.rating)) ? 'text-yellow-400' : 'text-gray-400'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    {appData.isLoading ? (
                      <div className="ml-2 animate-pulse">Loading...</div>
                    ) : (
                      <div className="ml-2">{appData.rating} Rating</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[9/16] max-w-[320px] mx-auto relative">
                  <div className="w-full h-full rounded-3xl overflow-hidden border-8 border-gray-800 relative">
                    <FeatureIllustration type="finance" className="h-full" />
                  </div>
                  <div className="absolute -top-5 -left-5 w-40 h-40">
                    <FeatureIllustration type="analytics" className="h-full" />
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-40 h-40">
                    <FeatureIllustration type="budget" className="h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-12 lg:mt-0 animate-bounce">
              <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
              <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <LavaLampEffect className="w-full h-full" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">Features</span> to Manage Your Finances
              </motion.h2>
              <motion.p
                className="text-xl text-gray-400 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                SpendSync provides all the tools you need for complete financial control
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphismCard
                    gradient={
                      feature.id === "expense-tracking" ? "from-pink-500 to-purple-600" :
                      feature.id === "budgeting" ? "from-blue-500 to-indigo-600" :
                      feature.id === "bill-splitting" ? "from-emerald-500 to-teal-600" :
                      feature.id === "goals" ? "from-amber-500 to-orange-600" :
                      feature.id === "insights" ? "from-cyan-500 to-blue-600" :
                      "from-purple-500 to-indigo-600"
                    }
                    glowColor={
                      feature.id === "expense-tracking" ? "rgba(236, 72, 153, 0.5)" :
                      feature.id === "budgeting" ? "rgba(59, 130, 246, 0.5)" :
                      feature.id === "bill-splitting" ? "rgba(16, 185, 129, 0.5)" :
                      feature.id === "goals" ? "rgba(245, 158, 11, 0.5)" :
                      feature.id === "insights" ? "rgba(14, 165, 233, 0.5)" :
                      "rgba(139, 92, 246, 0.5)"
                    }
                    icon={feature.icon}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedText text="Technical Specifications" className="text-3xl font-bold text-center mb-12" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphismCard
                    gradient={
                      spec.title === "Platforms" ? "from-purple-500 to-pink-600" :
                      spec.title === "Framework" ? "from-blue-500 to-indigo-600" :
                      spec.title === "Security" ? "from-red-500 to-pink-600" :
                      "from-emerald-500 to-teal-600"
                    }
                    glowColor={
                      spec.title === "Platforms" ? "rgba(168, 85, 247, 0.5)" :
                      spec.title === "Framework" ? "rgba(59, 130, 246, 0.5)" :
                      spec.title === "Security" ? "rgba(239, 68, 68, 0.5)" :
                      "rgba(16, 185, 129, 0.5)"
                    }
                    icon={spec.icon}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">{spec.title}</h3>
                      <ul className="space-y-2">
                        {spec.specs.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-center">
                            <span className="w-1.5 h-1.5 bg-white/70 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <GlassmorphismCard
                gradient="from-[#FF0080] to-[#7928CA]"
                glowColor="rgba(236, 72, 153, 0.5)"
                className="overflow-hidden"
              >
                <div className="p-8 text-center">
                  <AnimatedText
                    text="Ready to Take Control of Your Finances?"
                    className="text-3xl md:text-4xl font-bold mb-6"
                  />
                  <motion.p
                    className="text-lg text-gray-300 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Download SpendSync today and start your journey towards financial clarity and success.
                    Join thousands of users who have already transformed their financial habits.
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] hover:opacity-90 rounded-full px-8 py-6 transition-all"
                      size="lg"
                      onClick={() => window.open("https://play.google.com/store/apps/details?id=com.rml.spendsync&pcampaignid=web_share", "_blank")}
                    >
                      <GooglePlayLogo className="mr-2 h-5 w-5" />
                      Download for Android
                    </Button>
                    <Button
                      className="bg-gray-800 hover:bg-gray-700 rounded-full px-8 py-6 transition-all"
                      variant="outline"
                      size="lg"
                      disabled
                    >
                      <AppleLogo className="mr-2 h-5 w-5" />
                      <span className="opacity-70">iOS App Coming Soon</span>
                    </Button>
                  </motion.div>
                </div>
              </GlassmorphismCard>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <LavaLampEffect className="w-full h-full" color1="#020F38" color2="#0A2472" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home



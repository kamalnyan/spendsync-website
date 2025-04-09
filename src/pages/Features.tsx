"use client"
import React from "react"
import { Wallet, PieChart, BarChart3, Shield, Target, Users, Bell, Lock, Moon, Database, Lightbulb, Cloud } from "lucide-react"
import HeroSection from "../components/ui/hero-section"
import AnimatedText from "../components/ui/animated-text"
import GlassmorphismCard from "../components/ui/GlassmorphismCard"
import { appConfig } from "../config/appConfig"

const Features = () => {
  const mainFeatures = [
    {
      icon: <Wallet className="w-12 h-12 text-white" />,
      title: "Expense Tracking",
      description: "Track your expenses in real-time with categorization and detailed history.",
      subFeatures: [
        "Real-time expense logging with categories",
        "Payment method tracking",
        "Complete expense history",
        "Data encryption for security",
        "Transaction notes for better record-keeping",
      ],
      type: "expenses" as const,
    },
    {
      icon: <Wallet className="w-12 h-12 text-white" />,
      title: "Income Management",
      description: "Monitor multiple income sources and keep track of your earnings.",
      subFeatures: [
        "Multiple income sources tracking",
        "Salary date settings",
        "Income history view",
        "Monthly income summary",
      ],
      type: "finance" as const,
    },
    {
      icon: <PieChart className="w-12 h-12 text-white" />,
      title: "Budget Management",
      description: "Set, track, and analyze your monthly budgets with powerful insights.",
      subFeatures: [
        "Monthly budget planning",
        "Budget vs. actual analysis",
        "Dynamic budget calculation",
        "Budget alerts and notifications",
        "Budget health indicators",
      ],
      type: "budget" as const,
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-white" />,
      title: "Analytics & Insights",
      description: "Gain detailed insights into your spending patterns and financial health.",
      subFeatures: [
        "Interactive spending pattern visualization",
        "Category-wise analysis",
        "Payment method analysis",
        "Monthly comparisons",
        "Savings gauge and financial health messages",
      ],
      type: "analytics" as const,
    },
    {
      icon: <Target className="w-12 h-12 text-white" />,
      title: "Goal Setting & Tracking",
      description: "Set financial goals and track your progress towards achieving them.",
      subFeatures: [
        "Financial goal creation with deadlines",
        "Goal progress tracking",
        "Priority flagging for important goals",
        "Goal achievement probability",
        "Goal timeline visualization",
      ],
      type: "finance" as const,
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Split Expenses",
      description: "Create groups and split expenses with friends and family members.",
      subFeatures: [
        "Group creation for shared expenses",
        "Expense splitting among members",
        "Settlement tracking",
        "Group expense history",
        "Dedicated settlement screen",
      ],
      type: "expenses" as const,
    },
    {
      icon: <Bell className="w-12 h-12 text-white" />,
      title: "Reminders & Notifications",
      description: "Stay on top of your finances with customizable reminders and alerts.",
      subFeatures: [
        "Bill payment reminders",
        "Custom financial reminders",
        "Push notifications for important events",
        "Budget alerts",
        "Goal deadline alerts",
      ],
      type: "reminders" as const,
    },
  ]

  const additionalFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security & Privacy",
      description: "End-to-end encryption, local data storage, and secure authentication",
      type: "security" as const,
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Smart Features",
      description: "Spending suggestions, recurring expense detection, and financial health scoring",
      type: "finance" as const,
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Connectivity & Integration",
      description: "Real-time data synchronization and cross-platform compatibility",
      type: "budget" as const,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Technical Enhancements",
      description: "Performance optimization and device-specific support",
      type: "security" as const,
    },
  ]

  // Preload feature gradients in CSS variables for faster rendering
  React.useEffect(() => {
    // Create a style element to predefine gradients
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --expenses-gradient: linear-gradient(to bottom right, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9));
        --budget-gradient: linear-gradient(to bottom right, rgba(124, 58, 237, 0.9), rgba(79, 70, 229, 0.9));
        --analytics-gradient: linear-gradient(to bottom right, rgba(59, 130, 246, 0.9), rgba(6, 182, 212, 0.9));
        --finance-gradient: linear-gradient(to bottom right, rgba(236, 72, 153, 0.9), rgba(99, 102, 241, 0.9));
        --reminders-gradient: linear-gradient(to bottom right, rgba(245, 158, 11, 0.9), rgba(234, 88, 12, 0.9));
        --default-gradient: linear-gradient(to bottom right, rgba(139, 92, 246, 0.9), rgba(124, 58, 237, 0.9));
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="pt-16 scroll-smooth bg-gray-900 text-white">
      {/* Hero Section */}
      <HeroSection
        title="Powerful Features for Your Financial Success"
        subtitle="Discover all the tools and features that make SpendSync the perfect companion for your financial journey."
      />

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center" id={`feature-${feature.type}`}>
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}
                  data-feature-content="true"
                >
                  <div className="inline-block p-4 bg-gradient-to-br from-[#FF0080] to-[#7928CA] rounded-2xl">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                  <p className="text-lg text-gray-300">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.subFeatures.map((subFeature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-300"
                      >
                        <span className="w-2 h-2 bg-[#FF0080] rounded-full mr-3"></span>
                        {subFeature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative">
                    {/* Feature visualization with actual image */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br opacity-80"
                        style={{
                          background: feature.type === "expenses" ? "var(--expenses-gradient)" :
                          feature.type === "budget" ? "var(--budget-gradient)" :
                          feature.type === "analytics" ? "var(--analytics-gradient)" :
                          feature.type === "finance" ? "var(--finance-gradient)" :
                          feature.type === "reminders" ? "var(--reminders-gradient)" :
                          "var(--default-gradient)"
                        }}
                      ></div>
                      
                      {/* Center icon with glow effect */}
                      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center shadow-lg">
                            <div className="w-16 h-16 text-white">
                              {feature.icon}
                            </div>
                          </div>
                          <div className="absolute -inset-4 rounded-full blur-lg opacity-40"
                            style={{
                              background: feature.type === "expenses" ? "rgba(16, 185, 129, 0.5)" :
                              feature.type === "budget" ? "rgba(124, 58, 237, 0.5)" :
                              feature.type === "analytics" ? "rgba(59, 130, 246, 0.5)" :
                              feature.type === "finance" ? "rgba(236, 72, 153, 0.5)" :
                              feature.type === "reminders" ? "rgba(245, 158, 11, 0.5)" :
                              "rgba(139, 92, 246, 0.5)",
                              zIndex: -1
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Center text content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                        <h3 className="text-3xl font-bold text-white mb-2 mt-12 text-center drop-shadow-lg">
                          {feature.title}
                        </h3>
                        <p className="text-white text-center text-lg max-w-md mx-auto drop-shadow-md">
                          {feature.description}
                        </p>
                      </div>

                      {/* Small icons in background for visual effect */}
                      <div className="absolute top-5 right-5 opacity-20 w-10 h-10 text-white">
                        {feature.icon}
                      </div>
                      <div className="absolute bottom-5 left-5 opacity-20 w-10 h-10 text-white">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText text="Additional Features" className="text-3xl font-bold text-center mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl border border-gray-800 hover:border-[#FF0080]/30 transition-colors overflow-hidden"
              >
                <div className="h-32 relative">
                  {/* Feature visualization with gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-80"
                    style={{
                      background: feature.type === "security" ? "linear-gradient(to bottom right, rgba(14, 165, 233, 0.9), rgba(79, 70, 229, 0.9))" :
                      feature.type === "finance" ? "linear-gradient(to bottom right, rgba(236, 72, 153, 0.9), rgba(219, 39, 119, 0.9))" :
                      feature.type === "budget" ? "linear-gradient(to bottom right, rgba(124, 58, 237, 0.9), rgba(79, 70, 229, 0.9))" :
                      "linear-gradient(to bottom right, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9))"
                    }}
                  ></div>
                  
                  {/* Center icon with glow effect */}
                  <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center shadow-lg">
                        <div className="w-8 h-8 text-white">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="absolute -inset-2 rounded-full blur-lg opacity-30"
                        style={{
                          background: feature.type === "security" ? "rgba(14, 165, 233, 0.5)" :
                          feature.type === "finance" ? "rgba(236, 72, 153, 0.5)" :
                          feature.type === "budget" ? "rgba(124, 58, 237, 0.5)" :
                          "rgba(16, 185, 129, 0.5)",
                          zIndex: -1
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Text content - aligned right */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-right max-w-[60%] z-10">
                    <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-md">{feature.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText text="Technical Specifications" className="text-3xl font-bold text-center mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-gray-800 p-8 rounded-xl border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-[#FF0080] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Platform Requirements</h3>
              </div>
              <ul className="space-y-4">
                {appConfig.platform.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#FF0080] rounded-full mr-3"></span>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-gray-800 p-8 rounded-xl border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-[#7928CA] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Security Features</h3>
              </div>
              <ul className="space-y-4">
                {appConfig.platform.securityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#7928CA] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features


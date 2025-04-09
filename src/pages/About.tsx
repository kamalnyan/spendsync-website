"use client"
import React from "react"
import { Award, Users, Heart, Shield, Globe, Mail, Twitter, Linkedin } from "lucide-react"
import HeroSection from "../components/ui/hero-section"
import AnimatedText from "../components/ui/animated-text"
import AnimatedGradientBorder from "../components/ui/animated-gradient-border"
import GlassmorphismCard from "../components/ui/GlassmorphismCard"
import { appConfig } from "../config/appConfig"

const About = () => {
  const values = [
    {
      title: "Simplicity",
      description: "Making financial management straightforward and stress-free",
      icon: <Award className="w-8 h-8 text-blue-300" />,
      color: "blue",
    },
    {
      title: "Security",
      description: "Protecting your financial data with the highest standards", 
      icon: <Shield className="w-8 h-8 text-green-300" />,
      color: "green",
    },
    {
      title: "Empowerment",
      description: "Giving you the tools and insights to achieve financial wellness",
      icon: <Users className="w-8 h-8 text-purple-300" />,
      color: "purple",
    },
    {
      title: "Innovation",
      description: "Continuously improving our app with thoughtful features",
      icon: <Globe className="w-8 h-8 text-red-300" />,
      color: "red",
    },
    {
      title: "Accessibility",
      description: "Creating a financial tool that works for everyone",
      icon: <Heart className="w-8 h-8 text-yellow-300" />,
      color: "yellow",
    },
  ]

  return (
    <div className="pt-16 scroll-smooth bg-gray-900 text-white">
      {/* Hero Section */}
      <HeroSection
        title={`About ${appConfig.name}`}
        subtitle="We believe financial freedom starts with understanding and control. Our mission is to provide an intuitive, secure, and powerful expense tracking solution."
      />

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText text="Our Mission" className="text-3xl font-bold text-center mb-8" />
          <div className="mb-16">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At {appConfig.name}, we believe financial freedom starts with understanding and control. Our mission is to provide an intuitive, secure, and powerful expense tracking solution that empowers individuals to achieve their financial goals.
            </p>
          </div>

          <AnimatedText text="Our Story" className="text-3xl font-bold text-center mb-8" />
          <div className="mb-16">
            <p className="text-gray-300 mb-6 leading-relaxed">
              {appConfig.name} began with a simple idea: managing personal finances shouldn't be complicated. In a world of complex financial tools, we set out to create an app that combines powerful features with simplicity.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our team of passionate developers and financial enthusiasts worked to build a solution that addresses the real challenges people face when managing their money. From tracking daily expenses to splitting bills with friends, planning for future goals, and gaining meaningful insights about spending habits - we designed {appConfig.name} to be your comprehensive financial companion.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText text="What Makes Us Different" className="text-3xl font-bold text-center mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Privacy-First Approach",
                description: "We believe your financial data is extremely personal. That's why we implemented end-to-end encryption and secure local storage to ensure your information remains private.",
                icon: <Shield className="w-8 h-8 text-blue-300" />,
                gradient: "from-blue-500 to-indigo-600",
                glow: "rgba(59, 130, 246, 0.5)"
              },
              {
                title: "User-Centered Design",
                description: "Every feature in SpendSync was designed with you in mind. We focus on creating an intuitive experience that makes financial management accessible to everyone.",
                icon: <Users className="w-8 h-8 text-purple-300" />,
                gradient: "from-purple-500 to-pink-600",
                glow: "rgba(168, 85, 247, 0.5)"
              },
              {
                title: "Comprehensive Solution",
                description: "Rather than offering single-purpose tools, SpendSync combines expense tracking, budget management, goal setting, bill splitting, and financial analytics in one cohesive package.",
                icon: <Globe className="w-8 h-8 text-teal-300" />,
                gradient: "from-teal-500 to-emerald-600",
                glow: "rgba(20, 184, 166, 0.5)"
              },
              {
                title: "Data-Driven Insights",
                description: "We help you understand your finances through meaningful visualizations and personalized insights, turning complex financial data into actionable information.",
                icon: <Award className="w-8 h-8 text-amber-300" />,
                gradient: "from-amber-500 to-orange-600",
                glow: "rgba(245, 158, 11, 0.5)"
              },
            ].map((item, index) => (
              <div key={index} className="opacity-100">
                <GlassmorphismCard
                  gradient={item.gradient}
                  glowColor={item.glow}
                  icon={item.icon}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText text="Our Values" className="text-3xl font-bold text-center mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="opacity-100">
                <GlassmorphismCard
                  gradient="from-cyan-500 to-blue-600" 
                  glowColor="rgba(14, 165, 233, 0.5)"
                  icon={value.icon}
                >
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText text="Our Commitment to You" className="text-3xl font-bold text-center mb-8" />
          <div className="mb-16">
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're committed to helping you take control of your finances. {appConfig.name} is constantly evolving based on user feedback and technological advancements. We promise to:
            </p>
            <ul className="text-gray-300 space-y-2 mb-6 list-disc pl-6">
              <li>Maintain the highest standards of data security and privacy</li>
              <li>Regularly update our app with new features and improvements</li>
              <li>Listen to your feedback and needs</li>
              <li>Provide a reliable and intuitive financial management experience</li>
              <li>Never compromise on the quality of your experience for commercial interests</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Join thousands of users who have already transformed their financial habits with {appConfig.name}. Your journey to financial clarity and control starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText text="Contact Us" className="text-3xl font-bold text-center mb-8" />
          <div>
            <p className="text-gray-300 mb-6">
              Have questions, suggestions, or feedback? We'd love to hear from you!
            </p>
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-500 mr-2" />
              <a href="mailto:uic.23mca20237@gmail.com" className="text-primary-500 hover:underline">
                uic.23mca20237@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


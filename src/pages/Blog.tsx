"use client"
import React from "react"
import { Calendar, Clock, Tag, ArrowRight, DollarSign, RefreshCw, PieChart, BarChart4, ShieldCheck, Users } from "lucide-react"
import { Link } from "react-router-dom"
import HeroSection from "../components/ui/hero-section"
import AnimatedText from "../components/ui/animated-text"
import AnimatedGradientBorder from "../components/ui/animated-gradient-border"
import GlassmorphismCard from "../components/ui/GlassmorphismCard"
import { appConfig } from "../config/appConfig"

function Blog() {
  const blogPosts = [
    {
      title: "Mastering Your Personal Finances with SpendSync",
      excerpt: "Learn how to take control of your financial future using SpendSync's powerful features.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Financial Tips",
      slug: "/blog/financial-tips"
    },
    {
      title: "New Features: SpendSync's Latest Updates",
      excerpt: "Discover the latest updates to SpendSync that make expense tracking even easier.",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Product Updates",
      slug: "/blog/product-updates"
    },
    {
      title: "5 Tips for Better Budget Management",
      excerpt: "Expert advice on creating and sticking to a budget that works for you.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Budgeting",
      slug: "/blog/budgeting-tips"
    },
    {
      title: "Understanding Your Spending Patterns",
      excerpt: "How to use SpendSync's analytics to identify and improve your spending habits.",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Analytics",
      slug: "/blog/spending-patterns"
    },
    {
      title: "Securing Your Financial Data",
      excerpt:
        "Learn about SpendSync's security features and best practices for protecting your financial information.",
      date: "February 25, 2024",
      readTime: "5 min read",
      category: "Security",
      slug: "/blog/security"
    },
    {
      title: "Group Expense Management Made Easy",
      excerpt: "Tips and tricks for managing shared expenses with SpendSync's split feature.",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Features",
      slug: "/blog/group-expenses"
    },
  ]

  return (
    <div className="pt-16 scroll-smooth bg-gray-900 text-white">
      {/* Hero Section */}
      <HeroSection
        title={`${appConfig.name} Blog`}
        subtitle="Insights, updates, and expert advice to help you master your finances"
      />

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="rounded-xl overflow-hidden"
              >
                <Link to={post.slug} className="block h-full">
                  <GlassmorphismCard
                    gradient={
                      post.category === "Financial Tips" ? "from-pink-500 to-purple-600" :
                      post.category === "Product Updates" ? "from-blue-500 to-cyan-600" :
                      post.category === "Budgeting" ? "from-purple-600 to-indigo-700" :
                      post.category === "Analytics" ? "from-blue-500 to-cyan-600" :
                      post.category === "Security" ? "from-sky-500 to-indigo-600" :
                      "from-emerald-500 to-teal-600"
                    }
                    glowColor={
                      post.category === "Financial Tips" ? "rgba(236, 72, 153, 0.5)" :
                      post.category === "Product Updates" ? "rgba(59, 130, 246, 0.5)" :
                      post.category === "Budgeting" ? "rgba(109, 40, 217, 0.5)" :
                      post.category === "Analytics" ? "rgba(59, 130, 246, 0.5)" :
                      post.category === "Security" ? "rgba(14, 165, 233, 0.5)" :
                      "rgba(16, 185, 129, 0.5)"
                    }
                    className="h-full"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                        <GlassmorphismCard
                          gradient={
                            post.category === "Financial Tips" ? "from-pink-500 to-purple-600" :
                            post.category === "Product Updates" ? "from-blue-500 to-cyan-600" :
                            post.category === "Budgeting" ? "from-purple-600 to-indigo-700" :
                            post.category === "Analytics" ? "from-blue-500 to-cyan-600" :
                            post.category === "Security" ? "from-sky-500 to-indigo-600" :
                            "from-emerald-500 to-teal-600"
                          }
                          glowColor={
                            post.category === "Financial Tips" ? "rgba(236, 72, 153, 0.5)" :
                            post.category === "Product Updates" ? "rgba(59, 130, 246, 0.5)" :
                            post.category === "Budgeting" ? "rgba(109, 40, 217, 0.5)" :
                            post.category === "Analytics" ? "rgba(59, 130, 246, 0.5)" :
                            post.category === "Security" ? "rgba(14, 165, 233, 0.5)" :
                            "rgba(16, 185, 129, 0.5)"
                          }
                        >
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                                {post.category === "Financial Tips" ? <DollarSign className="w-8 h-8" /> :
                                 post.category === "Product Updates" ? <RefreshCw className="w-8 h-8" /> :
                                 post.category === "Budgeting" ? <PieChart className="w-8 h-8" /> :
                                 post.category === "Analytics" ? <BarChart4 className="w-8 h-8" /> :
                                 post.category === "Security" ? <ShieldCheck className="w-8 h-8" /> :
                                 <Users className="w-8 h-8" />}
                              </div>
                              <h3 className="text-lg font-semibold text-white">{post.category}</h3>
                            </div>
                          </div>
                        </GlassmorphismCard>
                      </div>
                      <h2 className="text-xl font-semibold text-white mb-2 line-clamp-2">{post.title}</h2>
                      <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <GlassmorphismCard
              gradient="from-[#FF0080] to-[#7928CA]"
              className="rounded-2xl"
            >
              <div className="p-8 text-center">
                <AnimatedText text="Stay Updated" className="text-3xl font-bold mb-4" />
                <p className="text-lg text-gray-300 mb-8">
                  Subscribe to our newsletter for the latest financial tips and {appConfig.name} updates.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-lg flex-1 max-w-md border border-gray-700 bg-gray-900/60 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FF0080] transition-all"
                  />
                  <button
                    className="px-6 py-3 bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    Subscribe <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </form>
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog


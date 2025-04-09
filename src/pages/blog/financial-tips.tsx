import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight, Star, Users, TrendingUp, Lightbulb, BarChart4, DollarSign, ShieldCheck } from "lucide-react"
import GlassmorphismCard from "../../components/ui/GlassmorphismCard"

const FinancialTipsBlog = () => {
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
          <div className="flex flex-wrap text-sm text-gray-400">
            <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Financial Mastery</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-blue-900 text-blue-200 text-xs font-medium rounded-full flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              Personal Finance
            </span>
            <span className="px-3 py-1 bg-green-900 text-green-200 text-xs font-medium rounded-full flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
            Master Your Personal Finances: Essential Tips with SpendSync
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <div className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>April 15, 2023</span>
            </div>
            <div className="flex items-center mr-4">
              <Clock className="w-4 h-4 mr-2" />
              <span>10 min read</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>By SpendSync Team</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            In today's dynamic economic landscape, mastering your personal finances has never been more crucial. 
            This comprehensive guide offers actionable strategies to transform your financial health using SpendSync's 
            powerful features.
          </p>
          
          {/* Table of Contents */}
          <div className="p-5 bg-gray-800 rounded-xl shadow-sm mb-8">
            <h2 className="text-lg font-semibold mb-3 flex items-center">
              <BarChart4 className="w-5 h-5 mr-2 text-primary-500" />
              In This Article
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#understanding-spending" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Understanding Your Spending Habits
                </a>
              </li>
              <li>
                <a href="#creating-budget" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Creating a Budget That Works
                </a>
              </li>
              <li>
                <a href="#financial-goals" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Setting Achievable Financial Goals
                </a>
              </li>
              <li>
                <a href="#emergency-fund" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Building an Emergency Fund
                </a>
              </li>
              <li>
                <a href="#shared-expenses" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Managing Shared Expenses
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Content Column */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none prose-invert">
              {/* Introduction Section */}
              <p className="lead">
                Taking control of your finances can seem overwhelming, but with the right tools and strategies, 
                financial mastery is within your reach. SpendSync is designed to make this journey smoother by 
                providing intuitive features that tackle common financial management challenges.
              </p>
              
              {/* Section 1 */}
              <h2 id="understanding-spending" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <TrendingUp className="w-6 h-6 mr-2 text-primary-500" />
                Understanding Your Spending Habits
              </h2>
              
              <p>
                Before you can improve your financial situation, you need a clear picture of where your money is going. 
                This critical first step often reveals spending patterns you weren't fully aware of.
              </p>
              
              <h3>Track Every Transaction</h3>
              <p>
                SpendSync makes transaction tracking effortless with:
              </p>
              <ul>
                <li><strong>Automatic categorization</strong> of expenses into customizable groups</li>
                <li><strong>Real-time updates</strong> whenever you make a purchase</li>
                <li><strong>Comprehensive reports</strong> that visualize your spending patterns</li>
              </ul>
              
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 my-6">
                <h4 className="font-semibold text-blue-300 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Pro Tip
                </h4>
                <p className="mt-1 text-blue-400 text-sm">
                  Take a full month to track your expenses without making any changes to your spending habits. 
                  This baseline will reveal your true financial patterns and serve as a powerful motivator for change.
                </p>
              </div>
              
              <h3>Identify Spending Triggers</h3>
              <p>
                SpendSync's analytics help you recognize emotional and situational triggers that lead to impulsive spending:
              </p>
              <ul>
                <li>Time patterns (e.g., weekend splurges)</li>
                <li>Location-based spending (e.g., certain stores or websites)</li>
                <li>Emotional states that correlate with higher expenditures</li>
              </ul>
              
              {/* Section 2 */}
              <h2 id="creating-budget" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <DollarSign className="w-6 h-6 mr-2 text-primary-500" />
                Creating a Budget That Works
              </h2>
              
              <p>
                A budget isn't about restriction—it's about intentionality. It's a plan that aligns your spending with 
                what you value most, ensuring your financial decisions support your life goals.
              </p>
              
              <h3>The 50/30/20 Framework</h3>
              <p>
                One popular budgeting approach is the 50/30/20 rule:
              </p>
              <ul>
                <li><strong>50% for needs</strong> – housing, food, utilities, transportation, and other essentials</li>
                <li><strong>30% for wants</strong> – dining out, entertainment, hobbies, and other discretionary expenses</li>
                <li><strong>20% for savings and debt repayment</strong> – emergency fund, investments, and paying off loans</li>
              </ul>
              
              <p>
                SpendSync allows you to easily implement this framework by:
              </p>
              <ul>
                <li>Setting category-specific budgets</li>
                <li>Visualizing your spending distribution across needs, wants, and savings</li>
                <li>Receiving alerts when you approach or exceed category limits</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700">
                  <h4 className="font-bold mb-2 text-white">Needs (50%)</h4>
                  <p className="text-gray-400 text-sm">Essential expenses required for basic living</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700">
                  <h4 className="font-bold mb-2 text-white">Wants (30%)</h4>
                  <p className="text-gray-400 text-sm">Discretionary spending that enhances life quality</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700">
                  <h4 className="font-bold mb-2 text-white">Savings (20%)</h4>
                  <p className="text-gray-400 text-sm">Future security through saving and investing</p>
                </div>
              </div>
              
              <h3>Flexible vs. Fixed Expenses</h3>
              <p>
                When creating your budget, distinguish between:
              </p>
              <ul>
                <li><strong>Fixed expenses</strong> with consistent amounts (rent, subscriptions, loan payments)</li>
                <li><strong>Flexible expenses</strong> that vary month to month (groceries, utilities, entertainment)</li>
              </ul>
              <p>
                SpendSync's budgeting tools let you set different types of budget limits:
              </p>
              <ul>
                <li>Fixed amounts for predictable expenses</li>
                <li>Target ranges for variable categories</li>
                <li>Percentage-based allocations that adjust with your income</li>
              </ul>
              
              {/* Section 3 */}
              <h2 id="financial-goals" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <Star className="w-6 h-6 mr-2 text-primary-500" />
                Setting Achievable Financial Goals
              </h2>
              
              {/* More sections would continue... */}
              
              <blockquote className="border-l-4 border-primary-500 pl-4 italic my-8">
                "Financial freedom is not about being rich, but about having options. It starts with being intentional 
                about every dollar you earn and spend."
              </blockquote>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 my-10 text-white">
                <h3 className="text-xl font-bold mb-2">Ready to Transform Your Finances?</h3>
                <p className="mb-4">Start your journey to financial mastery today with SpendSync's powerful tools and insights.</p>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.rml.spendsync&pcampaignid=web_share" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Download SpendSync Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <h3 className="font-bold text-lg mb-4 text-white">Related Articles</h3>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/blog/budgeting-tips" 
                      className="text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>5 Expert Tips for Better Budget Management</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog/spending-patterns" 
                      className="text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>Decode Your Spending Patterns with SpendSync</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog/group-expenses" 
                      className="text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>Never Split the Bill Again: Managing Group Expenses</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-white">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest financial tips and updates delivered straight to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  />
                  <button 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FinancialTipsBlog 
import React from "react"
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight, PieChart, Star, Users, DollarSign, Lightbulb, BarChart4, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import GlassmorphismCard from "../../components/ui/GlassmorphismCard"

const BudgetingTipsBlog = () => {
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
            <span>Budget Management</span>
          </div>
        </div>
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-purple-900 text-purple-200 text-xs font-medium rounded-full flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              Budgeting
            </span>
            <span className="px-3 py-1 bg-green-900 text-green-200 text-xs font-medium rounded-full flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
            5 Tips for Better Budget Management
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <div className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>March 5, 2024</span>
            </div>
            <div className="flex items-center mr-4">
              <Clock className="w-4 h-4 mr-2" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>By SpendSync Team</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Creating and sticking to a budget is one of the most powerful financial habits you can develop. A well-planned budget helps you stay on track with your financial goals, avoid unnecessary debt, and build wealth over time. But many people find budgeting challenging, restrictive, or simply overwhelming.
          </p>
          
          {/* Table of Contents */}
          <div className="p-5 bg-gray-800 rounded-xl shadow-sm mb-8">
            <h2 className="text-lg font-semibold mb-3 flex items-center">
              <BarChart4 className="w-5 h-5 mr-2 text-primary-500" />
              In This Article
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#current-spending" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Understanding Your Current Spending
                </a>
              </li>
              <li>
                <a href="#budget-rule" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  The 50/30/20 Rule
                </a>
              </li>
              <li>
                <a href="#irregular-expenses" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Budget for Irregular Expenses
                </a>
              </li>
              <li>
                <a href="#budget-flexibility" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Build Flexibility Into Your Budget
                </a>
              </li>
              <li>
                <a href="#automation" className="flex items-center text-primary-400 hover:underline">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Automate Your Budget
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
              {/* Introduction */}
              <p className="lead">
                The good news is that effective budgeting doesn't have to be complicated or painful. With the right approach and tools like SpendSync, you can create a budget that works for your lifestyle and helps you achieve your financial goals. Here are five expert tips to help you build and maintain a better budget.
              </p>
              
              {/* Section 1 */}
              <h2 id="current-spending" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <BarChart4 className="w-6 h-6 mr-2 text-primary-500" />
                1. Start With Understanding Your Current Spending
              </h2>
              
              <p>
                Before you can create an effective budget, you need to understand where your money is currently going. This step is crucial but often overlooked.
              </p>
              
              <h3>How to Implement This Tip:</h3>
              <ul>
                <li>
                  <strong>Track all expenses for at least 30 days</strong>: Use SpendSync to log every purchase, no matter how small. This will give you an accurate picture of your spending habits.
                </li>
                <li>
                  <strong>Categorize your expenses</strong>: SpendSync automatically categorizes your expenses, making it easy to see how much you're spending on housing, food, transportation, entertainment, and other categories.
                </li>
                <li>
                  <strong>Look for patterns and surprises</strong>: Review your spending data to identify patterns and any surprising expenses. Many people are shocked to discover how much they spend on small, recurring purchases like coffee or subscription services.
                </li>
              </ul>
              
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 my-6">
                <h4 className="font-semibold text-blue-300 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Pro Tip
                </h4>
                <p className="mt-1 text-blue-400 text-sm">
                  You can't manage what you don't measure. Understanding your current spending is the foundation of successful budgeting.
                </p>
              </div>
              
              {/* Section 2 */}
              <h2 id="budget-rule" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <PieChart className="w-6 h-6 mr-2 text-primary-500" />
                2. Use the 50/30/20 Rule as a Starting Point
              </h2>
              
              <p>
                If you're new to budgeting or find it overwhelming, the 50/30/20 rule provides a simple framework to get started. This approach divides your after-tax income into three main categories:
              </p>
              
              <ul>
                <li><strong>50% for needs</strong>: Essential expenses like housing, food, utilities, transportation, and minimum debt payments.</li>
                <li><strong>30% for wants</strong>: Non-essential expenses that enhance your life, such as dining out, entertainment, hobbies, and subscriptions.</li>
                <li><strong>20% for savings and debt repayment</strong>: Building your emergency fund, investing for the future, and paying down debt beyond minimum payments.</li>
              </ul>
              
              <h3>How to Implement This Tip:</h3>
              <ul>
                <li>
                  <strong>Calculate your after-tax income</strong>: This is your take-home pay after taxes and other deductions.
                </li>
                <li>
                  <strong>Set up budget categories in SpendSync</strong>: Create main categories for needs, wants, and savings/debt repayment, with subcategories under each.
                </li>
                <li>
                  <strong>Adjust percentages as needed</strong>: The 50/30/20 rule is a guideline, not a strict rule. If you live in an expensive city where housing costs more, you might need to adjust the percentages to fit your situation.
                </li>
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
              
              {/* Section 3 */}
              <h2 id="irregular-expenses" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <RefreshCw className="w-6 h-6 mr-2 text-primary-500" />
                3. Budget for Irregular Expenses
              </h2>
              
              <p>
                One of the biggest budget-busters is failing to plan for irregular expenses like car repairs, annual insurance premiums, holiday gifts, or medical expenses. These expenses are inevitable but often forgotten in monthly budgets.
              </p>
              
              <h3>How to Implement This Tip:</h3>
              <ul>
                <li>
                  <strong>Make a list of all irregular expenses</strong>: Include everything from quarterly tax payments to birthday gifts. Estimate the annual cost of each item.
                </li>
                <li>
                  <strong>Create sinking funds</strong>: Divide the annual cost by 12 to determine how much you need to set aside each month. In SpendSync, you can create specific savings goals for these expenses.
                </li>
                <li>
                  <strong>Set up automatic transfers</strong>: Schedule automatic transfers to your sinking funds on payday to ensure you're setting aside money regularly.
                </li>
              </ul>
              
              <p>
                For example, if you know you spend about $600 on holiday gifts each year, set aside $50 each month in a "Holiday Gifts" fund. When December arrives, you'll have the money ready without impacting your regular budget.
              </p>
              
              {/* Section 4 */}
              <h2 id="budget-flexibility" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <Star className="w-6 h-6 mr-2 text-primary-500" />
                4. Build Flexibility Into Your Budget
              </h2>
              
              <p>
                Many budgets fail because they're too rigid. Life is unpredictable, and your budget needs to accommodate unexpected events and changing priorities.
              </p>
              
              <h3>How to Implement This Tip:</h3>
              <ul>
                <li>
                  <strong>Include a miscellaneous category</strong>: Allocate a small portion of your budget (around 5%) for truly unexpected expenses.
                </li>
                <li>
                  <strong>Use budget ranges instead of fixed amounts</strong>: For variable expenses like groceries or electricity, consider setting a range (e.g., $400-450) rather than a fixed amount.
                </li>
                <li>
                  <strong>Review and adjust regularly</strong>: Use SpendSync's analytics to review your budget at least monthly, and make adjustments based on changing circumstances or priorities.
                </li>
              </ul>
              
              <blockquote className="border-l-4 border-primary-500 pl-4 italic my-8">
                "A good budget is like a good map—it helps you reach your destination while allowing for detours along the way."
              </blockquote>
              
              {/* Section 5 */}
              <h2 id="automation" className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <DollarSign className="w-6 h-6 mr-2 text-primary-500" />
                5. Automate Your Budget Where Possible
              </h2>
              
              <p>
                Automation reduces the mental energy required to stick to your budget and decreases the chances of forgetting to pay bills or save money.
              </p>
              
              <h3>How to Implement This Tip:</h3>
              <ul>
                <li>
                  <strong>Set up automatic bill payments</strong>: For fixed expenses like rent, mortgage, car payments, and subscriptions, set up automatic payments to ensure they're paid on time.
                </li>
                <li>
                  <strong>Automate savings transfers</strong>: Schedule automatic transfers to your savings accounts on payday, so you save before you have a chance to spend.
                </li>
                <li>
                  <strong>Use SpendSync's reminders feature</strong>: For bills that can't be automated, set up reminders in SpendSync to alert you when payments are due.
                </li>
                <li>
                  <strong>Set up threshold alerts</strong>: Configure SpendSync to notify you when you're approaching your budget limits in specific categories, so you can adjust your spending accordingly.
                </li>
              </ul>
              
              <h2 className="flex items-center mt-10 text-2xl font-bold border-b border-gray-700 pb-2">
                <BarChart4 className="w-6 h-6 mr-2 text-primary-500" />
                Advanced Budgeting Strategies
              </h2>
              
              <p>
                Once you've mastered the basics, consider incorporating these advanced budgeting strategies:
              </p>
              
              <h3>Zero-Based Budgeting</h3>
              <p>
                In a zero-based budget, you assign every dollar of income a specific job, so your income minus expenses equals zero. This doesn't mean you spend everything; it means every dollar has a designated purpose, including savings and investments.
              </p>
              <p>
                SpendSync makes zero-based budgeting easier by allowing you to allocate income to specific categories and track every dollar.
              </p>
              
              <h3>Values-Based Budgeting</h3>
              <p>
                This approach aligns your spending with your personal values and priorities. For example, if family experiences are important to you, you might allocate more to travel and activities while cutting back on material possessions.
              </p>
              <p>
                Use SpendSync's custom categories to create a budget that reflects what's most important to you.
              </p>
              
              <h3>The Anti-Budget</h3>
              <p>
                If traditional budgeting feels too restrictive, consider the "anti-budget." With this approach, you automatically save a predetermined percentage of your income (e.g., 20%) and then spend the rest guilt-free.
              </p>
              <p>
                SpendSync's automatic savings tracking can help you monitor your saving rate while giving you freedom with the remainder of your funds.
              </p>
              
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
              
              <h2 className="flex items-center mt-10 text-2xl font-bold">
                <Star className="w-6 h-6 mr-2 text-primary-500" />
                Conclusion: Your Budget, Your Rules
              </h2>
              
              <p>
                Remember that a budget is a personal tool designed to serve your financial goals and lifestyle. There's no one-size-fits-all approach to budgeting, and the most effective budget is one you can actually stick to.
              </p>
              <p>
                SpendSync provides the flexibility and tools to implement any of these budgeting approaches. By starting with understanding your current spending, using a framework like the 50/30/20 rule, planning for irregular expenses, building in flexibility, and automating where possible, you can create a budget that helps you take control of your finances without feeling restricted.
              </p>
              <p>
                The key is consistency and patience. Budgeting is a skill that improves with practice, so don't get discouraged if it takes a few months to find the right approach for you. With each adjustment and review, you're getting closer to financial freedom and peace of mind.
              </p>
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
                      to="/blog/financial-tips" 
                      className="text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>Mastering Your Personal Finances with SpendSync</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog/spending-patterns" 
                      className="text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>Understanding Your Spending Patterns</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog/group-expenses" 
                      className="text-primary-400 hover:underline flex items-start"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-1 flex-shrink-0" />
                      <span>Group Expense Management Made Easy</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-white">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest financial tips and updates delivered straight to your inbox.
                </p>
                <form className="space-y-3">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-sm focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BudgetingTipsBlog 
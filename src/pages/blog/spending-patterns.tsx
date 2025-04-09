import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart2, PieChart, TrendingUp, Clock, Calendar, Tag, Share2, ChevronRight, LineChart, DollarSign, CreditCard, ShoppingBag, Coffee, Home, Truck, Gift, Heart } from "lucide-react";

const SpendingPatternsBlog = () => {
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
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> 
            Back to all articles
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              <Tag className="w-3 h-3 mr-1" /> 
              Data Analysis
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
              <BarChart2 className="w-3 h-3 mr-1" /> 
              Financial Insights
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              <TrendingUp className="w-3 h-3 mr-1" /> 
              Money Management
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Understanding Your Spending Patterns: The Key to Financial Control
          </h1>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> 
              September 18, 2023
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" /> 
              8 min read
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center">
              <Share2 className="w-4 h-4 mr-1" /> 
              Share
            </span>
          </div>

          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <img 
              src="/images/blog/spending-patterns.jpg" 
              alt="Spending patterns visualization" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">In this article</h2>
          <ul className="space-y-3">
            <li>
              <a href="#intro" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Introduction to Spending Pattern Analysis
              </a>
            </li>
            <li>
              <a href="#importance" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Why Understanding Your Spending Matters
              </a>
            </li>
            <li>
              <a href="#patterns" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Common Spending Patterns to Watch For
              </a>
            </li>
            <li>
              <a href="#analysis" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                How SpendSync Analyzes Your Spending
              </a>
            </li>
            <li>
              <a href="#action" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Turning Insights into Action
              </a>
            </li>
            <li>
              <a href="#conclusion" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Conclusion
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section id="intro">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <LineChart className="w-6 h-6 mr-2 text-primary-500" />
              Introduction to Spending Pattern Analysis
            </h2>
            
            <p>
              Do you ever wonder where your money goes each month? You're not alone. Many of us experience the frustration of watching our bank balance dwindle without a clear understanding of our spending habits. This lack of awareness can lead to financial stress, missed saving opportunities, and difficulty achieving long-term financial goals.
            </p>

            <p>
              Spending pattern analysis is the process of examining your financial transactions over time to identify trends, habits, and areas for improvement. It's like having a financial detective that helps you understand not just <em>what</em> you're spending money on, but <em>why</em> and <em>when</em> those spending decisions happen.
            </p>

            <blockquote>
              <p>"The first step toward financial freedom is awareness. You can't change what you don't measure."</p>
            </blockquote>

            <p>
              In this comprehensive guide, we'll explore why understanding your spending patterns is crucial for financial health, how to identify common spending trends, and how SpendSync's powerful analytics can transform your financial management approach.
            </p>
          </section>

          <section id="importance" className="mt-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <DollarSign className="w-6 h-6 mr-2 text-primary-500" />
              Why Understanding Your Spending Matters
            </h2>

            <p>
              Tracking your spending isn't just about restricting yourself or feeling guilty about purchases. Instead, it's about gaining clarity and control over your financial life. Here's why spending pattern analysis matters:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Financial Awareness</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Many people underestimate how much they spend in certain categories. Analyzing your patterns brings awareness to blind spots in your budget.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Goal Alignment</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Understanding your spending helps ensure your daily financial decisions align with your long-term goals, whether that's buying a home or retiring early.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Identifying Leaks</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Subscription services, impulse purchases, and small daily expenses can create significant "money leaks" that go unnoticed without proper tracking.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Behavior Modification</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Recognizing emotional or situational triggers for spending can help you develop healthier financial habits over time.
                </p>
              </div>
            </div>

            <p>
              According to a study by the Financial Health Network, individuals who regularly track their spending are 67% more likely to report feeling financially secure than those who don't. This increased sense of security comes from having greater control and fewer financial surprises.
            </p>
          </section>

          <section id="patterns" className="mt-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <PieChart className="w-6 h-6 mr-2 text-primary-500" />
              Common Spending Patterns to Watch For
            </h2>

            <p>
              Certain spending patterns emerge for most people. Recognizing these patterns is the first step toward making intentional changes. Here are some common patterns to be aware of:
            </p>

            <h3 className="flex items-center text-xl font-semibold mt-6 mb-3">
              <Calendar className="w-5 h-5 mr-2 text-primary-500" />
              Temporal Patterns
            </h3>

            <ul>
              <li className="mb-3">
                <strong>Payday spikes:</strong> Many people spend significantly more in the days immediately following a paycheck deposit.
              </li>
              <li className="mb-3">
                <strong>Weekend spending:</strong> Leisure activities often concentrate spending on weekends, sometimes leading to impulsive purchases.
              </li>
              <li className="mb-3">
                <strong>End-of-month tightening:</strong> As bank balances decrease toward month-end, spending often becomes more restricted.
              </li>
              <li className="mb-3">
                <strong>Seasonal fluctuations:</strong> Holiday shopping, vacation seasons, or back-to-school periods often create predictable spending increases.
              </li>
            </ul>

            <h3 className="flex items-center text-xl font-semibold mt-6 mb-3">
              <ShoppingBag className="w-5 h-5 mr-2 text-primary-500" />
              Category Patterns
            </h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Common Pattern</th>
                    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Optimization Strategy</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <Coffee className="w-4 h-4 mr-2 text-yellow-500" /> Dining
                    </td>
                    <td className="px-6 py-4">Small, frequent transactions that add up significantly</td>
                    <td className="px-6 py-4">Set a weekly dining budget and meal plan to reduce impulse eating out</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <Home className="w-4 h-4 mr-2 text-blue-500" /> Housing
                    </td>
                    <td className="px-6 py-4">Fixed large expenses with occasional spikes for repairs</td>
                    <td className="px-6 py-4">Create a home maintenance fund for expected and unexpected costs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <Truck className="w-4 h-4 mr-2 text-green-500" /> Transportation
                    </td>
                    <td className="px-6 py-4">Cyclical expenses (gas, maintenance) with occasional large outlays</td>
                    <td className="px-6 py-4">Budget for regular maintenance and set aside funds for major repairs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <Gift className="w-4 h-4 mr-2 text-red-500" /> Entertainment
                    </td>
                    <td className="px-6 py-4">Weekend-heavy, often unplanned and emotional</td>
                    <td className="px-6 py-4">Allocate a specific "fun money" amount each month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="flex items-center text-xl font-semibold mt-6 mb-3">
              <Heart className="w-5 h-5 mr-2 text-primary-500" />
              Emotional Spending Patterns
            </h3>

            <p>
              Our emotions significantly influence our spending behaviors. Common emotional triggers include:
            </p>

            <ul>
              <li className="mb-3">
                <strong>Stress spending:</strong> Shopping as a form of relief during high-stress periods
              </li>
              <li className="mb-3">
                <strong>Celebratory splurges:</strong> Rewarding yourself with purchases after achievements
              </li>
              <li className="mb-3">
                <strong>Social pressure purchases:</strong> Buying things to maintain a certain image or keep up with peers
              </li>
              <li className="mb-3">
                <strong>Boredom buying:</strong> Making purchases simply to fill time or create excitement
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8 border border-blue-100 dark:border-blue-800">
              <h4 className="font-semibold text-lg mb-2 text-blue-800 dark:text-blue-300">Identifying Your Personal Patterns</h4>
              <p className="text-blue-700 dark:text-blue-400">
                To recognize your unique patterns, ask yourself these questions:
              </p>
              <ul className="mt-3 space-y-2 text-blue-700 dark:text-blue-400">
                <li>• When do I tend to make my largest purchases?</li>
                <li>• Which emotions typically trigger my spending?</li>
                <li>• Are there specific stores or websites where I consistently spend more than intended?</li>
                <li>• Do I notice any recurring regrets about certain types of purchases?</li>
              </ul>
            </div>
          </section>

          <section id="analysis" className="mt-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <BarChart2 className="w-6 h-6 mr-2 text-primary-500" />
              How SpendSync Analyzes Your Spending
            </h2>

            <p>
              SpendSync uses sophisticated data analysis to provide you with meaningful insights into your spending habits. Here's how our analysis works:
            </p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4">
                  <h3 className="font-semibold text-lg text-primary-800 dark:text-primary-300">Category Intelligence</h3>
                </div>
                <div className="p-5">
                  <p>
                    SpendSync automatically categorizes your transactions and learns from your corrections to improve accuracy over time. Our system recognizes patterns in merchant names, transaction amounts, and timing to properly classify your spending.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4">
                  <h3 className="font-semibold text-lg text-primary-800 dark:text-primary-300">Trend Visualization</h3>
                </div>
                <div className="p-5">
                  <p>
                    Through intuitive charts and graphs, SpendSync reveals how your spending changes over time. View monthly comparisons, category breakdowns, and daily spending patterns to identify areas for optimization.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4">
                  <h3 className="font-semibold text-lg text-primary-800 dark:text-primary-300">Anomaly Detection</h3>
                </div>
                <div className="p-5">
                  <p>
                    Our system flags unusual spending patterns that deviate from your normal behavior. This helps you quickly identify potential issues like unexpected fees, forgotten subscriptions, or fraudulent charges.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4">
                  <h3 className="font-semibold text-lg text-primary-800 dark:text-primary-300">Predictive Analysis</h3>
                </div>
                <div className="p-5">
                  <p>
                    Based on your historical spending, SpendSync can predict future expenses and help you prepare for upcoming financial needs, ensuring you're never caught off guard by predictable costs.
                  </p>
                </div>
              </div>
            </div>

            <p>
              With SpendSync's comprehensive analysis, you gain insights that would be difficult or impossible to detect manually. Our analytical tools transform your raw transaction data into actionable intelligence that empowers better financial decisions.
            </p>
          </section>

          <section id="action" className="mt-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <TrendingUp className="w-6 h-6 mr-2 text-primary-500" />
              Turning Insights into Action
            </h2>

            <p>
              Understanding your spending patterns is only valuable if you use that knowledge to improve your financial habits. Here's how to transform insights into tangible benefits:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Create Category-Specific Strategies</h3>

            <p>
              Different spending categories may require different approaches:
            </p>

            <ul>
              <li className="mb-3">
                <strong>Fixed expenses:</strong> Negotiate bills, shop for better rates, or downsize where possible
              </li>
              <li className="mb-3">
                <strong>Variable necessities:</strong> Plan ahead, buy in bulk, or use coupons and discounts
              </li>
              <li className="mb-3">
                <strong>Discretionary spending:</strong> Implement waiting periods for non-essential purchases or create specific allowances
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Address Emotional Spending</h3>

            <p>
              Once you identify emotional triggers, develop alternative responses:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl my-4">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-medium mr-2">•</span>
                  <span>Instead of stress-shopping, try a free stress-relieving activity like walking or meditation</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">•</span>
                  <span>For celebratory spending, create a list of free or low-cost ways to reward yourself</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">•</span>
                  <span>To counter social pressure, remind yourself of your personal financial goals and values</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Leverage SpendSync's Tools</h3>

            <p>
              Use SpendSync's features to implement changes based on your insights:
            </p>

            <ul>
              <li className="mb-3">
                <strong>Set category-specific budgets</strong> aligned with your spending patterns and goals
              </li>
              <li className="mb-3">
                <strong>Create alerts</strong> for when you're approaching budget limits in problematic categories
              </li>
              <li className="mb-3">
                <strong>Schedule regular reviews</strong> of your spending analyses to track improvements
              </li>
              <li className="mb-3">
                <strong>Use the split expense feature</strong> to manage shared costs and ensure you're not overpaying in group situations
              </li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl my-8 border border-green-100 dark:border-green-800">
              <h4 className="font-semibold text-lg mb-2 text-green-800 dark:text-green-300">Success Story</h4>
              <blockquote className="text-green-700 dark:text-green-400 italic">
                "After using SpendSync's analysis tools, I discovered I was spending over $300 monthly on impulse food deliveries. By setting up alerts and planning meals weekly, I've cut that spending by 70% and redirected the savings to my vacation fund."
                <footer className="mt-2 font-medium not-italic">— Sarah K., SpendSync user since 2022</footer>
              </blockquote>
            </div>
          </section>

          <section id="conclusion" className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>

            <p>
              Understanding your spending patterns is a powerful step toward financial control and peace of mind. By analyzing where, when, and why you spend, you gain the ability to make intentional choices rather than reacting to impulses or habits.
            </p>

            <p>
              SpendSync's pattern analysis tools make this process accessible and intuitive. Our goal is to transform complex financial data into clear insights that empower you to align your spending with your values and goals.
            </p>

            <p>
              Remember that sustainable financial improvement comes from awareness, not deprivation. The objective isn't to stop spending but to spend purposefully on what truly matters to you while reducing waste on things that don't.
            </p>

            <p>
              Start exploring your spending patterns today and discover the financial clarity that comes from truly understanding where your money goes.
            </p>
          </section>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800 text-center">
            <h3 className="text-xl font-bold mb-3 text-primary-800 dark:text-primary-300">Ready to understand your spending patterns?</h3>
            <p className="mb-4 text-primary-700 dark:text-primary-400">
              Download SpendSync today and gain valuable insights into your financial habits.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.rml.spendsync&pcampaignid=web_share" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Start Tracking Now
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/budgeting-tips" className="group">
                <div className="h-48 mb-4 rounded-xl overflow-hidden">
                  <img 
                    src="/images/blog/budgeting-tips.jpg" 
                    alt="Budgeting tips" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2036&auto=format&fit=crop";
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  5 Expert Tips for Better Budget Management
                </h4>
              </Link>
              <Link to="/blog/financial-tips" className="group">
                <div className="h-48 mb-4 rounded-xl overflow-hidden">
                  <img 
                    src="/images/blog/financial-tips.jpg" 
                    alt="Financial tips" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop";
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Mastering Your Personal Finances with SpendSync
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpendingPatternsBlog; 
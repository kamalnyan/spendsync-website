import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, Share2, ChevronRight, Users, DollarSign, Receipt, CreditCard, Landmark, Smartphone } from "lucide-react";

const GroupExpensesBlog = () => {
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
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
              <Tag className="w-3 h-3 mr-1" /> 
              Group Finance
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
              <Users className="w-3 h-3 mr-1" /> 
              Tips & Tricks
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Never Split the Bill Again: Mastering Group Expenses with SpendSync
          </h1>

          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> 
              July 8, 2023
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" /> 
              9 min read
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center">
              <Share2 className="w-4 h-4 mr-1" /> 
              Share
            </span>
          </div>

          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <img 
              src="/images/blog/group-expenses.jpg" 
              alt="Friends sharing expenses at a restaurant" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">In this article</h2>
          <ul className="space-y-3">
            <li>
              <a href="#challenges" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Why Group Expenses Are Challenging
              </a>
            </li>
            <li>
              <a href="#approach" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                SpendSync's Approach to Group Expenses
              </a>
            </li>
            <li>
              <a href="#scenarios" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Real-World Group Expense Scenarios
              </a>
            </li>
            <li>
              <a href="#strategies" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Advanced Group Expense Strategies
              </a>
            </li>
            <li>
              <a href="#psychology" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                <ChevronRight className="w-4 h-4 mr-2" />
                Psychology of Group Expenses
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
          <p>
            We've all been there—the awkward moment at the end of a group dinner when everyone pulls out their 
            phones to calculate their share of the bill. Or the roommate situation where tracking who paid for 
            what becomes a part-time job. Or perhaps the family vacation where expenses quickly become so 
            complicated that you give up tracking altogether.
          </p>

          <p>
            Group expenses are notoriously difficult to manage. They combine financial logistics with social 
            dynamics, creating situations that can strain even the strongest relationships. But with the right 
            approach and tools, managing shared expenses can be painless and might even strengthen your 
            connections with others.
          </p>

          <section id="challenges">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <DollarSign className="w-6 h-6 mr-2 text-primary-500" />
              Why Group Expenses Are Uniquely Challenging
            </h2>

            <p>
              Before diving into solutions, let's understand why shared expenses are so difficult to manage:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">The Mathematics Problem</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Even with just four people, the number of potential expense-sharing permutations becomes complex. 
                  Add in uneven splits (like someone ordering an expensive item or not drinking alcohol), and the 
                  mathematics quickly become unwieldy without specialized tools.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">The Memory Problem</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Human memory is notoriously unreliable for tracking financial details, especially over time. Without 
                  immediate documentation, recollections of "who paid for what" can diverge significantly among group 
                  members.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">The Social Dynamics Problem</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Money discussions can be uncomfortable in many cultures. Some people avoid raising issues about shared 
                  expenses to preserve harmony, leading to internalized resentment or financial strain.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">The Settlement Problem</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Even when expenses are accurately tracked, settling debts efficiently presents another challenge. 
                  Sub-optimal settlement approaches can lead to unnecessary transaction fees, delayed payments, and 
                  administrative overhead.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl my-8 border border-yellow-100 dark:border-yellow-800">
              <h4 className="font-semibold text-lg mb-2 text-yellow-800 dark:text-yellow-300">Quick Stat:</h4>
              <p className="text-yellow-700 dark:text-yellow-400">
                According to a 2022 survey, 73% of people have experienced tension in relationships due to shared 
                expenses, and 31% have lost friendships over financial disagreements.
              </p>
            </div>
          </section>

          <section id="approach">
            <h2 className="flex items-center text-2xl font-bold mb-4 mt-12">
              <Smartphone className="w-6 h-6 mr-2 text-primary-500" />
              SpendSync's Approach to Group Expenses
            </h2>

            <p>
              SpendSync tackles these challenges with a comprehensive group expense management system designed 
              to minimize both financial and social friction:
            </p>

            <div className="my-8 grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4">
                  <h3 className="font-semibold text-lg text-primary-800 dark:text-primary-300">1. Seamless Expense Recording</h3>
                </div>
                <div className="p-5">
                  <p className="mb-3">
                    The foundation of effective group expense management is quick, accurate recording of expenses as 
                    they occur.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Quick add: Record a shared expense in under 10 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Multiple split options: Equal, percentage-based, or exact amount</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Recurring expenses: Automatic tracking for regular shared costs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4">
                  <h3 className="font-semibold text-lg text-primary-800 dark:text-primary-300">2. Real-time Visibility</h3>
                </div>
                <div className="p-5">
                  <p className="mb-3">
                    Transparency prevents misunderstandings and helps maintain trust within groups.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Balance dashboard: At-a-glance view of who owes what</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Expense history: Complete, searchable log of transactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Notification system: Alerts for new expenses and settlements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4">
                  <h3 className="font-semibold text-lg text-primary-800 dark:text-primary-300">3. Intelligent Settlement</h3>
                </div>
                <div className="p-5">
                  <p className="mb-3">
                    SpendSync's powerful debt simplification algorithm makes settling up easier than ever.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Minimizes the number of transactions needed to settle debts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Reduces transaction fees by optimizing payment routes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Recommends optimal timing for settlements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4">
                  <h3 className="font-semibold text-lg text-primary-800 dark:text-primary-300">4. Social-First Design</h3>
                </div>
                <div className="p-5">
                  <p className="mb-3">
                    Group expenses exist within social contexts, so our features preserve relationships.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Gentle reminders: Non-confrontational payment notifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Expense comments: Built-in communication about charges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Privacy controls: Granular visibility settings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="scenarios">
            <h2 className="flex items-center text-2xl font-bold mb-4 mt-12">
              <Users className="w-6 h-6 mr-2 text-primary-500" />
              Real-World Group Expense Scenarios
            </h2>

            <p>
              Let's explore how SpendSync transforms common group expense situations:
            </p>

            <div className="my-8">
              <div className="border-l-4 border-primary-500 pl-6 py-2 mb-6">
                <h3 className="text-xl font-semibold mb-2">Scenario 1: The Shared Household</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  For roommates or families, ongoing shared expenses create unique tracking challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Household group setup:</strong> Create a dedicated expense group with all household members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Recurring expense templates:</strong> Set up patterns for regular bills with auto-assignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Monthly summary reports:</strong> Automated expense reviews to keep everyone informed</span>
                  </li>
                </ul>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4 italic">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Before SpendSync, the end of each month was stressful in our 4-person apartment as we tried to figure out who owed what. Now we just check the app, make a few taps, and everything's settled. No more spreadsheets or awkward money conversations."
                    <span className="block mt-2 font-semibold not-italic">— Jorge, Chicago</span>
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-secondary-500 pl-6 py-2 mb-6">
                <h3 className="text-xl font-semibold mb-2">Scenario 2: The Group Trip</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Vacations and group travel create concentrated periods of shared spending.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Trip-specific groups:</strong> Create temporary expense tracking for your journey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Multi-currency support:</strong> Track expenses across different currencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Trip summary:</strong> Complete post-trip breakdown of all expenses</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Scenario 3: The Regular Friend Group</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  For friends who frequently dine out or attend events together.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Quick-split functionality:</strong> Instantly divide restaurant checks or event tickets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Payment integration:</strong> Settle directly through linked payment apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><strong>Activity planning:</strong> Coordinate future events with expense estimation</span>
                  </li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary-500 pl-6 py-2 italic text-lg mt-8">
              <p>
                "The best financial system for groups is one that fades into the background, letting you focus on 
                the experiences rather than the expenses."
              </p>
            </blockquote>
          </section>

          <section id="strategies">
            <h2 className="flex items-center text-2xl font-bold mb-4 mt-12">
              <Receipt className="w-6 h-6 mr-2 text-primary-500" />
              Advanced Group Expense Strategies
            </h2>

            <p>
              Once you've mastered the basics, consider these advanced approaches to further optimize your shared 
              finances:
            </p>

            <div className="my-8 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">The Rotating Payer System</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For groups with frequent, similarly-priced expenses (like weekly dinners), consider implementing a 
                  rotation where each person pays the full amount in turn. SpendSync can track whose turn is next and 
                  monitor overall fairness to ensure no one pays disproportionately over time.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">The Group Fund Approach</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  For major trips or projects, creating a shared pool of funds upfront can simplify tracking. SpendSync's 
                  group fund feature lets you:
                </p>
                <ul className="space-y-2 pl-4">
                  <li>Track contributions to the common pool</li>
                  <li>Monitor expenditures from the shared fund</li>
                  <li>Calculate fair distributions of any remaining money</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">The Category Ownership Method</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  In some living situations, assigning different expense categories to different group members can 
                  streamline management (e.g., one person handles utilities, another groceries). SpendSync's category 
                  balancing feature ensures this approach remains equitable over time.
                </p>
              </div>
            </div>
          </section>

          <section id="psychology">
            <h2 className="flex items-center text-2xl font-bold mb-4 mt-12">
              <Landmark className="w-6 h-6 mr-2 text-primary-500" />
              Psychology of Group Expenses: Avoiding Common Pitfalls
            </h2>

            <p>
              Even with great tools, human psychology can complicate shared finances. Here are some pitfalls to 
              avoid:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">The Taboo Trap</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Many people find money discussions uncomfortable, particularly when requesting payment. SpendSync's 
                  automated notifications remove the personal element from these exchanges, reducing social friction.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">The Mental Accounting Error</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  People often mentally categorize money differently based on circumstances. SpendSync's objective recording 
                  creates consistency in how expenses are viewed and valued.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">The Fairness Perception Gap</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Different group members may have different definitions of "fair." SpendSync's transparent, 
                  math-based approach provides an objective standard everyone can agree on.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8 border border-blue-100 dark:border-blue-800">
              <h4 className="font-semibold text-lg mb-2 text-blue-800 dark:text-blue-300">Setting Group Financial Boundaries</h4>
              <p className="text-blue-700 dark:text-blue-400 mb-3">
                Successful group expense management isn't just about tracking—it's also about establishing healthy 
                boundaries:
              </p>
              <ul className="space-y-2 text-blue-700 dark:text-blue-400">
                <li>• <strong>Define expectations early:</strong> Agree on splitting approaches before expenses occur</li>
                <li>• <strong>Establish settlement timeframes:</strong> Set clear expectations for how quickly debts should be settled</li>
                <li>• <strong>Create expense approval thresholds:</strong> For certain groups, you might want approval before adding large expenses</li>
              </ul>
            </div>
          </section>

          <section id="conclusion">
            <h2 className="text-2xl font-bold mb-4 mt-12">Conclusion: Beyond the Calculations</h2>

            <p>
              Effective group expense management is ultimately about more than accurate math—it's about preserving 
              relationships by removing financial friction from shared experiences. SpendSync's comprehensive approach 
              not only ensures everyone pays their fair share but does so in a way that strengthens rather than 
              strains your connections.
            </p>

            <p>
              Whether you're living with roommates, planning a vacation with friends, or managing family expenses, 
              SpendSync transforms what was once a source of potential conflict into a seamless background process, 
              letting you focus on what matters most—the people you're sharing these expenses with.
            </p>

            <p>
              Ready to revolutionize how your group handles shared expenses? Download SpendSync today and experience 
              the difference that intelligent, socially-aware expense tracking can make.
            </p>
          </section>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800 text-center">
            <h3 className="text-xl font-bold mb-3 text-primary-800 dark:text-primary-300">Ready to simplify group expenses?</h3>
            <p className="mb-4 text-primary-700 dark:text-primary-400">
              Download SpendSync today and make shared financial management stress-free.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.rml.spendsync&pcampaignid=web_share" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Get SpendSync
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/spending-patterns" className="group">
                <div className="h-48 mb-4 rounded-xl overflow-hidden">
                  <img 
                    src="/images/blog/spending-patterns.jpg" 
                    alt="Spending patterns" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Understanding Your Spending Patterns: The Key to Financial Control
                </h4>
              </Link>
              <Link to="/blog/security" className="group">
                <div className="h-48 mb-4 rounded-xl overflow-hidden">
                  <img 
                    src="/images/blog/security.jpg" 
                    alt="Data security" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop";
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  How SpendSync Protects Your Financial Data
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GroupExpensesBlog; 
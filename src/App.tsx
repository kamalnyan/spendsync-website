"use client"

import React, { useEffect, lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import useDocumentHead from "./hooks/useDocumentHead"
import { appConfig } from "./config/appConfig"
import PageTransition from "./components/PageTransition"
import { SkeletonHeader, SkeletonFeature } from "./components/ui/skeleton"

// Import framer-motion for page transitions
import { AnimatePresence } from "framer-motion"

// Lazy load pages
const Home = lazy(() => import("./pages/Home"))
const Features = lazy(() => import("./pages/Features"))
const About = lazy(() => import("./pages/About"))
const Blog = lazy(() => import("./pages/Blog"))
const Privacy = lazy(() => import("./pages/Privacy"))
const Help = lazy(() => import("./pages/Help"))
const AppDetails = lazy(() => import("./pages/AppDetails"))
const Terms = lazy(() => import("./pages/Terms"))
const FinancialTipsBlog = lazy(() => import("./pages/blog/financial-tips"))
const ProductUpdatesBlog = lazy(() => import("./pages/blog/product-updates"))
const BudgetingTipsBlog = lazy(() => import("./pages/blog/budgeting-tips"))
const SpendingPatternsBlog = lazy(() => import("./pages/blog/spending-patterns"))
const SecurityBlog = lazy(() => import("./pages/blog/security"))
const GroupExpensesBlog = lazy(() => import("./pages/blog/group-expenses"))
const GettingStarted = lazy(() => import("./pages/help/GettingStarted"))
const AccountSecurity = lazy(() => import("./pages/help/AccountSecurity"))

// Improved loading component with shimmer effect
const PageLoader = () => {
  // Get the current route to show appropriate skeleton
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Fixed navbar placeholder */}
      <div className="h-16 bg-gray-900/95 border-b border-gray-800 backdrop-blur-lg sticky top-0 flex items-center px-6">
        <div className="text-xl font-bold bg-gradient-to-r from-[#FF0080] to-[#7928CA] bg-clip-text text-transparent">
          SpendSync
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Show different skeletons based on the route */}
        {path.includes('/features') ? (
          <>
            <SkeletonHeader />
            <div className="space-y-32">
              <SkeletonFeature />
              <SkeletonFeature />
            </div>
          </>
        ) : (
          <>
            <SkeletonHeader />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-gray-800 h-64 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function App() {
  // Initialize document head with default values
  useDocumentHead({
    title: "Personal Finance Management",
    description: appConfig.description,
    useFavicon: true
  });

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

// Main app content separated to access router context
function AppContent() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </div>
  );
}

// Handle animated routes
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <Routes location={location}>
      <Route 
        index 
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        } 
      />
      <Route 
        path="/features" 
        element={
          <PageTransition>
            <Features />
          </PageTransition>
        } 
      />
      <Route 
        path="/about" 
        element={
          <PageTransition>
            <About />
          </PageTransition>
        } 
      />
      <Route 
        path="/blog" 
        element={
          <PageTransition>
            <Blog />
          </PageTransition>
        } 
      />
      <Route 
        path="/privacy" 
        element={
          <PageTransition>
            <Privacy />
          </PageTransition>
        } 
      />
      <Route 
        path="/terms" 
        element={
          <PageTransition>
            <Terms />
          </PageTransition>
        } 
      />
      <Route 
        path="/help" 
        element={
          <PageTransition>
            <Help />
          </PageTransition>
        } 
      />
      <Route 
        path="/help/getting-started" 
        element={
          <PageTransition>
            <GettingStarted />
          </PageTransition>
        } 
      />
      <Route 
        path="/help/account-security" 
        element={
          <PageTransition>
            <AccountSecurity />
          </PageTransition>
        } 
      />
      <Route 
        path="/app-details" 
        element={
          <PageTransition>
            <AppDetails />
          </PageTransition>
        } 
      />
      <Route 
        path="/blog/financial-tips" 
        element={
          <PageTransition>
            <FinancialTipsBlog />
          </PageTransition>
        } 
      />
      <Route 
        path="/blog/product-updates" 
        element={
          <PageTransition>
            <ProductUpdatesBlog />
          </PageTransition>
        } 
      />
      <Route 
        path="/blog/budgeting-tips" 
        element={
          <PageTransition>
            <BudgetingTipsBlog />
          </PageTransition>
        } 
      />
      <Route 
        path="/blog/spending-patterns" 
        element={
          <PageTransition>
            <SpendingPatternsBlog />
          </PageTransition>
        } 
      />
      <Route 
        path="/blog/security" 
        element={
          <PageTransition>
            <SecurityBlog />
          </PageTransition>
        } 
      />
      <Route 
        path="/blog/group-expenses" 
        element={
          <PageTransition>
            <GroupExpensesBlog />
          </PageTransition>
        } 
      />
    </Routes>
  );
}

// Handle scroll restoration during navigation
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    // Always scroll to top on location change
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default App


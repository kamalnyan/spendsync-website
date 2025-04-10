"use client"

import React, { useEffect, lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import useDocumentHead from "./hooks/useDocumentHead"
import { appConfig } from "./config/appConfig"
import PageTransition from "./components/PageTransition"

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

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <div className="text-3xl font-bold bg-gradient-to-r from-[#FF0080] to-[#7928CA] bg-clip-text text-transparent mb-4">
        SpendSync
      </div>
      <div className="text-white">Loading...</div>
    </div>
  </div>
);

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


"use client"

import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Features from "./pages/Features"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Privacy from "./pages/Privacy"
import Help from "./pages/Help"
import AppDetails from "./pages/AppDetails"
import Terms from "./pages/Terms"
import FinancialTipsBlog from "./pages/blog/financial-tips"
import ProductUpdatesBlog from "./pages/blog/product-updates"
import BudgetingTipsBlog from "./pages/blog/budgeting-tips"
import SpendingPatternsBlog from "./pages/blog/spending-patterns"
import SecurityBlog from "./pages/blog/security"
import GroupExpensesBlog from "./pages/blog/group-expenses"
import GettingStarted from "./pages/help/GettingStarted"
import AccountSecurity from "./pages/help/AccountSecurity"
import useDocumentHead from "./hooks/useDocumentHead"
import { appConfig } from "./config/appConfig"
import PageTransition from "./components/PageTransition"

// Import framer-motion for page transitions
import { AnimatePresence } from "framer-motion"

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
      <AnimatedRoutes />
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


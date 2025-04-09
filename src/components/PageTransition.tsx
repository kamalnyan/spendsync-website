import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
  }, [children]); // Re-run this effect when children change (new page content)

  return (
    <div className="w-full" style={{ minHeight: '100vh' }}>
      {children}
    </div>
  );
};

export default PageTransition; 
/**
 * Smoothly scroll to a specific vertical position
 */
export const scrollToTop = (offset = 0) => {
  window.scrollTo({
    top: offset,
    behavior: 'auto'
  });
};

/**
 * Smoothly scroll to a specific element by ID
 */
export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handle in-page scrolling that should be smooth
 */
export const smoothScrollTo = (offset = 0) => {
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
}; 
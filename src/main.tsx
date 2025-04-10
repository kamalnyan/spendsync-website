import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import App from "./App.tsx"
import "./index.css"

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("React error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          margin: '20px', 
          background: '#f44336', 
          color: 'white',
          borderRadius: '4px',
          fontFamily: 'Arial, sans-serif' 
        }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message || 'Unknown error'}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#f44336',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Remove strict mode temporarily to reduce potential issues
try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Root element not found!");
  }
  
  const root = createRoot(rootElement);
  
  root.render(
    <ErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  );
  
  console.log("React app successfully rendered!");
} catch (error) {
  console.error("Failed to render React app:", error);
  
  // Show a fallback UI if React fails to render
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; margin: 20px; background: #333; color: white; font-family: Arial, sans-serif;">
        <h2>Failed to load SpendSync application</h2>
        <p>Error: ${(error as Error).message || 'Unknown error'}</p>
        <p>Please try refreshing the page or check your browser console for more details.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #7928CA; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px">
          Reload Page
        </button>
      </div>
    `;
  }
}


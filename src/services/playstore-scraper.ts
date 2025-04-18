interface AppData {
  downloads: string;
  rating: string;
  isLoading: boolean;
  error: string | null;
}

const DEFAULT_APP_DATA: AppData = {
  downloads: "50+",
  rating: "New",  // Changed from "0" to "New" to better reflect new apps without ratings
  isLoading: false,
  error: null
};

// In a real environment, we would use a proper API or scraper
// Since direct scraping from client-side is not feasible due to CORS, 
// we'll simulate the fetching with sample data
export async function fetchPlayStoreData(appId: string): Promise<AppData> {
  try {
    // Check if running in development mode and return mock data
    if (process.env.NODE_ENV === 'development' || !appId.includes('com.rml.spendsync')) {
      console.log('Using mock Play Store data in development mode');
      return {
        ...DEFAULT_APP_DATA,
        isLoading: false
      };
    }
    
    // Make a request to your backend API that handles Play Store scraping
    try {
      const response = await fetch(`/api/playstore-stats?appId=${appId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch Play Store data');
      }

      const data = await response.json();
      
      return {
        downloads: data.downloads || "50+", // From the Play Store page
        rating: data.rating || "New",
        isLoading: false,
        error: null
      };
    } catch (error) {
      // If API endpoint doesn't exist, return default values
      console.warn("API endpoint not available, using default values");
      return DEFAULT_APP_DATA;
    }
  } catch (error) {
    console.error("Failed to fetch Play Store data:", error);
    return {
      ...DEFAULT_APP_DATA,
      isLoading: false,
      error: "Failed to fetch app data"
    };
  }
}

// Hook for React components
export function usePlayStoreData(appId: string): AppData {
  // This would be a React hook in a real app
  // For our demo, we'll return the default data
  // since we can't implement a real fetch hook in this file
  return DEFAULT_APP_DATA;
} 
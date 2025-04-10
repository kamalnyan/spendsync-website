import { useState, useEffect } from 'react';
import { fetchPlayStoreData } from '../services/playstore-scraper';

interface PlayStoreData {
  downloads: string;
  rating: string;
  isLoading: boolean;
  error: string | null;
}

export function usePlayStore(appId: string): PlayStoreData {
  const [data, setData] = useState<PlayStoreData>({
    downloads: "50+", // Default value from Play Store
    rating: "New",    // Changed from "0" to "New" for new apps
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;
    
    async function getPlayStoreData() {
      try {
        // Add a slight delay to prevent too quick flashing of loading state
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(600);
        
        const result = await fetchPlayStoreData(appId);
        
        if (isMounted) {
          setData({
            downloads: result.downloads,
            rating: result.rating,
            isLoading: false,
            error: null
          });
        }
      } catch (error) {
        if (isMounted) {
          setData(prevData => ({
            ...prevData,
            isLoading: false,
            error: "Failed to fetch app data"
          }));
        }
      }
    }

    getPlayStoreData();

    return () => {
      isMounted = false;
    };
  }, [appId]);

  return data;
} 
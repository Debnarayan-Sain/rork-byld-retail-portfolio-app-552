import { useEffect } from 'react';
import { router } from 'expo-router';

export default function PortfolioScreen() {
  useEffect(() => {
    router.replace('/assets');
  }, []);

  return null;
}
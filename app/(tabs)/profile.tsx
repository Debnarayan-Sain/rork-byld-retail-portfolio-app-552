import { useEffect } from 'react';
import { router } from 'expo-router';

export default function ProfileScreen() {
  useEffect(() => {
    router.replace('/security');
  }, []);

  return null;
}
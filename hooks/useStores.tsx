import { useCallback } from 'react';
import { Store } from '@/types/store';
import { mutate } from 'swr';

export const STORE_KEY = '/stores';

const useStore = () => {
  const initializeStores = useCallback((stores: Store[]) => {
    mutate(STORE_KEY, stores);
  }, []);
  return { initializeStores };
};

export default useStore;

import { useGlobalStore } from '@/store/root';

export function useCollections() {
  return useGlobalStore((state) => state.nft);
}

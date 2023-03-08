import { StoreInterface } from '@/store/root';

export function getCurrentNFT(state: StoreInterface) {
  return state.nft.focus;
}

import { EvmNft } from '@moralisweb3/common-evm-utils';
import { StateCreator } from 'zustand';

export interface NFTSlice {
  nfts: EvmNft[];
  walletNfts: EvmNft[];
  page: number;
  isLoading: boolean;
  address: string;
  focus: EvmNft | null | undefined;
  loadingWalletNfts: boolean;
}
const initialData: NFTSlice = {
  nfts: [],
  page: 1,
  isLoading: false,
  address: '',
  focus: undefined,
  walletNfts: [],
  loadingWalletNfts: false,
};
export const createNftSlice: StateCreator<NFTSlice> = () => {
  return initialData;
};

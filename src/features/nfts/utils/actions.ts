import { EvmNft } from '@moralisweb3/common-evm-utils';

import { useGlobalStore } from '@/store/root';

export function setNFTAddress(address: string) {
  useGlobalStore.setState((state) => {
    state.nft.address = address;
  });
}

export function setNFTCollection(collection: EvmNft[]) {
  useGlobalStore.setState((state) => {
    // @ts-ignore
    state.nft.nfts = collection;
  });
}

export function setNFTLoadingState(isLoading: boolean) {
  useGlobalStore.setState((state) => {
    state.nft.isLoading = isLoading;
  });
}

export function setFocusState(nft: EvmNft | undefined) {
  useGlobalStore.setState((state) => {
    state.nft.focus = nft;
  });
}

export function closeNFTPreviewModal() {
  useGlobalStore.setState((state) => {
    state.nft.focus = null;
  });
}

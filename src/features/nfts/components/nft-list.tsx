import { useCallback } from 'react';

import { useGlobalStore } from '@/store/root';

import { NftPreviewModal } from '@/features/nfts/components/nft-preview-modal';
import { useFetchNFTCollection } from '@/features/nfts/hooks/useFetchNFTCollection';

import { NftShowcase } from './nft-showcase';

export function NftList() {
  const address = useGlobalStore(useCallback((state) => state.nft.address, []));
  useFetchNFTCollection(address);

  return (
    <>
      <NftShowcase />
      <NftPreviewModal />
    </>
  );
}

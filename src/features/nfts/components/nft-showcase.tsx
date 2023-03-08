import { ThreeDotsWave } from '@/components/loaders/dot-wave';

import { NftCard } from '@/features/nfts/components/nft-card';
import { useCollections } from '@/features/nfts/hooks/useCollections';

export function NftShowcase() {
  const { isLoading, nfts } = useCollections();

  if (isLoading || !nfts) {
    return (
      <div>
        <ThreeDotsWave />
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-masonry gap-4'>
      {nfts.map((nft) => (
        <NftCard key={nft.tokenId} nft={nft} />
      ))}
    </div>
  );
}

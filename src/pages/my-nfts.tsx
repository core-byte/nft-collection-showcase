import * as React from 'react';
import { useAccount } from 'wagmi';

import Layout from '@/components/layout/Layout';
import { ThreeDotsWave } from '@/components/loaders/dot-wave';
import Seo from '@/components/Seo';

import { NftCard } from '@/features/nfts/components/nft-card';
import { NftPreviewModal } from '@/features/nfts/components/nft-preview-modal';
import { useCollections } from '@/features/nfts/hooks/useCollections';
import { useFetchWalletNfts } from '@/features/nfts/hooks/useFetchWalletNfts';

export default function MyNfts() {
  const account = useAccount();
  useFetchWalletNfts();
  return (
    <Layout>
      <Seo />
      <main className='w-full max-w-screen-xl grid place-items-center gap-20 px-3'>
        {account.isDisconnected && <DisconnectedBox />}
        {account.isConnected && <WalletNftCollection />}
      </main>
      <NftPreviewModal />
    </Layout>
  );
}

const DisconnectedBox = () => {
  return <div>Connect your wallet to list your nfts</div>;
};

const WalletNftCollection = () => {
  const { walletNfts, loadingWalletNfts: isLoading } = useCollections();
  if (isLoading) {
    return <ThreeDotsWave />;
  }

  if (walletNfts.length === 0) {
    return (
      <div className='w-full h-auto bg-primary-500 rounded-2xl p-5'>
        <p className='text-white text-xl'>
          You currently have no NFTs in your wallet
        </p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-masonry gap-4'>
      {walletNfts.map((nft) => (
        <NftCard key={nft.tokenId} nft={nft} />
      ))}
    </div>
  );
};

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { NftList } from '@/features/nfts/components/nft-list';
import { NftSearch } from '@/features/nfts/components/nft-search';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='w-full max-w-screen-xl grid place-items-center gap-20 px-3'>
        <NftSearch />
        <NftList />
      </main>
    </Layout>
  );
}

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createNftSlice, NFTSlice } from '@/features/nfts/store';

export interface StoreInterface {
  nft: NFTSlice;
}

export const useGlobalStore = create<StoreInterface>()(
  devtools(
    immer(
      persist(
        (...a) => ({
          // @ts-ignore
          nft: createNftSlice(...a),
        }),
        {
          name: 'global-store',
        }
      )
    )
  )
);

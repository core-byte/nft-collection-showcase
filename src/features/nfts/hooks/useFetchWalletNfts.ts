import { EvmNft } from '@moralisweb3/common-evm-utils';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

import { useGlobalStore } from '@/store/root';

import { getWalletNFTs } from '@/features/nfts/api/getAll';

export function useFetchWalletNfts() {
  const account = useAccount();
  const { data, isLoading } = useQuery({
    queryKey: ['wallet-nft', account.address],
    queryFn: () => getWalletNFTs(account.address),
  });

  useEffect(() => processNfts(data), [data]);
  useEffect(() => processLoading(isLoading), [isLoading]);
  return {
    data,
    isLoading,
  };
}

function processLoading(isLoading: boolean) {
  useGlobalStore.setState((state) => {
    state.nft.loadingWalletNfts = isLoading;
  });
}

function processNfts(data: EvmNft[] | undefined | null) {
  useGlobalStore.setState((state) => {
    // @ts-ignore
    state.nft.walletNfts = data || [];
  });
}

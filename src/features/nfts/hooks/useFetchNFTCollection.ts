import { EvmNft } from '@moralisweb3/common-evm-utils';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { getCollection } from '@/features/nfts/api/getCollection';
import {
  setNFTCollection,
  setNFTLoadingState,
} from '@/features/nfts/utils/actions';

export function useFetchNFTCollection(tokenAddress: string) {
  const { data, isLoading } = useQuery({
    queryFn: () => getCollection(tokenAddress),
    queryKey: ['nft-collection', tokenAddress],
  });

  useEffect(() => storeData(data), [data]);
  useEffect(() => storeLoading(isLoading), [isLoading]);

  return null;
}

function storeData(data: EvmNft[] | undefined) {
  if (data) {
    setNFTCollection(data);
  } else {
    setNFTCollection([]);
  }
}

function storeLoading(loadingState: boolean) {
  setNFTLoadingState(loadingState);
}

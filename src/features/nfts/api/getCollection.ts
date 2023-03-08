import {
  EvmChain,
  EvmNft,
  GetContractNFTsResponseAdapter,
} from '@moralisweb3/common-evm-utils';
import Moralis from 'moralis';

import { initialize } from '@/lib/moralis';

export async function getCollection(tokenAddress: string) {
  await initialize();
  const chain = EvmChain.ETHEREUM;

  const response: GetContractNFTsResponseAdapter =
    await Moralis.EvmApi.nft.getNFTOwners({
      address: tokenAddress,
      chain,
    });

  return response.result as EvmNft[];
}

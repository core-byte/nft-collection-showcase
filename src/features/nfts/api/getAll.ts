import { EvmChain } from '@moralisweb3/common-evm-utils';
import Moralis from 'moralis';

import { initialize } from '@/lib/moralis';

export interface NFTCollection {
  contract_type: string;
  name: string;
  symbol: string;
  token_address: string;
}

export async function getWalletNFTs(address: string | undefined) {
  await initialize();
  const chain = EvmChain.ETHEREUM;

  if (!address) return null;
  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });

  return response.result;
}

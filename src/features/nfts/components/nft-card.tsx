import { EvmNft } from '@moralisweb3/common-evm-utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import { setFocusState } from '@/features/nfts/utils/actions';
import { getImageSrc } from '@/features/nfts/utils/formatters';

export function NftCard({ nft }: { nft: EvmNft }) {
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setFocusState(nft)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      key={nft.tokenHash}
      className='rounded-3xl bg-primary-600 cursor-pointer hover:shadow-2xl overflow-hidden relative'
    >
      {nft.metadata && (
        <Image
          src={getImageSrc((nft.metadata as { image: string }).image)}
          width={400}
          height={400}
          placeholder='empty'
          alt={`${nft.name}${nft.tokenId}`}
          className='object-cover'
        />
      )}
      <motion.div
        layout
        variants={{
          open: { y: 0 },
          closed: { y: '-100%' },
        }}
        animate={isHovered ? 'open' : 'closed'}
        transition={{ type: 'just' }}
        className={clsxm(
          'font-bold text-primary-100 absolute inset-0 bg-gradient-to-b from-primary-500 p-5',
          isHovered ? 'visible' : 'invisible '
        )}
      >
        <p className='text-center'>
          {nft.name} -{' '}
          <span className='text-primary-50 font-bold'>{nft.tokenId}</span>
        </p>
      </motion.div>
    </motion.div>
  );
}

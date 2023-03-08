import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import { ETHAddress } from '@/components/labels/ETHAddress';

import { useGlobalStore } from '@/store/root';

import { getCurrentNFT } from '@/features/nfts/utils/accessor';
import { closeNFTPreviewModal } from '@/features/nfts/utils/actions';
import { getImageSrc } from '@/features/nfts/utils/formatters';
import { getOpenSeaLink } from '@/utils/format';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};
export function NftPreviewModal() {
  const nft = useGlobalStore(getCurrentNFT);

  useEffect(() => {
    const body = document.querySelector('body');
    if (nft) {
      body?.classList.add('overflow-hidden');
    }

    return () => {
      body?.classList.remove('overflow-hidden');
    };
  }, [nft]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'just',
      }}
      layout
      className='relative w-full h-full'
    >
      {nft ? (
        <motion.div className='bg-black bg-opacity-90 backdrop-blur-md fixed inset-0 w-full h-full grid place-items-center'>
          <motion.div
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='bg-primary-500 text-white rounded-3xl p-5  lg:w-3/4 max-w-screen-lg '
          >
            <motion.div className='w-full flex flex-col md:flex-row gap-5'>
              <CloseButton className='md:hidden' />
              <div className='w-full md:w-1/2 h-full'>
                {nft.metadata && (
                  <Image
                    src={getImageSrc((nft.metadata as { image: string }).image)}
                    width={400}
                    height={400}
                    placeholder='empty'
                    alt={`${nft.name}${nft.tokenId}`}
                    className='object-cover rounded-2xl'
                  />
                )}
              </div>
              <div className='w-full md:w-1/2 h-full'>
                <CloseButton className='hidden md:flex' />
                <ul className='divide-y divide-primary-300'>
                  <li className='pb-3'>
                    <div className='flex justify-between items-center'>
                      <p>Name</p>
                      <p className='font-bold'>
                        {nft.name} #{nft.tokenId}
                      </p>
                    </div>
                  </li>
                  <li className='p-3 pl-0'>
                    <div className='flex justify-between items-center'>
                      <p>Owner</p>
                      <div className='font-bold'>
                        <ETHAddress address={nft.ownerOf?.checksum ?? '-'} />
                      </div>
                    </div>
                  </li>
                  <li className='p-3 pl-0'>
                    <div className='flex justify-between items-center'>
                      <p>Contract address</p>
                      <div className='font-bold'>
                        <ETHAddress
                          address={nft.tokenAddress.lowercase ?? '-'}
                        />
                      </div>
                    </div>
                  </li>
                  <li className='p-3 pl-0'>
                    <div className='flex justify-between items-center'>
                      <p>Token Standard</p>
                      <p className='font-bold'>{nft.contractType}</p>
                    </div>
                  </li>
                  <li className='p-3 pl-0'>
                    <div className='flex justify-between items-center'>
                      <p>Marketplaces</p>
                      <p className='font-bold'>
                        <Link
                          href={getOpenSeaLink(
                            nft.tokenAddress.lowercase,
                            nft.tokenId
                          )}
                          rel='noreferrer nofollow'
                          target='_blank'
                        >
                          OpenSea
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

function CloseButton({ className }: { className?: string }) {
  return (
    <div className={clsxm('w-full flex items-center justify-end', className)}>
      <Button
        onClick={closeNFTPreviewModal}
        variant='ghost'
        className='text-white'
      >
        X
      </Button>
    </div>
  );
}

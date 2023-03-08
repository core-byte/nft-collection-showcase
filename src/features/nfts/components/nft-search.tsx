import * as React from 'react';

import { SearchInput } from '@/features/nfts/components/search-input';
import { setNFTAddress } from '@/features/nfts/utils/actions';

const PRESET = [
  {
    name: 'Mutant Ape Yacht Club',
    address: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
  },
  {
    name: 'Bored Ape Yacht Club',
    address: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
  },
  { name: 'Doodles', address: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e' },
] as const;

export function NftSearch() {
  return (
    <section className='flex items-center justify-center flex-col gap-2 p-4 bg-primary-500 rounded-2xl shadow-xl w-full '>
      <p className='font-bold text-white text-2xl'>
        Enter NFT contract address to show collection
      </p>
      <p className='text-primary-200 text-sm'>Or try one of these:</p>
      <ul className='flex items-center justify-start gap-1'>
        {PRESET.map((item) => (
          <li
            key={item.address}
            onClick={() => setNFTAddress(item.address)}
            className='[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200'
          >
            {item.name}
          </li>
        ))}
      </ul>
      <SearchInput />
    </section>
  );
}

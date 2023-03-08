'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';

export function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const account = useAccount();

  const go = (path: string) => () => {
    router.push(path);
  };

  return (
    <nav
      className={clsxm(
        'w-full bg-primary-200 rounded-xl shadow-sm p-2 max-w-screen-xl',
        className
      )}
    >
      <div className='flex justify-between'>
        <div className='flex gap-4 items-center'>
          <Button onClick={go('/')} variant='ghost'>
            Home
          </Button>
          {account.isConnected && (
            <Button onClick={go('/my-nfts')} variant='ghost'>
              My NFTs
            </Button>
          )}
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
}

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { WagmiConfig } from 'wagmi';

import '@/styles/globals.css';

import { queryClient } from '@/lib/query-client';
import { chains, wagmiClient } from '@/lib/rainbowkit';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return isReady ? (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  ) : null;
}

export default MyApp;

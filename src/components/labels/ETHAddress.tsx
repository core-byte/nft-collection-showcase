import { motion } from 'framer-motion';
import { useState } from 'react';

import { Check } from '@/components/svg/check';
import { Copy } from '@/components/svg/copy';

import { truncateEthAddress } from '@/utils/format';

const variants = {
  open: { rotate: 360, x: 0 },
  closed: { opacity: 1, x: '0' },
};

export function ETHAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(address).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 5000);
      },
      () => {
        setCopied(false);
      }
    );
  };
  return (
    <motion.div layout className='inline-flex items-center gap-2'>
      {truncateEthAddress(address)}{' '}
      <motion.div animate={copied ? 'open' : 'closed'} variants={variants}>
        {copied ? <Check /> : <Copy onClick={handleCopyToClipboard} />}
      </motion.div>
    </motion.div>
  );
}

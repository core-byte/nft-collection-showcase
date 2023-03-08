// Taken from: https://github.com/gpxl-dev/truncate-eth-address/blob/main/src/index.ts
// Captures 0x + 4 characters, then the last 4 characters.
const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
export function truncateEthAddress(address: string): string {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
}

export function getOpenSeaLink(tokenAddress: string, tokenId: string | number) {
  return `https://opensea.io/assets/${tokenAddress}/${tokenId}`;
}

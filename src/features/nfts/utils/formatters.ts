export function getImageSrc(image: string): string {
  return image.startsWith('ipfs://') ? getIPFSImageProxy(image) : image;
}

export function getIPFSImageProxy(image: string) {
  const url = new URL(image);
  const ipfsHash = url.pathname.substring(2);
  return `https://ipfs.io/ipfs/${ipfsHash}`;
}

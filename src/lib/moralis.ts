import Moralis from 'moralis';

export const initialize = async () => {
  try {
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
    });
  } catch {
    /* empty */
  }

  return Moralis;
};

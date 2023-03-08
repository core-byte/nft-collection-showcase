import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body className='bg-gradient-to-tr from-primary-900 to-primary-800 bg-fixed'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

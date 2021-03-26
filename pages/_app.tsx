import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { global } from 'minorui';

import { Container } from '@/components/layout/Page';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants';

const globalStyles = global({
  '& *::-moz-selection': {
    background: '$primary800',
    color: '$white',
  },
  '& *::selection': {
    background: '$primary800',
    color: '$white',
  },
  // CSS Resets
  '*':  {
    margin: 0,
    padding: 0,
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content="MTG, Magic: The Gathering" />
        <meta name="theme-color" content="#317EFB" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

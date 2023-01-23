import type { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import type { NextComponentType } from 'next'
import createEmotionCache from '@/theme/createEmotionCache';
import Head from 'next/head';
import theme from '@/theme';

import layout, { LayoutComponent } from '@/layout';

const clientSideEmotionCache = createEmotionCache();
type NextComponentWithLayout = NextComponentType & {
  layout: LayoutComponent
}

interface AppMainProps extends AppProps {
  emotionCache?: EmotionCache,
  Component: NextComponentWithLayout
}

export default function App(props: AppMainProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const Layout: LayoutComponent = Component.layout || (({ children }) => <>{children}</>);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

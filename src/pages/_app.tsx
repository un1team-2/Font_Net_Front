import type { AppProps } from 'next/app'
import theme from '@/utils/theme';
import { globalCss, NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps } : AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}


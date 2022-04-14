import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useCallback, useEffect} from 'react';
import {useSize} from '../hooks/useSize';
import {GlobalStyle} from '../styles/globalStyle';
import {CommonLayout} from '../components/layouts/CommonLayout';

const App = ({pageProps, Component}: AppProps): JSX.Element => {
  const {height} = useSize();
  const initializeVp = useCallback(() => {
    // NOTE: iosで100vhを合わせるための実装
    if (height != null) {
      const vh = height * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, [height]);

  useEffect(() => {
    initializeVp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Head>
        {process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
          <meta name="robots" content="noindex,nofollow" />
        )}
      </Head>
      <GlobalStyle />
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </main>
  );
};

export default App;

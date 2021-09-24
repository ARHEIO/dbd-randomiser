import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import './normalise.scss';
import './globals.scss';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const App = ({Component, pageProps}) => {
  console.log('%c⧭', 'color: #f200e2', Component);
  console.log('%c⧭', 'color: #1d5673', pageProps);
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
       <Head>
         <title>My page</title>
         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
       </Head>
       <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
          }}>
            <Header />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
       </ThemeProvider>
    </>
  );
}

export default App;

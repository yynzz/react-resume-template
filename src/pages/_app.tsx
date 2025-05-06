import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo, useEffect} from 'react';


const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
    
  useEffect(() => {
    if (window.location.hash) {
      const cleanUrl = window.location.pathname + window.location.search;
      history.replaceState(null, "", cleanUrl);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;

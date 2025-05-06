import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo, useEffect} from 'react';




const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  
  useEffect(() => {
    // 檢查 URL 是否包含錨點
    if (window.location.hash) {
      // 先滾動到頂部
      window.scrollTo(0, 0);
      
      // 使用 history API 清除錨點但不重新加載頁面
      const cleanUrl = window.location.pathname + window.location.search;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;

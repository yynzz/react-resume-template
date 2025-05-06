import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo, useEffect} from 'react';
import {useRouter} from 'next/router';


const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = () => {
      // 立即執行滾動重置，不使用延時
      window.scrollTo(0, 0);
      
      // 清除錨點
      if (window.location.hash) {
        const cleanUrl = window.location.pathname + window.location.search;
        window.history.replaceState({}, document.title, cleanUrl);
      }
    };
    
    // 頁面初始加載時重置滾動
    handleRouteChange();
    
    // 添加路由事件監聽器
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;

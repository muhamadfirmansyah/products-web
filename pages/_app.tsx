import "nprogress/nprogress.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'

// NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

const load = () => {
  NProgress.start();
};

const stop = () => {
  NProgress.done();
};

Router.events.on("routeChangeStart", load);
Router.events.on("routeChangeComplete", stop);
Router.events.on("routeChangeError", stop);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

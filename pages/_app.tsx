import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MainLayout } from "../layout/MainLayout";
import NProgress from "nprogress";
import Router from "next/router";

//Routing progress bar
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;

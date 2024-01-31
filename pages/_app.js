import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/slick-theme.css";
import Script from "next/script";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

import Head from 'next/head'
import '../styles/globals.css';
import '../styles/markdown.css';
import '../styles/page.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/Header';

export default function Index() {
  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page page-home">
        <h4 className="text-lg font-medium">2020</h4>
        <ul>
          <li>
            26/11 - <Link href="/blog/titanic">Titanic</Link>
          </li>
        </ul>
      </main>

      <footer>
      </footer>
    </>
  );
};

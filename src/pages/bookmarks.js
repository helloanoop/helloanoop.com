import Head from 'next/head';
import Header from 'components/Header';
import Link from 'next/link';

export default function bookmarks() {
  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page page-bookmarks">
        <div className="page-content">
          <h2>Bookmarks.</h2>

          <h2 className='mt-4'>Blogs.</h2>
          <ul className="mt-4">
            <li className="mt-1"><Link href="https://thehazarika.com">Malay</Link></li>
            <li className="mt-1"><Link href="https://manassaloi.com">Manas J. Saloi</Link></li>
            <li className="mt-1"><Link href="https://rsms.me">Rasmus Andersson</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
};

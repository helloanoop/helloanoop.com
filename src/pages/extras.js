import Head from 'next/head';
import Header from 'components/Header';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page page-goodies">
        <div className="page-content">
          <h2>All the little 'extras' that don't fit as posts unto themselves.</h2>
          <ul className="mt-4">
            <li>📽 <Link href="/documentaries">documentaries</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
};

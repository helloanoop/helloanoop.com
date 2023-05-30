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
            <li className="mt-2">📽&nbsp;<Link href="/documentaries">documentaries</Link></li>
            <li className="mt-2">⌛&nbsp;<Link href="/time">time</Link></li>
            <li className="mt-2">🔖&nbsp;<Link href="/bookmarks">bookmarks</Link></li>
          </ul>

          <h3 className="mt-4 font-semibold">Books</h3>
          <div className='text-sm'>My notes on some subjects</div>
          <ul className="mt-4">
            <li className="mt-2">📚&nbsp;<Link href="https://design-patterns.helloanoop.com/">design-patterns</Link></li>
            <li className="mt-2">📚&nbsp;<Link href="https://data-structures-algorithms.helloanoop.com/">data-structures-algorithms</Link></li>
          </ul>
          
        </div>
      </main>
    </>
  );
};

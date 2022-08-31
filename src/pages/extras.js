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
            <li>👨‍💻&nbsp;<a target="_blank" rel="noreferrer" href="https://byte42.net">byte42</a></li>
            <li className="mt-2">📽&nbsp;<Link href="/documentaries">documentaries</Link></li>
            <li className="mt-2">⌛&nbsp;<Link href="/time">time</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
};

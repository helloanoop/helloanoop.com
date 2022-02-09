import Head from 'next/head';
import Navbar from 'components/Navbar';

export default function Index() {
  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page-home">
        <Navbar />
        <div className="page-body">
          <h4 className="text-lg font-medium">2020</h4>
          <ul>
            <li>
              26/11 - Titanic
            </li>
          </ul>
        </div>
      </main>

      <footer>
      </footer>
    </>
  );
};

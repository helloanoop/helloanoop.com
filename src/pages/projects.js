import Head from 'next/head';
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
      <main className="page page-work">
        <div className="page-content">
          <h4 className="text-xl font-bold">Opensource Projects 👨‍💻</h4>
          <ul className="mt-2">
            <li>✍️ notetaking app - <a target="_blank" rel="noreferrer" href="www.notebase.com">notebase.com</a></li>
            <li>🌐 api collection collaboration (postman alternative) - <a target="_blank" rel="noreferrer" href="www.grafnode.com">grafnode.com</a></li>
          </ul>
        </div>
      </main>
    </>
  );
};

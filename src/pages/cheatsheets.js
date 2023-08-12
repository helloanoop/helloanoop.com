import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/Header';

export default function CheatsheetsPage() {
  const CheatsheetLink = ({title, path}) => {
    let link = `/cheatsheet${path}`;
    return (
      <li className='mt-1'>
        <Link href={link}>{title}</Link>
      </li>
    );
  };

  return (
    <>
      <Head>
        <title>Cheatsheets</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page page-cheatsheets">
        <div className="page-content">
          <h2 className='mb-4'>Cheatsheets.</h2>

          <ul>
            <CheatsheetLink title="git" path="/git"/>
            <CheatsheetLink title="docker" path="/docker"/>
            <CheatsheetLink title="mongodb" path="/mongodb"/>
          </ul>
        </div>
      </main>
    </>
  );
};

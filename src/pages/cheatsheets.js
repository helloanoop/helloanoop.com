import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/Header';

export default function CheatsheetsPage() {
  const CheatsheetLink = ({title, path}) => {
    let link = `/cheatsheet${path}`;
    return (
      <li>
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
        <ul>
          <CheatsheetLink title="git" path="/git"/>
        </ul>
      </main>
    </>
  );
};

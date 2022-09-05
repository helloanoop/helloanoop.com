import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/Header';

export default function Index() {
  const BlogLink = ({title, date, path}) => {
    let link = `/blog${path}`;
    return (
      <li>
        <span>{date} </span> - <Link href={link}>{title}</Link>
      </li>
    );
  };
  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page page-home">
        <h4 className="font-medium">2021</h4>
        <ul className='blog-list'>
          <BlogLink title="indian ceos" path="/indian-ceos" date="14/12"/>
          <BlogLink title="give a shit" path="/give-a-shit" date="10/07"/>
          <BlogLink title="cook" path="/cook" date="28/06"/>
          <BlogLink title="spacex" path="/spacex" date="21/06"/>
        </ul>

        <h4 className="font-medium mt-4">2020</h4>
        <ul className='blog-list'>
          <BlogLink title="battery & a bulb" path="/battery-and-a-bulb" date="20/07"/>
        </ul>

        <h4 className="font-medium mt-4">2018</h4>
        <ul className='blog-list'>
          <BlogLink title="gratitude" path="/gratitude" date="05/09"/>
        </ul>
      </main>

      <footer>
      </footer>
    </>
  );
};

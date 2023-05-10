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
        <div className="page-content">
          <div className='flex'>
            <div className="profile-photo-section text-center">
              <img src="/images/anoop.jpg" width="150px" height="150px" className="profile-photo" alt="anoop"/>
            </div>
          </div>
          <p>I am Anoop, a full stack software programmer based out of Bangalore.</p>

          <p>I live with my wife, mom and our dog bruno.</p>

          <p>When not programming or building <Link href="/opensource">opensource stuff</Link>, I love to <Link href="/blog">write</Link>, ponder about the nature of <Link href="/time">time</Link> and read books.</p>
          <p>You can find me on the web at <a target="_blank" rel="noreferrer" href="https://github.com/anoopmd">Github</a>, <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anoop-m-d-868099100">LinkedIn</a> or <a target="_blank" rel="noreferrer" href="https://twitter.com/anoopcodes">Twitter</a></p>
        </div>
      </main>
      <footer>
      </footer>
    </>
  );
};

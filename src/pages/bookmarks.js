import Head from 'next/head';
import Header from 'components/Header';
import Link from 'next/link';

// https://github.com/mikefarah/yq

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
            <li className="mt-1"><Link href="https://blog.alexellis.io/">Alex Ellis</Link></li>
          </ul>


          <h2 className='mt-4'>Docker.</h2>
          <ul className="mt-4">
            <li className="mt-1"><Link href="https://jessicagreben.medium.com/digging-into-docker-layers-c22f948ed612">Docker Layers</Link></li>
            <li className="mt-1"><Link href="https://docs.docker.com/build/building/multi-stage/">Docker Multi Stage Builds</Link></li>
            <li className="mt-1"><Link href="https://www.alexandraulsh.com/2018/06/25/docker-npmrc-security/">Docker Npmrc Security</Link></li>
          </ul>
          
        </div>
      </main>
    </>
  );
};

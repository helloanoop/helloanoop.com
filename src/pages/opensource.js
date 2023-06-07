import Head from 'next/head';
import Header from 'components/Header';
import Link from 'next/link';

export default function Opensource() {
  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page page-opensource">
        <div className="page-content">
          <h2 className='mb-6'>my opensource work.</h2>

          <div className="mt-2">
            <span className='text-blue-500'>
              <a href="https://github.com/usebruno/bruno" rel="noreferrer" target="_blank">bruno</a>
            </span> - Fast, git friendly gui client for exploring and testing api's
          </div>
          <div className="mt-2">
            <span className='text-blue-500'>
              <a href="https://github.com/helloanoop/commit-count" rel="noreferrer" target="_blank">commit-count</a>
            </span> - See any GitHub repo's userwise commit count for the past 6 months
          </div>
          <div className="mt-2">
            <span className='text-blue-500'>
              <a href="https://github.com/helloanoop/kgraph" rel="noreferrer" target="_blank">kgraph</a>
            </span> - yet another graph based note taking app
          </div>
          <div className="mt-2">
            <span className='text-blue-500'>
              <a href="https://github.com/byte-42/redis-explorer" rel="noreferrer" target="_blank">redis explorer</a>
            </span> - a lightweight redis gui to quickly search through keys
          </div>
          <div className="mt-2">
            <span className='text-blue-500'>
              <a href="https://github.com/helloanoop/lru-map-cache" rel="noreferrer" target="_blank">lru-map-cache</a>
            </span> - a simple and fast lru cache in javascript
          </div>
          
        </div>
      </main>
    </>
  );
};

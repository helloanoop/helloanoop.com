import Head from 'next/head';
import Header from 'components/Header';

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
              <a href="https://github.com/helloanoop/maya" rel="noreferrer" target="_blank">maya</a>
            </span> - A hobby operating system
          </div>
          <div className="mt-2">
            <span className='text-blue-500'>
              <a href="https://github.com/usebruno/httpfaker" rel="noreferrer" target="_blank">httpfaker</a>
            </span> - A simple HTTP request and response testing service
          </div>
          <div className="mt-2">
            <span className='text-blue-500'>
              <a href="https://github.com/helloanoop/lru-map-cache" rel="noreferrer" target="_blank">lru-map-cache</a>
            </span> - a simple and fast lru cache in javascript
          </div>
          <div className="mt-2">
            <span className='text-blue-500'>
              <a href="https://github.com/helloanoop/commit-count" rel="noreferrer" target="_blank">commit-count</a>
            </span> - See any GitHub repo's userwise commit count for the past 6 months
          </div>
        </div>
      </main>
    </>
  );
};

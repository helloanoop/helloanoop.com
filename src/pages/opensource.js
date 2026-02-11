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
          <h2 className='mb-2 font-medium'>i ❤️ opensource.</h2>
          <p className='text-sm text-gray-500'>a selection of open-source software i created</p>

          <div className="mt-6">
            <span>🐶&nbsp; <a className='text-blue-500' href="https://github.com/usebruno/bruno" rel="noreferrer" target="_blank">bruno</a> - Fast, git friendly gui client for exploring and testing api's</span> <span className='star-count'>⭐ 40k</span>
          </div>
          <div className="mt-1">
            <span>📋&nbsp; <a className='text-blue-500' href="https://github.com/helloanoop/opencollection" rel="noreferrer" target="_blank">opencollection</a> - A modern, developer-first specification for defining and sharing API collections</span> <span className='star-count'>⭐ 36</span>
          </div>
          <div className="mt-1">
            <span>🧪&nbsp; <a className='text-blue-500' href="https://github.com/helloanoop/mockdata.dev" rel="noreferrer" target="_blank">mockdata.dev</a> - A collection of realistic mock APIs for testing and development</span> <span className='star-count'>⭐ 9</span>
          </div>
          <div className="mt-1">
            <span>🚀&nbsp; <a className='text-blue-500' href="https://github.com/helloanoop/fast-json-format" rel="noreferrer" target="_blank">fast-json-format</a> - A blazing fast JSON formatting library that pretty-prints JSON like strings</span> <span className='star-count'>⭐ 63</span>
          </div>
          <div className="mt-1">
            <span>🖥️&nbsp; <a className='text-blue-500' href="https://github.com/helloanoop/maya" rel="noreferrer" target="_blank">maya</a> - A hobby operating system</span> <span className='star-count'>⭐ 4</span>
          </div>
          <div className="mt-1">
            <span>🌐&nbsp; <a className='text-blue-500' href="https://github.com/usebruno/httpfaker" rel="noreferrer" target="_blank">httpfaker</a> - A simple HTTP request and response testing service</span> <span className='star-count'>⭐ 2</span>
          </div>
          <div className="mt-1">
            <span>⚡&nbsp; <a className='text-blue-500' href="https://github.com/helloanoop/lru-map-cache" rel="noreferrer" target="_blank">lru-map-cache</a> - a simple and fast lru cache in javascript</span> <span className='star-count'>⭐ 5</span>
          </div>
          <div className="mt-1">
            <span>📊&nbsp; <a className='text-blue-500' href="https://github.com/helloanoop/commit-count" rel="noreferrer" target="_blank">commit-count</a> - See any GitHub repo's userwise commit count for the past 6 months</span> <span className='star-count'>⭐ 2</span>
          </div>
        </div>
      </main>
    </>
  );
};

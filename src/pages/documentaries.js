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
      <main className="page page-goodies">
        <div className="page-content">
          <h2 className='italic'>A collection of my favourite documentaries</h2>
          <ul className="mt-6">
            <li>
                <a target="_blank" rel="noreferrer" href="www.notebase.com">AlphaGo By Deepmind</a>
                <div className='mt-2'>
                    What I enjoyed the most was not the details about AlphaGo and how it beat the world's best Go Player 4-1.
                    It was rather getting to know Lee Sedol, and the way he carried himself throughout. His sheer skill and love towards his craft.
                    The humility with which he handled each loss.
                    Imagine losing 3-0, and going for a press conference and handling it with absolute grace and class.
                    And his comeback when he won the 4th game, tears rolled down my eyes as I watched it.
                    The documentary is also a fine example of filmaking and story telling.
                </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

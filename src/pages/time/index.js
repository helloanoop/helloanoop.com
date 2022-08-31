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
      <main className="page page-goodies">
        <div className="page-content">
          <h2 className='font-semibold text-xl'>time</h2>
          <h4 className='italic mt-1'>musings about the nature of existence</h4>

          <div className='mt-4'>
            I turned out to be a programmer by profession, but since childhood I loved physics since it explored the fundamental nature of things around us.
            I often find myself lost in thoughts trying to understand the nature of our existence. Its overwhelming all the directions that the mind wanders when thinking about this.
          </div>

          <div className='mt-4 italic'>
            "All these 50 years of conscious brooding have brought me no nearer to the answer to the question, "What are light quanta?" Nowadays every Tom, Dick and Harry thinks he knows it, but he is mistaken." -- Albert Einstein in 1951.
          </div>
          <div className='mt-4'>
            As I read this quote, the part <span className='italic'>"What are light quanta?"</span> stuck with me. With all the advancements that we have made in physics so far, I think this question is still unanswered.
            For a long time, I held this question as a guidepoint in my amateur prodding to understand the nature of existence.
            As per the theory of special relativity, a photon does not experience time. And time is relative. Over time (the irony 😛), I changed the guidepoint.
            Instead of trying to answer<span className='italic'>"What are light quanta?"</span>, I try to answer <span className='italic'>"What is time?"</span>&nbsp;
            Following are some of my writings as I try to answer that question.
          </div>

          <ul className='mt-6'>
            <li>
                1.&nbsp;<Link href="/time/matter-is-an-illusion">matter is an illusion</Link>
            </li>
            </ul>
        </div>
      </main>
    </>
  );
};

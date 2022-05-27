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
      <main className="page page-work">
        <div className="page-content">
          <h4 className="text-xl font-bold">Career Highlights ✨</h4>
          <ul>
            <li>Co founded 2 companies and took them from zero to production</li>
            <li>A decade of experience in programming and building apps with Javascript and web technologies</li>
            <li>Strong leadership skills. Several years experience leading teams of 5-15 people.</li>
            <li>Currently working as Engineering Manager for People10, leading a team of 12 delivering experiences for Allegiant Airlines</li>
          </ul>

          <h4 className="text-xl font-bold mt-6">About Me 😎</h4>
          <p>I am a full stack software engineer based out of Bangalore.</p>
          <p>My interest in programming started with my fascination towards electronics as a kid. Over time, I came to the realisation that software is just a beautiful abstraction over the underlying transistors.</p>
          <p>Over the last decade, I have been building software applications. My expertise primarily lies in Javascript.I make it my goal to create software with the user in mind, thus delivering intuitive user interface experiences.</p>
          <p>I am obsessed with programming and building things.</p>

          <h4 className="text-xl font-bold mt-6">Education 🎓</h4>
          <ul>
            <li>B.Tech (2012) - Electronics & Communication Engg</li>
          </ul>

          <h4 className="text-xl font-bold mt-6">Professional Experience 🏦</h4>
          <div className="flex mt-2 items-center">
            <h6 className="font-semibold">People10 Technosoft Pvt Ltd</h6>
            <small className="ml-1">(4.5yrs)</small>
          </div>
          <ul>
            <li>Engineering Manager - <small className="ml-1">Apr 2022 - till date</small></li>
            <li>Engineering Lead - <small className="ml-1">Apr 2021 - Mar 2022</small></li>
            <li>Technical Consultant - <small className="ml-1">Sep 2018 - Mar 2021</small></li>
            <li>Technical Lead - <small className="ml-1">May 2017 - Aug 2017</small></li>
            <li>Development Lead - <small className="ml-1">May 2016 - April 2017</small></li>
            <li>Senior Software Engg - <small className="ml-1">Jan 2016 - April 2016</small></li>
          </ul>

          <div className="flex mt-2 items-center">
            <h6 className="font-semibold">Tata Elxsi</h6>
            <small className="ml-1">(2.5yrs)</small>
          </div>
          <ul>
            <li>Senior Software Engg - <small className="ml-1">May 2014 - Nov 2014</small></li>
            <li>Software Engg - <small className="ml-1">July 2012 - April 2014</small></li>
          </ul>

          <h4 className="text-xl font-bold mt-6">Startups 🚀</h4>
          <div className="flex mt-2 items-center">
            <h6 className="font-semibold">Notebase Technologies LLP</h6>
            <small className="ml-1">(1.5yrs)</small>
          </div>
          <ul>
            <li>Founder - <small className="ml-1">Nov 2020 - till date</small></li>
          </ul>
          <p className="mt-2">Building opensource software</p>
          <p className="ml-4">✍️ notetaking app - <a target="_blank" rel="noreferrer" href="www.notebase.com">notebase.com</a></p>
          <p className="ml-4">🌐 api collection collaboration (postman alternative) - <a target="_blank" rel="noreferrer" href="www.grafnode.com">grafnode.com</a></p>

          <div className="flex mt-6 items-center">
            <h6 className="font-semibold">SINI Labs Technologies LLP</h6>
            <small className="ml-1">(7yrs)</small>
          </div>
          <ul>
            <li>Co Founder - <small className="ml-1">Dec 2014 - till date</small></li>
          </ul>
          <p className="mt-2">Led a team of 3 developers and built  <a target="_blank" rel="noreferrer" href="www.strizly.com">strizly.com</a>, A CRM for Salon & Spas used over by 150+ brands in India</p>

        </div>
      </main>
    </>
  );
};

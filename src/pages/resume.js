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
      <main className="page page-work">
        <div className="page-content">
          <h4 className="text-xl">Career Highlights ✨</h4>
          <ul>
            <li>A decade of experience in programming and building apps with Javascript and web technologies</li>
            <li>Creator of Bruno (Opensource IDE for exploring and testing apis) & the Bru Markup language - www.usebruno.com</li>
            <li>Strong leadership skills. Several years experience leading teams of 5-15 people.</li>
            <li>Co founded 2 companies and led product development from ideation to production.</li>
          </ul>

          <h4 className="text-xl mt-6">Professional Experience 👨‍💻</h4>

          <div className="flex flex-col mt-4">
            <h6 className="text-xl font-semibold">People10 Technosoft Pvt Ltd</h6>
            <div className='text-sm'>Technical Architect - Jan 2016 - Mar 2023 (6yrs)</div>
          </div>
          <div className="mt-2">
            During my 6-year tenure, I progressed from a senior software engineer to an architect. I was responsible for building and managing multiple in-house applications, developing customer-facing ecommerce websites, and creating frameworks that were adopted as standards across the organization for an American airlines company. I also led and managed several projects and mentored fellow developers, resulting in the growth and success of multiple teams within the organization.
          </div>

          <div className="flex flex-col mt-6">
            <h6 className="text-xl font-semibold">Notebase Technologies LLP</h6>
            <div className='text-sm'>Founder - Nov 2020 - Feb 2022 (1yr)</div>
          </div>
          <div className="mt-2">
            My most spectacular failure, Me and my co-founder built a social graph based note taking app for a year, only to later realize that it did not solve a real problem.
          </div>

          <div className="flex flex-col mt-6">
            <h6 className="text-xl font-semibold">SINI Labs Technologies LLP</h6>
            <div className='text-sm'>Co-Founder - Dec 2014 - Mar 2020 (6yrs)</div>
          </div>
          <div className="mt-2">
            Co-founded and bootstrapped the company to build a CRM software for salons and spas, which continues to be used by over 150 outlets in India. Led product development from ideation to production, gaining expertise in the entire tech stack including devops
          </div>

          <div className="flex flex-col mt-6">
            <h6 className="text-xl font-semibold">Tata Elxsi</h6>
            <div className='text-sm'>a Elxsi Senior Software Engineer - Jul 2012 - Dec 2014 (2yrs)</div>
          </div>
          <div className="mt-2">
            Initially worked on firmware code in C for implementing 4G tech in mobile chipsets. Gained expertise in full stack web development during the second year, building web apps using NodeJs and Backbone.js.
          </div>

          <h4 className="text-xl mt-6">Education 🎓</h4>
          <ul>
            <li>B.Tech (2012) - Electronics & Communication Engg</li>
          </ul>

          <h4 className="text-xl mt-6">About Me 😎</h4>
          <p>My interest in <Link href="/blog/battery-and-a-bulb">programming</Link> started with my fascination towards electronics as a kid. Over time, I came to the realisation that software is just a beautiful abstraction over the underlying transistors.</p>
          <p>Over the last decade, I have been building software applications. My expertise primarily lies in Javascript.I make it my goal to create software with the user in mind, thus delivering intuitive user interface experiences.</p>
          <p>I am obsessed with programming and building things.</p>
        </div>
      </main>
    </>
  );
};

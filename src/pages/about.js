import Head from 'next/head';
import Navbar from 'components/Navbar';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page page-about">
        <Navbar />

        <div className="page-body">
          <h4 className="page-title font-bold">Hi there 👋</h4>

          <div className="page-content">
            <div className="profile-photo-section">
              <img src="/images/anoop.jpg" width="120px" height="120px" className="profile-photo"/>
            </div>
            <p>I am Anoop, a full stack software programmer based out of Bangalore.</p>

            <p>I live with my mom, wife and our dog bruno.</p>

            <p>I went to <a target="_blank" href="https://www.google.com/maps/place/12.970699+77.747437/@12.970699,77.747437,18z">St Thomas School</a>, did pre-graduation at <a href="https://www.sjc.ac.in/" target="_blank">St Joesphs</a> and completed my graduation in Electronics and Communication at <a href="https://www.cmrit.ac.in/">CMRIT</a></p>
          </div>
        </div>
      </main>
    </>
  );
};

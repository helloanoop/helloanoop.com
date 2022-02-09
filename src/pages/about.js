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
      <main className="page page-about">
        <h4 className="text-xl font-bold">Hi there 👋</h4>

        <div className="page-content">
          <div className="profile-photo-section">
            <img src="/images/anoop.jpg" width="120px" height="120px" className="profile-photo"/>
          </div>
          <p>I am Anoop, a full stack software programmer based out of Bangalore.</p>

          <p>I live with my wife, mom and our dog bruno.</p>

          <p>I went to <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/12.970699+77.747437/@12.970699,77.747437,18z">St Thomas School</a>, did pre-graduation at <a href="https://www.sjc.ac.in/" a rel="noreferrer" target="_blank">St Joesphs</a> and completed my graduation in Electronics and Communication at <a rel="noreferrer" href="https://www.cmrit.ac.in/">CMRIT</a></p>

          <p>You can find me on the web at <a target="_blank" rel="noreferrer" href="https://github.com/anoopmd">Github</a>, <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anoop-m-d-868099100">LinkedIn</a> or <a target="_blank" rel="noreferrer" href="https://twitter.com/anoopcodes">Twitter</a></p>
        </div>
      </main>
    </>
  );
};

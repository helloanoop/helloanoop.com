import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page-home">
        <div className="profile-photo-section">
          <img src="/images/anoop.jpg" width="150px" height="150px" className="profile-photo"/>
        </div>
        <div className="name">
          anoop
        </div>
        <div className="title">
          software programmer
        </div>

        <section style={{
          fontSize: '1.2rem',
          paddingRight: '1rem',
          paddingLeft: '1rem',
          marginTop: '3rem',
          color: '#292b2d'
        }}>
          Hi there 👋, This is my portfolio site which is yet to be developed.
        </section>

        <section style={{
          fontSize: '1.2rem',
          paddingRight: '1rem',
          paddingLeft: '1rem',
          marginTop: '3rem',
          color: '#292b2d'
        }}>
          You can contact me at <Link href="https://twitter.com/anoop_md">twitter</Link> or <Link href="https://www.linkedin.com/in/anoop-m-d-868099100/">linkedin</Link>
        </section>

        {/* <section className="nav">
          <nav>
            <Link href="/notes">
              <a>notes</a>
            </Link>
            <Link href="/about">
              <a>about</a>
            </Link>
            <Link href="/startups">
              <a>startups</a>
            </Link>
            <Link href="/opensource">
              <a>opensource</a>
            </Link>
            <Link href="/work">
              <a>work</a>
            </Link>
          </nav>
        </section> */}
      </main>

      <footer>
      </footer>
    </>
  );
};

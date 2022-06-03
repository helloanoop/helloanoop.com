import Head from 'next/head';
import Header from 'components/Header';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>

      <Header />
      <main className="page page-blog">{children}</main>
    </div>
  );
};

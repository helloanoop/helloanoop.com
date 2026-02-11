import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/Header';

export default function ReviewsPage() {
  const ReviewLink = ({title, date, path, rating}) => {
    let link = `/reviews/books${path}`;
    return (
      <li>
        <span>{date} </span> - <Link href={link}>{title}</Link> - {rating}/10
      </li>
    );
  };

  return (
    <>
      <Head>
        <title>Anoop</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page page-blog">
        <h4 className="font-medium">Books</h4>
        <ul className='blog-list'>
          <ReviewLink title="23 things they dont tell you about capitalism" path="/23-things-they-dont-tell-you-about-capitalism" date="11/02" rating="0"/>
        </ul>
      </main>
    </>
  );
};

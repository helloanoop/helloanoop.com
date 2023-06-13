import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {marked} from 'marked';
import Blogpost from 'components/Blogpost';

export default function CheatsheetPage({
  frontmatter: { title },
  content
}) {
  return (
    <Blogpost title={title}>
      <h1 className='page-title'>{title}</h1>
      <div className='page-content markdown mt-2'>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </Blogpost>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('cheatsheets'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('cheatsheets', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    }
  };
};

import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default function StudyShow(props) {
  return (
    <ReactMarkdown children={props.markdownBody} />
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../../content/studies/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const studies = require('glob').sync('content/studies/**/*.md');
  const slugs = studies.map(file => {
    return file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim();
  });
  const paths = slugs.map(slug => `/studies/${slug}`);
  return {
    paths,
    fallback: false,
  }
}

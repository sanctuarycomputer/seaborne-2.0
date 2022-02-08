import matter from 'gray-matter';
import Link from 'next/link';

export default function StudyIndex(props) {
  return props.studies.map(s => {
    return (<Link key={s.slug} href={`/studies/${s.slug}`}>{s.frontmatter.title}</Link>)
  });
}

export async function getStaticProps() {
  //get posts & context from folder
  const studies = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../../../content/studies', true, /\.md$/))

  return {
    props: { studies },
  }
}

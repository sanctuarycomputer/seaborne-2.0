import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function StudyShow(props) {
  // splitting tags string into an array
  const tagString = props.frontmatter.tags;
  const tagArray = tagString.split(',');

  return (
    <main className="article">
      <header className="site-padding-x article__header inner-content-max-width flex flex-col items-center">
        <figure className="col-12">
          {props.frontmatter.hero_image &&
            <Image
              className="article__header-image w100 mxauto" 
              src={props.frontmatter.hero_image} 
              alt={props.frontmatter.hero_image_caption} 
              layout="responsive"
              width={1248}
              height={677}
              priority="true"
            />
          }
          
          <figcaption className="article__header-image-caption text-body-sm mb3_5 md:mb3 lg:mb4_5">
            {props.frontmatter.hero_image_caption} 
          </figcaption>
        </figure>

        {props.frontmatter.type &&
          <p className="article__header-type col-12 text-body color-gray">
            {props.frontmatter.type}
          </p>
        }
        
        <h1 className="article__header-title col-12 text-header">
          {props.frontmatter.title}
        </h1>

        {props.frontmatter.tags &&
          <div className="article__header-tags col-12">
            {tagArray.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        }

      </header>

        
      <article className="article__body">
        <ReactMarkdown children={props.markdownBody} />
      </article>
    </main>
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

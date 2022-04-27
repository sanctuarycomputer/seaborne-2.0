import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';

export default function StudyShow(props) {
  // splitting tags string into an array
  const tagString = props.frontmatter.tags;
  const tagArray = tagString.split(',');

  return (
    <main className="article">
      <header className="article__header site-padding-x inner-content-max-width flex flex-col items-center mxauto">
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
          
          <figcaption className="article__header-image-caption text-body-sm color-gray mb3_5 md:mb3 lg:mb4_5 mt_75">
            {props.frontmatter.hero_image_caption} 
          </figcaption>
        </figure>

        {props.frontmatter.type &&
          <p className="article__header-type col-12 lg:col-8 text-body color-gray">
            {props.frontmatter.type}
          </p>
        }
        
        <h1 className="article__header-title col-12 lg:col-8 text-header mt1 mb2_25 md:mb3">
          {props.frontmatter.title}
        </h1>

        {props.frontmatter.tags &&
          <ul className="article__header-taglist col-12 lg:col-8 list-style-none">
            {tagArray.map((tag) => 
              <li className="article__header-taglist-tag inline-block text-eyebrow bg-color-sky color-blue mr_5 mb_5" key={tag}>{tag}</li>
            )}
          </ul>
        }
      </header>
      
      <article className="article__body site-padding-x inner-content-max-width mxauto flex flex-col items-center">
      {/* <article className="article__body site-padding-x inner-content-max-width flex flex-col items-center mxauto"> */}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {props.markdownBody}
        </ReactMarkdown>
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

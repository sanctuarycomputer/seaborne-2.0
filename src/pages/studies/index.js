import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export default function StudyIndex(props) {
  // Listing all posts under content/studies - Kept this original code that generates a dynamic posts list just in case we want to go back to this in the future.
  // return props.studies.map(s => {
  //   return (<Link key={s.slug} href={`/studies/${s.slug}`}>{s.frontmatter.title}</Link>)
  // });

  return (
    <main className="study-index">
      {/* Page Metadata */}
      <Head>
        <title key="title">Seaborne &mdash; Studies &amp; Writing</title>
        <meta property="og:title" content="Seaborne — Studies &amp; Writing" key="og__title" />
        <meta name="twitter:title" content="Seaborne — Studies &amp; Writing" key="twitter__title" />
      </Head>

      <section className="study-index__heading pt5 pb4">
        <h1 className="text-header-sm text-center">Case Studies</h1>
      </section>

      <section className="study-index__studies site-padding-x">
        <div className="study-index__case-study-card case-study-card flex flex-row justify-between mxauto mb1_5 md:mb3">
          <figure className="case-study-card__image bg-cover" 
            style={{
              backgroundImage: `url('img/studies/light-two/hero.jpg')`
          }}>
          </figure>
          <article className="flex-1 flex flex-col ml_75 md:ml2">
            <p className="case-study-card__type color-gray text-eyebrow mb_25 md:mb_75">Case Study</p>
            <h3 className="case-study-card__title text-subheader md:mb_5">The Light Phone</h3>
            <p className="case-study-card__excerpt text-body color-gray">
              Investigating the climate impacts of a mobile phone. Building a novel checkout feature to invite customers into the sustainability conversation.
            </p>
            <Link href="/studies/light-two">
              <a className="case-study-card__link flex items-center text-body arrow-link color-blue pt_5 md:pt1_5">
                <figure className="mr_5">
                  <Image 
                    alt=""
                    src="/img/squiggle-arrow-right.svg"
                    width={20.22}
                    height={14}
                    layout="responsive"
                  />
                </figure>
                View Case Study
              </a>
            </Link>
          </article>
        </div>
        <div className="study-index__case-study-card case-study-card flex flex-row justify-between mxauto mb1_5 md:mb3">
          <figure className="case-study-card__image bg-cover" 
            style={{
              backgroundImage: `url('img/studies/light-two/hero.jpg')`
          }}>
          </figure>
          <article className="flex-1 flex flex-col ml_75 md:ml2">
            <p className="case-study-card__type color-gray text-eyebrow mb_25 md:mb_75">Blog Post</p>
            <h3 className="case-study-card__title text-subheader md:mb_5">Trends of the Industry</h3>
            <p className="case-study-card__excerpt text-body color-gray">
            Luctus justo, in lectus bibendum. Ultrices sed enim, at sit egestas cursus cursus cursus. Vitae, viverra ut turpis congue sit. Cras nibh sed commodo, leo arcu amet. Cras.
            </p>
            <Link href="/studies/sample">
              <a className="case-study-card__link flex items-center text-body arrow-link color-blue pt_5 md:pt1_5">
                <figure className="mr_5">
                  <Image 
                    alt=""
                    src="/img/squiggle-arrow-right.svg"
                    width={20.22}
                    height={14}
                    layout="responsive"
                  />
                </figure>
                View Case Study
              </a>
            </Link>
          </article>
        </div>
        <div className="study-index__case-study-card case-study-card flex flex-row justify-between mxauto mb1_5 md:mb3">
          <figure className="case-study-card__image bg-cover" 
            style={{
              backgroundImage: `url('img/studies/light-two/hero.jpg')`
          }}>
          </figure>
          <article className="flex-1 flex flex-col ml_75 md:ml2">
            <p className="case-study-card__type color-gray text-eyebrow mb_25 md:mb_75">Case Study</p>
            <h3 className="case-study-card__title text-subheader md:mb_5">The Light Phone</h3>
            <p className="case-study-card__excerpt text-body color-gray">
              Investigating the climate impacts of a mobile phone. Building a novel checkout feature to invite customers into the sustainability conversation.
            </p>
            <Link href="#">
              <a className="case-study-card__link flex items-center text-body arrow-link color-blue pt_5 md:pt1_5">
                <figure className="mr_5">
                  <Image 
                    alt=""
                    src="/img/squiggle-arrow-right.svg"
                    width={20.22}
                    height={14}
                    layout="responsive"
                  />
                </figure>
                View Case Study
              </a>
            </Link>
          </article>
        </div>
        <div className="study-index__case-study-card case-study-card flex flex-row justify-between mxauto">
          <figure className="case-study-card__image bg-cover" 
            style={{
              backgroundImage: `url('img/studies/light-two/hero.jpg')`
          }}>
          </figure>
          <article className="flex-1 flex flex-col ml_75 md:ml2">
            <p className="case-study-card__type color-gray text-eyebrow mb_25 md:mb_75">Case Study</p>
            <h3 className="case-study-card__title text-subheader md:mb_5">The Light Phone</h3>
            <p className="case-study-card__excerpt text-body color-gray">
              Investigating the climate impacts of a mobile phone. Building a novel checkout feature to invite customers into the sustainability conversation.
            </p>
            <Link href="#">
              <a className="case-study-card__link flex items-center text-body arrow-link color-blue pt_5 md:pt1_5">
                <figure className="mr_5">
                  <Image 
                    alt=""
                    src="/img/squiggle-arrow-right.svg"
                    width={20.22}
                    height={14}
                    layout="responsive"
                  />
                </figure>
                View Case Study
              </a>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
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

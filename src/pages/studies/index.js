import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import CaseStudyCard from 'components/CaseStudyCard';

export default function StudyIndex(props) {
  return (
    <main className="study-index">
      {/* Page Metadata */}
      <Head>
        <title key="title">Seaborne &mdash; Studies &amp; Writing</title>
        <meta property="og:title" content="Seaborne — Studies &amp; Writing" key="og__title" />
        <meta name="twitter:title" content="Seaborne — Studies &amp; Writing" key="twitter__title" />
      </Head>

      <section className="study-index__heading pt5 pb4">
        <h1 className="text-header-sm text-center">Studies & Writing</h1>
      </section>

      <section className="study-index__studies site-padding-x">
        <CaseStudyCard
          type="Case Study"
          image="img/studies/light-two/hero.jpeg"
          title="The Light Phone II"
          link="/studies/light-two"
          description="Investigating the climate impacts of a mobile phone. Building a novel checkout feature to invite customers into the sustainability conversation."
        />

        <CaseStudyCard
          type="Blog Post"
          image="img/writing/greenwashing-certified/hero.png"
          title="Greenwashing Certified™"
          link="https://garden3d.substack.com/p/greenwashing-certified"
          description="Can corporate actors evolve to confront environmental problems in a meaningful, material way?"
        />

        <CaseStudyCard
          type="Blog Post"
          image="img/studies/studio-carbon-negative/hero.jpeg"
          title="Studio Carbon Negative"
          link="/studies/studio-carbon-negative"
          description="Sanctuary Computer had one goal. Understand and mitigate their impact, so they could lead clients and peers in doing the same."
        />
      </section>
    </main>
  );
};

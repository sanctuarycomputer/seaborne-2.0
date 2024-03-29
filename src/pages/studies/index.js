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
        <h1 className="text-header-sm text-center">Our Work & Writing</h1>
      </section>

      <section className="study-index__studies site-padding-x">
        <CaseStudyCard
          type="Blog Post"
          image="img/writing/gets-more-clicks/hero.jpeg"
          title="Substantive Sustainability Gets More Clicks"
          link="https://garden3d.substack.com/p/substantive-sustainability-gets-more"
          description="How we proved the Seaborne hypothesis."
        />

        <CaseStudyCard
          type="Case Study"
          image="img/studies/free-rain/hero.jpg"
          title="Free Rain"
          link="/studies/free-rain"
          description="Assessing the environmental impacts of functional flavored water. Supporting a growing CPG company to make environmentally-responsible and informed decisions as they scale."
        />

        <CaseStudyCard
          type="Blog Post"
          image="img/writing/substantive-sustainability/hero.png"
          title="Substantive Sustainability"
          link="https://garden3d.substack.com/p/substantive-sustainability"
          description="How we build corporate climate programs that are effective and resonant."
        />

        <CaseStudyCard
          type="Case Study"
          image="img/studies/milli-mylk/hero.jpg"
          title="Milli Mylk"
          link="/studies/milli-mylk"
          description="Quantifying the environmental impacts of making a new plant-based mylk. Guiding founders toward attainable climate actions today with a long-term strategy for improvements."
        />

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
          type="Case Study"
          image="img/studies/studio-carbon-negative/hero.jpeg"
          title="Studio Carbon Negative"
          link="/studies/studio-carbon-negative"
          description="Sanctuary Computer had one goal. Understand and mitigate their impact, so they could lead clients and peers in doing the same."
        />
      </section>
    </main>
  );
};

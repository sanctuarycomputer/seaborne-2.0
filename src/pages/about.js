import Image from 'next/image';
import Head from 'next/head';

export default function About() {
  return (
    <main className="about">
      {/* Page Metadata */}
      <Head>
        <title key="title">Seaborne &mdash; How we work</title>
        <meta
          name="description"
          content="We work with companies that want to take meaningful action on contemporary social and environmental issues, guiding them through each step of the way from strategy to storytelling."
          key="meta__desc"
        />
        <meta property="og:title" content="Seaborne — How we work" key="og__title" />
        <meta name="twitter:title" content="Seaborne — How we work" key="twitter__title" />
        <meta
          name="twitter:description"
          content="We work with companies that want to take meaningful action on contemporary social and environmental issues, guiding them through each step of the way from strategy to storytelling. "
          key="twitter__desc"
        />
      </Head>

      {/* Hero section */}
      <section className="about__hero-section site-padding-x flex pb4_5 md:pb8 lg:pb10 inner-content-max-width mxauto">
        <div className="col-12 md:col-10 mxauto">
          <p className="text-body color-gray mb1_5 md:mb2">
            How we work
          </p>

          <h2 className="text-subheader-alt mb1_5 md:mb4 lg:mb12 color-black">
            We work with companies that want to take meaningful action on contemporary social and environmental issues, guiding them through each step of the way from strategy to storytelling.
          </h2>

          <Image
            className="separator-arrow"
            alt=""
            src="/img/squiggle-arrow.svg"
            width={27}
            height={51}
            layout="fixed"
          />
        </div>
      </section>

      {/* Main content section */}
      <section className="about__content-section site-padding-x md:pb2_5 lg:mb5_75 inner-content-max-width mxauto">
        <div className="flex justify-center">

          <div className="col-12 md:col-10 lg:col-7">
            <div className="mb4_5 md:mb6">
              <h2 className="text-subheader-alt mb_75 color-black">
                We work with modern product companies
              </h2>

              <p className="color-gray text-body-light">
Unlike most consultancies, our focus (and price point!) is tailored to young startups in the direct-to-consumer or consumer packaged goods spaces. Why? It’s these early ad-hoc manufacturing phases where our work can effect the biggest change; well before a hulking supply chain is built around a non-optimized product design.
              </p>
            </div>
            <div className="mb4_5 md:mb6">
              <h2 className="text-subheader-alt mb_75 color-black">
                Substantive Sustainability
              </h2>

              <p className="color-gray text-body-light">
What does “sustainability” even mean? As it turns out, not much. That’s why we work with our clients to align on their own custom definition that is equally impactful and resonant. All of our engagements start with a value recognition exercise that prioritizes issues with the greatest stakes; so we can tailor our research approach to the goals that mean most to customers and stakeholders.
              </p>
            </div>
            <div className="mb4_5 md:mb6">
              <h2 className="text-subheader-alt mb_75 color-black">
                Measure, Mitigate & Reduce
              </h2>
              <p className="color-gray text-body-light">
We’ll work to understand the complexity in your supply chain, mapping out every process, ingredient and manufacturing step using a science-backed process called a “lifecycle analysis”. That output gives us a quantified picture of a product’s total environmental impact; helping the team understand the biggest problem areas, and set goals to mitigate and reduce future impact.
              </p>
            </div>
            <div className="mb4_5 md:mb6">
              <h2 className="text-subheader-alt mb_75 color-black">
                Research, Storytelling & Infrastructure
              </h2>

              <p className="color-gray text-body-light">
Sustainability work done right is a powerful point of difference. Guided by our research, we collaborate tightly with our clients to build an environmental mitigation strategy, and work to bring that story our consumers and stakeholders (through content, copywriting and even web development), helping drive forward future change for the brand and it’s broader community.
              </p>
            </div>
          </div>

          <div className="none lg:block lg:col-3 lg:pl3">
            <a className="about__content-section-callout-card callout-card p2 block" href="https://garden3d.substack.com/p/greenwashing-certified" target="_blank">
              <p className="text-eyebrow mb_25 md:mb_75 color-gray">Blog Post</p>
              <p className="text-body-light">
                <span className="color-black">Greenwashing Certified™</span>
              </p>
              <p className="text-body-light">
                <span className="color-gray">{"Corporate sustainability's shortcomings"}</span>
              </p>
              <div className="text-body-sm arrow-link color-blue pt_5 md:pt1_5">
                <figure className="mr_5 inline">
                  <Image
                    alt="Right Arrow Icon"
                    src="/img/squiggle-arrow-right.svg"
                    width={12}
                    height={10}
                    layout="fixed"
                  />
                </figure>
                Read it
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Pricing section */}
      <section className="about__pricing-section bg-color-powder text-center mxauto site-padding-x flex flex-col items-center">
          <p className="col-12 md:col-10 lg:col-8 text-body-light color-gray mb1_5">We keep our pricing simple</p>
          <h2 className="col-12 md:col-10 lg:col-8 text-subheader-alt ">All of our services are $130/hour to get you started on your journey</h2>
      </section>
    </main>
  );
}

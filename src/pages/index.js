import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="home">
      {/* Hero section */}
      <section className="home__hero-section flex flex-col">
        <div
          className="home__hero-section-text opacity-0 flex flex-col items-center text-center site-padding-x inner-content-max-width mxauto z-5"
        >
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb2_5">Hi, we&rsquo;re Seaborne</p>
          <h1 className="text-header color-black pb3 sm:pb1_75 md:pb2_5 md:col-10">
            We&rsquo;re your guides to sustainable business practices.
          </h1>
          <Link href="/about">
            <a
              aria-label="Read more about how we work"
              className="event-contact-us button--style-primary text-body flex items-center justify-center font-500"
            >
              How we work
            </a>
          </Link>
        </div>
        <div className="home__hero-section-illustration-container opacity-0 flex justify-center mxauto inner-content-max-width">
          <Image
            className="hero-illustration"
            alt="People doing outdoor activities in the mountains"
            src="/img/hero-illustration.svg"
            width={1362}
            height={765}
          />
        </div>
      </section>

      {/* Case studies section */}
      <section className="home__studies-section flex flex-col mt4 fade-in">
        <div className="text-center site-padding-x">
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb1_5">Latest updates from our company</p>
          <h2 className="text-header-sm mb1_5 md:mb5 lg:mb4">See how we&rsquo;re making a difference</h2>
          <Image 
            className="separator-arrow"
            alt=""
            src="/img/squiggle-arrow.svg"
            width={27}
            height={51}
            layout="fixed"
          />
        </div>

        <div className="site-padding-x mt4 md:col-10 mxauto">
          <div className="home__studies-section-case-study-card case-study-card flex flex-row justify-between mxauto mb1_5 md:mb3">
            <figure className="case-study-card__image bg-cover" 
              style={{
                backgroundImage: `url('img/studies/light-two/hero.jpg')`
            }}>
            </figure>
            <article className="case-study-card__details flex-1 flex flex-col ml_75 md:ml2">
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
          <div className="home__studies-section-case-study-card case-study-card flex flex-row justify-between mxauto">
            <figure className="case-study-card__image bg-cover" 
              style={{
                backgroundImage: `url('img/studies/light-two/hero.jpg')`
            }}>
            </figure>
            <article className="case-study-card__details flex-1 flex flex-col ml_75 md:ml2">
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
        </div>
      </section>

      {/* Offerings section */}
      <section
        className="home__offerings-section bg-color-powder items-center justify-center flex flex-col relative bg-color-pink py4_5 fade-in"
      >
        <div className="inner-content-max-width mxauto z-3">
          <div className="site-padding-x mxauto">
            <div className="flex flex-col items-center text-center md:col-10 lg:col-8 mxauto">
              <p className="text-body-light color-gray md:font-300">What we offer</p>
              <p className="text-header-sm color-black pt1_5">
                Our unique set of services that help companies of all sizes.
              </p>
            </div>

            <div className="home__offerings-section-columns-container flex flex-wrap flex-row text-center md:col-10 mxauto">
              <div className="flex flex-col items-center text-body-sm">
                <figure className="mb1_5">
                  <Image
                    src="/img/suitcase-icon.svg" 
                    alt="Suitcase"
                    width={72}
                    height={72}
                    layout="fixed"
                  />
                </figure>
                <p className="bold color-black">Corporate Assessment</p>
                <p className="color-gray">
                  Calculate your business&rsquo;s carbon footprint by understanding the ins and outs of
                  your business and operations.
                </p>
              </div>

              <div className="flex flex-col items-center text-body-sm">
                <figure className="mb1_5">
                  <Image
                    src="/img/supply-chain-icon.svg"
                    alt="Arrows rotating in a circle and surrounding a box"
                    width={72}
                    height={72}
                    layout="fixed"
                  />
                </figure>
                <p className="bold color-black">Supply Chain Assessment</p>
                <p className="color-gray">
                  Calculate your product&rsquo;s carbon footprint. Know the impact of your supply chain
                  and manufacturing processes.
                </p>
              </div>

              <div className="flex flex-col items-center text-body-sm">
                <figure className="mb1_5">
                  <Image
                    src="/img/goal-setting-icon.svg"
                    alt="Target with an arrow in the center"
                    width={72}
                    height={72}
                    layout="fixed"
                  />
                </figure>
                <p className="bold color-black">Goal Setting</p>
                <p className="color-gray">
                  Set sustainability goals so that your organization builds sustainability into its
                  DNA.
                </p>
              </div>

              <div className="flex flex-col items-center text-body-sm">
                <figure className="mb1_5">
                  <Image
                    src="/img/web-icon.svg"
                    alt="Browser with an arrow pointing towards it"
                    width={72}
                    height={72}
                    layout="fixed"
                  />
                </figure>
                <p className="bold color-black">Web Presence</p>
                <p className="color-gray">
                  Share the story of how your business became more sustainable. We&rsquo;ll help shape
                  your narrative and build your case study site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="home__pricing-section text-center md:col-10 lg:col-8 mxauto site-padding-x">
        <p className="text-body-light color-gray pb2 sm:pb1_75 md:pb1_5">We keep our pricing simple</p>
        <h2 className="home__pricing-section-heading text-header-sm mb4 md:mb3">All of our services are $90/hour to get you started on your journey</h2>
        <Image
          className="separator-arrow"
          alt=""
          src="/img/squiggle-arrow.svg"
          width={27}
          height={51}
          layout="fixed"
        />
      </section>

      {/* Impact section */}
      <section
        className="home__impact-section flex flex-col md:flex-row flex-col-reverse md:items-between justify-between items-center inner-content-max-width site-padding-x mxauto fade-in pb6"
      >
        <div className="flex flex-col px1 md:px0 md:col-5 lg:col-4">
          <h2 className="text-subheader color-black mt2 mb1_5 lg:mb3">
            We help you understand your impact.
          </h2>
          <p className="text-body color-gray mb1_5">
            We are a team of strategists, designers, and technologists who help founders run more
            sustainable businesses. We want your business to do good to the environment.
          </p>
          <div className="flex items-center">
            <figure className="pr1_5">
              <Image className="" src="/img/arrow.svg" alt="" width={42} height={42} layout="fixed" />
            </figure>
            <p className="text-body-sm color-gray mt1">
              We are using our product experience to help founders launch responsible products and
              businesses.
            </p>
          </div>
        </div>
        <div className="impact-section__image md:col-7 md:pl2_5 lg:col-6 lg:pl0">
          <Image
            src="/img/impact-illustration.svg"
            alt="Person holding a flower at the beach."
            width={592}
            height={569}
          />
        </div>
      </section>

      {/* Journey section */}
      <section
        className="home__journey-section flex flex-col md:flex-row flex-col md:items-between justify-between items-center inner-content-max-width site-padding-x mxauto fade-in"
      >
        <div className="journey-section__image md:col-7 md:pr2_5 lg:col-6 lg:pr0">
          <Image
            src="/img/journey-illustration.svg"
            alt="Two people in nature."
            width={592}
            height={569}
          />
        </div>
        <div className="flex flex-col px1 md:px0 md:col-5 lg:col-4">
          <h2 className="text-subheader color-black mt2 mb1_5 lg:mb3">
            We&rsquo;ll get you started on your journey.
          </h2>
          <p className="text-body color-gray mb1_5">
            We use research-backed methods to create clear and informative insights. We don&rsquo;t
            believe jargon or academic writing—we believe in taking action.
          </p>
          <div className="flex items-center">
            <figure className="pr1_5">
              <Image className="" src="/img/arrow.svg" alt="" width={42} height={42} layout="fixed" />
            </figure>
            <p className="text-body-sm color-gray mt1">
              We use a different type of communication to our clients to help them understand their
              impact.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

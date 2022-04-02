export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="flex flex-col">
        <div
          className="main-hero-text opacity-0 flex flex-col items-center text-center site-padding-x inner-content-max-width mxauto z-5"
        >
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb2_5">Hi, we're Seaborne.</p>
          <h1 className="text-header color-black pb3 sm:pb1_75 md:pb2_5 md:col-10">
            We're your guides to sustainable business practices.
          </h1>
          <a
            aria-label="Get in touch with Seaborne"
            className="event-contact-us button--style-primary text-button flex items-center justify-center font-500"
            href="mailto:hello@seaborne.nyc"
          >
            Get in touch
          </a>
        </div>
        <div className="hero-illustration-container opacity-0 flex justify-center">
          <img
            className="hero-illustration w100 site-padding-x z-3 r0 l0 inner-content-max-width mxauto"
            alt="Illustration of people doing outdoor activities in the mountains"
            src="img/hero-illustration.svg"
          />
        </div>
      </section>

      {/* Case studies section */}
      <section className="studies-section flex flex-col mt4">
        <div className="text-center site-padding-x">
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb1_5">Latest updates from our company</p>
          <h2 className="text-header-sm mb1_5 md:mb5 lg:mb4">See how we're making a difference</h2>
          <img 
            className="separator-arrow"
            alt="Section separator"
            src="img/squiggle-arrow.svg"
          />
        </div>

        <div className="case-study-container site-padding-x mt4 md:col-10 mxauto">
          <div className="case-study-card flex flex-row justify-between mxauto mb1_5 md:mb3">
            <figure className="bg-cover" 
              style={{
                backgroundImage: `url('img/studies/light-two/hero.jpg')`
            }}>
            </figure>
            <article className="case-study-details flex-1 flex flex-col ml_75 md:ml2">
              <p className="case-study-type text-eyebrow mb_25 md:mb_75">Case Study</p>
              <h3 className="case-study-title text-subheader md:mb_5">The Light Phone</h3>
              <p className="case-study-excerpt text-body color-gray">
                Investigating the climate impacts of a mobile phone. Building a novel checkout feature to invite customers into the sustainability conversation.
              </p>
              <a className="case-study-link text-body arrow-link color-blue pt_5 md:pt1_5" href="#">
              <img 
                className="mr_5"
                alt="Section separator"
                src="img/squiggle-arrow-right.svg"
              />
                View Case Study
              </a>
            </article>
          </div>
          <div className="case-study-card flex flex-row justify-between mxauto">
            <figure className="bg-cover" 
              style={{
                backgroundImage: `url('img/studies/light-two/hero.jpg')`
            }}>
            </figure>
            <article className="case-study-details flex-1 flex flex-col ml_75 md:ml2">
              <p className="case-study-type text-eyebrow mb_25 md:mb_75">Blog Post</p>
              <h3 className="case-study-title text-subheader md:mb_5">Trends of the Industry</h3>
              <p className="case-study-excerpt text-body color-gray">
                Luctus justo, in lectus bibendum. Ultrices sed enim, at sit egestas cursus cursus cursus. Vitae, viverra ut turpis congue sit. Cras nibh sed commodo, leo arcu amet. Cras.
              </p>
              <a className="case-study-link text-body arrow-link color-blue pt_5 md:pt1_5" href="#">
              <img 
                className="mr_5"
                alt="Section separator"
                src="img/squiggle-arrow-right.svg"
              />
                View Case Study
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Offerings section */}
      <section
        className="offerings-section bg-color-powder items-center justify-center flex flex-col relative bg-color-pink py4_5 fade-in"
      >
        <div className="inner-content-max-width mxauto z-3">
          <div className="site-padding-x mxauto">
            <div className="flex flex-col items-center text-center md:col-10 lg:col-8 mxauto">
              <p className="text-body color-gray">What we offer</p>
              <p className="text-header-sm color-black pt1_5">
                Our unique set of services that help companies of all sizes.
              </p>
            </div>

            <div className="offerings-columns-container flex flex-wrap flex-row text-center md:col-10 mxauto">
              <div className="flex flex-col items-center text-body-sm">
                <img className="mb1_5" src="img/suitcase-icon.svg" alt="Suitcase" />
                <p className="bold color-black">Corporate Assessment</p>
                <p className="color-gray">
                  Calculate your business’s carbon footprint by understanding the ins and outs of
                  your business and operations.
                </p>
              </div>

              <div className="flex flex-col items-center text-body-sm">
                <img
                  className="mb1_5"
                  src="img/supply-chain-icon.svg"
                  alt="Arrows rotating in a circle and surrounding a box"
                />
                <p className="bold color-black">Supply Chain Assessment</p>
                <p className="color-gray">
                  Calculate your product’s carbon footprint. Know the impact of your supply chain
                  and manufacturing processes.
                </p>
              </div>

              <div className="flex flex-col items-center text-body-sm">
                <img
                  className="mb1_5"
                  src="img/goal-setting-icon.svg"
                  alt="Target with an arrow in the center"
                />
                <p className="bold color-black">Goal Setting</p>
                <p className="color-gray">
                  Set sustainability goals so that your organization builds sustainability into its
                  DNA.
                </p>
              </div>

              <div className="flex flex-col items-center text-body-sm">
                <img
                  className="mb1_5"
                  src="img/web-icon.svg"
                  alt="Browser with an arrow pointing towards it"
                />
                <p className="bold color-black">Web Presence</p>
                <p className="color-gray">
                  Share the story of how your business became more sustainable. We’ll help shape
                  your narrative and build your case study site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="pricing-section text-center md:col-10 lg:col-8 mxauto site-padding-x">
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb1_5">We keep our pricing simple</p>
          <h2 className="text-header-sm ">All of our services are $90/hour to get you started on your journey</h2>
          <img 
            className="separator-arrow"
            alt="Section separator"
            src="img/squiggle-arrow.svg"
          />
      </section>

      {/* Impact section */}
      <section
        className="impact-section flex flex-col md:flex-row flex-col-reverse md:items=between justify-between items-center inner-content-max-width site-padding-x mxauto fade-in pb6"
      >
        <div className="flex flex-col px1 md:px0 md:col-5 lg:col-4">
          <h2 className="text-subheader color-black mt2 mb1_5 lg:mb3">
            We help you understand your impact.
          </h2>
          <p className="text-body color-gray mb1_5">
            We are a team of strategists, designers, and technologists who help founders run more
            sustainable businesses. We want your business to do good to the environment.
          </p>
          <div className="none md:flex flex-row">
            <div className="flex items-start">
              <img className="arrow pr2" src="img/arrow.svg" alt="Blue arrow on a light blue circle" />
            </div>
            <p className="text-body-sm color-gray mt1">
              We are using our product experience to help founders launch responsible products and
              businesses.
            </p>
          </div>
        </div>
        <div className="impact-image md:col-7 md:pl2_5 lg:col-6 lg:pl0">
          <img
            className="w100"
            src="img/impact-illustration.svg"
            alt="Illustration of person holding a flower at the beach."
          />
        </div>
      </section>

      {/* Journey section */}
      <section
        className="journey-section flex flex-col md:flex-row flex-col md:items=between justify-between items-center inner-content-max-width site-padding-x mxauto fade-in"
      >
        <div className="journey-image md:col-7 md:pr2_5 lg:col-6 lg:pr0">
          <img
            className="w100"
            src="img/journey-illustration.svg"
            alt="Illustration of two people in nature."
          />
        </div>
        <div className="flex flex-col px1 md:px0 md:col-5 lg:col-4">
          <h2 className="text-subheader color-black mt2 mb1_5 lg:mb3">
            We'll get you started on your journey.
          </h2>
          <p className="text-body color-gray mb1_5">
            We use research-backed methods to create clear and informative insights. We don’t
            believe jargon or academic writing—we believe in taking action.
          </p>
          <div className="none md:flex flex-row">
            <div className="flex items-start">
              <img className="arrow pr2" src="img/arrow.svg" alt="Blue arrow on a light blue circle" />
            </div>
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

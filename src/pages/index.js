export default function Home() {
  return (
    <main>
      <section className="flex flex-col pb8 sm:pb10">
        <div
          className="main-hero-text opacity-0 flex flex-col items-center text-center site-padding-x inner-content-max-width mxauto z-5"
        >
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb2_5">Hi, we're Seaborne.</p>
          <h1 className="text-header color-black pb2 sm:pb1_75 md:pb2_5 sm:col-8 md:col-12">
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
        <div className="hero-illustration-container opacity-0">
          <img
            className="hero-illustration absolute w100 z-3 r0 l0 inner-content-max-width mxauto"
            alt="Illustration of people doing outdoor activities in the mountains"
            src="img/hero-illustration.svg"
          />
          <img
            className="relative hero-illustration-background w100"
            alt=""
            role="presentation"
            src="img/hero-blue-background.svg"
          />
        </div>
      </section>

      <section
        className="impact-section flex flex-col sm:flex-row justify-between items-center inner-content-max-width site-padding-x mxauto fade-in pb6"
      >
        <div className="flex flex-col sm:col-4 pb3 sm:pb0">
          <h2 className="text-subheader color-black pb2 sm:pb1_75 md:pb2_5">
            We'll help you understand your impact.
          </h2>
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb2_5">
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
        <div className="impact-image sm:col-6">
          <img
            className="w100"
            src="img/impact-illustration.svg"
            alt="Illustration of person holding a flower at the beach"
          />
        </div>
      </section>

      <section
        className="journey-section flex flex-col-reverse sm:flex-row justify-between items-center inner-content-max-width site-padding-x mxauto fade-in"
      >
        <div className="journey-image sm:col-6">
          <img
            className="w100"
            src="img/journey-illustration.svg"
            alt="Illustration of two people in nature."
          />
        </div>
        <div className="flex flex-col sm:col-4 pb3 sm:pb0">
          <h2 className="text-subheader color-black pb2 sm:pb1_75 md:pb2_5">
            Let’s start on your journey.
          </h2>
          <p className="text-body color-gray sm:pb1_75 md:pb2_5">
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

      <section
        className="offerings-section items-center justify-center flex flex-col relative bg-color-pink py6 fade-in"
      >
        <div className="absolute t0 w100">
          <img className="w100" src="img/pink-background-shape-1.svg" alt="" role="presentation" />
        </div>

        <div className="pink-background-bottom-shape absolute w100">
          <img className="w100" src="img/pink-background-shape-2.svg" alt="" />
        </div>

        <div className="inner-content-max-width mxauto z-3 sm:py4 md:py6 sm:col-9">
          <div className="site-padding-x mxauto">
            <div className="flex flex-col items-center text-center">
              <p className="text-body color-gray">What we offer.</p>
              <p className="text-subheader color-black pt2 sm:pt2_5 md:pt3_5 sm:px3">
                Our unique set of services that help companies of all sizes.
              </p>
            </div>

            <div className="offerings-columns-container flex flex-wrap flex-row">
              <div className="flex flex-col items-start text-body-sm">
                <img className="pb_75 sm:pb1_75 md:pb1" src="img/suitcase-icon.svg" alt="Suitcase" />
                <p className="bold color-black md:pb1_75">Corporate Assessment</p>
                <p className="color-gray">
                  Calculate your business’s carbon footprint by understanding the ins and outs of
                  your business and operations.
                </p>
              </div>

              <div className="flex flex-col items-start text-body-sm">
                <img
                  className="pb_75 sm:pb1_75 md:pb1"
                  src="img/supply-chain-icon.svg"
                  alt="Arrows rotating in a circle and surrounding a box"
                />
                <p className="bold color-black md:pb1_75">Supply Chain Assessment</p>
                <p className="color-gray">
                  Calculate your product’s carbon footprint. Know the impact of your supply chain
                  and manufacturing processes.
                </p>
              </div>

              <div className="flex flex-col items-start text-body-sm">
                <img
                  className="pb_75 sm:pb1_75 md:pb1"
                  src="img/goal-setting-icon.svg"
                  alt="Target with an arrow in the center"
                />
                <p className="bold color-black md:pb1_75">Goal Setting</p>
                <p className="color-gray">
                  Set sustainability goals so that your organization builds sustainability into its
                  DNA.
                </p>
              </div>

              <div className="flex flex-col items-start text-body-sm">
                <img
                  className="pb_75 sm:pb1_75 md:pb1"
                  src="img/web-icon.svg"
                  alt="Browser with an arrow pointing towards it"
                />
                <p className="bold color-black md:pb1_75">Web Presence</p>
                <p className="color-gray">
                  Share the story of how your business became more sustainable. We’ll help shape
                  your narrative and build your case study site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="contact-section flex flex-col sm:flex-row justify-between items-center inner-content-max-width mxauto contact-page sm:pt4 sm:pb5 site-padding-x fade-in"
      >
        <div className="flex flex-col col-12 sm:col-5 pb3 pt6 sm:pb0 items-center sm:items-start">
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb2_5">Ready to use less?</p>
          <p className="text-subheader color-black pb2 sm:pb1_75 md:pb2_5">hello@seaborne.nyc</p>
          <a
            aria-label="Get in touch with Seaborne"
            className="event-contact-us button--style-primary text-button flex items-center justify-center"
            href="mailto:hello@seaborne.nyc"
          >
            Get in touch
          </a>
        </div>
        <div className="sm:col-6 pt6 sm:pt0">
          <img
            className="w100"
            src="img/contact-illustration.svg"
            alt="Illustration of person inside a large microphone yelling into an ear."
          />
        </div>
      </section>
    </main>
  );
}

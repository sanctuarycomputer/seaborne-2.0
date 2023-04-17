import Link from 'next/link';
import Image from 'next/image';
import CaseStudyCard from 'components/CaseStudyCard';

export default function Home() {
  return (
    <main className="home">
      {/* Hero section */}
      <section className="home__hero-section flex flex-col">
        <div
          className="home__hero-section-text opacity-0 flex flex-col items-center text-center site-padding-x inner-content-max-width mxauto z-5"
        >
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb2_5">Hi, we&rsquo;re Seaborne</p>
          <h1 className="text-header-sm color-black pb3 sm:pb1_75 md:pb2_5 md:col-10">
            We&apos;ll guide your brand toward more sustainable business practices
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
      <section className="home__studies-section flex flex-col mt4">
        <div className="text-center site-padding-x">
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb1_5">Our work integrates analysis, strategy and design</p>
          <h2 className="text-header-sm mb1_5 md:mb5 lg:mb4">See our strategies in action</h2>
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
            type="Case Study"
            image="img/studies/light-two/hero.jpeg"
            title="The Light Phone II"
            link="/studies/light-two"
            description="Investigating the climate impacts of a mobile phone. Building a novel checkout feature to invite customers into the sustainability conversation."
          />

          <CaseStudyCard
            type="Case Study"
            image="img/studies/milli-mylk/hero.jpg"
            title="Milli Mylk"
            link="/studies/milli-mylk"
            description="Quantifying the environmental impacts of making a new plant-based mylk. Guiding founders toward attainable climate actions today with a long-term strategy for improvements."
          />
        </div>
      </section>

      {/* Offerings section */}
      <section
        className="home__offerings-section bg-color-powder items-center justify-center flex flex-col relative bg-color-pink py4_5"
      >
        <div className="inner-content-max-width mxauto z-3">
          <div className="site-padding-x mxauto">
            <div className="flex flex-col items-center text-center md:col-10 lg:col-8 mxauto">
              <p className="text-body-light color-gray md:font-300">What we offer</p>
              <p className="text-header-sm color-black pt1_5">
                Build a better brand through science backed research, strategy and storytelling
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
                  Prioritize your sustainability efforts by mapping your emissions. Build toward carbon neutrality with measurement, reduction and mitigation.
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
                <p className="bold color-black">Lifecycle Analysis</p>
                <p className="color-gray">
                  Engage your team and equip your vendors with product lifecycle data to build a brand that that does better by the planet.
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
                <p className="bold color-black">Actionable Strategies</p>
                <p className="color-gray">
                  Boost brand reputation and investor confidence by putting analysis into action. We&apos;ll help identify your most valuable opportunities.
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
                <p className="bold color-black">Storytelling & Content</p>
                <p className="color-gray">
                  Build superfans & brand loyalists by thoughtfully sharing your journey with stakeholders! We can help shape that narrative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="home__pricing-section text-center md:col-10 lg:col-8 mxauto site-padding-x">
        <p className="text-body-light color-gray pb2 sm:pb1_75 md:pb1_5">We keep our pricing simple</p>
        <h2 className="home__pricing-section-heading text-header-sm mb1_5">All of our services are $130/hour to get you started on your journey</h2>
        <p className="text-body-light color-gray mb4 md:mb3">
          Each consumer product that we analyze incurs roughly <code>80 to 120 hours</code> of work (pending supply chain complexity), and we work with our clients to craft a budget and timeline to meet the evolving needs of their business.
        </p>
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
        className="home__impact-section flex flex-col md:flex-row flex-col-reverse md:items-between justify-between items-center inner-content-max-width site-padding-x mxauto pb6"
      >
        <div className="flex flex-col px1 md:px0 md:col-5 lg:col-4">
          <h2 className="text-subheader color-black mt2 mb1_5 lg:mb3">
            A powerful point of difference.
          </h2>
          <p className="text-body color-gray mb1_5">
            We&apos;re a small group of sustainability experts who make it easy for your team to ship better products than your competitors.
          </p>
          <div className="flex items-center">
            <figure className="pr1_5">
              <Image className="" src="/img/arrow.svg" alt="" width={42} height={42} layout="fixed" />
            </figure>
            <p className="text-body-sm color-gray mt1">
              Launch new product offerings and environmental intiatives with confidence and care.
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
        className="home__journey-section flex flex-col md:flex-row flex-col md:items-between justify-between items-center inner-content-max-width site-padding-x mxauto"
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
            We&apos;ll do the heavy lifting.
          </h2>
          <p className="text-body color-gray mb1_5">
            We use research-backed methods to create clear and informative insights, packaged in an easy to understand report, highlighting actionable insights and opportunities.
          </p>
          <div className="flex items-center">
            <figure className="pr1_5">
              <Image className="" src="/img/arrow.svg" alt="" width={42} height={42} layout="fixed" />
            </figure>
            <p className="text-body-sm color-gray mt1">
              Our expert team will understand the complexity of your supply chain, allowing you to focus on running your business.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

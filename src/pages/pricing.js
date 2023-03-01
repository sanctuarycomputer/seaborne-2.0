import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ForestImg from '../../public/img/pricing/forest.jpg'
import EarthImg from '../../public/img/pricing/earth.jpg'
import MushroomImg from '../../public/img/pricing/mushroom.jpg'

const FAQBlock = ({
  title,
  description
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="callout-card-border text-left mb1">
      <button className="flex justify-between w100 p1_5" onClick={() => setExpanded(!expanded)}>
        <p className="text-body-sm font-600 text-left" >
          {title}
        </p>

        <p className="text-body-light">
          {expanded ? "-" : "+"}
        </p>
      </button>

      {expanded && <p className="text-body-sm color-gray px1_5 pb1_5">{description}</p>}
    </div>
  );
}

export default function Pricing() {
  return (
    <main className="pricing">
      {/* Page Metadata */}
      <Head>
        <title key="title">Seaborne &mdash; Pricing</title>
        <meta
          name="description"
          content="We work with our clients to meet the evolving needs of their business."
          key="meta__desc"
        />
        <meta property="og:title" content="Seaborne — Pricing" key="og__title" />
        <meta name="twitter:title" content="Seaborne — Pricing" key="twitter__title" />
        <meta
          name="twitter:description"
          content="We work with our clients to meet the evolving needs of their business."
          key="twitter__desc"
        />
      </Head>

      {/* Hero section */}
      <section className="about__hero-section site-padding-x flex pb4_5 md:pb8 lg:pb10 inner-content-max-width mxauto text-center">
        <div className="col-12 md:col-10 mxauto">
          <p className="text-body color-gray mb1_5 md:mb2">
            Pricing
          </p>

          <h2 className="text-header-sm mb1_5 md:mb4 lg:mb8 color-black">
            We work with our clients to meet the evolving needs of their business
          </h2>

          <Image
            className="separator-arrow"
            alt=""
            src="/img/squiggle-arrow.svg"
            width={27}
            height={51}
            layout="fixed"
          />

          <h3 className="text-subheader-alt mb1 color-black mt1_5 md:mt4 lg:mt8">
            How we break it down.
          </h3>

          <code className="text-body color-blue inline-block mb1 lg:mb2 p1">
            Each consumer product that we analyze incurs roughly 80 - 120 hours of work.
          </code>
        </div>
      </section>

      {/* Main content section */}
      <section className="about__content-section site-padding-x md:pb2_5 lg:mb5_75 inner-content-max-width mxauto">
        <div className="clearfix mb2 md:mb8">
          <div className="col col-12 md:col-6 md:pr1_5 pb1_5 md:pb0">
            <div>
              <p className="text-eyebrow color-blue uppercase pb_5">Phase 1</p>
              <h2 className="text-subheader-alt pb1">Discovery & Research</h2>
              <p className="text-body-light color-gray">This is a short, focused phase where we learn everything we can about your business’s supply chain, manufacturing, and operations from you and your team.</p>
            </div>
          </div>
          <div className="col col-12 md:col-6 md:pl1_5">
            <Image
              className="separator-arrow"
              alt=""
              src={ForestImg}
              width={ForestImg.width}
              height={ForestImg.height}
            />
          </div>
        </div>

        <div className="clearfix mb2 md:mb8">
          <div className="none md:block col col-12 md:col-6 md:pr1_5">
            <Image
              className="separator-arrow"
              alt=""
              src={EarthImg}
              width={EarthImg.width}
              height={EarthImg.height}
            />
          </div>
          <div className="col col-12 md:col-6 md:pl1_5 pb1_5 md:pb0">
            <div>
              <p className="text-eyebrow color-blue uppercase pb_5">Phase 2</p>
              <h2 className="text-subheader-alt pb1">Synthesis & Reporting</h2>
              <p className="text-body-light color-gray">We zoom in on all of the lifecycle steps for your products and processes, measure their carbon footprint, recyclability, end of life concerns, and more. You get meaningful numbers as well as actionable insights.</p>
            </div>
          </div>
          <div className="md:none col col-12 md:col-6 md:pr1_5">
            <Image
              className="separator-arrow"
              alt=""
              src={EarthImg}
              width={EarthImg.width}
              height={EarthImg.height}
            />
          </div>
        </div>

        <div className="clearfix mb2 md:mb8">
          <div className="col col-12 md:col-6 md:pr1_5 pb1_5 md:pb0">
            <div>
              <p className="text-eyebrow color-blue uppercase pb_5">Phase 3</p>
              <h2 className="text-subheader-alt pb1">Strategy</h2>
              <p className="text-body-light color-gray">We work with your team to develop a specific plan to start taking action. Based on your values, outlined commitments and goals, we will together develop an actionable mitigation plan that directly builds off of the opportunities brief and technical report.</p>
            </div>
          </div>
          <div className="col col-12 md:col-6 md:pl1_5">
            <Image
              className="separator-arrow"
              alt=""
              src={MushroomImg}
              width={MushroomImg.width}
              height={MushroomImg.height}
            />
          </div>
        </div>
      </section>

      {/* Deliverables section */}
      <section className="py4 md:py8 bg-color-powder text-center mxauto site-padding-x flex flex-col items-center">
        <p className="col-12 md:col-10 lg:col-8 text-body-light color-gray mb1_5">What you get</p>
        <h2 className="col-12 md:col-10 lg:col-8 text-subheader-alt mb6">We like to leave you with some meaningful documents, data and insights</h2>
        <div className="clearfix col-12">
          <div className="col col-12 md:col-4 md:pr1_5 pb1_5 md:pb0">
            <Image
              alt=""
              src="/img/pricing/tech-report.svg"
              width={72}
              height={72}
              layout="fixed"
            />
            <p className="text-body-sm font-600 pt2">A Technical Report</p>
            <p className="text-body-sm color-gray">Calculate your product’s carbon footprint. Know the impact of your supply chain and manufacturing processes.</p>
          </div>
          <div className="col col-12 md:col-4 md:pr1_5 pb1_5 md:pb0">
            <Image
              alt=""
              src="/img/pricing/opportunities-brief.svg"
              width={72}
              height={72}
              layout="fixed"
            />
            <p className="text-body-sm font-600 pt2">An Opportunities Brief</p>
            <p className="text-body-sm color-gray">A a companion document that outlines the various opportunities available to your brand to reduce environmental impacts.</p>
          </div>
          <div className="col col-12 md:col-4 md:pr1_5 pb1_5 md:pb0">
            <Image
              alt=""
              src="/img/pricing/mitigation-plan.svg"
              width={72}
              height={72}
              layout="fixed"
            />
            <p className="text-body-sm font-600 pt2">A Mitigation Plan</p>
            <p className="text-body-sm color-gray">We will set you up with a plan that uses our tools and expertise to execute on some of your immediate goals.</p>
          </div>
        </div>
      </section>

      {/* Additional Offerings section */}
      <section className="py4 md:py8 text-center mxauto site-padding-x flex flex-col items-center inner-content-max-width">
        <p className="col-12 md:col-10 lg:col-8 text-body-light color-gray mb1_5">Additional Offerings</p>
        <h2 className="col-12 md:col-10 lg:col-8 text-subheader-alt mb6">We are happy to help you share your story with your audience</h2>
        
        <div className="clearfix col-12">
          <div className="col col-12 md:col-6 md:pr1_5 pb1_5 md:pr0">
            <div className="callout-card-border p3">
              <h2 className="text-subheader-alt pb1">Social Media<br /> Storytelling</h2>
              <code className="text-body-sm p_5 inline-block">$12,600 - $25,200</code>
              <p className="text-body-sm color-gray pt3">Get continuous marketing and storytelling support to communicate your sustainable product journey to your audience through various social media channels.</p>
            </div>

          </div>
          <div className="col col-12 md:col-6 md:pl1_5 pb1_5 md:pl0">
            <div className="callout-card-border p3">
              <h2 className="text-subheader-alt pb1">Build a Marketing<br /> Page</h2>
              <code className="text-body-sm p_5 inline-block">$12,600 - $25,200</code>
              <p className="text-body-sm color-gray pt3">Let us help you showcase your sustainable efforts with a dedicated webpage that shares your product&apos;s eco-friendly journey and provides transparency into its life cycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py4 text-center mxauto site-padding-x flex flex-col items-center inner-content-max-width">
        <p className="col-12 md:col-10 lg:col-8 text-body-light color-gray mb1_5">Need more info</p>
        <h2 className="col-12 md:col-10 lg:col-8 text-subheader-alt mb6">Frequently Asked Questions</h2>
        
        <div className="clearfix col-12">
          <FAQBlock 
            title="How much do you charge?" 
            description="We charge $130 per hour, or $5,200 per team member’s workweek. A team member's full workweek is a Person-Week, which is basically a 40-hour block of time. You pay for the time we (actually) spend working on your product rather than a (made up) fixed price. One thing to note, Person-Weeks is not the length of the project. We use Person Weeks because in some instances more than one team member may be actively working on this project." 
          />
          <FAQBlock 
            title="What is the payment schedule?" 
            description="We'll invoice you on the 1st of every month during the duration of the project for the work that's been done in the previous month." 
          />
          <FAQBlock 
            title="What would our collaboration look like?" 
            description="To ship your project on time and within budget, we'll need short feedback loops. This means we'll connect with you at least once a week. This also means we'll make tough decisions together—like cutting scope or extending a deadline. What impacts a project's timeline most is how quickly both of our teams absorb new information, orient, decide, and act." 
          />
          <FAQBlock 
            title="Do we have to commit to every phase?" 
            description="No, you can decide which phases you’d like to commit to based on where you’re at, and your needs! The only phases that are bundled up are Discovery & Research with Synthesis & Reporting, and Strategy. " 
          />
          <FAQBlock 
            title="What if we have a designer and developer in-house?" 
            description="We will happily help onboard and orient any of your in-house designers or developers to our work at no charge, so that they can design a /sustainability page for your site. " 
          />
        </div>
      </section>



    </main>
  );
}

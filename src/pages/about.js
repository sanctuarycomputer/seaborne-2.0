export default function About() {
  return (
    <main className="about">

      {/* Hero section */}
      <section className="about__hero-section site-padding-x flex pb4_5 md:pb8 lg:pb10 inner-content-max-width mxauto">
        <div className="col-12 md:col-10 mxauto">
          <p className="text-body color-gray mb1_5 md:mb2">
            How we work
          </p>

          <h2 className="text-subheader-alt mb1_5 md:mb4 lg:mb12 color-black">
            We work with companies that want to take meaningful action on contemporary social and environmental issues, guiding them through each step of the way from strategy to storytelling. 
          </h2>

          <img 
            className="separator-arrow"
            alt="Section separator"
            src="img/squiggle-arrow.svg"
          />
        </div>
      </section>

      {/* Main content section */}
      <section className="about__content-section site-padding-x md:pb2_5 lg:mb5_75 inner-content-max-width mxauto">
        <div className="flex justify-center">

          <div className="col-12 md:col-10 lg:col-7">
            <div className="mb4_5 md:mb6">
              <h2 className="text-subheader-alt mb_75 color-black">
                Amet duis lacus morbi sit nisl quisque.
              </h2>

              <p className="color-gray text-body-light">
                What does “sustainability” even mean? As it turns out, not much. That’s why we work with our clients to align on their own custom definition that is equally impactful and resonant. All of our engagements start with a value recognition exercise that prioritizes issues with the greatest stakes.
              </p>
            </div>
            <div className="mb4_5 md:mb6">
              <h2 className="text-subheader-alt mb_75 color-black">
                Amet duis lacus morbi sit nisl quisque.
              </h2>

              <p className="color-gray text-body-light">
                What does “sustainability” even mean? As it turns out, not much. That’s why we work with our clients to align on their own custom definition that is equally impactful and resonant. All of our engagements start with a value recognition exercise that prioritizes issues with the greatest stakes.
              </p>
            </div>
            <div className="mb4_5 md:mb6">
              <h2 className="text-subheader-alt mb_75 color-black">
                Amet duis lacus morbi sit nisl quisque.
              </h2>

              <p className="color-gray text-body-light">
                What does “sustainability” even mean? As it turns out, not much. That’s why we work with our clients to align on their own custom definition that is equally impactful and resonant. All of our engagements start with a value recognition exercise that prioritizes issues with the greatest stakes.
              </p>
            </div>
            <div className="mb4_5 md:mb6">
              <h2 className="text-subheader-alt mb_75 color-black">
                Amet duis lacus morbi sit nisl quisque.
              </h2>

              <p className="color-gray text-body-light">
                What does “sustainability” even mean? As it turns out, not much. That’s why we work with our clients to align on their own custom definition that is equally impactful and resonant. All of our engagements start with a value recognition exercise that prioritizes issues with the greatest stakes.
              </p>
            </div>            
          </div>

          <div className="none lg:block lg:col-3 lg:pl3">
            <div className="about__content-section-callout-card callout-card p2">
              <p className="text-eyebrow mb_25 md:mb_75">CTA to Link</p>
              <p className="text-body-light mb1_5">
                <span className="color-black">Click here to find out more. </span>
                <span className="color-gray">Praesent nibh egestas egestas.</span>
              </p>
              <a className="text-body-sm arrow-link color-blue pt_5 md:pt1_5" href="#">
                <img 
                  className="mr_5"
                  alt="Section separator"
                  src="img/squiggle-arrow-right.svg"
                />
                  CTA Linkout
              </a>
            </div>
          </div>          

        </div>
      </section>

      {/* Pricing section */}
      <section className="about__pricing-section bg-color-powder text-center mxauto site-padding-x flex flex-col items-center">
          <p className="col-12 md:col-10 lg:col-8 text-body-light color-gray mb1_5">We keep our pricing simple</p>
          <h2 className="col-12 md:col-10 lg:col-8 text-subheader-alt ">All of our services are $90/hour to get you started on your journey</h2>
      </section>
    </main>
  );
}

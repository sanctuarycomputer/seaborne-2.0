export default function About() {
  return (
    <main>
      <section className="about-hero-section site-padding-x flex pb4_5 md:pb8 lg:pb10 inner-content-max-width mxuato">
        <div className="col-12 md:col-10 mxauto">
          <p className="text-body color-gray mb1_5 md:mb2">
            How we work
          </p>

          <h2 className="text-subheader-alt about-hero-headline mb1_5 md:mb4 lg:mb12 color-black">
            We work with companies that want to take meaningful action on contemporary social and environmental issues, guiding them through each step of the way from strategy to storytelling. 
          </h2>

          <img 
            className="separator-arrow"
            alt="Section separator"
            src="img/squiggle-arrow.svg"
          />
        </div>
      </section>

      <section className="about-content-section site-padding-x md:pb2_5 lg:mb5_75">
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
            <div className="callout">
              <p className="text-eyebrow mb_25 md:mb_75">CTA to Link</p>
              <p className="text-body-light">
                <span className="color-black">Click here to find out more.</span>
                <span className="color-gray">Praesent nibh egestas egestas.</span>
              </p>
              <a className="text-body arrow-link color-blue pt_5 md:pt1_5" href="#">
                <img 
                  className="mr_5"
                  alt="Section separator"
                  src="img/squiggle-arrow-right.svg"
                />
                  View Case Study
              </a>
            </div>
          </div>          

        </div>
      </section>

      <section className="about-pricing-section bg-color-powder text-center md:col-10 lg:col-8 mxauto site-padding-x">
          <p className="text-body-light color-gray pb2 sm:pb1_75 md:pb1_5">We keep our pricing simple</p>
          <h2 className="text-header-sm ">All of our services are $90/hour to get you started on your journey</h2>
          <img 
            className="separator-arrow"
            alt="Section separator"
            src="img/squiggle-arrow.svg"
          />
      </section>
    </main>
  );
}

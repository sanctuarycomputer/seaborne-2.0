export default function About() {
  return (
    <main>
      <section className="about-hero-section site-padding-x flex">
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

      <section className="about-content-section site-padding-x flex">
        <div className="col-12 md:col-10 mxauto">

          <div className="">
            <h2 className="text-subheader-alt color-black">
              Amet duis lacus morbi sit nisl quisque.
            </h2>

            <p className="color-gray text-body">
              What does “sustainability” even mean? As it turns out, not much. That’s why we work with our clients to align on their own custom definition that is equally impactful and resonant. All of our engagements start with a value recognition exercise that prioritizes issues with the greatest stakes.
            </p>
          </div>
          <div className="">
            <h2 className="text-subheader-alt color-black">
              Amet duis lacus morbi sit nisl quisque.
            </h2>

            <p className="color-gray text-body">
              What does “sustainability” even mean? As it turns out, not much. That’s why we work with our clients to align on their own custom definition that is equally impactful and resonant. All of our engagements start with a value recognition exercise that prioritizes issues with the greatest stakes.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

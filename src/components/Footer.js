export default function Footer() {
  return (
    // <footer className="footer pt6 sm:py1_75 mt3_5 sm:mt5_75 md:pt3_5 md:pb2_5">
    <footer className="footer">
      
      {/* <div className="inner-content-max-width mxauto">
        <div className="flex flex-col-reverse sm:flex-row justify-between site-padding-x mxauto">
          <div className="flex flex-row justify-center sm:justify-start sm:col-6 pb1_75 sm:pb0 sm:pt1_75">
            <div className="footer-detail-container flex items-start">
              <p className="footer-detail-text color-gray text-footer">
                Seaborne is a sister company to
                <a
                  aria-label="Visit Sanctuary Computer"
                  href="http://www.sanctuary.computer"
                  className="button--style-no-style color-gray"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Sanctuary Computer</a
                >
              </p>
              <img src="/img/seaborne-icon.svg" alt="Seaborne icon" />
            </div>
          </div>
          <div
            className="footer-links flex flex-col sm:flex-row items-center sm:justify-end color-gray text-footer sm:col-6 pb6 sm:py1_75 ssm:mt5_75"
          >
            <a
              aria-label="Visit Seaborne's Twitter"
              href="https://twitter.com/seaborne_nyc"
              className="button--style-no-style color-gray pb1_75 sm:pb0 sm:pr2_5"
              target="_blank"
              rel="noopener noreferrer"
              >Twitter</a
            >
            <a
              aria-label="Visit Contact page"
              href="mailto:hello@seaborne.nyc"
              className="event-contact-us button--style-no-style color-gray"
              >Contact</a
            >
          </div>
        </div>
      </div> */}

      <section
        className="contact-section flex flex-col justify-between items-center inner-content-max-width mxauto py8 sm:pt4 sm:pb5 site-padding-x fade-in"
      >
        <div className="flex flex-col col-12 sm:col-5 items-center sm:items-start">
          <p className="text-body color-gray pb2 sm:pb1_75 md:pb2_5">Ready to use less?</p>
          <p className="text-subheader email-link color-black pb2 sm:pb1_75 md:pb2_5">hello@seaborne.nyc</p>
          <a
            aria-label="Get in touch with Seaborne"
            className="event-contact-us button--style-primary text-button flex items-center justify-center"
            href="mailto:hello@seaborne.nyc"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section
        className="nav-section flex flex-col md:flex-row justify-between items-center inner-content-max-width mxauto pb2 site-padding-x"
      >
        <p className="pb2 text-footer color-gray">
          Seaborne is a sister company to 
          <a
            aria-label="Visit Sanctuary Computer"
            href="http://www.sanctuary.computer"
            className="color-gray"
            target="_blank"
            rel="noopener noreferrer"
          > Sanctuary Computer
          </a>
        </p>
        <nav>
          <a className="text-footer color-gray underline" aria-label="Our Process" href="/about">Our Process</a>
          <a className="text-footer color-gray underline" aria-label="Case Study" href="/studies">Case Study</a>
          <a className="text-footer color-gray underline" aria-label="View Blogs" href="/studies">View Blog</a>
          <a
            aria-label="Visit Seaborne's Twitter"
            href="https://twitter.com/seaborne_nyc"
            className="text-footer color-gray underline"
            target="_blank"
            rel="noopener noreferrer"
            >Twitter</a
            >
        </nav>
      </section>      
      
    </footer>
  );
}

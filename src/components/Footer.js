export default function Footer() {
  return (
    <footer className="footer">
      <section
        className="footer__contact-section flex flex-col justify-between items-center inner-content-max-width mxauto py8 site-padding-x fade-in"
      >
        <div className="flex flex-col col-12 sm:col-5 items-center">
          <p className="text-body-light color-gray pb2 sm:pb1_75 md:pb2_5">Ready to use less?</p>
          <p className="text-subheader footer__contact-section__email-link color-black pb2 sm:pb1_75 md:pb2_5">hello@seaborne.nyc</p>
          <a
            aria-label="Get in touch with Seaborne"
            className="button--style-primary text-body flex items-center justify-center"
            href="mailto:hello@seaborne.nyc"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section
        className="flex flex-col md:flex-row justify-between md:justify-center items-center inner-content-max-width mxauto pb2 md:pb2_5 site-padding-x text-center"
      >
        <p className="pb2 md:pb0 md:mr2 text-footer color-gray">
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
        <nav className="footer__nav-section">
          <a className="text-footer color-gray underline" aria-label="Our Process" href="/about">Our Process</a>
          <a className="text-footer color-gray underline" aria-label="Case Study" href="/studies">Case Studies &amp; Blog Posts</a>
          <a
            aria-label="Visit Seaborne's Twitter"
            href="https://twitter.com/seaborne_nyc"
            className="text-footer color-gray underline"
            target="_blank"
            rel="noopener noreferrer"
            >Twitter
          </a>
        </nav>
      </section>
    </footer>
  );
}

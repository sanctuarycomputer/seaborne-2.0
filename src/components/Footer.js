import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <section
        className="footer__contact-section flex flex-col justify-between items-center inner-content-max-width mxauto py8 site-padding-x"
      >
        <div className="flex flex-col col-12 sm:col-5 items-center">
          <p className="text-body-light color-gray pb2 sm:pb1_75 md:pb2_5">Ready to use less?</p>
          <p className="text-subheader footer__contact-section__email-link color-black pb2 sm:pb1_75 md:pb2_5">hello@seaborne.nyc</p>
          <a
            aria-label="Get in touch with Seaborne"
            className="button--style-primary text-body flex items-center justify-center"
            href="mailto:hello@seaborne.nyc"
            onClick={() => window.fbq && window.fbq('track', 'Contact')}
          >
            Email us
          </a>
        </div>
      </section>

      <section
        className="flex flex-col md:flex-row justify-between md:justify-center items-center inner-content-max-width mxauto pb2 md:pb2_5 site-padding-x text-center"
      >
        <p className="pb2 md:pb0 md:mr2 text-footer color-gray">
          Seaborne is a member of
          <a
            aria-label="Visit garden3d"
            href="http://www.garden3d.net"
            className="color-gray text-footer"
            target="_blank"
            rel="noopener noreferrer"
          > garden3d.net
          </a>
        </p>
        <nav className="footer__nav-section">
          <Link href="/about">
            <a className="text-footer color-gray underline" aria-label="Our Process">Our Process</a>
          </Link>
          <Link href="/pricing">
            <a className="text-footer color-gray underline" aria-label="Pricing">Pricing</a>
          </Link>
          <Link href="/studies">
            <a className="text-footer color-gray underline" aria-label="Our Work">Our Work & Writing</a>
          </Link>
          <Link href="https://twitter.com/seaborne_nyc">
            <a
              aria-label="Visit Seaborne's Twitter"
              className="text-footer color-gray underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </Link>

        </nav>
      </section>
    </footer>
  );
}

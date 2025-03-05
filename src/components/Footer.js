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
            onClick={() => {
              window.fbq && window.fbq('track', 'Contact');
              window.lintrk && window.lintrk('track', { conversion_id: 12551081 });
              window.gtag && gtag('event', 'conversion', {'send_to': 'AW-557434647/TZP6CIGC75EYEJeO54kC'});
            }}
          >
            Email us
          </a>
        </div>
      </section>

      <nav className="flex flex-col md:flex-row w-full justify-between items-center mxauto pb2 md:pb2_5 px2 text-center footer__nav-section">
        <ul className="flex flex-row footer__nav-section-list-left">
          <li>
            <Link href="/about">
              <a className="text-footer color-gray underline" aria-label="Our Process">Our Process</a>  
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className="text-footer color-gray underline" aria-label="Pricing">Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/studies">
              <a className="text-footer color-gray underline" aria-label="Our Work">Our Work & Writing</a>
            </Link>
          </li>
          <li>
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
          </li>
        </ul>
        <ul className="mt1 md:mt0">
          <li className="footer__g3d-link pb2 md:pb0 md:mr2 text-footer color-gray">
            <span>A proud member of</span>
            <Link href="http://www.garden3d.net">
            <a
              aria-label="Visit garden3d"
              className="color-gray text-footer underline ml_25"
              target="_blank"
              rel="noopener noreferrer"
            >
              garden3d
            </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

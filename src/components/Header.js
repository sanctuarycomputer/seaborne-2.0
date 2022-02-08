export default function Header() {
  return (
    <header
      className="header site-padding-x inner-content-max-width mxauto flex justify-between items-center flex-row pt1"
    >
      <img className="Seaborne logo" src="/img/seaborne-logo.svg" alt="Seaborne logo" />
      <a
        aria-label="Get in touch with Seaborne"
        href="mailto:hello@seaborne.nyc"
        className="event-contact-us button--style-blue-border nav-button flex items-center"
      >
        Get in touch
      </a>
    </header>
  );
}

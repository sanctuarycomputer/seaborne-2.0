export default function Header() {
  return (
    <header
      className="header mxauto flex justify-between items-center flex-row pt1 px1_5 py1_5 md:py2"
    >
      <a href="/">
        <img className="Seaborne logo" src="/img/seaborne-logo.svg" alt="Seaborne logo" />
      </a>
      
      <button className="nav-toggle flex flex-col md:none bg-color-transparent">
        <span></span>
        <span></span>
      </button>

      <nav className="none md:flex flex-row items-center text-body-sm">
        <a href="/about" className="color-gray">How we work</a>
        <a href="/studies" className="color-gray">Case Study</a>
        <a href="/studies" className="color-gray">View Blog</a>
        <a
          aria-label="Get in touch with Seaborne"
          href="mailto:hello@seaborne.nyc"
          className="event-contact-us button--style-blue-border nav-button flex items-center"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

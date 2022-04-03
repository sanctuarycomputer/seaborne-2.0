import {useState, useEffect} from "react";

export default function Header() {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  useEffect(function mount() {
    if (isMobileNavActive) {
      // When mobile nav is active, body becomes fixed
      document.body.style.position = 'fixed';  
    } else {
      document.body.style.position = null;
    }
  });
  
  return (
    <header
      className="header z-overlay relative"
    >
      <div className="desktop-nav-container mxauto flex justify-between items-center flex-row pt1 px1_5 py1_5 md:py2">
        <a 
          href="/"
          rel="noopener noreferrer"
          aria-label="Link to homepage"
        >
          <img className="Seaborne logo" src="/img/seaborne-logo.svg" alt="Seaborne logo" />
        </a>
        
        <button 
          className={`nav-toggle flex flex-col md:none bg-color-transparent ${isMobileNavActive ? "mobile-nav-active" : ""}`}
          onClick={handleMobileNavToggle}
        >
          <span className="transition"></span>
          <span className="transition"></span>
        </button>

        <nav className="desktop-nav none md:flex flex-row items-center text-body-sm">
          <a href="/about" className="color-gray">How we work</a>
          <a href="/studies" className="color-gray">Case Studies &amp; Blog Posts</a>
          <a
            aria-label="Get in touch with Seaborne"
            href="mailto:hello@seaborne.nyc"
            className="event-contact-us button--style-blue-border nav-button flex items-center"
          >
            Get in touch
          </a>
        </nav>
      </div>

      <div 
        className={`mobile-nav-container absolute pt3 px1_5 bg-color-white w100 transition-longer opacity-0 hidden z-0 ${isMobileNavActive ? "active" : ""}`}
      >
        <nav 
          className={`none mobile-nav flex-col text-header-sm transition-longer ${isMobileNavActive ? "active" : ""}`}
        >
          <a href="/about" className="color-gray">How we work</a>
          <a href="/studies" className="color-gray">Case Studies &amp; Blog Posts</a>
          <a
            aria-label="Get in touch with Seaborne"
            href="mailto:hello@seaborne.nyc"
            className="color-blue"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

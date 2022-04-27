import {useState, useEffect} from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  useEffect(function mount() {
    if (isMobileNavActive) {
      // When mobile nav is active, body becomes fixed to avoid scrolling
      document.body.style.position = 'fixed';  
    } else {
      document.body.style.position = null;
    }
  });
  
  return (
    <header
      className="header z-overlay relative"
    >
      <div className="header__nav-container--desktop mxauto flex justify-between items-center flex-row pt1 px1_5 py1_5">
        <Link href="/">
          <a 
            rel="noopener noreferrer"
            aria-label="Homepage"
            className="header__logo-container block"
          >
            <Image className="Seaborne logo" src="/img/seaborne-logo.svg" alt="Seaborne logo" width={100} height={19} layout="responsive" />
          </a>
        </Link>
        
        <button 
          className={`header__nav-toggle flex flex-col md:none bg-color-transparent ${isMobileNavActive ? "mobile-nav-active" : ""}`}
          onClick={handleMobileNavToggle}
        >
          <span className="transition"></span>
          <span className="transition"></span>
        </button>

        <nav className="header__nav--desktop none md:flex flex-row items-center text-body-sm">
          <Link href="/about">
            <a className="color-gray" aria-label="Our Process">How we work</a>
          </Link>
          <Link href="/studies">
            <a className="color-gray" aria-label="Case Studies and Writing">Studies &amp; Writing</a>
          </Link>
          <Link href="mailto:hello@seaborne.nyc">
            <a
              aria-label="Get in touch with Seaborne"
              className="button--style-blue-border nav-button flex items-center"
            >          
              Get in touch
            </a>
          </Link>
        </nav>
      </div>

      <div 
        className={`header__nav-container--mobile absolute pt3 px1_5 bg-color-white w100 transition-longer opacity-0 hidden z-0 ${isMobileNavActive ? "active" : ""}`}
      >
        <nav 
          className={`none header__nav--mobile flex-col text-header-sm transition-longer ${isMobileNavActive ? "active" : ""}`}
        >
          <Link href="/about">
            <a onClick={handleMobileNavToggle} className="color-gray" aria-label="Our Process">How we work</a>
          </Link>
          <Link href="/studies">
            <a onClick={handleMobileNavToggle} className="color-gray" aria-label="Case Studies and Writing">Studies &amp; Writing</a>
          </Link>
          <Link href="mailto:hello@seaborne.nyc">
            <a onClick={handleMobileNavToggle} 
              aria-label="Get in touch with Seaborne"
              className="color-blue"
            >
              Get in touch
          </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

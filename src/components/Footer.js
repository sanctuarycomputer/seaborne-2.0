export default function Footer() {
  return (
    <footer className="footer pt6 sm:py1_75 mt3_5 sm:mt5_75 md:pt3_5 md:pb2_5">
      <div className="inner-content-max-width mxauto">
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
      </div>
    </footer>
  );
}

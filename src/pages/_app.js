import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'css/main.scss';

if (typeof document !== 'undefined') {
  const sections = document.querySelectorAll('section.fade-in');
  window.onscroll = function () {
    if (!document.querySelectorAll('section.fade-in:not(.visible)')) return;

    for (const section of sections) {
      if (
        section.getBoundingClientRect().top <= window.innerHeight * 0.75 &&
        section.getBoundingClientRect().top > 0
      ) {
        section.classList.add('visible');
      }
    }
  };
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&display=swap" rel="stylesheet" />
        <title>Seaborne — Your guides to sustainable business practices</title>
        <meta
          name="description"
          content="Seaborne uses research-backed methods to help founders run more sustainable businesses. We want your business to do good to the environment by providing corporate assessment, supply chain assessment, goal setting and web presence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seaborne — Your guides to sustainable business practices" />
        <meta
          property="og:description"
          content="Seaborne uses research-backed methods to help founders run more sustainable businesses. We want your business to do good to the environment by providing corporate assessment, supply chain assessment, goal setting and web presence."
        />
        <meta property="og:image" content="/img/seaborne-share-card.png" />
        <meta
          property="og:site_name"
          content="Seaborne — Your guides to sustainable business practices"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:title" content="Seaborne — Your guides to sustainable business practices" />
        <meta
          name="twitter:description"
          content="Seaborne uses research-backed methods to help founders run more sustainable businesses. We want your business to do good to the environment by providing corporate assessment, supply chain assessment, goal setting and web presence."
        />
        <meta name="twitter:image" content="/img/seaborne-share-card.png" />
        <meta name="twitter:site" content="@seaborne_nyc" />
        <meta name="twitter:creator" content="@seaborne_nyc" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/img/seaborne-favicon.png" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
};

export default MyApp;

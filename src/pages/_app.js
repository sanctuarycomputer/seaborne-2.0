import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'css/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&display=swap" rel="stylesheet" />
        <title key="title">Seaborne — Your guides to sustainable business practices</title>
        <meta
          name="description"
          content="Seaborne uses research-backed methods to help founders run more sustainable businesses. We want your business to do good to the environment by providing corporate assessment, supply chain assessment, goal setting and web presence."
          key="meta__desc"
        />
        <meta property="og:type" content="website" key="og__type" />
        <meta property="og:title" content="Seaborne — Your guides to sustainable business practices" key="og__title" />
        <meta
          property="og:description"
          content="Seaborne uses research-backed methods to help founders run more sustainable businesses. We want your business to do good to the environment by providing corporate assessment, supply chain assessment, goal setting and web presence."
          key="og__desc"
        />
        <meta property="og:image" content={`https://seaborne-2-0.vercel.app/img/seaborne-share-card.png`} key="og__image" />
        <meta
          property="og:site_name"
          content="Seaborne — Your guides to sustainable business practices"
          key="og__name"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:title" content="Seaborne — Your guides to sustainable business practices" key="twitter__title" />
        <meta
          name="twitter:description"
          content="Seaborne uses research-backed methods to help founders run more sustainable businesses. We want your business to do good to the environment by providing corporate assessment, supply chain assessment, goal setting and web presence."
          key="twitter__desc"
        />
        <meta name="twitter:image" content={`https://seaborne-2-0.vercel.app/img/seaborne-share-card.png`} key="twitter__image" />
        <meta name="twitter:site" content="@seaborne_nyc" key="twitter__site" />
        <meta name="twitter:creator" content="@seaborne_nyc" key="twitter__creator" />
        <meta name="twitter:card" content="summary_large_image" key="twitter__card" />
        <link rel="icon" href="/img/seaborne-favicon.png" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
};

export default MyApp;

import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'css/main.scss';
import Script from 'next/script';
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const handleRouteChange = () => window.fbq && window.fbq('track', 'PageView');

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

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
        <meta name="facebook-domain-verification" content="g8mdnxwiqouku7gm784yqw2v3xzuvu" />
      </Head>
      <Script id="facebook-pixel">
        {`!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '143576115287857'); fbq('track', 'PageView');`}
      </Script>
      <Script id="linkedin-pixel">
        {`_linkedin_partner_id = "5173601";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);`}
      </Script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-557434647"></script>
      <Script id="google-pixel">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-557434647');`}
      </Script>
      <noscript><img height="1" width="1" style={{display: "none"}} alt="facebook-pixel" src="https://www.facebook.com/tr?id=143576115287857&ev=PageView&noscript=1" /></noscript>
      <noscript><img height="1" width="1" style={{display: "none"}} alt="linkedin-pixel" src="https://px.ads.linkedin.com/collect/?pid=5173601&fmt=gif" /></noscript>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
};

export default MyApp;

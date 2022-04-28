import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="custom404 py3 md:py5 lg:py8 site-padding-x mxauto flex flex-col items-center text-center inner-content-max-width">
      <figure className="col-12 md:col-4 sm:col-8">
        <Image
          className=""
          src="/img/journey-illustration.svg"
          alt="Person holding a flower at the beach."
          width={545}
          height={499}
          layout="responsive"
        />
      </figure>
      
      <h1 className="text-subheader-alt color-black mt3_5 md:mb_5 mb1">
        Sorry, we couldn&rsquo;t find what you were looking for.
      </h1>

      <p className="text-body-light color-gray mb3_5">
        Learn about <Link href="/about"><a className="color-blue">how we work</a></Link> and see how we&rsquo;re <Link href="/studies"><a className="color-blue">making a difference</a></Link>.
      </p>

      <Link href="/">
        <a
          aria-label="Homepage"
          className="button--style-primary text-body-sm font-500"
        >
          Back to homepage
        </a>
      </Link>

      
    </main>
  );
}

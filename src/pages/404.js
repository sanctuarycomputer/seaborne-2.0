import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="custom404 py5 site-padding-x flex flex-col items-center inner-content-max-width">
      <p className="text-eyebrow mb3">
        Error 404 / Let's get you home.
      </p>

      <figure className="col-12 md:col-4">
        <Image
          className=""
          src="/img/journey-illustration.svg"
          alt="Person holding a flower at the beach."
          width={545}
          height={499}
          layout="responsive"
        />
      </figure>
      
      <h1 className="text-subheader-alt color-black mt3 mb_5">
        Sorry, we couldn&rsquo;t find what you were looking for.
      </h1>

      <p className="text-body-light color-gray mb2_5">
        Learn about <Link href="/about">how we work</Link> and see <Link href="/studies">how we're making a difference</Link>.
      </p>

      <Link href="/">
        <a
          aria-label="Homepage"
          className="button--style-primary text-body-sm flex items-center justify-center font-500"
        >
          Back to homepage
        </a>
      </Link>

      
    </main>
  );
}

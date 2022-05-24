import Link from 'next/link';
import Image from 'next/image';

const CaseStudyCard = ({
  type,
  title,
  image,
  link,
  description
}) => {
  return (
    <Link href={link}>
      <a className="study-index__case-study-card case-study-card flex flex-row justify-between mxauto mb1_5 md:mb3">
        <figure className="case-study-card__image bg-cover"
          style={{
            backgroundImage: `url('${image}')`
        }}>
        </figure>
        <article className="flex-1 flex flex-col ml_75 md:ml2">
          <p className="case-study-card__type color-gray text-eyebrow mb_25 md:mb_75">{type}</p>
          <h3 className="case-study-card__title color-gray-darker text-subheader md:mb_5">{title}</h3>
          <p className="case-study-card__excerpt text-body color-gray">
            {description}
          </p>
          <div className="case-study-card__link flex items-center text-body arrow-link color-blue pt_5 md:pt1_5">
            <figure className="mr_5">
              <Image
                alt="Right Arrow Icon"
                src="/img/squiggle-arrow-right.svg"
                width={20.22}
                height={14}
                layout="responsive"
              />
            </figure>
            View {type}
          </div>
        </article>
      </a>
    </Link>
  );
};

export default CaseStudyCard;

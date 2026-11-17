import { bannerStyle } from './banner.style';

export interface BannerProps {}

export const Banner = () => {
  return (
    <>
      <svg width='0' height='0' viewBox='0 0 1 1' preserveAspectRatio='none' aria-hidden='true'>
        <defs>
          <clipPath id='taglio-ondulato' clipPathUnits='objectBoundingBox'>
            <path d='M 0 0 H 1 C .88 .32, .88 .68, .75 1 H 0 Z' />
          </clipPath>
        </defs>
      </svg>

      <section className={bannerStyle().root()}>
        <div className={bannerStyle().left()}>
          <picture>
            <img
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                clipPath: "url('#taglio-ondulato')",
              }}
              src={`/images/hero-skater.png`}
              alt={'slide.imageAlt'}
              fetchPriority={'high'}
              loading={'eager'}
            />
          </picture>
          <svg className={bannerStyle().border()} viewBox='0 0 1 1' preserveAspectRatio='none' aria-hidden='true'>
            <path
              d='M 1 0 C .88 .32, .88 .68, .75 1'
              fill='none'
              stroke='#F0BB64'
              strokeWidth={1}
              vectorEffect='non-scaling-stroke'
            />
          </svg>
        </div>
        <div>b</div>
      </section>
    </>
  );
};

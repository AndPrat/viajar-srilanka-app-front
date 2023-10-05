import "./Hero.css";

export interface HeroProps {
  fallback: string;
  desktopWebp: string;
  desktop: string;
  mobileWebp: string;
  mobile: string;
  alt: string;
  title: string;
}

const Hero = ({
  fallback,
  desktopWebp,
  desktop,
  mobileWebp,
  mobile,
  alt,
  title,
}: HeroProps): React.ReactElement => {
  return (
    <div className="hero">
      <picture>
        <source
          srcSet={mobileWebp}
          media="(max-width: 425px)"
          type="image/webp"
        />
        <source srcSet={mobile} media="(max-width: 425px)" />
        <source
          srcSet={desktopWebp}
          media="(min-width: 425px)"
          type="image/webp"
        />
        <source srcSet={desktop} media="(min-width: 425px)" />
        <img
          className="hero__background"
          src={fallback}
          alt={alt}
          srcSet={fallback}
          width={320}
          height={193}
        />
      </picture>
      {title ? <h2 className="hero__title">{title}</h2> : null}
    </div>
  );
};

export default Hero;

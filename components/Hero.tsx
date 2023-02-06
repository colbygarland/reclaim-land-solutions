import { Button } from './Button';
import { H1 } from './Headings';
import { P } from './P';

const Media = ({ src, alt, isVideo }: { src: string; alt?: string; isVideo?: boolean }) => {
  if (isVideo) {
    return (
      <video autoPlay loop className="absolute z-10 top-0 left-0 h-full w-full object-cover">
        <source src={src} />
      </video>
    );
  }
  return <img src={src} alt={alt ? alt : 'Reclaim Land Solutions'} />;
};

export const Hero = ({
  title,
  description,
  isVideo,
  media,
  mediaAlt,
  buttonLink,
  buttonText,
}: {
  title: string;
  description: string;
  isVideo?: boolean;
  media?: string;
  mediaAlt?: string;
  buttonLink?: string;
  buttonText?: string;
}) => {
  return (
    <div className="text-white px-4 py-40 relative lg:py-64">
      <div className="bg-primary-900 opacity-50 absolute inset-0 z-20 h-full w-full" />
      <div className="z-20 relative drop-shadow-md container mx-auto">
        <H1>{title}</H1>
        <P>{description}</P>
        {buttonLink && (
          <div className="my-6">
            <Button href={buttonLink}>{buttonText}</Button>
          </div>
        )}
      </div>
      {media && <Media src={media} alt={mediaAlt} isVideo={isVideo} />}
    </div>
  );
};

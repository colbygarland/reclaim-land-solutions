import { CONTAINER_HORIZONTAL_PADDING } from '../theme/spacing';
import { Button } from './Button';
import { H1 } from './Headings';
import { P } from './P';

const Media = ({ src, alt, isVideo }: { src: string; alt?: string; isVideo?: boolean }) => {
  if (isVideo) {
    return (
      <video autoPlay muted loop className="absolute z-10 top-0 left-0 h-full w-full object-cover">
        <source src={src} />
      </video>
    );
  }
  return (
    <div className="absolute z-10 top-0 left-0 h-full w-full">
      <div className="bg-black/20 h-full w-full absolute" />
      <img className="h-full w-full object-cover" src={src} alt={alt ? alt : 'Reclaim Land Solutions'} />
    </div>
  );
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
    <div className={`text-white py-40 relative lg:py-80 ${CONTAINER_HORIZONTAL_PADDING}`}>
      <div className="z-20 relative drop-shadow-md container mx-auto">
        <div className="lg:max-w-2xl">
          <H1>{title}</H1>
          <P>{description}</P>
          {buttonLink && (
            <div className="my-6">
              <Button href={buttonLink}>{buttonText}</Button>
            </div>
          )}
        </div>
      </div>
      {media && <Media src={media} alt={mediaAlt} isVideo={isVideo} />}
    </div>
  );
};

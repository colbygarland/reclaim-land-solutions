import Image from 'next/image';
import { H2 } from './Headings';
import { P } from './P';

export const MediaBlock = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
      <div className="mb-4">
        <Image alt={imageAlt} src={imageSrc} width={600} height={450} />
      </div>
      <div>
        <H2>{title}</H2>
        <P>{description}</P>
      </div>
    </div>
  );
};

import Image from 'next/image';
import { H3, H2 } from './Headings';

export const Popout = ({
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
    <div className="bg-primary-600 lg:grid lg:grid-cols-3">
      <Image height={600} width={600} src={imageSrc} alt={imageAlt} className="lg:h-full lg:object-cover" />
      <div className="p-6 lg:p-24 lg:pr-48 lg:col-span-2">
        <H3 styles="text-white">{title}</H3>
        <H2>{description}</H2>
      </div>
    </div>
  );
};

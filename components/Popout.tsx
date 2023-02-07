import Image from 'next/image';
import { H3, H2 } from './Headings';

type ImageAlignment = 'left' | 'right';
type Color = 'primary' | 'white';

export const Popout = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageAlignment = 'left',
  color = 'primary',
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageAlignment?: ImageAlignment;
  color?: Color;
}) => {
  return (
    <div className={`${color === 'primary' ? 'bg-primary-600' : 'bg-white'} shadow-lg`}>
      <div className="lg:grid lg:grid-cols-3">
        <div className={imageAlignment === 'left' ? 'lg:order-1' : 'lg:order-2'}>
          <Image height={600} width={600} src={imageSrc} alt={imageAlt} className="lg:h-full lg:object-cover" />
        </div>

        <div
          className={`p-6 lg:p-24 lg:pr-48 lg:col-span-2 ${imageAlignment === 'left' ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <H3>
            <span className={`${color === 'primary' ? 'text-white' : 'text-primary-600'}`}>{title}</span>
          </H3>
          <H2>{description}</H2>
        </div>
      </div>
    </div>
  );
};

import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'H3'}
      image={'/excavator/h3-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI excavator mulcher H3 is the lightest excavator attachment from SEPPI M. comes with reinforced
            frame made of wear-resistant steel AR400 for a very long life. H3 mulching head is ideal for mounting on
            mini-excavators for the maintenance of small greenspaces, riverbanks and canals, right of way clearing and
            green space maintenance. Reinforced bearing and stronger support roller, reinforced frame made of
            wear-resistant steel AR400 for a very long life. The mechanical float adaptor to follow the contours of the
            ground is now in standard version. Prepared for transmission with hydraulic motor of choice. Available
            working width: 60, 85, 105, 125 [25", 33", 41", 49"]
          </P>
        </>
      }
      featureTitle={'H3 - standard version'}
      features={[
        'Mulching head suitable for hydraulic excavator arm',
        'Mulches grass and brush up to 3 cm [1”] Ø',
        'For excavators from 2 to 5 t [4,400-11,000 lbs]',
        'Chassis made of high tensile and wear-resistant steel AR400',
        'Universal attachment interface',
        'Mechanical FLOAT adaptor',
        'Belt transmission (3)',
        'Prepared for transmission with hydraulic motor of choice',
        'Front protection with chains',
        'Rear protection with safety rubber flap',
        'Support roller 133 mm Ø [5”], adjustable in height, reinforced bearings and roller',
        'Triple helical rotor with SMW flails',
        'Colors: charcoal RAL7021| red RAL3020',
      ]}
      options={[
        'Rotor with Y knives on shackles',
        'Rotor with Y DUO knives',
        'Variable displacement motor with relief valve of choice',
        'or Hydraulic gear motor with flow control valve',
        'Attachment - interface plate for excavators of different brands',
        '190° hydraulic rotation plate',
        'Laser tachometer',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers/h3.html?depliant=466"
    />
  )
}

import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'H SMO B'}
      image={'/excavator/h-smo-b-cover.jpeg'}
      content={
        <>
          <P>
            The model H-SMO-B is a strong and versatile SEPPI flail mulcher for mowing and maintaining wasteland and
            areas difficult to access. This hydraulic attachment is trong and universal mower to be mounted on tyre or
            tracked excavators for maintaining overgrown areas and slopes, land clearing, right of way management and
            green spece maintenance. SEPPI H-SMO-B mulching head is prepared for an individual interface plate for
            excavators of different brands. The rear hood allows the adjustment of the degree of mulching. With the
            stong support roller it is possible to adapt to the contours of the ground and to adjust the height of cut.
            Mechanical float adaptor follows the contours of the ground. Available working width: 125, 150, 200 [49",
            59", 79"].
          </P>
        </>
      }
      featureTitle={'H SMO B - standard version'}
      features={[
        'Mulching head suitable for excavators from 5 to 13 tons',
        'Mulches grass & brush up to 7 cm [3”] Ø',
        'Helical rotor with SMO flails',
        'Universal attachment interface',
        'Chassis made of high tensile steel S420',
        '2 rows of tempered COUNTER CUTTERS',
        'Predisposed for transmission with hydraulic motor of choice',
        'Recommended oil flow: 40-140 l/min [10.6 - 37 gpm]',
        'Mechanically adjustable rear hood',
        'Front protection with chains',
        'Rear protection: safety rubber flap',
        'Reinforced support roller, adjustable in height by 5 cm [2”]',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'Rotor with Y DUO flails',
        'Variable displacement motor with relief valve, different types at choice',
        'Attachment - interface plate for excavators of different brands',
        'Mechanical float adaptor',
        'Interface plate with 190° rotation',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers/h-smo-b.html?depliant=475"
    />
  )
}

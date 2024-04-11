import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'WBS'}
      image={'/flails/wbs-cover.jpeg'}
      content={
        <>
          <P>
            To satisfy all your needs without any compromise, go for the SEPPI WBS mulcher! The WBS mulching mowers are
            the strongest in the series of SEPPI M. flail mowers. They will do the toughest work in agriculture and
            greenspace maintenance and especially where mulching particularly resistant material, such as olive and
            citrus brush. Ideal for small scale vegetation management and right-of-way maintenance, used also in the
            forestry.
          </P>
          <P>
            SEPPI WBS mulchers have a very strong gear box for middle and high-power tractors and strong belt protection
            for high performance jobs.
          </P>
          <P>Available working width: 225, 250, 275, 300, 350 cm [89", 98", 108", 118", 138"].</P>
        </>
      }
      featureTitle={'WBS - standard version'}
      features={[
        'Mulches grass, prunings and brush up to 11 cm [4.3”] Ø',
        'Helical rotor with SMO flails',
        'Working speed 3–10 km/h',
        'ISO 3-point linkage cat. 2 reversible - Front & Rear',
        'Robust reinforced chassis made of high tensile steel S420',
        '2 rows of tempered counter cutters',
        '1000 rpm gearbox with freewheel and through shaft',
        'Input shaft 1 3/8” Z=6',
        '5 Belt transmission',
        'Adjustable rear hood M-FLAP to set the degree of mulching, with rubber protection',
        'Support roller, adjustable in height, reinforced bearing and roller',
        'Front protection: chains',
        'Colors: red RAL3020 · charcoal RAL7021',
      ]}
      options={[
        'PTO shaft',
        '540 rpm gearbox',
        'Front attachment',
        'Fine shred kit',
        'Additional 3-point linkage',
        'Rear hood with rakes',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/wbs.html?depliant=416"
    />
  )
}

import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'WBS FH'}
      image={'/flails/wbs-fh-cover.jpeg'}
      content={
        <>
          <P>
            To satisfy all your needs without any compromise, go for the SEPPI WBS fh mulcher! The WBS fh mulching
            mowers are the strongest in the series of SEPPI M. flail mowers. They will do the toughest work in
            agriculture, especially where mulching particularly resistant material, such as olive and citrus brush.
            Ideal for small scale vegetation management and right-of-way maintenance, used also in the forestry. SEPPI
            WBS fh mulcher has a very strong gear box for middle and high-power PTO-tractors, casing made of
            wear-resistant steel and strong belt protection for high performance jobs. The SEPPI WBS fh is with linkage
            with hydraulic side shift. The mulcher can be side shifted by 2 x 35 cm [2 x 14“] left and right of the
            central position.
          </P>
          <P>Available working width: 225, 250, 275, 300, 350 cm [89", 98", 108", 118", 138"].</P>
        </>
      }
      featureTitle={'WBS FH - standard version'}
      features={[
        'Mulches grass and prunings up to 11 cm [4.3”] Ø',
        'Helical rotor with SMO flails',
        'Working speed 3–10 km/h',
        'Reversible cat. 2 ISO 3-point linkage',
        'Robust reinforced chassis made of high tensile steel S420',
        '2 rows of tempered counter cutters',
        'Linear hydraulic side shift 70 cm [28”]',
        '1000 rpm gearbox with freewheel and through shaft',
        'Input shaft 1 3/8” Z=6',
        '5 belts transmission',
        'Adjustable rear hood M-FLAP to set the degree of mulching, with rubber protection',
        'Support roller, adjustable in height, reinforced bearing and roller',
        'Front protection: chains',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={['540 rpm gearbox', 'Additional 3-point linkage', 'Fine shred kit', 'Rear hood with rakes']}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/wbs-fh.html?depliant=424"
    />
  )
}

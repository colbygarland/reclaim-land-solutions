import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'S9 Coupe'}
      image={'/flails/s9-coupe-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI mulcher "S9 coupé" is a low profile model with strong hydraulic side shift on corrosion resistant
            tubes, with low belt protection for vineyards and orchards. The S9 series opens the heavier range of SEPPI
            M. flail mowers.
          </P>
          <P>
            Casing of S9 coupè made of high-tensile steel (S420), with internal replaceable wear plates, reinforced belt
            cover and strong, unique roller design using a double tapered roller bearing unit for a long life and the
            low maintenance costs. SEPPI S9 coupè mulchers mulch grass and vegetation up to 9 cm [3.5”] Ø. The rear hood
            allows adjustment of the degree of mulching.
          </P>
          <P>
            Helical distributed and high resistent SEPPI SMO flails for universal use are for high cutting quality at
            uniformly distributed power. Double counterknives inside the casing will give a perfect result when
            mulching. Strong welded belt cover minimizes accidental damage. With the roller positioned close to the
            rotor, it is automatically cleaned by the rotating flails and the cut material is evenly distributed over
            the top of the roller. Adjustable large diameter roller positioned close to the rotor improves mulching on
            uneven ground and prevents scalping.
          </P>
          <P>
            The SEPPI S9 coupè mulchers are suitable for the most varied uses: in agriculture for orchards, right-of-way
            management, creation of fire breaks, vegetation management, road side maintenance, land clearing and site
            prep...
          </P>
          <P>Available working width: 200, 225, 250, 275, 300 cm [79", 89", 98", 108", 118"].</P>
        </>
      }
      featureTitle={'S9 coupe - standard version'}
      features={[
        'Mulches grass and prunings up to 9 cm [3.5”] Ø',
        'Helical rotor with SMO flails',
        '2 rows of replaceble tempered counter cutters',
        'Working speed 3-10 km/h',
        'ISO 3-point linkage cat. 2',
        'Linear hydraulic side shift 70 cm [28”]',
        'Chassis made of high tensile steel S420',
        'Chassis with internal replaceable wear plates',
        'Low belt protection for vineyards and orchards',
        'Gearbox 1000 rpm with freewheel and through shaft',
        'Input shaft 1 3/8” Z=6',
        'Reinforced support roller, adjustable in height by 5 cm [2”]',
        'Adjustable rear hood M-FLAP to set the degree of mulching, with rubber protection',
        'Front protection with chains',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={['PTO drive shaft', 'Gearbox 540 rpm', 'Belt cover on the right for working on the left']}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/s9-coupe.html?depliant=388"
    />
  )
}

import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'S9 Base'}
      image={'/flails/s9-base-cover.jpeg'}
      content={
        <>
          <P>
            The S9 series opens the heavier range of SEPPI M. flail mowers. The result of 85 years of Innovation: more
            power, more lifetime, more productivity! The "S9 base" is the basic SEPPI mulcher model without side shift ,
            with ISO 3-point linkage cat. 2 central fixed for reversible job. The hitch is easy changeable to change
            fast the working direction. S9 casing is made of high-tensile steel (S420), with internal replaceable wear
            plates, reinforced belt cover and strong, unique roller design using a double tapered roller bearing unit
            for a long life and the low maintenance costs. S9 machines mulch grass and vegetation up to 9 cm [3.5”] Ø.
            The rear hood allows adjustment of the degree of mulching.
          </P>
          <P>
            Helical distributed and high resistent SEPPI flails for universal use are for high cutting quality at
            uniformly distributed power. Double counterknives inside the casing will give a perfect result when
            mulching. Strong welded belt cover minimizes accidental damage. With the roller positioned close to the
            rotor, it is automatically cleaned by the rotating flails and the cut material is evenly distributed over
            the top of the roller. Adjustable large diameter roller positioned close to the rotor improves mulching on
            uneven ground and prevents scalping.
          </P>
          <P>
            The S9 mulchers are suitable for the most varied uses: in agriculture for orchards, right-of-way management,
            creation of fire breaks, vegetation management, road side maintenance, land clearing and site prep...
          </P>
          <P>
            Available working width: 200, 225, 250, 275, 300 cm [79", 89", 98", 108", 118"]. S9 base is possible also
            with hyd. transmission for hydraulic track loader!
          </P>
        </>
      }
      featureTitle={'S9 base - standard version'}
      features={[
        'S9 base mulches grass and prunings up to 9 cm [3.5”] Ø',
        'Helical rotor with SMO flails',
        'Rotor wall thickness: ≤ 250: 12,5 mm, ≥ 275: 16 mm',
        'Working speed 3-10 km/h',
        'Chassis made of high tensile steel S420',
        'Chassis with internal replaceable wear plates',
        'ISO 3-point linkage cat. 2 central fixed reversible',
        'Gearbox 1000 rpm with freewheel and through shaft',
        'Input shaft 1 3/8” Z=6',
        'Support roller, adjustable in height, reinforced bearing and roller',
        '2 rows of replacebletempered counter cutters',
        'Adjustable rear hood M-FLAP to set the degree of mulching, with rubber protection',
        'Front protection with chains',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Gearbox 540 rpm',
        'Gearbox with automatic inverter for reversible tractors',
        'Additional 3-point linkage frame',
        'Hyd. trasmission for hy. track loader',
        'Linkage for hydraulic trackloader (slope groomer)',
        'Rubber gauge wheels',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/s9-base.html?depliant=376"
    />
  )
}

import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'S9 Dyna'}
      image={'/flails/s9-dyna-cover.jpeg'}
      content={
        <>
          <P>
            The S9 dyna is reversible model with Linkage with strong hydraulic side shift on corrosion resistant tubes.
            Innovative, pyramid-shaped 3-point linkage with high stability is suitable for front and rear attachment.
          </P>
          <P>
            The S9 series opens the heavier range of SEPPI M. flail mowers. S9 casing made of high-tensile steel (S420),
            with internal replaceable wear plates, reinforced belt cover and strong, unique roller design using a double
            tapered roller bearing unit for a long life and the low maintenance costs. SEPPI S9 dyna machines mulch
            grass and vegetation up to 9 cm [3.5”] Ø. The rear hood allows adjustment of the degree of mulching.
          </P>
          <P>
            Helical distributed and high resistent SEPPI SMO flails for universal use are for high cutting quality at
            uniformly distributed power. Double counterknives inside the S9 dyna casing will give a perfect result when
            mulching. Strong welded belt cover minimizes accidental damage. With the roller positioned close to the
            rotor, it is automatically cleaned by the rotating flails and the cut material is evenly distributed over
            the top of the roller. Adjustable large diameter roller positioned close to the rotor improves mulching on
            uneven ground and prevents scalping.
          </P>
          <P>
            The SEPPI S9 dyna mulchers are suitable for the most varied uses: in agriculture for orchards, right-of-way
            management, creation of fire breaks, vegetation management, road side maintenance, land clearing and site
            prep...
          </P>
          <P>Available working width: 200, 225, 250, 275, 300 cm [79", 89", 98", 108", 118"].</P>
        </>
      }
      featureTitle={'S9 dyna - standard version'}
      features={[
        'S9 Mulches grass and prunings up to 9 cm [3.5”] Ø',
        'Helical rotor with SMO flails',
        'Working speed 3-10 km/h',
        'ISO 3-point linkage cat. 2 reversible',
        'Chassis made of high tensile steel S420',
        'Chassis with replaceable wear plates',
        'Linear hydraulic side shift 70 cm [28”]',
        'Gearbox 1000 rpm with freewheel and through shaft',
        'Input shaft 1 3/8” Z=6',
        'Support roller, adjustable in height, reinforced bearing and roller',
        '2 rows of replaceable tempered COUNTER CUTTERS',
        'Adjustable rear hood M-FLAP with rubber protection',
        'Front protection with chains',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Gearbox 540 rpm',
        'Gearbox with manual inverter for reversible tractors',
        'Belt cover on the right for working on the left',
        'Rubber gauge wheels',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/s9-dyna.html?depliant=392"
    />
  )
}

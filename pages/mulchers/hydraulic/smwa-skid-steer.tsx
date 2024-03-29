import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'SMWA Skid Steer'}
      image={'/hydraulic/smwa-skid-steer-cover.jpeg'}
      content={
        <>
          <P>
            The last version of small but strong SEPPI flail mulcher SMWA skid steer mulching grass, prunings and bushes
            up to 5 cm [2“] in diameter. Made of high tensile steel S420 with counter cutters inside the casing and with
            rotor shaft with SEPPI SMW flails is this mulcher ideal for mulching in vineyards and orchards, land
            clearing, right of way management and green spece maintenance. The SAE skid steer attachment interface is
            floating to follow the contours of theground (FLOAT). The traditional flail mulcher model SMWA (also in
            Pto-version available) has worked almost 50 years to the satisfaction of professionals around the world.
            Available working width: 155, 175 [61", 69"]
          </P>
        </>
      }
      featureTitle={'SMWA Skid Steer - standard version'}
      features={[
        'Mulches grass, brush and prunings up to 5 cm [2”] Ø',
        'Helical rotor with SMW flails',
        'Mulches grass and prunings up to 5 cm [2”] Ø',
        'Working speed 3-10 km/h',
        'Robust chassis made of high tensile steel S420',
        'SAE skid steer attachment interface, floating to follow the contours of the ground FLOAT',
        'Belt transmission',
        'Prepared for VARIO FLOW motor',
        'Support roller, adjustable in height, reinforced bearings and roller 4DR',
        'Adjustable rear hood with rubber protection',
        'Front protection with metal flaps',
        'Rotor wall thickness, mm: 150: 10 · 175-200: 12,5',
        'Triple helical HELIX rotor with SMW flails',
        '2 rows of tempered COUNTER CUTTERS (>175 1 row)',
        'Colors: charcoal RAL7021| red RAL3020',
      ]}
      options={[
        'Rotor with Y DUO knives',
        'Variable displacement motor with relief valve, different types of choice',
        'Universal attachment interface for loaders',
        'Roller scraper',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/mulchers-for-compact-loaders/smwa-skid-steer.html?depliant=635"
    />
  )
}

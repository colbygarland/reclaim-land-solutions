import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'SMO Skid Steer'}
      image={'/hydraulic/smo-skid-steer-cover.jpeg'}
      content={
        <>
          <P>
            The new version of SEPPI SMO skid steer mulcher has all the qualities of a perfect mulcher for vineyards and
            orchards, land clearing, right of way management and green spece maintenance. SMO skid steer mulches
            material up to 7 cm [2.8"] in diameter. The traditional SEPPI flail mulcher model SMO has worked almost 50
            years to the satisfaction of professionals around the world. The chassis made of high tensile steel S420,
            reinforced support roller, floating attachment to follow the contours of the ground make the flail mulcher
            very resistent and efficient. Available working width: 200 [79"]
          </P>
        </>
      }
      featureTitle={'SMO Skid Steer - standard version'}
      features={[
        'Mulches grass and prunings up to 7 cm [2.8“] Ø',
        'Helical rotor with SMO flails',
        'Working speed 3–10 km/h',
        'SAE skid steer attachment interface, floating to follow the contours of the ground FLOAT',
        'Robust chassis made of high tensile steel S420',
        '2 rows of tempered COUNTER CUTTERS',
        'Belt transmission',
        'Prepared for VARIO FLOW motor of choice',
        'Max. pressure: 250 bar',
        'Min-max oil flow: 40-150 l/min',
        '5 belts',
        'Support roller, adjustable in height, reinforced bearing and roller',
        'Adjustable hood with rubber protection',
        'Front protection: metal flaps',
        'Colours: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'Rotor with Y DUO knives',
        'Variable displacement motor with relief valve, different types at choice',
        'Universal attachment interface for loaders',
        'Roller scraper',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/mulchers-for-compact-loaders/smo-skid-steer.html?depliant=627"
    />
  )
}

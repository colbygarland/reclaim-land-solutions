import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Starforst HYD'}
      image={'/hydraulic/starforst-hyd-cover.jpeg'}
      content={
        <>
          <P>
            The new version of SEPPI wood mulcher STARFORST hyd comes with universal attachment interface. It is the
            right mulching equipment for medium sized prime movers. Patented, easy to change SEPPI tungsten carbide
            fixed hammers type MINI DUO and anti-wear hammer supports. Large exposure of the rotor to the trees promotes
            fast mulching. The new CARBONCHAIN gear belts provide high strength and length stability with high
            flexibility. Two hydraulic motors M-BOOST for high pressure and high oil flow. Different types of guard
            frames for felling operations and to protect the tractor available.
          </P>
          <P>
            Chassis of SEPPI STARFORST hyd is very strong with internal replaceable plates made of AR400 hardened steel.
            It performs greatly on any type of vegetation management: right-of-way, land clearing, site prep, gas &
            pipeline maintenance, power transmission, road side and creation of fire break strips. Overall width adapted
            to road traffic regulations - for an optimal use of the working width. Available working width: 210, 235,
            260 cm [83", 93", 102"].
          </P>
        </>
      }
      featureTitle={'Starforst hyd - standard version'}
      features={[
        'Mulches wood up to 40 cm [16”] Ø',
        'Rotor with tungsten CARBIDE inserts hammers MINI DUO + lateral EXTREME; anti-wear hammer support',
        'Working speed 0 - 5 km/h',
        'Bolt-on-rotor shaft',
        'Universal attachment interface',
        'Chassis made of high tensile and wear resistant steel AR400 with internal replaceable WEAR PLATES',
        '5 rows of tempered COUNTER CUTTERS',
        'Prepared for transmission with 2 hydraulic M-BOOST motors of choice',
        'Oil flow: 200-520 l/min (53-137 gpm)',
        'Dual side CARBONCHAIN gear belt drive',
        'Hydraulically operated hood',
        'Components protected by guarding, easily removable for maintenance',
        'Front and rear protection with chains',
        'Support skids, adjustable in height',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'Fixed carbide tips hammer rotor V-LOCK ',
        'Mechanical or hydraulic guard frame',
        '2 automatic displacement motors M-BOOST',
        'Attachment interface of choice for prime movers of different brands',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/mulchers-for-compact-loaders/starforst-hyd.html?depliant=611"
    />
  )
}

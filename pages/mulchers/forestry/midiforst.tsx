import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Midiforst'}
      image={'/forestry/midiforst-cover.jpeg'}
      content={
        <>
          <P>
            The forestry mulchers SEPPI MIDIFORST and MIDIFORST dt are the flag ships of the SEPPI M. brand. Powerful
            and at the same time compact, these forestry mulchers are suitable for the most varied application – in
            forestry, in agriculture and in greenspace maintenance. With the patented rotor with efficient MINI DUO
            tools with additional tungsten carbide inserts SEPPI MIDIFORST mulchs wood up to 25 cm [9.8”] Ø.
          </P>
          <P>
            Ideal for fire breaks, vegetation management, right-of-way, land clearing, site preparation, pipelines and
            power transmission lines as well as for road side maintenance. Available working width: 175, 200, 225 cm
            [69", 79", 89"].
          </P>
        </>
      }
      featureTitle={'Midiforst - standard version'}
      features={[
        'Mulches wood up to 25 cm [9.8”] Ø',
        'Helical rotor with tungsten CARBIDE inserts hammers MINI DUO + lateral EXTREME; anti-wear hammer support',
        'With Bolt-on-rotor shaft',
        'Working speed 0-5 km/h',
        'IISO 3-point rear linkage cat. 2 central fixed',
        '1000 rpm gearbox with freewheel',
        'Belt transmission with 5 belts',
        'Robust reinforced chassis',
        '2 rows of tempered counter cutters for a perfect mulching result',
        'Hydraulically operated hood',
        'Support skids, adjustable in height',
        'Front and rear protection: double / single chains',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Front attachment',
        '540 rpm gearbox',
        'Gearbox with manual inverter',
        'Mechanical guard frame',
        'Centrifugal clutch',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/pto-forestry-mulchers/midiforst.html?depliant=579"
    />
  )
}

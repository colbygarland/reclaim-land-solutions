import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Super BMS'}
      image={'/excavator/super-bms-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI SUPER-BMS is a strong mulcher to be mounted on the dipper arm of an excavator or forwarder up to
            45 t. Its patented rotor with efficient hammers MINI DUO with tungsten carbide tips mulches trees and stumps
            up to 40 cm [16"] in diameter. More efficient is SUPER-BMS due to an improved rotor with additional
            exposure. Available in working width: 150 cm [59"]
          </P>
        </>
      }
      featureTitle={'Super BMS - standard version'}
      features={[
        'SUPER-BMS mulches stumps and wood up to 40 cm [16”] Ø',
        'Rotor with fixed hammers MINI DUO with tungstene carbide tips',
        'Anti-wear hammer support',
        'Bold-on-rotor shaft',
        'Suitable for excavators or forwarders from 25 to 45 t [50,000-90,000 lb] ',
        'Universal attachment interface',
        'Belt transmission (2x5)',
        'Prepared for transmission with 2 hydraulic motors of choice',
        'Max. pressure: 350 bar',
        'Hydraulically operated hood',
        '4 rows of tempered COUNTER CUTTERS (3 chassis, 1 hood)',
        'Front and rear protection with chains',
        'Reinforced support skids',
        'Colours: red RAL3020 · charcoal RAL7021',
      ]}
      options={[
        'Motors with relief valves',
        'Interface plate (for different excavator brands)',
        'Electric valve for hood control',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers/super-bms.html?depliant=515"
    />
  )
}

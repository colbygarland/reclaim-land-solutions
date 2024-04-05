import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Mini BMS'}
      image={'/excavator/mini-bms-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI mulching head MINI-BMS is the lightest of forestry mulchers for excavator attachment. The light
            weight makes MINI BMS mulcher suitable for mounting on long excavator or forwarder arms and thereby reach
            even far off areas otherwise hard to reach. In agriculture the result is a better access to fields and a
            clean pathway for water to the drainage ditches. MINI-BMS mulcher is suitable for different types of
            vegetation management, in forestry, right of way maintenance, clearing forests after harvesting wood and
            much more. MINI-BMS is equiped with the aggressive patented rotor with easily interchangeable fixed hammers
            MINI DUO with tungsten carbide tips mulches material (wood) up to 10 cm in diameter. Very strong frame, for
            a very long life made of wearresistant steel AR400 with tempered counter knives for a perfect mulching
            result. Available working width: 85, 105, 125 [33", 41", 49"].
          </P>
        </>
      }
      featureTitle={'Mini BMS - standard version'}
      features={[
        'Mulching head MINI-BMS suitable for excavators from 5 to 10 tons [11,000-22,000 lb]',
        'Mulches brush & wood up to 10 cm [4”]',
        'Rotor with tungsten CARBIDE inserts hammers MINI DUO',
        'Anti-wear hammer support',
        'Universal attachment interface',
        'Chassis made of high tensile and wear-resistant steel AR400',
        '3 rows of tempered COUNTER CUTTERS (2 chassis, 1 hood)',
        'Belt transmission (5)',
        'Prepared for transmission with hydraulic motor of choice',
        'Recommended oil flow: 50-150 l/min [13-39.6 US-gal/min]',
        'Hydraulically operated hood',
        'Front and rear protection with chains',
        'Support skids, reinforced',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'CUT CONTROL rotor with gauge and MINI BLADE tool',
        'Forestry rotor with swinging hammers',
        'Hydraulic motor with relief valve of choice',
        'Automatic variable displacement motor M-BOOST 60-80 cm³',
        'Interface plate (for different excavator brands)',
        '190° hydraulic rotation plate',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers/mini-bms.html?depliant=499"
    />
  )
}

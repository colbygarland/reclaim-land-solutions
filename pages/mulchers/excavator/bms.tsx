import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'BMS'}
      image={'/excavator/bms-cover.jpeg'}
      content={
        <>
          <P>
            Newly updated, the SEPPI excavator mounted forestry mulcher BMS is more efficient, more productive, and has
            an attractive new design. Designed for excavators in the 15 - 30 ton class (30,000 - 66,000 lb), grass,
            brush and wood are easy to mulch. Attached to the arm of an excavator, all these areas can easily be
            reached. The SEPPI mulching head BMS comes with a forestry rotor able to mulch vegetation up to 30 cm [12"]
            in diameter. Covered chassis protects the drive. Forestry rotor with tempered counter knives inside the
            casing standard for very fine mulching result. The new version of SEPPI BMS mulchers for excavator
            attachment is designed and engineered to make your operation more efficient and profitable. BMS is now: More
            efficient due to an improved rotor with additional exposure. More power due to motors M-BOOST with up to 40%
            more torque. Safer due to improved protection systems. Available in working widths: 100, 125 150 cm [39",
            49", 59"]
          </P>
        </>
      }
      featureTitle={'BMS - standard version'}
      features={[
        'Mulching head suitable for excavators and forwarders from 15 to 30 t [30,000-66,000 lb]',
        'BMS Mulches wood up to 30 cm [12”] Ø',
        'Rotor with fixed hammers MINI DUO and MONO EXTREME with tungstene carbide tips',
        'Anti-wear hammer support',
        'Chassis made of high tensile and wear-resistant steel AR400',
        'Covered chassis to protect the drive',
        '5-belt transission',
        'Universal attachment interface',
        'Prepared for transmission with hydraulic motor of choice',
        'Recommended oil flow: 80–260 l/min',
        'Hydraulically operated hood',
        '2 rows of tempered COUNTER CUTTERS',
        'Front and rear protection with chains',
        'Reinforced skids SANDWICH SKIDS',
        'Colours: red RAL3020 · charcoal RAL7021',
      ]}
      options={[
        'Forestry rotor with fixed hammers MONO TIP V-LOCK',
        'CUT CONTROL rotor with gauge and MINI BLADE tool',
        'Automatic variable displacement motor M-BOOST',
        'Transmission predisposed for hyd. motor SAUER 55',
        'Interface plate with 190° rotation',
        'Individual interface plate for excavator arm (for different excavator brands)',
        'Electric valve for hood control with controls',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers/bms.html?depliant=442"
    />
  )
}

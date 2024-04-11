import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'BMS F'}
      image={'/excavator/bms-f-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI mulching head BMS-F is a special attachment to be applied on different types of excavators,
            railroad or special vehicles or forwarders, working to maintain railways and other areas difficult of
            access. This SEPPI excavator mulcher BMS-F has a very strong casing and strong bearings that make it very
            resistant, no matter in what position it works. Chassis is made of wear-resistant steel AR400 and has a low
            profile for more flexibility. The SEPPI patented fixed hammer rotor with strong bearings for high
            performance even in vertical positions is powerful and exposed and particularly strong to bear frequent
            vertical mulching. An exposed, aggressive rotor is very effective against thick vegetation of up to 20 cm
            [8"] in diameter. This rotor has been specially designed to withstand strong lateral loads and also works
            reliably even in vertical positions. Transmission with automatic variable displacement motor M-BOOST (60-80
            cm³). The motor is well protected.
          </P>
          <P>
            Rotor (opt) with CUT CONTROL system: MINI BLADE tools with sharpenable blade, in combination with a
            specially developed gauge, to reduce the depth of cut. Fast cut and fine mulch Ideal for maintaining
            vegetation alongside railways, clearing forests after harvesting wood and much more. Available working
            width: 100, 125, 150 [39", 49", 59"].
          </P>
        </>
      }
      featureTitle={'BMS F - standard version'}
      features={[
        'Mulching head suitable for excavators and special vehicles from 10 to 20 t [22,000-44,000 lb]',
        'Mulches and brushs vegetation up to 20 cm [8”] Ø',
        'Forestry rotor with fixed hammers MINI DUO with tungstene carbide tips',
        'Anti-wear hammer support',
        'Universal attachment interface',
        'LOW PROFILE',
        'Chassis made of high tensile and wear-resistant steel AR400',
        '3 rows of tempered COUNTER CUTTERS (2 chassis, 1 hood)',
        'Belt transmission (5)',
        'Prepared for transmission with hydraulic motor M-BOOST',
        'Recommended oil flow: 90–180 l/min',
        'Mechanically operated hood',
        'Front and rear protection with chains',
        'Support skids, reinforced',
        'Colour: red RAL3020 · charcoal RAL7021',
      ]}
      options={[
        'CUT CONTROL rotor with gauge and MINI BLADE tool',
        'High performance hydraulic displacement motor M-BOOST 60-80 cm³',
        'Individual interface plate for excavator arm (for different excavator brands)',
        'Interface for spider excavator',
        'Electric valve for hood control with controls',
        '190° hydraulic rotation plate',
        'Hydraulically adjustable hood',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers/bms-f.html?depliant=450"
    />
  )
}

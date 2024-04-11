import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'BMS L'}
      image={'/excavator/bms-l-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI mulching head BMS-L has been developed for medium size excavators. It is strong mulcher, at a
            relatively light weight. Mounted on the arm of an excavator, SEPPI BMS-L mulcher will show great results in
            greenspace maintenance on riverbanks, in the forest and in other areas difficult to reach. Suitable for
            different types of vegetation management, right of way maintenance, clearing forests after harvesting wood
            and much more.
          </P>
          <P>
            The BMS-L has two adjustable hoods and can thus be perfectly adapted to the different working conditions and
            the vegetation. Many specific situations determined by the type of vegetation, the soil and the environment
            will thus be easy to handle! With its standard rotor, the BMS-L mulches brush up to 7 cm [2.8"] in diameter,
            with the optional forestry rotor with fixed hammers the mulcher can brush material up to 15 cm [6"]. SEPPI
            BMS-L it suitable for mounting on excavators or forwarders of different brands. Available working width:
            100, 125 [39", 49"].
          </P>
        </>
      }
      featureTitle={'BMS L - standard version'}
      features={[
        'Mulching head BMS-L is suitable for excavators from 7 to 15 tons [11,000-33,000 lb]',
        'Mulches and brush vegetation up to 7 cm [2.8”] Ø,',
        'with forestry rotor up to 15 cm [6”] Ø',
        'Standard rotor with SMO flails',
        'Prepared for an individual interface plate',
        '4 rows of tempered COUNTER CUTTERS (2 chassis, 2x1 hood)',
        'Belt transmission (5)',
        'Prepared for transmission with hydraulic motor of choice',
        'Recommended oil flow: 90-150 l/min [23-40 gpm]',
        'Direction of rotation and opening of the hood is reversible DUAL',
        '2 hoods (1 hydraulically operated, 1 mechanically operated)',
        'Front and rear protection with chains',
        'Support skids, reinforced',
        'Colour: red RAL3020 · charcoal RAL7021',
      ]}
      options={[
        'Forestry rotor with fixed CARBIDE hammers MINI DUO',
        'Forestry rotor with fixed hammers MINI BLADE',
        'Variable displacement motor on choice',
        'Individual interface plate fore xcavator arm (for different excavator brands)',
        'Interface for spider excavator',
        '2nd hood hydr adjustable',
        'Electric valve for hood control with controls',
        '190° hydraulic rotation plate',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers/bms-l.html?depliant=459"
    />
  )
}

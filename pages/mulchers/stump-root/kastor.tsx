import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Kastor'}
      image={'/stump-root/kastor-cover.jpeg'}
      content={
        <>
          <P>
            With the strong KASTOR™ stump cutter elimination of stumps and wood is easy and very fast, no matter what
            their diameter. A circular mulching disk moves and chips away the wood. The cutter wheel movements are
            controlled by hydraulic cylinder, to push the cutter wheel teeth laterally through the stump and to raise
            and lower the cutter wheel. The rotor-disk of KASTOR stump grinder with very aggressive fixed carbide teeths
            can completely destroy tree stumps of any diameter permanently. Rotor disc: 11 cm [4,3"] strong - diameter:
            90 cm [35"]
          </P>
        </>
      }
      featureTitle={'Kastor - standard version'}
      features={[
        'Grinds stumps as deep as 35 cm [14”] below the surface and any diameter',
        'Rotor-disk with fixed carbide teeths',
        'ISO 3-point rear linkage cat.2',
        'Hyd. outrigging (side shift): 110 cm [43“]',
        '1000 rpm gearbox with freewheel',
        'Double transmission with 10 belts',
        'Hydraulic outrigging 55 cm [21,7“] to the left and right',
        'Hydraulically operated hood',
        'Protection with double chains',
        'Standard hammers: fixed knives with tungsten tips',
        'Colour: red RAL 3020',
      ]}
      options={['Wide angle PTO drive shaft', 'Electric control', 'Support wheels to set height']}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stump-root-grinders/kastor.html?depliant=555"
    />
  )
}

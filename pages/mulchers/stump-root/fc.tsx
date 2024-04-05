import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'FC'}
      image={'/stump-root/fc-cover.jpeg'}
      content={
        <>
          <P>
            The FC grinds stumps of trees, especially in plantations to be renewed, where stumps are all in a row. It
            then prepares the soil for the plantation of new trees. It eliminates tree stumps up to a depth of 27 cm
            [11"] by grinding them into small pieces and mixing them with the soil. Very strong frame, for a very long
            life with reinforced frame made of wearresistant steel. Chassis with internal replaceable plates. New
            generation patented rotor, more exposed for tilling the soil, with efficient hammer combination of the new
            type, MONO PROTECT™ and MONO EXTREME™ with additional tungsten carbide inserts at points most subject to
            wear, makes the stump grinder FC very resistent. Anti-wear hammer supports protect the hammers and
            rotorshaft. The exchange of the tools is very simple. Available working width: 45, 60 cm [18", 24"].
          </P>
        </>
      }
      featureTitle={'FC - standard version'}
      features={[
        'Grinds stumps and roots as deep as 27 cm [11”] below the surface',
        'Grinds wood up to 25 cm [10”] Ø',
        'Rotor: combination of tungsten carbide tips hammers MONO PROTECT™ + MONO EXTREME™; anti-wear hammer supports',
        'Robust reinforced chassis',
        '2 rows of tempered COUNTER CUTTERS',
        'ISO 3-point rear linkage cat. 2 central fixed',
        '1000 rpm gearbox with freewheel',
        'Doubledrive with 10 belts',
        'Hydraulically operated hood',
        'Protection with double chains',
        'Adjustable skids',
        'Colour: red RAL 3020',
      ]}
      options={[
        'PTO shaft',
        'Support wheels, adjustable',
        'Compacting roller, adjustable',
        'Skids for material feeding',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stump-root-grinders/fc.html?depliant=547"
    />
  )
}

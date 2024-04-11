import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Midiforst dt'}
      image={'/forestry/midiforst-dt-cover.jpeg'}
      content={
        <>
          <P>
            This tree shredder/mulcher comes with a two end belt drive. SEPPI MIDIFORST dt mulches wood up to 30 cm
            [11.8”] Ø. The components of the transmission are protected under a door that may be opened for servicing.
            The SEPPI MIDIFORST dt mulcher is well protected from dirt, dust, water and strikes. Fixed hammer rotor in
            standard version with optimized combination of fiexed tools MINI DUO + MONO EXTREME and bolt-on-rotor shaft.
          </P>
          <P>
            Ideal for fire breaks, vegetation management, right-of-way, land clearing, site preparation, pipelines and
            power transmission lines as well as for road side maintenance. Available working width: 175, 200, 225 cm
            [69", 79", 89"].
          </P>
          <P>
            ADAM - The tilting of the mulcher by gear tracking with PTO shaft alignment. With the W-shaped angles the
            range of motion increases and the mulcher can be moved up- and downwards even higher. This angular
            adjustment protects the PTO shaft and the input shaft even at high loads and supports an ideal adaptation to
            the conditions of the roads. Advantages: longer service life of PTO and input-shaft, even deeper digging,
            working with an hydraulic alignment system is easier and faster. Available working width: 200, 225, 250 cm
            [79", 89", 98"]. New: rotor shaft with tools with a single tooth in very aggressive carbide - the MONO TIP
            V-LOCK. This rotor is even more efficient on large logs and thicker wood. The advantages of the new MONO TIP
            V-LOCK rotor are: - Less rotor wear - Better balancing - Tool change made even easier - Optimised connection
            between tool and holder
          </P>
        </>
      }
      featureTitle={'Midiforst dt - standard version'}
      features={[
        'Mulches wood up to 30 cm [11.8”] Ø',
        'Standard rotor: combination of fixed tungsten carbide hammers MINI DUO + MONO EXTREME; anti-wear hammer support',
        'Working speed 0-5 km/h',
        'ISO 3-point rear linkage cat. 2 central fixed',
        'Robust reinforced chassis',
        '5 rows of tempered COUNTER CUTTERS',
        '1000 rpm gearbox with freewheel & cross shaft',
        'Input shaft 1 3/4” Z=6',
        'Dual side transmission',
        '10 belts (2x5)',
        'Hydraulically operated hood',
        'Support skids, adjustable in height',
        'Front and rear protection: chains',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Fixed hammer rotor MONO TIP V-LOCK + PROTECT',
        'Front attachment',
        'Mechanical or hydraulic guard frame',
        'Centrifugal clutch',
        'ADAM™ - the tilting of the mulcher with PTO shaft alignment while keeping equal and W-shaped PTO shaft angles',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/pto-forestry-mulchers/midiforst-dt.html?depliant=595"
    />
  )
}

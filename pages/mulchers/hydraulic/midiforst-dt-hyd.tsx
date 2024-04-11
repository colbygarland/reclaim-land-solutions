import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Midiforst DT HYD'}
      image={'/hydraulic/midiforst-dt-hyd-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI forestry mulcher MIDIFORST dt hyd with universal interface is the right machine for medium sized
            prime movers of up to 290 HP. Suitable for almost hydraulic drive tractors and prime movers! This SEPPI tree
            shredder - mulcher comes with a two belt drive. MIDIFORST dt hyd mulches wood up to 30 cm [11.8”] Ø. The
            components of the transmission are protected under a door that may be opened for servicing. The SEPPI
            MIDIFORST dt mulcher is well protected from dirt, dust, water and strikes. Patented fixed tungsten carbide
            hammer rotor in standard version with optimized combination of fiexed tools MINI DUO + MONO EXTREME and
            bolt-on-rotor shaft.
          </P>
          <P>
            Very strong frame, for a very long life with reinforced frame made of wearresistant steel S420 with 5 rows
            of tempered counter knives for a perfect mulching result. Equipped with a hydraulic system with 2 hydraulic
            motors of choice. Standard with V-belt drive, optional with gear belts CARBONCHAIN; recommended when working
            in environments with extreme temperatures (hot-cold). Universal attachment for hyd. tractors, dozers,
            loaders of different brands. Available is the SEPPI MIDIFORST dt hyd with different types of Guard frames
            for felling operations and to protect the tractor. New option: rotor shaft V-LOCK with tools with a single
            tooth in very aggressive carbide - the MONO TIP. This rotor is even more efficient on large logs and thicker
            wood. Available working width: 200, 225, 250 cm [79", 89", 98"].
          </P>
        </>
      }
      featureTitle={'Midiforst dt hyd - standard version'}
      features={[
        'Mulches wood up to 30 cm [11.8”] Ø',
        'Working speed 0-5 km/h',
        'Forestry Rotor with tungsten CARBIDE inserts hammers MINI DUO + lateral EXTREME',
        'Anti-wear hammer support',
        'Bolt-on-rotor shaft',
        'Universal attachment interface or central fixed ISO 3-point linkage Cat. 2',
        '5 rows of tempered COUNTER CUTTERS',
        'Prepared for transmission with 2 hydraulic motors of choice',
      ]}
      options={[
        'Rotor V-LOCK with fixed hammers with tungstene carbide tips',
        'Guard frame of choice',
        '2 hyd. motors with relief valves, different types at choice',
        'Automatic variable displacment motors M-BOOST',
        'Interface plate',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/mulchers-for-compact-loaders/midiforst-dt-hyd.html?depliant=643"
    />
  )
}

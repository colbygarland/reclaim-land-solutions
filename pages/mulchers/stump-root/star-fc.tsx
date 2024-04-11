import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Star FC'}
      image={'/stump-root/star-fc-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI STAR-FC Multi-purpose tiller: grinds stumps and wood, crushes stones and tills the soil, in order
            to set up best conditions for replanting. It eliminates tree stumps up to a depth of 30 cm [12"] by grinding
            them into small pieces and mixing them with the soil. Very strong frame, for a very long life with
            reinforced frame made of wearresistant S420 steel. Chassis with internal replaceableWEAR PLATES. rows of
            tempered COUNTER CUTTERS inside the chassis gives a perfect result while mulching. New generation patented
            rotor V-LOCK, more exposed for tilling the soil, with efficient hammer combination of the new type, ULTRA
            MONO PROTECT + lateral EXTREME with tungsten carbide tips at points most subject to wear, makes the stump
            grinder STAR-FC very resistent. Anti-wear hammer supports protect the hammers and rotorshaft. The exchange
            of the tools is very simple. The security and longlife of the transmission guaranteed by dual safety
            mechanism with friction clutches and automatic torque limiter. NEW! SEPPI now applies an ISOBUS control
            system as standard on many of our machines! The ISOBUS socket of the mulcher is connected to the tractor
            allowing some functions to be monitored and controlled directly by the on-board computer in the tractor.
            Available working width: 75, 100 cm [30", 39"].
          </P>
        </>
      }
      featureTitle={'Star FC - standard version'}
      features={[
        'Grinds and tills as deep as 30 cm [12”] below the surface',
        'Grinds and mulches wood up to 40 cm [16”] Ø',
        'Crushes stones up to 15 cm [6”] Ø',
        'Rotor V-LOCK with tungsten CARBIDE inserts hammers ULTRA MONO PROTECT V-LOCK+ lateral EXTREME',
        'Anti-wear hammer support',
        'Bolt-on-rotor shaft',
        'Working speed 0-2 km/h',
        'ISO 3-point rear linkage cat. 2 central fixed',
        'Double drive',
        '1000 rpm gearbox with freewheel',
        'Parallel gear transmission with integrated cooling circuit',
        'ISOBUS system (temperature, cooling, hour counter) - requires a tractor with ISOBUS terminal (or see optional*)',
        'Hydraulically operated hood',
        'Protection: double chains',
        'Narrow in-depth skids',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft with torque limiter',
        '*ISOBUS terminal for ISOBUS-ready tractors',
        '*RETROFIT - ISOBUS compatible system for older tractors',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stump-root-grinders/star-fc.html?depliant=563"
    />
  )
}

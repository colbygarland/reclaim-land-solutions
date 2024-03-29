import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Starsoil'}
      image={'/stone-crushers/starsoil-cover.jpeg'}
      content={
        <>
          <P>
            This versatile SEPPI soil tiller and forestry tiller STARSOIL, suitable for tractors with power class
            between 180 and 310 HP is equipped with a new traction system that simplifies work by ensuring greater
            efficiency: soil tilling to a depth of 40 cm, crushing stones with a min. diameter of 30 cm and mulching
            wood with a diameter of 40 cm. Thanks to the 2SPEED POWERSHIFT system, the rotor speed is controlled
            directly on the ISOBUS terminal.
          </P>
          <P>
            The operator can change the setting during operation - fast gear for mulching on the surface - slow gear for
            working in the ground - the tractor PTO remains unchanged at 1000 rpm. Working at this PTO speed protects
            the driveline and at the same time ensures better work when mulching wood (in fast gear) and crushing stone
            and tilling soil (in slow gear). A further advantage is an integrated cooling system of the lateral gear
            transmission (standard) and the main gearbox (also combined with the new 2SPEED version). The cooling
            function can easily be activated from the tractor cab using the control device and the temperature can be
            monitored constantly through the display. This eliminates the risk of overheating of the transmission. The
            parallel gear transmission offers reduced width and smaller footprint. The difference between total width
            and operating width is minimal.
          </P>
          <P>
            NEW! SEPPI now applies an ISOBUS control system as standard on many of our machines! The ISOBUS socket of
            the mulcher is connected to the tractor allowing some functions to be monitored and controlled directly by
            the on-board computer in the tractor. Basic features of SEPPI STARSOIL: high performance with minimum energy
            consumption thanks to its lightweight construction, frame covered with replaceable anti-wear plates made of
            Hardox®. New generation patented rotor V-LOCK with efficient SEPPI hammer combination of the new type, ULTRA
            MONO PROTECT + MONO & ULTRA MONO EXTREME with additional tungsten carbide inserts at points most subject to
            wear. A further piece of news is the improvement of the roller which now has a larger diameter and a higher
            number of toothed rings and is thus able to penetrate the soil more easily, ensuring a smooth movement of
            the roller. The bearing was reinforced and built into the roller to prevent wear. The new roller scraper
            allows for the removal of soil residue (very useful in the case of wet soil).
          </P>
          <P>
            The innovative ADAM cardan alignment system (in standard version), to improve the adaptation of the machine
            to the soil. This feature of "angular compensation" is used to protect the cardan shaft and the tractor PTO
            from unnecessary stress caused by differences in soil. Available working width: 225, 250 cm [89", 98"].
          </P>
        </>
      }
      featureTitle={'Starsoil - standard version'}
      features={[
        'Crushes stones up to 30 cm [12”] Ø',
        'Mulches wood up to 40 cm [16”] Ø',
        'Tills the soil as deep as 40 cm [16”] and deeper, depending on the working conditions',
        'Rotor V-LOCK: combination of tungsten carbide inserts hammers ULTRA MONO PROTECT + EXTREME; anti-wear hammer support',
        'Bolt-on-rotor shaft',
        'Working speed 0-2 km/h',
        'Required creeper gear: max. 0,5 km/h',
        'Chassis made of high tensile and wear-resistant steel AR400',
        'with internal replaceable WEAR PLATES',
        'ISO 3-point rear linkage cat. 3 central fixed',
        'Gearbox 1000 rpm with freewheel',
        'Input shaft 1 3/4” Z=20',
        'ADAM alignment system with W-angles central greasing system',
        'Electrical temperature monitoring and cooler control',
        'Double drive with parallel gear transmission, integrated cooling circuit',
        'Integrated torque limiter',
        'Hydraulically operated hood',
        'Narrow in-depth skids',
        'Protection with double chains',
        '2 rows of tempered COUNTER CUTTERS; anvil bar and crushing grid to crush stones',
        'Colors: charcoal RAL7021| red RAL3020',
      ]}
      options={[
        'PTO drive shaft',
        '2SPEED POWERSHIFT gear with 2 speeds and integrated cooling + ADAM system',
        'ISOBUS control fpr tractors with ISOBUS and terminal ',
        'ISOBUS terminal for ISOBUS-ready tractors',
        'RETROFIT - ISOBUS compatible system for older tractors',
        'Hydraulic operated compacting roller STARSOIL II for depth control, may also beused as guard frame incl. roller scraper',
        'Adjustable grader blade, incl. pressure gauge and lateral extension',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stone-crushers-soil-tillers/starsoil.html?depliant=762"
    />
  )
}

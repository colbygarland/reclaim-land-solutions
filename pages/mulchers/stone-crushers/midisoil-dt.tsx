import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Midisoil DT'}
      image={'/stone-crushers/midisoil-dt-cover.jpeg'}
      content={
        <>
          <P>
            With the SEPPI universal STONE CRUSHER and soil tiller MIDISOIL dt - the little brother of the STARSOIL, you
            can do many things: crush rock, stabilize the soil, grind stumps, mulch wood, and recycle paving material.
            The MIDISOIL dt is an new multifunctional crusher-tiller-mulcher for middle PTO-tractors (100 - 170 hp). It
            comes with a new, innovative two-option linkage hitch, with a stronger transmission and additional crushing
            bars.
          </P>
          <P>
            MIDISOIL dt can work at 1000 rpm with 1 or 2 speeds (opt). That means that the rotor speed can be changed
            depending on the job from approx. By switching a mechanical lever on the main gearbox, the speed of the
            rotor can be reduced from fast to slow, while the tractor PTO speed remains set at 1000 rpm. Working at this
            PTO speed protects the driveline and at the same time ensures better work when mulching wood (in fast gear)
            and milling stone and soil (in slow gear).
          </P>
          <P>
            In the version with the 2SPEED gear with 2 speeds and integrated cooling the MIDISOIL dt (225 and 250 cm
            working width) is equipped with an ADAM™ alignment system - the tilting of the mulcher with PTO shaft
            alignment while keeping equal and W-shaped PTO shaft angles. This prevents damage to the PTO shaft and
            supports an ideal adjustment to the conditions of the ground -{'>'} faster working, better results, longer
            lifetime of the PTO shaft, and higher lifting.
          </P>
          <P>
            NEW! Standard is the ISOBUS system for the control of temperature, cooling and also the hour counter.
            Directly for the ISOBUS terminal in the tractor cab. SEPPI M. also offers an additional compatible ISOBUS
            system for older tractors that do not have an ISOBUS terminal (RETROFIT)!. Available working widths: 175,
            200, 225, 250 cm [69", 79", 89", 99"].
          </P>
        </>
      }
      featureTitle={'Midisoil DT - standard version'}
      features={[
        'Crushes stones up to 25 cm [10”] Ø',
        'Mulches wood and stumps up to 25 cm [10”] Ø',
        'Tills the soil as deep as 25 cm [10”] and deeper, depending on the working conditions',
        'Rotor with tungsten CARBIDE inserts hammers SUPER MONO PROTECT + lateral EXTREME',
        'Anti-wear hammer support',
        'Tempered COUNTER CUTTERS',
        'Bolt-on-rotor shaft',
        'Working speed 0–2 km/h (Required creeper gear: max. 0,5 km/h)',
        'ISO 3-point rear linkage cat. 3 central fixed',
        '1000 rpm gearbox',
        'Input shaft: 1 3/4” Z=6',
        'Double drive with parallel gear transmission and integrated cooling circuit',
        'Integrated torque limiter',
        'Hydraulically operated hood with grader blade',
        'Adjustable anvil bar & crushing grid to adjust the degree of crushing',
        'Replaceable anti-wear chassis AR400',
        'Narrow in-depth skids',
        'Protection: double chains',
        'Colors: red RAL3020 + charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        '2 SPEED gear with integrated cooling + ADAM alignment system (available for 225 and 250 cm working width)',
        'ISOBUS control for tractors with ISOBUS and terminal',
        'Hydraulically operated compacting roller for depth control, may also be used as guard frame',
        'Adjustable grader blade',
        'Adjustable support skids foron-surface work',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stone-crushers-soil-tillers/midisoil-dt.html?depliant=746"
    />
  )
}

import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Maxisoil'}
      image={'/stone-crushers/maxisoil-cover.jpeg'}
      content={
        <>
          <P>
            All in one - MAXISOIL! The SEPPI MAXISOIL is a multifunctional tiller-mulcher. It tills soil and roads,
            mills stumps and mulches wood. It is ideal for maintaining dirt roads, for land reclamation, for the
            preparation of ski slopes, to clean up slash after felling operations.
          </P>
          <P>
            SEPPI MAXISOIL mulcher is suitable for tractors with a power class between 300 and 450 HP. The patented
            rotor V-LOCK has an optimised combination of new ULTRA MONO PROTECT + MONO & ULTRA MONO EXTREME fixed
            hammers with tungsten carbide inserts. The machine is fitted as standard with a transmission cooling system
            integrated with the remote temperature control device that eliminates the risk of overheating of the
            transmission if the work is interrupted. Double CARBONCHAIN gear belts provide high strength and length
            stability with high flexibility. The frame is fully protected with interchangeable Hardox® wear-proof
            plates. In standart version is ADAM - cardan alignment system to improve how the machine adapts to the soil.
            This SEPPI ''angular compensation'' feature is used to protect the cardan shaft and the tractor PTO and
            MAXISOIL from unnecessary stress caused by differences in soil. Adjustable crushing bar and grill to obtain
            the desired degree of crushing and hydraulically adjustable hood are also the basic features.
          </P>
          <P>
            The biggest forestry tiller and stone crusher SEPPI MAXISOIL 350 in the world: Following a request from our
            North American operators, we developed a mulcher-tiller-crusher with extreme dimensions. Following
            successful tests, SEPPI M. can present the MAXISOIL 350 tiller-crusher with unprecedented dimensions. Thanks
            to its sturdiness and advanced know-how, a powerful, safe and reliable machine with top operating efficiency
            levels has been created. NEW by MAXISOIL! 2SPEED POWERSHIFT - 2-speed transmission already known from the
            past on the SUPERSOIL and STARSOIL models. The parallel 2-speed gearbox (the so-called 2SPEED version).
            Thanks to the 2SPEED POWERSHIFT system, the rotor speed is controlled directly on the ISOBUS terminal.
          </P>
          <P>
            The operator can change the setting during operation - fast gear for mulching on the surface - slow gear for
            working in the ground - the tractor PTO remains unchanged at 1000 rpm. Working at this PTO speed protects
            the driveline and at the same time ensures better work when mulching wood (in fast gear) and crushing stone
            and tilling soil (in slow gear). NEW! SEPPI now applies an ISOBUS control system as standard on many of our
            machines! The ISOBUS socket of the mulcher is connected to the tractor allowing some functions to be
            monitored and controlled directly by the on-board computer in the tractor. The powerful MAXISOIL is equipped
            with a water injection system to bind and stabilize the soil and cool the hammers. Hydraulic controlled
            roller (option): down as compacting roller / depth control, up usable as guard frame Available working
            width: 250, 350 cm [ 98", 138"].
          </P>
        </>
      }
      featureTitle={'Maxisoil - standard version'}
      features={[
        'Crushes stones up to 50 cm [20“] Ø',
        'Mulches wood up to 50 cm [20“] Ø',
        'Tills the soil as deep as 35 cm [14“] and deeper, depending on working conditions',
        'Rotor V-LOCK with combination of fixed hammers ULTRA MONO PROTECT + lateral EXTREME',
        'Anti wear hammer support',
        'Bolt-on-rotor shaft',
        'Working speed 0-2 km/h',
        'ISO 3-point rear linkage cat. 3 & 4 central fixed',
        'Gearbox 1000 U/min with integrated cooling',
        'Dual side CARBONCHAIN gear belt drive',
        'Integrated torque limiter',
        'ADAM alignment system ',
        'ISOBUS system (temperature, cooling, hour counter) - requires a tractor with ISOBUS terminal (or see optional*)',
        'Chassis made of high tensile and wear-resistant steel AR400 with internal replaceable WEAR PLATES',
        '2 rows of tempered counterknives',
        'Anvil bar and crushing grid to crush stones',
        'Hydraulically operated hood',
        'Chain protection',
        'Narrow in-depth skids',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft - series SK',
        'Fixed hammer rotor ULTRA TIP V-LOCK',
        '2SPEED POWERSHIFT gear with 2 speeds abd integrated cooling system and incl. ISOBUS system',
        'ISOBUS control for tractors with ISOBUS and terminal',
        'ISOBUS terminal for ISOBUS-ready tractors',
        'RETROFIT - ISOBUS compatible system for older tractors',
        'Hydraulically operated compacting roller, also suitable for depth control',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stone-crushers-soil-tillers/maxisoil.html?depliant=722"
    />
  )
}

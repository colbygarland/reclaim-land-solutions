import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Starforst'}
      image={'/forestry/starforst-cover.jpeg'}
      content={
        <>
          <P>
            The tree shredder / mulcher STARFORST is a compact and powerful SEPPI forestry mulcher with an especially
            aggressive new generation patented rotor with efficient combination of fixed hammers type MINI DUO + MONO
            EXTREME with tungsten carbide tips. Innovative 3-point linkage with self-aligning mechanism makes it easy to
            maneuver. Very strong frame, for a very long life with reinforced frame made of wearresistant steel. High
            performance with minimum energy consumation thanks to its lightweight construction. This versatile SEPPI
            forestry mulcher STARFORST is suitable for PTO-tractors between 180 and 350 HP.
          </P>
          <P>
            Strong & reliable for professional vegetation management such as land clearing, right-of-way management,
            site prep, creation of fire breaks, road side maintenance, pipeline and power transmission maintenance.
            SEPPI STARFORST - The top choice in forestry mulchers is showing itself in a whole new light. The model,
            which has been popular for over 10 years, has undergone major changes. The new STARFORST with its new
            overall working width is perfectly suited to tractors and road traffic. And so the SEPPI STARFORST is
            relaunched with working widths of 210, 235 and 260 cm. Every centimetre of the tractor’s width is covered,
            and the ground is worked uniformly. But this is just one of the innovations that distinguishes STARFORST.
            Another novelty is the decision by SEPPI M. to introduce a new rotor shaft with tools with a single tooth in
            very aggressive carbide - MONO TIP V-LOCK. This rotor is even more efficient on large logs and thicker wood.
            A new system of tools is also being introduced; the V-Lock!
          </P>
          <P>
            In addition to restyling the design and tilting system ADAM for the transmission, already found on the
            standard version, the forestry machine has been further equipped against wear. Inside the casing there are
            anti-wear plates in HARDOX® material, which can be substituted. This feature has already been applied to
            SEPPI M. stone crushers and tillers. In addition, the protection belts with material deflector and tempered
            steel anti-wear skids offer further protection to the machine. In this simple, functional and practical
            design there is now that much more power! Available working width: 210, 235, 260 cm [83", 93", 102"].
          </P>
        </>
      }
      featureTitle={'Starforst - standard version'}
      features={[
        'Mulches wood up to 40 cm [16”] Ø',
        'Helical rotor with tungsten CARBIDE inserts hammers MINI DUO + lateral EXTREME',
        'Anti-wear hammer support',
        'Bolt-on-rotor shaft',
        'Working speed 0 - 5 km/h',
        'ISO 3-point rear linkage cat. 3 central articulated',
        '1000 rpm gearbox with freewheel',
        'ADAM™ alignment system - The tilting of the mulcher with PTO shaft alignment while keeping equal and W-shaped PTO shaft angles; with greasing system',
        'Dual side transmission with 2 x 5 belts',
        'Hydraulically operated hood',
        '5 rows of tempered COUNTER CUTTERS',
        'Support skids, adjustable in height',
        'Front and rear protection: quadruple/ single chains',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Fixed knife rotor MONO TIP V-LOCK',
        'Mechanical or hydraulic guard frame',
        'Hydraulic guard frame with tools',
        'Centrifugal clutch for slow start and protection of the PTO shaft',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/pto-forestry-mulchers/starforst.html?depliant=603"
    />
  )
}

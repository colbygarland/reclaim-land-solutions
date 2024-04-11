import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Midipierre DT'}
      image={'/stone-crushers/midipierre-dt-cover.jpeg'}
      content={
        <>
          <P>
            With this SEPPI stone crusher you can do so many things: crush rock, stabilize the soil and recycle paving
            material as solid road base. Save huge material and material transport costs with this very efficient
            machine!
          </P>
          <P>
            The SEPPI MIDIPIERRE dt is an upgraded version of the former MIDIPIERRE way. It comes with a new, innovative
            two-option linkage hitch, with a stronger transmission and additional crushing bars. The highlight is a new
            and more inclinable grader blade with pressure gauge. Very strong frame, for a very long life with
            reinforced frame made of wear-resistant steel. Available with Grader blade (option) with hydr. height and
            rotation adjustment and hydraulic-pneumatic damping incl. lateral extensions.
          </P>
          <P>
            SEPPI MIDIPIERRE dt is equipped with a new generation patented rotor with efficient tool combination of the
            new type, SUPER DUO PROTECT™ and SUPER DUO EXTREM™ with additional tungsten carbide inserts at points most
            subject to wear. Anti-wear knife supports. Very strong chassis, for a very long life with reinforced chassis
            made of high tensile and wear-resistant steel AR400 with internal replaceable plates. Technical requirements
            for operating a SEPPI stone crusher on a tractor are creep speeds (max. 0,5 km/h) and a hydraulic
            three-point tractor linkage.
          </P>
          <P>Available working width: 175, 200, 225 cm [69", 79", 89"].</P>
        </>
      }
      featureTitle={'Midipierre DT - standard version'}
      features={[
        'Crushes stones up to 20 cm [8”] Ø',
        'Tills the soil as deep as 12 cm [4.7”] and deeper, depending on the working conditions',
        'Rotor with tungsten CARBIDE inserts hammers SUPER DUO PROTECT + lateral EXTREME; anti-wear hammer support',
        'Bolt-on-rotor shaft',
        'Working speed 0–2 km/h',
        'ISO 3-point rear linkage cat. 2 central fixed; Asymmetric linkage hitch for two attachment options',
        '1000 rpm gearbox',
        'Dual side transmission with 2 x 6 belts',
        'Hydraulically operated hood',
        'Chassis with internal replaceable plates made of wear-resistant steel',
        'Adjustable anvil bar & crushing grid to adjust the degree of crushing',
        'Pointed guide skids for collecting material',
        'Side skids for collecting material',
        'Front and rear protection: double chains',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Adjustable grader blade, includes pressure gauge and lateral extensions',
        'Hydraulic top link',
        '750 rpm or 540 rpm gearbox',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stone-crushers-soil-tillers/midipierre-dt.html?depliant=738"
    />
  )
}

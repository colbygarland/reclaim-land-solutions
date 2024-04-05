import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'E20 Direct'}
      image={'/excavator/e20-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI E20 direct is a powerful forestry mulcher with a direct drive. This lightweight and compact
            mulching head were designed, among other things, for use in the railway industry. The E20 direct is the
            ideal solution for various tasks, especially in the forest and on areas with thick stumps and dense
            woodlands - whether it's after clearing in the forest or for the maintenance of gas and power lines, cleanup
            after timber harvesting. This SEPPI excavator mulcher E20 direct mulches stumps and logs up to 20 cm in
            diameter.
          </P>
          <P>
            A distinctive feature of this model is the direct coupling of the engine to the rotor. This ensures a
            constant torque transmission on the one hand, and on the other hand, eliminates the need for wear-prone
            V-belts, thereby avoiding failures due to drive overload. Due to the direct connection, the engine is
            partially integrated into the rotor, effectively absorbing vibrations and shocks. The minimal clearance and
            its self-lubrication function contribute to a long lifespan. The rotor was specifically designed to
            withstand strong lateral loads and works reliably even in vertical positions. With state-of-the-art
            technology and robust construction, our powerful forestry mulcher provides outstanding performance and
            reliability in any environment. Available in working widths: 100, 125 150, 200 cm [39", 49", 59", 79"]
          </P>
        </>
      }
      featureTitle={'E20 Direct - standard version'}
      features={[
        'Mulches vegetation up to 20 cm [8”] Ø',
        'For excavators from 12 to 21 t [26-42k lb]',
        'Rotor with tungsten CARBIDE inserts hammers MINI DUO; anti-wear hammer support',
        'Chassis made of high tensile and wear-resistant steel AR400',
        'LOW PROFILE',
        'Universal attachment interface',
        'Direct transmission',
        'Automatic variable displacement motor M-BOOST 60-80 cm³',
        'Rear protection with chains',
        'Hydraulically adjustable hood',
        'Reinforced support skids SANDWICH SKIDS',
        '5 rows of tempered COUNTER CUTTERS (3 chassis, 2 hood)',
        'Colors: charcoal RAL7021| red RAL3020',
      ]}
      options={[
        'CUT CONTROL rotor with gauge and MINI DUO hammer',
        'CUT CONTROL rotor with gauge and MINI BLADE tool',
        'Interface plate for excavator arm ',
        'Interface plate for spider excavator',
        '190° hydraulic rotation plate',
        'Electric valve for hood control with electrical controls',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers/e20-direct-ca.html?depliant=909"
    />
  )
}

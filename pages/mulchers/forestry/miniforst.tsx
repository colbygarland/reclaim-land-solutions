import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Miniforst'}
      image={'/forestry/miniforst-cover.jpeg'}
      content={
        <>
          <P>
            The forestry brush cutter MINIFORST may be fitted to small and medium horse power tractors. It mulches brush
            and wood up to 20 cm [7.9”] in diameter with ease! The hydraulic hood controls the degree of mulch. Standard
            rotor with forestry fixed hammer-MINI DUO rotor with tungsten carbide tips. Patent-registered hammer support
            with side protection. Ideal for small scale vegetation management and right-of-way maintenance. Available
            working width: 125, 150, 175, 200 [49", 59", 69", 79"].
          </P>
        </>
      }
      featureTitle={'Microforst pto - standard version'}
      features={[
        'Mulches brush and wood up to 20 cm [7.9”] Ø',
        'Helical rotor with tungsten CARBIDE inserts',
        'hammers MINI DUO',
        'Anti-wear hammer support',
        'Working speed 0-5 km/h',
        'ISO 3-point rear linkage cat. 2 central fixed',
        '1000 rpm gearbox with freewheel and through shaft',
        'Belt transmission with 5 belts',
        'Hydraulically operated hood',
        'Front and rear protection: double chains',
        '3 rows of tempered COUNTER CUTTERS',
        'Skids, adjustable in height by 2,5 cm [1”], reinforced with hard metal plates',
        'Colors: charcoal RAL7021| red RAL3020',
        'Delivery including transport rack',
      ]}
      options={[
        'PTO drive shaft',
        'Forestry fixed hammers rotor MINI BLADE',
        'Front attachment',
        '540 rpm gearbox',
        'Mechanical guard frame',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/pto-forestry-mulchers/miniforst.html?depliant=587"
    />
  )
}

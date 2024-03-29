import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Microforst CL'}
      image={'/hydraulic/microforst-cl-cover.jpeg'}
      content={
        <>
          <P>
            MICROFORST cl - the ideal machine as compliment for the common attachments that go with a standard flow
            compact loader. This small, but dynamic forestry mulcher allows gardeners and landscapers to clean up
            before, during and after their job; townships use them for the cleaning of brush in urban areas;
            construction companies, save themselves from recycling organic material before starting a construction site,
            farmers are able to clean up the surroundings of their fields or mulch the bigger pruning, and even
            contractors sometimes prefer smaller machine to access tight, swampy or steeper areas where a bigger skid
            steer loader would be too heavy.
          </P>
          <P>
            The standard rotor CUT CONTROL with MINI DUO hammers with 2 tungsten carbide tips providing high
            performance, long lifetime and ensures low and easy maintanance. CUT CONTROL rotors are the latest
            generation of rotors with Seppi M. MINI DUO cutting tools and the newly designed cutting depth limiter. Much
            like the raker on a chainsaw, the limiter controls depth of cut and helps to prevent rotor stall and ensures
            easy, high-quality mulching operation. As optional can be choosen rotor with MINI BLADE tool. Especially
            efficient on standing trees are MINI BLADE tools with its sharpened blade for a fast and clean cut of wood.
          </P>
          <P>
            MICROFORST cl requires hydraulic flow rates between 50 and 100 l/min. For the common applications of this
            machine, the variable displacement motor with 22-45 cm3 is the best choice. Thanks to specially desinged
            support skids which help guiding the mulcher the MICOROFORST cl works excellent in motion and inclination.
            Available working width: 125 cm [49”]
          </P>
        </>
      }
      featureTitle={'Microforst cl - standard version'}
      features={[
        'Mulches wood up to 13 cm [5”] Ø',
        'Working speed 0-5 km/h',
        'Chassis made of high tensile and wear-resistant steel AR400',
        'LOW PROFILE',
        'SAE skid steer attachment interface',
        'Transmission with 4 belts',
        'Pressure gauge',
        'Hydraulically operated hood',
        'Reinforced support skids, adjustable in height',
        'Rear protection with double chains',
        'CUT CONTROL rotor with tungsten CARBIDE inserts hammers MINI DUO and depth gauge',
        '1 row of replaceable tempered COUNTER CUTTERS',
        'Colors: red RAL3020 · charcoal RAL7021',
      ]}
      options={[
        'CUT CONTROL rotor with MINI BLADE tool and gauge',
        'Electric valve for hood control with controls',
        'Machine without hood',
        'Guard frame',
        'Variable displacement motor 22-45 cm³ with anticavitation valve',
        'Hoses with quick coupling for mulcher-loader connection ',
        'Special color',
        '1/2“ polycarbonate impact resistant shield for loader which replaces original glass shield ',
      ]}
    />
  )
}

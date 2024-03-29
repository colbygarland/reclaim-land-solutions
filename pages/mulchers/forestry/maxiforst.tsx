import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Maxiforst'}
      image={'/forestry/maxiforst-cover.jpeg'}
      content={
        <>
          <P>
            SEPPI MAXIFORST is a professional PTO forestry mulcher designed to be mounted on tractors from 300 to 500
            hp. The largest, strongest, most productive in the SEPPI M forestry mulcher range. A newly designed SEPPI
            MAXIFORST with improved features in cutting, reliability, ease of use using the latest technology and
            solutions in the industry. This result takes our new MAXIFORST to a whole new level.
          </P>
          <P>
            This new mulching machine is designed for use on PTO tractors with a power range from 300 to 500 HP,
            focusing on the key features of maximum wear resistance, optimal protection of the transmission of both the
            tractor and the machine, high working speed, cutting-edge technology and operator safety. Wear resistance is
            guaranteed by the high-quality steel construction, with the addition of HARDOX plates in the grinding
            chamber of the rotor housing and door, which can be easily replaced at the end of their life, a feature
            already widely adopted in our stone crushing machines. The sturdy steel skids now also have an
            interchangeable wear plate, so it will no longer be necessary to change the whole skid or lose time
            restoring it by welding with a filler. The transmission has been completely revamped. The central gear box
            has our patented ADAM alignment system, while the transmission of power to the rotor is guaranteed by the
            tried and tested dual system with five V-belts on each side. Optional is a new starting system with M-TURBO
            fluid couplings, which replace mechanical centrifugal clutches, and guarantee a smooth start of the rotor
            and greater reliability and protection from impacts on the tractor’s PTO. New optimized ventilation is also
            included, which combined with the integrated cooling system, protects the entire system from overheating,
            ensuring maximum lubrication and sealing performance of the components. The temperature can be kept
            controlled directly from the tractor, using ISOBUS technology, which is available as an option.
          </P>
          <P>
            The speed and quality of the cut are guaranteed by the rotor featuring our patented V-LOCK tool mounting
            system. The benefits of this system reduce rotor wear, provide better balance, easier and faster tool
            changeover, and increase cutting capacity for trees up to 60cm in diameter. The mounting of heavy-duty
            wear-resistant tools with tungsten carbide insert and more slender tips combined with five rows of tempered
            counter knives on the frame and door, delivers a finer, more uniform mulching performance. Available working
            width: 250, 300 cm [98", 118"].
          </P>
        </>
      }
      featureTitle={'Maxiforst - standard version'}
      features={[
        'Mulches wood up to 60 cm [24”] Ø',
        'Helical rotor with tungsten CARBIDE inserts hammers MINI DUO',
        'Anti-wear hammer support',
        'Working speed 0-5 km/h',
        'Bolt-on-rotor shaft',
        'Chassis made of high tensile and andwear-resistant steel with internal replaceable WEAR PLATES - NEW!',
        'Cat. 3 & 4 central fixed ISO 3-point rear linkage',
        '1000 rpm gearbox with freewheel',
        'ADAM™ alignment system - The tilting of the mulcher with PTO shaft alignment while keeping equal and W-shaped PTO shaft angles',
        'Dual side transmission with 2 x 5 belts',
        '5 rows of tempered COUNTER CUTTERS',
        'Integrated cooling circuit',
        'Hydraulically operated hood',
        'Patins d’appui, réglables en hauteur, renforcés par une plaque carbure interchangeable - NEW!',
        'Front & rear protection: triple / single chains',
        'Colour: red RAL3020 & charcoal RAL7021 - NEW!',
      ]}
      options={[
        'PTO drive shaft',
        'Fixed hammer rotor MONO TIP V-LOCK',
        'Fluid turbo coupling M-TURBO for a slow start and to protect the PTO shaft - NEW!',
        'Mechanical or Hydraulic guard frame - several types of choice',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/pto-forestry-mulchers/maxiforst.html?depliant=571"
    />
  )
}

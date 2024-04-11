import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'S7 Dyna'}
      image={'/flails/s7-dyna-cover.jpeg'}
      content={
        <>
          <P>
            The strength of these mulchers is particularly appreciated by agricultural and landscaping professionals.
            These flail mulchers are used not only in fruit and wine growing, but also for green space maintenance, and
            thanks to their sturdy structure in high-strength S420 steel, even in forestry.
          </P>
          <P>
            The rotor comes standard with high-quality multipurpose flails. The helical layout of the flails (HELIX
            rotor) ensures even power distribution. Thanks to the high rotor speed, results are optimal even at high
            travel speeds of up to 10 km/h.
          </P>
          <P>
            The two rows of tempered COUNTER CUTTERS are now interchangeable and can be easily replaced in case of wear.
            The standard chassis can be equipped with additional interchangeable WEAR PLATES for works in more difficult
            conditions, making it even more resistant. The protective chains are combined with the guards. As such,
            during travel, the guards tilt and move the chains, creating a barrier that prevents the material from
            getting jammed inside the chains, allowing it to pass through and be mulched by the rotor. Belt guard with
            deflector to reduce the risk of damage to plants and the machine itself.
          </P>
          <P>
            Even the rear hood has been further developed. The chassis is slightly more closed and the hood is fitted
            with a new manual adjustment system allowing it to be opened directly on-site, without the need for any
            tools. The height of the sturdy support roller is now easier to adjust, and the 4D bearing guarantees smooth
            and vibration-free working even on rough terrain. The result is a clean cut with higher working speeds,
            minimal consumption, simple maintenance and long machine life. Applications: in agriculture for orchards or
            vineyards, meadows, pastures, right-of-way management, creation of fire breaks, vegetation management,
            landscape maintenance, a.s.o.
          </P>
          <P>Available working width: 150, 175, 200, 225, 250, 275 cm [49", 59", 69", 79", 89", 98", 108"].</P>
        </>
      }
      featureTitle={'S7 dyna - standard version'}
      features={[
        'Mulches grass and prunings up to 7 cm [2.8“] Ø',
        'Helical rotor with flails ≤ 200: SMO · ≥ 225: SMW',
        'Working speed 3–10 km/h',
        'Chassis made of high tensile steel S420',
        'ISO 3-point rear linkage cat. 1&2 reversible - FRONT & REAR with two upper linkage points',
        'Linear hydraulic side shift ',
        'Gearbox with freewheel and through shaft ≤ 175: 540 rpm · ≥ 200: 1000 rpm',
        'Input shaft 1 3/8” Z=6',
        'Belt transmission',
        'Support roller, adjustable in height, reinforced bearings and roller 4D-Roller',
        'Rubber rear protection',
        'Front protection: metal flaps & chains',
        '2 rows of replaceable tempered COUNTER CUTTERS',
        'Left and right protection for plants',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Rotor with Y-knives without shackles',
        'Chassis with internal replaceable WAER PLATES',
        'Front protection with double chains',
        'Adjustable rear hood M-FLAP to set the degree of mulching',
        'Rubber gauge wheels',
        'Gearbox 540 rpm or 1000 rpm',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/s7-dyna.html?depliant=879"
    />
  )
}

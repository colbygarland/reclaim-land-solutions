import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'S7 Compact'}
      image={'/flails/s7-compact-cover.jpeg'}
      content={
        <>
          <P>
            S7 compact mulcher is specially designed for vineyard and orchads. This robust flail mulcher mulches grass
            and pruning up to 7 cm [2.8”] Ø like all S7 models. With its center of gravity close to the tractor and a
            hydraulic side shift it is a perfect solution for your vineyard and orchards.
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
            vineyards, vegetation management, a.s.o.
          </P>
          <P>Available working width: 150, 175, 200, 225 cm [49", 59", 69", 79", 89"].</P>
        </>
      }
      featureTitle={'S7 compact - standard version'}
      features={[
        'Mulches grass and prunings up to 7 cm [2.8”] Ø',
        'Working speed 3-10 km/h',
        'Chassis made of high tensile steel S420 with internal replaceable WEAR PLATES',
        'ISO 3-point rear linkage cat. 1 & 2',
        'Linear hydraulic side shift',
        'Gearbox with freewheel and through shaft ≤ 200: 540 rpm · 225: 1000 rpm',
        'Input shaft 1 3/8” Z=6',
        '4 belts transmission',
        'Welded belt housing',
        'Support roller, adjustable in height, reinforced bearings and roller 4D-Roller',
        'Rubber rear protection',
        'Front protection with metal flaps & chains',
        'Rotor wall thickness: 12,5 mm',
        'Triple helical rotor with flails HELIX ROTOR ≤ 200: SMO · 225: SMW',
        '2 rows of replaceable tempered COUNTER CUTTERS',
        'Left and right protection for plants',
        'Colors: charcoal RAL7021| red RAL3020',
      ]}
      options={[
        'PTO drive shaft',
        'Rotor with Y-knives without shackles',
        'Front protection with chains & chains',
        'Front rubber protection according to ISO 17101-2',
        'Roller scraper',
        'Rubber gauge wheels instead of roller',
        'Adjustable rear hood M-FLAP to set the degree of mulching',
        'Hydraulic adjustable rear hood M-FLAP',
        'Hood with rakes',
      ]}
      equipment={[
        'X-FAST single - coupling system for under-canopy equipment',
        'XSC - rotary mower - outrigger ',
        'XSA - cultivator ',
        'XSP - shoot remover ',
        'XAN - sweeper',
        'XID - herbicide spraying system ',
      ]}
    />
  )
}

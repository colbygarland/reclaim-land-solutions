import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'S7 Base'}
      image={'/flails/s7-base-cover.jpg'}
      content={
        <>
          <P>
            Roadsides, meadows, and pastures – this innovative mulcher meets the demands of professionals under various
            conditions. With its lightweight design, the S7 base model is suitable, among other things, for AEBI
            tractors. The mulcher's center of gravity is close to the tractor, making it particularly popular for use on
            steep slopes due to its stable position.
          </P>
          <P>
            The S7 base impresses with its simple design without lateral displacement, making it ideal for use in green
            areas, irrigation maintenance, and general landscape care. The S7 base is a flail mower for tractors from 50
            to 160 HP. It can be front or rear mounted, and the linkage is centered on the frame.
          </P>
          <P>
            HELIX ROTOR - Helical distributed and high resistant flails for universal use are for high cutting quality
            at uniformly distributed power. Double COUNTER CUTTERs inside the casing will give a perfect result mulch.
            The adjustable 4-D Roller with double tapered roller bearings ensures a long service life and low
            maintenance costs. The roller is positioned close to the rotor, which improves mulching on uneven ground and
            prevents scalping. The S7 base can be supplied with rabber gauge wheels.
          </P>
          <P>
            S7 base is equipped with adjustable rear hood M-FLAP with rubber protection to set the degree of mulching.
            WEAR PLATES inside of the chassis can be easily replaced after a job done in extrem hard conditions.
            Applications: in agriculture for orchards or vineyards, meadows, pastures, right-of-way management,
            vegetation management, road side maintenance, landscape maintenance a.s.o.
          </P>
          <P>Available working width: 150, 175, 200, 225, 250 cm [59", 69", 79", 89", 98"].</P>
        </>
      }
      featureTitle={'S7 base - standard version'}
      features={[
        'Mulches grass and prunings up to 7 cm [2.8”] Ø',
        'Triple helical rotor with flails HELIX ROTOR ≤ 200: SMO · ≥ 225: SMW',
        'Working speed 3–10 km/h',
        'Chassis made of high tensile steel S420 with internal replaceable WEAR PLATES',
        'ISO 3-point linkage cat. 1&2 reversible - FRONT & REAR ',
        'Gearbox 1000 rpm with freewheel and through shaft',
        'Input shaft 1 3/8” Z=6',
        '4 belt ransmission',
        'Welded belt housing',
        'Support roller, adjustable in height,reinforced bearings and roller 4D-Roller',
        'Rubber rear protection',
        'Front protection with metal flaps & chains',
        '2 rows of replaceable tempered COUNTER CUTTERS',
        'Left and right protection for plants',
        'Colors: charcoal RAL7021 | red RAL3020',
      ]}
      options={[
        'PTO shaft',
        'Rotor with knives Y ',
        '540 rpm gearbox',
        'Gearbox with automatic inverter and double freewheel for reversible tractors',
        'Adjustable rear hood M-FLAP to set the degree of mulching',
        'Hydraulic adjustable rear hood M-FLAP',
        'Additional 3-point linkage frame',
        'Roller scraper',
        'Rubber gauge wheels',
        'Hood with rakes',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/s7-base.html?depliant=859"
    />
  )
}

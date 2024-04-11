import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'SMWA Multipla'}
      image={'/flails/smwa-multipla.jpeg'}
      content={
        <>
          <P>
            Combined SEPPI mulchers type SMWA multipla reach working widths of as much as 6 m [236"]. This is ideal for
            large areas such as parks, airports, or uncultivated land. Three independent SEPPI mulchers, trailed on a
            chassis, perfectly follow the contours of the ground. The width and the strength of these large mulchers
            make it possible to mulch at a high speed, while leaving a clean result.
          </P>
          <P>
            The SMWA multipla comes with adjustable height control, even while the machine is working. All the settings
            are adjustable by remote control. Casing of all mulching heads is made of high-tensile steel. STOPSAFE™
            safety system, stops the rotor when the wing mowers are lifted.
          </P>
          <P>
            Combined machines like the SMWA multipla are made of 3 single mulchers type SMWA rev cf, liftable for
            transport and parking. With the STOPSAFE™ system it is possible to work with one or both wing units lifted,
            e.g. when working on narrow areas. The central mulcher has a 3-point linkage and can be used independently.
          </P>
          <P>Available working width: 500, 600 cm [197", 236"].</P>
        </>
      }
      featureTitle={'SMWA multipla - standard version'}
      features={[
        'Mulches grass and prunings up to 5 cm [2“] Ø',
        'Helical rotor with SMW flails',
        'Working speed 3-10 km/h',
        'Trailed machine with central mower and two wing mowers',
        'Central machine, for independant use with: SMWA rev cf',
        'Chassis made of high tensile steel S420',
        'Each mulcher with 2 rows of replaceble tempered counter cutters',
        'Gearbox 1000 rpm',
        'Input shaft 1 3/8” Z=6',
        'Belt transmission',
        'Adjustable rear hood M-FLAP to set the degree of mulching, with rubber protection',
        'Support roller, adjustable in height, reinforced bearing and roller',
        'STOPSAFE™ automatic clutch to stop the rotor when one mower is lifted from the ground',
        'Hydraulic system via tractor',
        'Functions of the hydraulic system with solenoid valves and remote control:',
        '- lifting the central, left and right machine',
        '- adjusting the height of cut',
        'Front protection with metal flaps',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft with freewheel & wide angle',
        'Rotor with SML flails',
        'Rotor with Y kniveson shackles',
        'Rear lamp kit with anti-collison bar',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/smwa-multipla.html?depliant=408"
    />
  )
}

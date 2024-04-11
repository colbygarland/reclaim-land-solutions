import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'SMWO'}
      image={'/flails/smwo-cover.jpeg'}
      content={
        <>
          <P>
            The SMWO is a compact and versatile flail mower for tractors from 30 to 90 HP with a large hydraulic side
            shift. The total displacement is 62 cm [24”]. It is suitable for mowing tall grass, prunings and light brush
            up to 5 cm [2"] in diameter. It is typically used in orchards or vineyards, but also on pastures and for
            landscape maintenance.
          </P>
          <P>Available working width: 135, 145, 155 cm [53", 57", 61"].</P>
        </>
      }
      featureTitle={'SMWO - standard version'}
      features={[
        'Mulches grass and prunings up to 5 cm [2”] Ø',
        'Helical rotor with SMW flails',
        'Working speed 3-10 km/h',
        'ISO 3-point rear linkage cat. 1 & 2',
        'P-SHIFT parallel linkage side shift',
        'Chassis made of high tensile steel S420',
        'Gearbox 540 rpm with freewheel and through shaft',
        'Input shaft 1 3/8” Z=6',
        'Belts: 3',
        'Adjustable rear hood M-FLAP to set the degree of mulching, with rubber protection',
        'Reinforced support roller, adjustable in height by 5 cm [2”]',
        'Front protection: metal flaps',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={['PTO drive shaft', 'Rotor with Y knives', 'Hydraulic side shift', '1000 rpm gearbox']}
      equipment={[
        'X-FAST single - coupling system for under-canopy equipment ',
        'XSC - rotary mower - outrigger ',
        'XSA - cultivator ',
        'XSP - shoot remover ',
        'XAN - sweeper ',
        'XID - herbicide spraying system',
        'And other options of choice.',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/smwo.html?depliant=372"
    />
  )
}

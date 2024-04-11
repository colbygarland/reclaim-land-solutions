import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'SMWA s'}
      image={'/flails/smwa-s-cover.jpeg'}
      content={
        <>
          <P>
            The SEPPI SMWA s is a mulching mower suitable for agricultural tractors from 30 to 90 HP. It comes standard
            with a reversible 3-point hitch and a linear hydraulic sideshift of 27 cm [11"] . This implement is
            particularly suitable for mowing agricultural fields like vineyards and orchards. It can mow tall standing
            grass, mulch pruning and remove brush up to 5 cm [2"] in diameter. It leaves nothing but a perfect cut.
          </P>
          <P>
            This versatile flail mulcher, which is sometimes called shredder or flail mower, is available in different
            working widths from 115 [45"] to 200 cm [89"]. Thanks to its reversible hitch, it is possible to fit the
            machine on the front or on the back of a tractor. The linear hydraulic side shift can be operated from the
            tractor to center the mower on the row or to reach further underneath the trees.
          </P>
          <P>
            The strong rotor with the universal SMW flails distributed in a helical pattern ensures high cutting quality
            and evenly distributed power absorption. The casing of the SMWA s is made of high-tensile steel and features
            two rows of counter cutters, which ensure a perfect mulching result. The adjustable roller with double
            tapered roller bearings guarantees a long service life and low maintenance costs. The roller is positioned
            close to the rotor to improve mowing on uneven ground and to prevent scalping. By means of the adjustable
            M-FLAP, the degree of mulching can be set to match the conditions so that the implement will always work at
            high efficiency and speed.
          </P>
          <P>Available working width: 115, 125, 135, 145, 155, 175, 200 cm [45", 49", 53", 57", 61", 69", 79"].</P>
        </>
      }
      featureTitle={'SMWA s - standard version'}
      features={[
        'Mulches grass and prunings up to 5 cm [2"] Ø',
        'Helical rotor with SMW flails',
        'Working speed 3-10 km/h',
        'ISO 3-point linkage cat. 1&2 reversible - FRONT & REAR',
        'Linear hydraulic side shift 27 cm [10.6"]',
        'Chassis made of high tensile steel S420',
        '540 rpm gearbox with freewheel and through shaft',
        'Input shaft 1 3/8" Z=6',
        'Belts: ≤ 155: 3 ; ≥ 175: 4',
        'Adjustable rear hood M-FLAP to set the degree of mulching, with rubber protection',
        'Reinforced support roller, adjustable in height by 5 cm [2"]',
        'Front protection: metal flaps',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Triple helical rotor with Y knives',
        '1000 rpm or 750 rpm gearbox',
        'Gearbox with automatic inverter and double freewheel for reversible tractors',
        'Front attachment',
        'Front protection with chain',
        'XAN - hyd. sweeper with 3 vanes',
        'XID - herbicide spraying system',
        'And other options of choice.',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/smwa-s.html?depliant=357"
    />
  )
}

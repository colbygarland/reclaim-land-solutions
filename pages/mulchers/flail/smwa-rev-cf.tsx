import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'SMWA rev cf'}
      image={'/flails/SMWA-rev-cf-23-0001.jpeg'}
      content={
        <>
          <P>
            The SEPPI <strong>SMWA rev cf</strong> is a mulching mower suitable for agricultural tractors from 30 to 90
            HP. It comes standard with a reversible 3-point hitch with two positions: centered or shifted to the right
            by 17 cm [6.7"].
          </P>
          <P>
            This implement is particularly suitable for mowing agricultural fields like vineyards and orchards and for
            landscape maintenance. It can mow tall standing grass, mulch pruning and remove brush up to 5 cm [2"] in
            diameter. It leaves nothing but a perfect cut.
          </P>
          <P>
            This versatile mulcher is available in different working widths from 115 [45"] to 225 cm [89"]. Thanks to
            its reversible hitch, it is possible to fit the machine on the front or on the back of a tractor. The strong
            rotor with the universal <strong>SMW flails</strong> distributed in a helical pattern ensures high cutting
            quality and evenly distributed power absorption. The casing of the <strong>SMWA rev cf</strong> is made of
            high-tensile steel and features two rows of counter cutters, which ensure a perfect mulching result. The
            adjustable roller with double tapered roller bearings guarantees a long service life and low maintenance
            costs. The roller is positioned close to the rotor to improve mowing on uneven ground and to prevent
            scalping. By means of the adjustable <strong>M-FLAP</strong>, the degree of mulching can be set to match the
            conditions so that the implement will always work at high efficiency and speed.
          </P>
          <P>Available working widths: 115, 125, 135, 145, 155, 175, 200 cm [45", 49", 53", 57", 61", 69", 79"].</P>
        </>
      }
      featureTitle={'SMWA Rev CF - standard version'}
      features={[
        'Mulches grass and prunings up to 5 cm [2"]',
        'Helical rotor with SMW flails',
        'Working speed 3–10 km/h',
        'ISO 3-point linkage category 1 & 2; centered, reversible;',
        'Chassis made of high tensile steel S420',
        'Manual side shift by 17 cm [6.7"]',
        '540 rpm gearbox with freewheel and through shaft',
        'Input shaft 1 3/8" Z=6',
        'Belts: ≤ 155: 3, ≥ 175: 4',
        'Reinforced support roller, adjustable in height by 5 cm [2"]',
        'Adjustable rear hood with rubber protection',
        'Front protection: metal flaps',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Rotor with Y knives',
        '1000 rpm or 750 rpm gearbox',
        'Gearbox with automatic inverter and double freewheel',
        'Front attachment',
        'Front protection with chain',
        'And other options of choice',
      ]}
      equipment={[
        'X-FAST single or double coupling for under-canopy equipment',
        'XSC - outrigger, rotary mower',
        'XSA - cultivator',
        'XSP - shoot remover',
        'XAN - sweeper',
        'XID - herbicide spraying system',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/smwa-rev-cf.html?depliant=347"
    />
  )
}

import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'SMWA slim'}
      image={'/flails/smwa-slim-cover.jpeg'}
      content={
        <>
          <P>
            The SMWA slim is a flail mulcher for tractors from 40 to 90 HP. It is characterized by an ultra slim belt
            drive with a low profile, which allows for high precision mulching in orchard and vineyard rows. The slim
            and low profile reduces the risk of touching and damaging the vines, trees, or branches. The narrow
            transmission is achieved by a combination of 3 plus 2 high power belts. This implement is reversible and
            features a linear hydraulic side shift.
          </P>
          <P>
            The strong rotor with the universal SMW flails distributed in a helical pattern ensures high cutting quality
            and evenly distributed power absorption. The casing of the SMWA rev cf is made of high-tensile steel and
            features two rows of counter cutters, which ensure a perfect mulching result. The adjustable roller with
            double tapered roller bearings guarantees a long service life and low maintenance costs. The roller is
            positioned close to the rotor to improve mowing on uneven ground and to prevent scalping. By means of the
            adjustable M-FLAP, the degree of mulching can be set to match the conditions so that the implement will
            always work at high efficiency and speed.
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
          <P>Available working width: 135, 145, 155, 175, 200, 225 cm [53", 57", 61", 69", 79", 89"].</P>
        </>
      }
      featureTitle={'SMWA Slim - standard version'}
      features={[
        'Mulches grass and prunings up to 5 cm [2"] Ø',
        'Helical rotor with SMW flails',
        'Working speed 3-10 km/h',
        'ISO 3-point linkage cat. 1 & 2 reversible',
        'Linear hydraulic side shift 27 cm [10.6"]',
        'Gearbox 540 rpm with freewheel and through shaft',
        'Input shaft 1 3/8" Z=6',
        '2+3 high power belts',
        'Reinforced support roller, adjustable in height by 5 cm [2"]',
        '2 rows of tempered counter cutters',
        'Adjustable rear hood M-FLAP to set the degree of mulching, with rubber protection',
        'Front protection: metal flaps',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft',
        'Helical rotor with Y flails',
        '1000 rpm gearbox',
        'Gearbox with automatic inverter and double freewheel for reversible tractors',
        'Front attachment',
        'Front protection with chains',
        'And other options of choice.',
      ]}
      equipment={[
        'X-FAST single or double - coupling system for under-canopy equipment',
        'XSC - outrigger, rotary mower',
        'XSA - cultivator',
        'XSP - shoot remover',
        'XAN - sweeper',
        'XID - herbicide spraying system',
      ]}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/smwa-slim.html?depliant=361"
    />
  )
}

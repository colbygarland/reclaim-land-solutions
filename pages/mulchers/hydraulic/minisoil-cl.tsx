import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Minisoil DT HYD'}
      image={'/hydraulic/minisoil-cl-cover.jpeg'}
      content={
        <>
          <P>
            Not only tractors with mechanical PTO that need universal equipment. The demand for equipment for compact
            loaders, tracked of the skid steer type, and for hydraulic tractors is increasing. The large selection of
            stone crushers and soil tillers from SEPPI M. makes it possible, depending on the application, to find the
            right device for your own needs.
          </P>
          <P>
            The new MINISOIL cl is a versatile stone crusher and forestry mulcher built with reduced dimensions and
            weights perfect for hydraulic skid steer type tractors (SAE Standard). A mulcher with a low, compact design,
            but powerful enough to tackle a variety of vegetation management in forestry, road maintenance, clearing and
            much more.
          </P>
          <P>
            The dual drive with two hydraulic M-BOOST piston engines with variable automatic displacement and high
            torque quickly adapts to work in different conditions. The high pressure and low rotor speed allow work to a
            depth of 10 cm and will crush stones up to 15 cm in diameter. All of this is possible thanks to the patented
            rotor with fixed tools protected by tungsten carbide reinforcements on the parts most exposed to wear.
          </P>
          <P>
            The machine is made using high-strength materials with interchangeable wear-resistant steel plates.
            Moreover, the mulching quality increases thanks to 3 rows of very strong crushing bars and 1 adjustable
            anvil bar. Therefore, stones or wood are chopped 3 times inside the frame before leaving the machine.
            Another important advantage of MINISOIL cl is its low profile, which optimises the operator's field of
            vision. The front, with a fixed hood, protects the rotor from the stones coming out and is clearly visible
            from the operator's position. The ground to be mulched can therefore be observed safely, working at the
            maximum speed and efficiency.
          </P>
          <P>
            POWER: A patented aggressive rotor fitted with highly efficient tungsten-carbide tipped hammers, maximum
            speed and efficiency LONG LIFE: This machine is built to last with a strong frame made of AR400
            wear-resistant steel. The hydraulic mulcher MINISOIL cl is well protected and has an optimal field of view
            from the driver's seat. PRODUCTIVITY: The patented rotor works in concert with counter cutters to produce a
            perfect mulching result. VERSATILITY: This multifunctional machine for skid steer loaders can mulch wood and
            stone above or below grade. Available working width: 150 [59"].
          </P>
        </>
      }
      featureTitle={'Minisoil cl hyd - standard version'}
      features={[
        'Crushes stones up to 15 cm [6"]',
        'Mulches wood up to 20cm [8”] Ø',
        'Mulcher for Compact loaders',
        'Rotor with tungsten CARBIDE inserts hammers SUPER DUO PROTECT + lateral EXTREME',
        'Anti-wear hammer support',
        'Chassis made of wear-resistant steel AR400',
        'Chassis with internal replacable WEAR PLATES',
        'SAE skid steer attachment interface',
        'Dual sided CARBONCHAIN gear belt drive',
        'automaitc variable displacement motor M-BOOST 60-80 cm³',
        'Pressure gauge',
        'Reinforced support skids',
        'Protection with chains',
        '3 crushing bars and 1 adjustable anvil bar',
        'Colors: red RAL3020 · charcoal RAL7021',
      ]}
      options={[
        'Hoses with quick coupling for mulcher-loader connection',
        'Special color',
        '1/2“ polycarbonate impact resistant shield for loader which replaces original glass shield',
      ]}
    />
  )
}

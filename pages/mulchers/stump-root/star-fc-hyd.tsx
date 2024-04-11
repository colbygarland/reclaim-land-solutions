import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Star FC Hyd'}
      image={'/stump-root/star-fc-hyd-cover.jpeg'}
      content={
        <>
          <P>
            The stump grinders made by SEPPI M. are strong and efficient machines. Wood and other vegetation will be
            tilled, ground finely and incorporated into the soil, where it will quickly decompose. The soil will be
            ready to plant or for other uses. Typical use of SEPPI stump grinders: · in agriculture and forestry they
            will grind and mulch stumps and roots of felled material and till the soil · in greenspace maintenance they
            will remove stumps from parks and road sides · in construction and energy they will eliminate stumps and
            roots from construction sites The SEPPI STAR-FC hyd is a multi-purpose stump grinder and soil tiller for
            excavators from 15-35 tons [30,000-70,000 lb]. It is ideal to grind stumps and roots, but also to crush
            stones, even at depth. With the aggressive patented rotor of new generation V-LOCK with efficient hammer
            combination of the new type, ULTRA MONO PROTECT + MONO & ULTRA MONO EXTREME with additional tungsten carbide
            tips STAR-FC hyd mulches wood up to 40 cm in diameter and crushes stones up to 15 cm, and tills as deep as
            30 cm below the surface. Very strong frame, for a very long life made of wearresistant steel with tempered
            counter knives for a perfect mulching result. CARBONCHAIN gear belts provide high strength and length
            stability with high flexibility. STAR-FC hyd has a very strong chassis S420 with replacable plates AR400 for
            a very long life. ISOBUS system (temperature, cooling, hour counter) - with ISOBUS terminal The
            multi-functionality is one of most important features of SEPPI M. machines. Available working width: 75,
            100, 125 [30", 39", 49"].
          </P>
        </>
      }
      featureTitle={'Star FC Hyd - standard version'}
      features={[
        'Grinds & mulches wood up to 40 cm [16”]Ø',
        'Crushes stones up to 15 cm [6”] Ø',
        'Tills as deep as 30 cm [12”] below the surface',
        'Rotor V-LOCK: combination of tungsten carbide tips hammers ULTRA MONO PROTECT + MONO & ULTRA MONO EXTREME',
        'Anti-wear hammer support',
        'Bolt-on-rotor shaft',
        'For excavators from 15-35 tons [30,000-70,000 lb]',
        'CARBONCHAIN Gear belt drive (model 125: available single or double)',
        'Prepared for optional M-BOOST motor/s',
        'ISOBUS system (temperature, cooling, hour counter) - with ISOBUS terminal',
        'Prepared for an individual interface plate',
        'Chassis made of high tensile steel S420 with internal replaceable WEAR PLATES',
        '2 rows of tempered COUNTER CUTTERS',
        'Protection: double chains',
        'Narrow in-depth skids, reinforced',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        'Automatic variable displacement Motor M-BOOST with adjustable speed, electonically driven, cable & controls incl.',
        'Individual interface plate for excavator arm (for different excavator brands)',
        '190° hydraulic rotation plate',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stump-root-grinders/star-fc-hyd.html?depliant=507"
    />
  )
}

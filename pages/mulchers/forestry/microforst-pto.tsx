import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Microforst PTO'}
      image={'/forestry/microforst-pto-cover.jpeg'}
      content={
        <>
          <P>
            This mulcher is designed for PTO tractors 35-60 HP that need a reliable mulcher for intense forestry works.
            Being a lightweight machine, also offers stability when working on slopes. The maximum recommended weight of
            the tractor is 2 tonnes. Thanks to the partly integrated technology normally found in forestry mulchers up
            to 500 HP, this mulcher, despite its compact size, is ready to do great things and get professional jobs
            done.
          </P>
          <P>
            MICROFORST pto mulches brush and woody plants up to 13 cm in diameter. The rotors with cutting depth limiter
            work rapidly and smoothly with particularly clean results. This dynamic forestry mulcher is used by
            gardeners and landscapers for seasonal cleaning, in public and urban areas to clear bushes, and by farmers
            for land clearing. The technical characteristics of the MICROFORST pto are similar to those of larger
            forestry mulchers, but the mulcher weighs less than 600 kg. Thanks to its AR400 steel build, its resistance
            to wear and long service life are guaranteed despite its low weight.
          </P>
          <P>
            The standard CUT CONTROL rotor with MINI DUO hammers with 2 tungsten carbide inserts combines high
            performance with a long service life and guarantees minimal and simple maintenance. The same type of hammers
            are used on all SEPPI forestry mulchers, even in the highest performance class. The CUT CONTROL rotors are
            latest generation, with SEPPI MINI DUO tools and a new-concept depth limiter. Similar to a depth gauge on a
            chainsaw, the limiter controls the cutting depth and helps prevent the rotor from “choking”, thus
            guaranteeing an easy and quality milling process. A rotor with MINI BLADE tools can be selected as an
            optional. This makes the MICROFORST mulcher particularly efficient on trees that have not yet been felled,
            ensuring a quick and clean cut of the wood thanks to the particularly sharp MINI BLADE tools. Available
            widths: 125 [49”] , 155 [61”] cm.
          </P>
        </>
      }
      featureTitle={'Microforst pto - standard version'}
      features={[
        'Mulches bushes up to 13 cm [5”] Ø',
        'Working speed 0-5 km/h',
        'CUT CONTROL rotor with tungsten CARBIDE inserts hammers MINI DUO and depth gauge',
        'Chassis made of high tensile and wear-resistant steel AR400',
        'ISO 3-point rear linkage cat. 1 & 2 central fixed',
        '540 rpm gearbox with freewheel and through shaft',
        'Input shaft 1 3/8” Z=6',
        'Transmission with 4 belts',
        'Hydraulically operated hood',
        'Support skids, adjustable in height',
        'Rear protection with double chains',
        '1 row of replaceable tempered COUNTER CUTTERS',
        'Colors: charcoal RAL7021| red RAL3020',
      ]}
      options={[
        'PTO drive shaft',
        'CUT CONTROL rotor with MINI BLADE tool and with gauge',
        'Front attachment',
        '1000 rpm gearbox',
        'Mechanical guard frame',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/pto-forestry-mulchers/microforst-pto.html?depliant=884"
    />
  )
}

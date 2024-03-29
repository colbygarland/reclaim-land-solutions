import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Multiforst'}
      image={'/stone-crushers/multiforst-cover.jpeg'}
      content={
        <>
          <P>
            The MULTIFORST is a multifunctional SEPPI tiller-mulcher. It tills soil and roads, mills stumps and mulches
            wood. It is ideal for maintaining dirt roads, for land reclamation, for the preparation of ski slopes, to
            clean up slash after felling operations. It is also a great machine when the soil must be slackened, stumps
            and stones removed for the plantation of new trees and for seeding. This shows great results both in
            agriculture and in greenspace maintenance, e.g. in parks.
          </P>
          <P>
            SEPPI MULTIFORST has a very strong frame, for a very long life with reinforced frame made of wearresistant
            steel. Chassis with internal replaceable plates. New generation patented rotor V-LOCK with efficient tool
            combination of the new type, ULTRA MONO PROTECT + MONO & ULTRAULTRA MONO PROTECT + MONO & ULTRA MONO EXTREME
            with additional tungsten carbide inserts at points most subject to wear. Anti-wear knife supports designed
            for hard conditions.
          </P>
          <P>
            MULTIFORST already standard works with gearbox with freewheel 540 or 1000 rpm. Depending on the job, the PTO
            speed can be adjusted at the tractor. Thanks to the 2SPEED gearbox (option) the speed of the rotor can be
            adjusted by shifting a mechanical lever on the main gearbox. MULTIFORST is working with 2 speeds: depending
            on the job it is possible to adjust the speed - fast gear for mulching on the surface - slow gear for
            working in the ground. This feature protects the driveline and at the same time ensures better work when
            mulching wood (in fast gear) and crushing stone and tilling soil (in slow gear).
          </P>
          <P>
            Available with ADAM alignment system - the tilting of the mulcher with PTO shaft alignment while keeping
            equal and W-shaped PTO shaft angles. This prevents damage to the PTO shaft and supports an ideal adaptation
            to the conditions of the ground -{'>'} faster working, better results, longer lifetime of the PTO shaft plus
            higher lifting. Technical requirements for operating the SEPPI MULTIFORST are creep speeds (max. 0,5 km/h)
            of the tractor and a hydraulic three-point tractor linkage. Available working width: 225, 250 cm [79", 89",
            98"].
          </P>
        </>
      }
      featureTitle={'Multiforst - standard version'}
      features={[
        'Crushes stones up to 25 cm [10] Ø',
        'Mulches wood up to 40 cm [16”] Ø',
        'Working depth 30 cm [12”]',
        'Rotor V-LOCK: combination of tungsten carbide tips hammers ULTRA MONO PROTECT + MONO & ULTRAULTRA MONO PROTECT + MONO & ULTRAMONO EXTREME; anti-wear knife supports',
        'Bolt-on-rotor shaft',
        'Working speed 0–2 km/h',
        'Required creep speed: max. 0,5 km/h or CVT continuosly variable transmission',
        'Chassis made of wear-resistant steel with replaceble wear plates WEAR PLATES',
        'ISO 3-point rear linkage cat. 2 central fixed',
        'Gearbox with freewheel, reversible for 540 or 1000 rpm (2 speeds: depending on the job it is possible to adjust the speed of the PTO in the tractor: 1000 rpm for Mulching wood; 540 rpm for stone crushing and soil tilling)',
        'Input shaft: 1 3/4” Z=20',
        'Dual side CARBONCHAIN gear belt drive',
        'Integrated torque limiter',
        'Hydraulically operated hood',
        'Narrow in-depth skids',
        'Protection with double chains',
        '2+1 rows of replaceable tempered COUNTER CUTTERS, anvil bar to crush stones',
        'Colors: red RAL3020 | charcoal RAL7021',
      ]}
      options={[
        'PTO drive shaft with torque limiter',
        'ADAM alignment system - The tilting of the mulcher with PTO shaft alignment while keeping equal and W-shaped PTO shaft angles',
        'ADAM alignment system + 2SPEED gear with 2 speeds and integrated cooling',
        'Hydr. operated compacting roller for depth control, may also be used as guard frame incl. roller scraper',
        'Adjustable support skids for on-surface work',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stone-crushers-soil-tillers/multiforst.html?depliant=754"
    />
  )
}

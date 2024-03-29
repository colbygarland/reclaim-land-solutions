import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Midipierre'}
      image={'/stone-crushers/midipierre-cover.jpeg'}
      content={
        <>
          <P>
            SEPPI MIDIPIERRE crush and recycle stones up to 20 cm [8”] Ø. First prototype of the SEPPI MIDIPIERRE stone
            crusher was build in 1987. Through this "long-term" development, today the SEPPI stonecrusher MIDIPIERRE has
            achieved maximum efficiency.
          </P>
          <P>
            The little stone crusher MIDIPIERRE clears land from stones, no matter whether for agricultural land, as a
            step of land reclamation, for the maintenance of ski slopes, or for land clearing and construction site
            preparation.
          </P>
          <P>
            NEW! The latest version of MIDIPIERRE is equipped with a hydraulic hood and a hydraulically adjustable
            grader blade, including pressure accumulator as standard. Very strong frame, for a very long life with
            reinforced frame made of wearresistant steel. Dimensions of the crushed stones adjustable by anvil bar.
            Chassis of MIDIPIERRE with internal replaceable plates.The patented rotor with efficient tool combination of
            the new type SUPER DUO PROTECT and SUPER DUO EXTREME with tungsten carbide tips and anti-wear hammer
            supports makes this mulcher very wear resistant.
          </P>
          <P>
            echnical requirements for operating a stone crusher on a tractor are creep speeds and a hydraulic
            three-point tractor linkage. Available working width: 125, 150 cm [49", 59"].
          </P>
        </>
      }
      featureTitle={'Midipierre - standard version'}
      features={[
        'Crushes stones up to 20 cm [8”] Ø',
        'Tills the soil as deep as 12 cm [4.7”] and deeper, depending on the working conditions',
        'Working speed 0-2 km/h',
        'Required creep speed: max. 0,5 km/h or CVT continuously variable transmission',
        'Chassis made of high tensile and wear resistant steel AR400 with internal replaceable plates',
        'ISO 3-point rear linkage cat. 2 central fixed',
        'Gearbox 540 rpm with freewheel',
        'Input shaft 1 3/8” Z=6',
        'Transmission with 6 belts',
        'Hydraulically operated hood and hydraulically adjustable grader blade (OPT-336), with accumulator',
        'Pointed guide skids, adjustable in height',
        'Protection with double chains',
        'Helical rotor with',
        'tungsten CARBIDE inserts hammers SUPER DUO PROTECT + lateral EXTREME; anti-wear hammer support',
        'Adjustable anvil bar to adjust the degree of crushing',
        'Bolt-on-rotor shaft',
        'Colors: charcoal RAL7021 | red RAL3020',
      ]}
      options={['PTO drive shaft', '1000 rpm gearbox', 'Hydraulic top link']}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stone-crushers-soil-tillers/midipierre.html?depliant=730"
    />
  )
}

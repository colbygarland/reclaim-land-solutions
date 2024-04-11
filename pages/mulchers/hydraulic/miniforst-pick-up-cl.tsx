import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Miniforst Pick Up CL'}
      image={'/hydraulic/miniforst-pick-up-cl-cover.jpeg'}
      content={
        <>
          <P>
            Certain crops produce very high quantities of prunings. This can cause big problems when it is time to mulch
            them. Burning is often illegal and is always bad for the environment. The SEPPI Miniforst pick-up cl mulcher
            provides a perfect solution – picking up the prunings with a pick-up reel at ground level and, if needed,
            reinforcing the feed into the machine with an optional top reel. This results in a fast biodegradation, just
            one cultivation cycle.
          </P>
          <P>
            The SEPPI MINIFORST pick-up cl forestry mulcher for compact loader is particularly suitable for olive,
            citrus, walnut and almond cultivations and stony conditions - fast working - collecting and fine mulching -
            MINIFORST pick-up mulches finely 100% of the prunings in one single pass - different tools of choice - long
            fixed hammers lifetime - prunings are lifted from the ground and processed through a screen; therefore no
            contact between the hammers and stones.
          </P>
          <P>
            SEPPI MINIFORST pick up cl casing is very resistent, made of high-tensile steel. Counterknives inside the
            casing will give a perfect result when mulching. Standard is the mulcher equiped with 2 pick-up rotors:
            Upper pick-up kit consisting of rotor BIONIX FEED on the hydraulic hood, motor and hydraulilc system with
            flow control. The pick-up rotor is driven by tractor hydraulics. Lower pick-up kit consisting of frame with
            lower pick-up rotor BIONIC FEED, support skids, motor and hydraulic system with flow divider and perssure
            gauge for easy control of the pik-up rotors. The mulching rotor RIC (Radial Interference Cut) is a SEPPI
            patented helical rotor with SUPER MONO TIP hammers with tungsten carbide tip. This type of rotor is very
            agresive and resistent. Available working width: 175 cm [69"].
          </P>
        </>
      }
      featureTitle={'Miniforst pick-up cl - standard version'}
      features={[
        'Mulches wood up to 20 cm [8”] Ø and occasionally larger diameters',
        'RIC- Radial Interference Cut rotor with SUPER MONO TIP hammers with tungsten carbide tip',
        'Chassis and radial rotor sections made of wear-resistant steel ',
        '4 rows of replaceable tempered counter cutters',
        'Working speed 0-7 km/h',
        'SAE skid steer attachment interface',
        'Transmission with 5 belts',
        'Variable displacement motor 29-58 cm³ with relief valve VARIO FLOW with auxiliary gear pump for pick-up system',
        'Dashboard with 2 manometers for control of RIC-rotor and pick-up rotors',
        'Hoses with quick couplling for mulcher-loader connection',
        'Pick-up rotors BIONIC FEED: Hydraulic hood with pick-up rotor, includes motor and hydraulic system with flow control',
        'Pick-up Rotor driven by tractor hydraulics; Required hydraulic flow: 20 l/min [5,3 gpm]',
        'Lower pick-up rotor, motor and hydraulic system',
        'Rubber gauge wheels, adjustable in height',
        'Support roller with serrated metal wheels, adjustable in height',
        'Colors: red RAL3020 | charcoal RAL7021',
      ]}
      options={['Hoses with quick coupling for mulcher-loader connection', 'Impact resisant shield for loaders']}
    />
  )
}

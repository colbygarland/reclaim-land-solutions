import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Kastor Hyd'}
      image={'/stump-root/kastor-hyd-cover.jpeg'}
      content={
        <>
          <P>
            Get rid of the stump completely, in a short time! SEPPI KASTOR hyd grinds the stumps as deep as 50 cm [20”]
            below the surface and any diameter. Any stump diameter can be eradicated, by swinging the excavator arm from
            one to the other side. The result is a fine mulch that may be easily incorporated into the soil and mixed
            with the ground, which fosters a quick decomposition. The stump has been removed completey, the soil is
            ready for new planting. The Rotor disk is equipped with very aggressive HRC-tooths. The specially developed
            angle of cut allows an ideal use of power. The Interface for spider excavators, available as an option, also
            works as a shovel. It helps mixing the ground stump chips into the soil, so to completely cover the whole
            left by the removed stump. Rotor disk diameter: 90 cm [35"]; width: 11 cm [4,3"]
          </P>
        </>
      }
      featureTitle={'Kastor Hyd - standard version'}
      features={[
        'Grinds stumps as deep as 50 cm [20”] below the surface and forms trenches to lay cables',
        'For excavators from 15-30 tons [30-60k lb]',
        'Rotor: fixed tungsten tips tooths HRC',
        'To fit the attachment plate on a hydraulic excavator arm',
        'Prepared for transmission with 2 hydraulic motors of choice',
        'Any side shift, moved by excavator arm',
        '2x5 belts',
        'Hydraulically operated hood',
        'Protection: double chains/ rubber',
        'Colours: red RAL3020 & charcoal RAL7021',
      ]}
      options={[
        '2 hyd. motors with relief valves, different types of choice',
        'Electric valve for hood control with controls',
        'Interface plate (for different excavator brands)',
        '190° hydraulic rotation plate',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stump-root-grinders/kastor-hyd.html?depliant=483"
    />
  )
}

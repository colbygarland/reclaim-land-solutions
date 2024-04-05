import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Midi Kastor Hyd'}
      image={'/stump-root/midi-kastor-hyd-cover.jpeg'}
      content={
        <>
          <P>
            The smaller version of SEPPI stump grinder KASTOR hyd is the MIDI-KASTOR hyd - a stump grinder for small and
            medium excavators. SEPPI MIDI-KASTOR hyd grinds the stumps as deep as 30 cm [12 inch] below the ground. Any
            stump diameter can be eradicated, by swinging the excavator arm from one to the other side. The result is a
            fine mulch that may be easily incorporated into the soil and mixed with the ground, which fosters a fast
            decomposition. The stump has been removed completey, the soil is ready for new planting. The Rotor disc is
            equipped with very aggressive HRC-tooths. The specially developed angle of cut allows an ideal use of power.
            Rotor disc width: 10 cm [4"], diameter 60 cm
          </P>
        </>
      }
      featureTitle={'Midi Kastor Hyd - standard version'}
      features={[
        'To fit on a hydraulic excavator arm',
        'Grinds stumps as deep as 30 cm [12”] below the surface and any diameter',
        'For excavators up 5 to 15 tons [11-30k lb]',
        'Rotor: fixed tungsten tips tooths HRC',
        'Any side shift, moved by excavator arm',
        'Interface plate (universal for different kind of excavator attachments)',
        'Prepared for transmission with hydraulic motor of choice',
        'Single transmission',
        '5 belts',
        'Protection with double chains / rubber',
        'Colours: red RAL3020 · charcoal RAL7021',
      ]}
      options={[
        'Hyd. motor with relief valves of choice',
        'Individual interface plate for excavator arm',
        '190° hydraulic rotation plate',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stump-root-grinders/midi-kastor-hyd.html?depliant=491"
    />
  )
}

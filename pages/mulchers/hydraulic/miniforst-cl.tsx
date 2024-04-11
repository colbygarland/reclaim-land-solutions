import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'Miniforst CL'}
      image={'/hydraulic/miniforst-cl-cover.jpeg'}
      content={
        <>
          <P>
            MINIFORST cl - the most advanced forestry mulcher in the industry for compact loaders for ROW and utility
            work with a low and compact design. MINIFORST cl mulcher is equipped with a standard SAE interface, and is
            suitable for any skid steer with available hydraulic flow between 16-50 gpm. Obviously, high flow is best
            but even the owner of a low flow loader will be happy with the performance of the MINIFORST cl because
            regardless of GPM, the variable displacement M-BOOST™ motor, which offers 40% more torque than standard
            motors, is easily adjusted to produce the RPM necessary for efficient mulching. MINIFORST cl mulcher can
            mulch wood and brush to 8” diameter, at working speeds up to 3 MPH. Patented rotor designs allow an
            unprecedented recovery rate of speed of the rotor, so you spend more time cutting and less time waiting. The
            MINIFORST cl will get the most from your loader! Available working width: 59", 69"
          </P>
        </>
      }
      featureTitle={'Miniforst cl - standard version'}
      features={[
        'CUT CONTROL rotor with MINI BLADE tools',
        'NO-HOOD',
        'M-BOOST variable torque motor',
        'GUARD FRAME',
        '1"6000 PS hoses with 3/4" couplers included',
        'Shipping rack',
        'Free shipping, typically within a few business days',
        'Setup service by local dealer',
      ]}
      brochure="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/mulchers-for-compact-loaders/miniforst-cl-america-special-edition.html?depliant=619"
    />
  )
}

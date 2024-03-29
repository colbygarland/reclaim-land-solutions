import { P } from '../../../components/Elements'
import { Equipment } from '../../../components/Equipment'

export default function Page() {
  return (
    <Equipment
      title={'S9 Multipla'}
      image={'/flails/s9-multipla-cover.jpeg'}
      content={
        <>
          <P>
            Powerful large area SEPPI mulcher for up to 8 meters [26 feet] working width. The SEPPI S9 multipla combines
            3 powerful S9 mulchers that are not only used on large lawns such as golf courses and airports, but also
            prove their skills in stubble fields shredding demanding material quickly and extensively. It mulches grass
            and prunings up to 9 cm (3.5 inches) and reaches working widths up to 8 meters (26 feet).
          </P>
          <P>
            The SEPPI S9 flail mulchers adapt to the terrain during the journey and can be lifted simultaneously via the
            hydraulic remote control. Available in 4 configurations! Standard version - trailer hitch of the
            standardtrailer hitch of the standard version the mulchers are pulled forward, with 2 wheels 3 point linkage
            - 3 mulcher - forward drive 3 point linkage - 3 mulcher reserve drive/push 3 point linkage - 2 mulcher -
            forward drive
          </P>
          <P>Working width: 800 cm</P>
        </>
      }
      featureTitle={'S9 multipla - standard version'}
      features={[
        'Mulches grass and prunings up to 9 cm Ø',
        'Helical rotor with SMO flails',
        'Working speed 3-10 km/h',
        'Trailer hitch with two lateral mowers and the central S9 base, with 2 wheels, mud guards and hydraulic parking stand',
        'Central machine, for independant use with: S9 base',
        'Gearbox 1000 rpm',
        'Input shaft 1 3/4” Z=6',
        'Belt transmission (3x5)',
        'STOPSAFETM safety system',
        'Hydraulic system via tractor',
        'Automatic greasing system',
        'Chassis made of high tensile steel S420 with internal replaceable wear plates',
        'Each machine with 2 rows of replaceable tempered counter cutters',
        'TRISTOP pneumatic brake system',
        'Front protection with chains',
        'Adjustable rear hood M-FLAP to set the degree of mulching; with rubber protection',
        'Support roller, adjustable in height; reinforced bearing and roller',
        'Colors: red RAL3020 & charcoal RAL7021',
      ]}
      options={['PTO drive shaft / Wide angle PTO drive shaft']}
      brochure="https://www.seppi.com/en-us/mulcher-mower-shredder-tiller-stump-grinder/flail-mulchers/s9-multipla-usa.html?depliant=399"
    />
  )
}

import { defaultButtonStyles, buttonType, Button } from '../components/Button'
import { P, Ul } from '../components/Elements'
import { H2, H3 } from '../components/Headings'
import { Hero } from '../components/Hero'
import { InputGroup } from '../components/InputGroup'
import { Section } from '../components/Section'

export default function Rentals() {
  return (
    <>
      <Hero title="Rentals" media="/rental-cover.jpg" condensed />
      <Section>
        <div className="md:grid grid-cols-2 gap-4 lg:gap-8">
          <div>
            <img src="/remote.jpg" alt="remote unit" />
          </div>
          <div>
            <H2>Rental Units</H2>
            <P>
              This remote controlled self propelled mulcher is built to handle extreme and demanding jobs. With
              extendable tracks it can handle slopes up to 55 degrees. A low center of gravity and a remote with 500ft
              of range means the operator can remain in a safe location while the mulcher works in difficult and hard to
              reach areas. Its great for cleaning up forests and acreages, maintaining the sides of roads as well as
              performing maintenance on power lines/right of ways. It is built to handle wood and brush up to 6” but
              check out this video of us taking down a 14” tree (
              <a className="font-bold" href="https://www.youtube.com/shorts/J_Nftc2Ipec" target="_blank">
                https://www.youtube.com/shorts/J_Nftc2Ipec
              </a>
              )!
            </P>
            <P>Weighting under 4000lbs, you can tow this mulcher on a trailer behind a ½ truck.</P>
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <Button href="https://www.youtube.com/shorts/a8Td5kllCnY" target="_blank">
                View video
              </Button>
              <Button href="#inquiry">Learn more</Button>
            </div>
            <H3>Rates</H3>
            <Ul items={['Day - $950', 'Week - $3000', 'Month - $9250']} />
          </div>
        </div>
      </Section>
      <Section type="tertiary">
        <div className="md:grid grid-cols-2 gap-4 lg:gap-8">
          <div>
            <img src="/rental-1.jpg" alt="rental unit" />
          </div>
          <div>
            <H2>Skid Steer Mulcher</H2>
            <P>
              This forestry mulcher has a 69” cutting width and can easily handle up to 8” trees. Its suitable for
              forestry work, landscaping, ground maintenance and elimination stumps and roots. The lightweight drum
              provides quick recovery time while the electrically operated hood can be lowered to provide a finely
              mulched finished product. Its currently rigged for a Cat 289, but it can be set-up and used with any brand
              and high or low flow machines.
            </P>
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <Button href="https://www.youtube.com/watch?v=1MFZOms6NDE" target="_blank">
                View video
              </Button>
              <Button href="#inquiry">Learn more</Button>
            </div>
            <H3>Rates</H3>
            <Ul items={['Day - $475', 'Week - $1425', 'Month - $4250']} />
          </div>
        </div>
      </Section>
      <Section>
        <div id="inquiry">
          <H2>Need a rental unit?</H2>
          <form name="rentals" method="POST" data-netlify="true" action="/rentals?success=1">
            <input type="hidden" name="form-name" value="rentals" />
            <InputGroup name="name" label="Name" required />
            <InputGroup name="email" label="Email Address" required />
            <InputGroup name="phone" label="Phone Number" type="tel" required />
            <InputGroup name="description" label="Description" required />
            <button type="submit" className={`${defaultButtonStyles} ${buttonType['primary']}`}>
              Submit
            </button>
          </form>
        </div>
      </Section>
    </>
  )
}

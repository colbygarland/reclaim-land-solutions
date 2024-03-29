import { Button } from '../components/Button'
import { H3, H2 } from '../components/Headings'
import { Hero } from '../components/Hero'
import { P, Ul } from '../components/Elements'
import { Section } from '../components/Section'

export default function Services() {
  return (
    <>
      <Hero title="Mulchers" media="/image-placeholder-4.avif" condensed />
      <Section type="tertiary">
        <H3>
          <span className="text-primary-600">Seppi Mulchers</span>
        </H3>
        <H2>Reclaim Land Solutions</H2>
        <P>
          Seppi seeks to improve the productivity of farmers through easy to handle and efficient equipment. They are
          one of the foremost manufacturers of mulchers and are committed to offering the best equipment for
          agriculture, forestry, greenspace maintenance or the energy and construction industries.
        </P>
        <P>
          Decades of experience, research and innovation has caused Seppi to become a pioneer of mulching equipment and
          brush technology. They are committed to using high quality materials to produce reliable equipment which will
          provide unrivaled service even in harsh environments.
        </P>
      </Section>
      <div id="mulchers">
        <Section>
          <div className="md:grid grid-cols-2">
            <div>
              <img src="/stone-crusher.jpeg" alt="Stone crusher" />
            </div>
            <div>
              <H2>Stone Crushers and Forestry Tillers</H2>
              <P>
                <strong>Nominal power:</strong> 80 - 500 HP
                <br />
                <strong>Working width:</strong> 49 - 138 inches
                <br />
                <strong>Working depth:</strong> 16 inches
                <br />
                <strong>Wood & stumps:</strong> 35 inches
              </P>
              <P>
                Multi-purpose crushers for PTO tractors. Crushing Stones, mulching wood. Some of the most powerful
                machines in the Seppi lineup. It is remarkable to watch them work in a wide range of applications!
              </P>
              <Ul
                items={[
                  'Renewal of cultivated fields',
                  'Preparation of soil for replanting',
                  'Forest clearing after harvest',
                  'Crushing of stones on surfaces and roads',
                  'Creation and maintenance of forest paths',
                  'Soil stabilization for road building',
                  'Debris removal in work sites',
                ]}
              />
              <Button href="/mulchers/stone-crushers">View More</Button>
            </div>
          </div>
        </Section>
        <Section type="tertiary">
          <div className="md:grid grid-cols-2">
            <div>
              <img src="/hydraulic.jpeg" alt="Hydraulic Drive Mulchers" />
            </div>
            <div>
              <H2>Hydraulic Drive Mulchers</H2>
              <P>
                <strong>Compact loader:</strong> 10 - 40 GPM
                <br />
                <strong>Hydraulic tractor:</strong> 40 - 190 GPM
                <br />
                <strong>Working width:</strong> 49 - 102 inches
                <br />
                <strong>Working depth:</strong> 16 inches
                <br />
                <strong>Stones & rocks:</strong> 12 inches
                <br />
                <strong>Wood & stumps:</strong> 20 inches
              </P>
              <P>
                Whether acreage clean up or large scale operations, these mulchers combined with a hydraulic vehicle
                make it possible to reach steep and hard to access areas. A great solution to all types of vegetation
                management.
              </P>
              <Button href="/mulchers/hydraulic">View More</Button>
            </div>
          </div>
        </Section>
        <Section>
          <div className="md:grid grid-cols-2">
            <div>
              <img src="/forestry-mulcher.jpeg" alt="Forestry mulcher" />
            </div>
            <div>
              <H2>Forestry Mulchers</H2>
              <P>
                <strong>Nominal power:</strong> 60 - 500 HP
                <br />
                <strong>Working width:</strong> 49 - 118 inches
                <br />
                <strong>Wood & stumps:</strong> 24 inches
              </P>
              <P>
                These PTO driven mulches are ideal for forest maintenance. The lightweight drum lowers recovery time
                allowing more mulching in applications such as:
              </P>
              <Ul
                items={[
                  'Right of way maintenance',
                  'Cleaning of forests after timer felling and harvest',
                  'Maintenance of woodland and forests',
                  'Building fire breaks',
                  'Clearing of invasive species',
                ]}
              />
              <Button
                href="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/pto-forestry-mulchers.html"
                target="_blank"
              >
                View More
              </Button>
            </div>
          </div>
        </Section>

        <Section type="tertiary">
          <div className="md:grid grid-cols-2">
            <div>
              <img src="/excavator.jpeg" alt="Excavator Mulchers" />
            </div>
            <div>
              <H2>Excavator Mulchers</H2>
              <P>
                <strong>Weight:</strong> 2 - 45 tons
                <br />
                <strong>Working width:</strong> 25 - 79 inches
                <br />
                <strong>Stones & rocks:</strong> 6 inches
                <br />
                <strong>Wood & stumps:</strong> 16 inches
              </P>
              <P>
                Excavator attachments have a great advantage as they can reach hard to access areas while working on
                uneven surfaces. Their many applications include:
              </P>
              <Ul
                items={[
                  'Management of greenspace in agricultural and forestry sectors',
                  'Maintenance of powerlines and gas pipelines',
                  'Building site preparation',
                  'Maintenance of railways and ditches',
                ]}
              />
              <Button
                href="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/excavator-mulchers.html"
                target="_blank"
              >
                View More
              </Button>
            </div>
          </div>
        </Section>
        <Section>
          <div className="md:grid grid-cols-2">
            <div>
              <img src="/stump.jpeg" alt="Stump and root grinders" />
            </div>
            <div>
              <H2>Stump and Root Grinders</H2>
              <P>
                Options for PTO or Hydraulic drive
                <br />
                <strong>PTO Nominal power:</strong> 70 - 260 HP
                <br />
                <strong>Hydraulic:</strong> 5 - 30 ton
                <br />
                <strong>Working depth:</strong> 14 inches
                <br />
                <strong>Stump size:</strong> unlimited
                <br />
                <strong>Stones & rocks:</strong> 6 inches
              </P>
              <P>
                These machines quickly and efficiently grind stumps without a limit to the diameter. Wood and other
                vegetation will be tilled, ground finely and incorporated into the soil where it will decompose.
              </P>
              <Button
                href="https://www.seppi.com/en-ca/mulcher-mower-shredder-tiller-stump-grinder/stump-root-grinders.html"
                target="_blank"
              >
                View More
              </Button>
            </div>
          </div>
        </Section>
        <Section type="tertiary">
          <div className="md:grid grid-cols-2">
            <div>
              <img src="/flail-mulcher.jpeg" alt="Flail mulcher" />
            </div>
            <div>
              <H2>Flail Mulchers</H2>
              <P>
                <strong>Nominal power:</strong> 30 - 250 HP
                <br />
                <strong>Working width:</strong> 49 - 315 inches
                <br />
                <strong>Vegeation:</strong> up to 4.3 inches
              </P>
              <P>
                These powerful flair mulchers meet the needs of greenspace maintenance and agricultural sectors. Their
                sturdy design and high performance make them a lifelong investment with long-term cost savings. Most
                models are available with parallel or linear side shift
              </P>
              <Button href="/mulchers/flail">View More</Button>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

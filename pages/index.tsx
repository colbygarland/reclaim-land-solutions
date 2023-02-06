import { Header } from '../components/Header';
import { H2, H3 } from '../components/Headings';
import { Hero } from '../components/Hero';
import { P } from '../components/P';
import { Section } from '../components/Section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Reclaim Land Solutions LTD"
          description="We take unstable, or underutilized land, and help create solutions to increase productivity."
          media="/video-placeholder.mp4"
          isVideo
          buttonLink="/services"
          buttonText="Our Services"
        />
        <Section>
          <H3>Who are we?</H3>
          <H2>Better Mulchers, Continuously Innovated.</H2>
          <P>
            Decades of research and innovation that has been tested in some real harsh environments. There is a need for
            mulchers that use less power, while performing the same work and require less maintenance.
          </P>
        </Section>
        <Section type="secondary">
          <H3>Agricultural Land Costs are Rising</H3>
          <H2>We Enable Farmers</H2>
          <P>
            With the ever increasing cost of agricultural land, farmers want to utilize every acre available. Whether it
            is trees, brush, or low laying wet areas,{' '}
            <strong className="text-primary-500">Reclaim Land Solutions</strong> wants to provide farmers with the
            ability to reclaim and work the land they already own.
          </P>
        </Section>
      </main>
    </>
  );
}

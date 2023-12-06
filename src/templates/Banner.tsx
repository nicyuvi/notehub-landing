import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="This app is still under development."
      subtitle="Be one of the first users."
      button={
        <Link href="/">
          <Button>Join the waitlist</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

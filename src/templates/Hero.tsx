import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <nav>
        <ul className="navbar flex items-center text-xl font-medium text-hub-400">
          <li>
            <Link href="/">NoteHub</Link>
          </li>
        </ul>
      </nav>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Note'}
            <span className="text-hub-100">Hub</span>
          </>
        }
        description="Share the Spark, Ignite the Notesphere!"
        button={
          <Link href="/">
            <Button xl>Check it out for free</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

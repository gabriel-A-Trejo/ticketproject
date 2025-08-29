import Link from 'next/link';

import Heading from '@/components/Heading';
import { ticketMainPath } from '@/path';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <Heading
        title="Home"
        description="This is the home page of the ticket app."
      />

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketMainPath()} className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

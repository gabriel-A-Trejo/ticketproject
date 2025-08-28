import Link from 'next/link';

import { ticketMainPath } from '@/path';

const HomePage = () => {
  return (
    <div
      className="flex flex-col gap-y-8"
      style={{ animation: 'fade-in-from-top 0.3s ease-out both' }}
    >
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl font-bold tracking-tight ">Home Page</h2>
        <p className="text-sm text-muted-foreground">
          This is the home page of the ticket app.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketMainPath()} className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

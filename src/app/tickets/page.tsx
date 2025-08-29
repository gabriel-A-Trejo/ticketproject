import { Suspense } from 'react';

import Heading from '@/components/Heading';
import Spinner from '@/components/spinner';
import TicketList from '@/features/ticket/components/TicketList';

const TicketsPage = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <Heading title="Tickets" description="Your home place to start" />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;

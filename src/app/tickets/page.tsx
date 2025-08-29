import Heading from '@/components/Heading';
import TicketItem from '@/features/ticket/components/ticketItem';
import { getTickets } from '@/features/ticket/queries/getTickets';

const TicketsPage = async () => {
  const tickets = await getTickets();

  return (
    <div className="flex flex-col gap-y-8">
      <Heading title="Tickets" description="Your home place to start" />

      <div
        className="flex-1 flex flex-col items-center gap-y-4 "
        style={{ animation: 'fade-in-from-top 0.3s ease-out' }}
      >
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;

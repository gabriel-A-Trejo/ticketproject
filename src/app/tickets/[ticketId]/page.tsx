import Placeholder from '@/components/Placeholder';
import { initialTickets } from '@/data';
import TicketItem from '@/features/ticket/components/ticketItem';

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find(ticket => ticket.id === ticketId);

  if (!ticket) {
    return <Placeholder label="Ticket not found" />;
  }

  return (
    <div
      className="flex justify-center animate-fade-in-from-top"
      style={{ animation: 'fade-in-from-top 0.3s ease-out' }}
    >
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;

import { notFound } from 'next/navigation';

import TicketItem from '@/features/ticket/components/ticketItem';
import getTicket from '@/features/ticket/queries/getTicket';

type TicketPageProps = {
  params: { ticketId: string };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket(params.ticketId);

  if (!ticket) {
    notFound();
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

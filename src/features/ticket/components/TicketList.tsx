import React from 'react';

import { getTickets } from '../queries/getTickets';
import TicketItem from './ticketItem';

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div
      className="flex-1 flex flex-col items-center gap-y-4 "
      style={{ animation: 'fade-in-from-top 0.3s ease-out' }}
    >
      {tickets.map(ticket => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;

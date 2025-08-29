import clsx from 'clsx';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ticketPaths } from '@/path';

import { TICKET_STATUS_ICONS } from '../constant';
import { Ticket } from '../type';

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const ticketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Link
      href={ticketPaths(ticket.id)}
      className={cn(
        buttonVariants({ variant: 'outline', size: 'icon' }),
        'p-0'
      )}
    >
      <SquareArrowOutUpRight className="size-4" />
    </Link>
  );

  return (
    <div
      className={clsx('w-full flex gap-x-1', {
        'max-w-[420px]': !isDetail,
        'max-w-[580px]': isDetail,
      })}
    >
      <Card key={ticket.id} className="w-full flex gap-x-1">
        <CardHeader>
          <CardTitle className="flex gap-x-2 items-center">
            <span>{TICKET_STATUS_ICONS[ticket.status]}</span>
            <span className="text-lg font-bold truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {!isDetail && <div className="flex flex-col gap-y-1">{detailButton}</div>}
    </div>
  );
};

export default ticketItem;

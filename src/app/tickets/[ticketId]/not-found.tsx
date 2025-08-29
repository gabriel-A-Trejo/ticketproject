import Link from 'next/link';
import React from 'react';

import Placeholder from '@/components/Placeholder';
import { buttonVariants } from '@/components/ui';
import { ticketMainPath } from '@/path';

const NotFound = () => {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Link
          className={buttonVariants({
            variant: 'link',
            className: 'text-sm',
          })}
          href={ticketMainPath()}
        >
          <span className="text-sm">Go to Tickets</span>
        </Link>
      }
    />
  );
};

export default NotFound;

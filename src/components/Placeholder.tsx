import { LucideMessageSquareWarning } from 'lucide-react';
import React, { forwardRef } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
};

const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
  ({ label, icon = <LucideMessageSquareWarning />, button = <div /> }, ref) => {
    return (
      <div
        ref={ref}
        className="flex-1 self-center flex flex-col items-center justify-center"
      >
        <div className="size-16">{icon}</div>
        <h2 className="text-xl text-center">{label}</h2>
        <div className="mt-4">{button}</div>
      </div>
    );
  }
);

Placeholder.displayName = 'Placeholder';

export default Placeholder;

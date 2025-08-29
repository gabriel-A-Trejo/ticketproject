import { LucideMessageSquareWarning } from 'lucide-react';
import React, { cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      <div className="size-16">
        {cloneElement(icon, {
          className: 'size-16',
        } as unknown as React.ReactElement)}
      </div>
      <h2 className="text-xl text-center">{label}</h2>
      <div>{button}</div>
    </div>
  );
};

export default Placeholder;

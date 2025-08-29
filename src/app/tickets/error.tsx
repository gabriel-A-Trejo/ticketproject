'use client';

import Placeholder from '@/components/Placeholder';

const error = ({ error }: { error: Error }) => {
  return <Placeholder label={error.message || 'Something went wrong!'} />;
};

export default error;

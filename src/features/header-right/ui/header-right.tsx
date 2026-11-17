import type { PropsWithChildren } from 'react';

export const HeaderRight = ({ children }: PropsWithChildren) => {
  return <div className='flex items-center justify-end gap-2'>{children}</div>;
};

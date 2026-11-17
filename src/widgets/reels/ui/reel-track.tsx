import type { ReactNode } from 'react';
import type { Reel } from '~/entities/reel';
import { Carousel } from '~/shared/ui';
import { ReelCard } from './reel-card';

type ReelTrackProps = { reels: Reel[]; label: string; header: ReactNode };

export const ReelTrack = ({ reels, label, header }: ReelTrackProps) => (
  <Carousel tone='band' label={label} header={header}>
    {reels.map((reel) => (
      <li key={reel.id} className='min-w-0 shrink-0'>
        <ReelCard {...reel} />
      </li>
    ))}
  </Carousel>
);

import { BrandMark } from './brand-mark';

export const Logo = ({ brandName }: { brandName: string }) => {
  return (
    <a href='/' aria-label={`${brandName} - Home`} className='flex min-w-0 items-center gap-3'>
      <BrandMark />
      <span className='truncate font-heading text-[26px] font-bold tracking-[0.02em] text-foreground'>{brandName}</span>
    </a>
  );
};

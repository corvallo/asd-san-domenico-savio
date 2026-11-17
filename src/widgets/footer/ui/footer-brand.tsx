import { BrandMark } from '~/features/logo';

type FooterBrandProps = { name: string; slogan: string };

export const FooterBrand = ({ name, slogan }: FooterBrandProps) => (
  <div>
    <div className='mb-3.5 flex items-center gap-3'>
      <BrandMark tone='band' size={40} />
      <span className='font-heading text-[26px] font-bold'>{name}</span>
    </div>
    <p className='m-0 max-w-[300px] text-[#C9D2E6]'>{slogan}</p>
  </div>
);

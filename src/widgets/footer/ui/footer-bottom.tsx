import { Container } from '~/shared/ui';

type FooterBottomProps = { name: string; vatNumber: string };

export const FooterBottom = ({ name, vatNumber }: FooterBottomProps) => (
  <Container className='mt-12'>
    <div className='flex flex-wrap justify-between gap-3 border-t border-[#3A4B86] pt-6 text-sm text-[#C9D2E6]'>
      <span>© {name} · Pattinaggio artistico</span>
      <span>P.IVA {vatNumber}</span>
    </div>
  </Container>
);

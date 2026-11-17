import type { Club } from '~/entities/club';
import type { NavigationItem } from '~/entities/navigation';
import { Container } from '~/shared/ui';
import { FooterBottom } from './footer-bottom';
import { FooterBrand } from './footer-brand';
import { FooterColumn } from './footer-column';
import { FooterWave } from './footer-wave';
import { siteFooterStyles } from './footer.style';

type FooterProps = { club: Club; pages: NavigationItem[] };

export const Footer = ({ club, pages }: FooterProps) => {
  const styles = siteFooterStyles();

  return (
    <div>
      <FooterWave />
      <footer className={styles.band()}>
        <Container className={styles.grid()}>
          <FooterBrand name={club.name} slogan={club.slogan} />
          <FooterColumn title='Pagine' items={pages.map(({ label, href }) => ({ label, href }))} />
          <FooterColumn
            title='Contatti'
            items={[
              { label: club.address },
              { label: club.phone, href: `tel:${club.phone}` },
              { label: club.email, href: `mailto:${club.email}` },
            ]}
          />
          <FooterColumn title='Seguici' items={club.socials} />
        </Container>
        <FooterBottom name={club.name} vatNumber={club.vatNumber} />
      </footer>
    </div>
  );
};

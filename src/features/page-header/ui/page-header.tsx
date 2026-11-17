import type { PropsWithChildren } from 'react';
import { Container } from '~/shared/ui';
import { pageHeaderStyle } from './page-header.style';

export interface PageHeaderProps extends PropsWithChildren {
  title: string;
  kicker?: string;
  subtitle?: string;
}

export const PageHeader = ({ title, kicker, subtitle, children }: PageHeaderProps) => {
  const styles = pageHeaderStyle();

  return (
    <Container as='header' className={styles.root()}>
      <svg viewBox='0 0 600 160' aria-hidden='true' className={styles.trail()}>
        <path d='M0 150C150 130 250 20 600 10' />
        <path d='M60 160C200 120 320 50 600 40' strokeWidth='1' />
      </svg>
      {kicker && <p className={styles.kicker()}>{kicker}</p>}
      <h1 className={styles.title()}>{title}</h1>
      {subtitle && <p className={styles.subtitle()}>{subtitle}</p>}
      {children}
    </Container>
  );
};

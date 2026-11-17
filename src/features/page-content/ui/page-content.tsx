import type { PropsWithChildren } from 'react';
import { Container } from '~/shared/ui';
import { pageContentStyle } from './page-content.style';

export type PageContentProps = { title: string } & PropsWithChildren;

export const PageContent = ({ title, children }: PageContentProps) => {
  return (
    <Container as='section' aria-label={title} className={pageContentStyle()}>
      {children}
    </Container>
  );
};

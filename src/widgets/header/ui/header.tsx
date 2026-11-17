import type { PropsWithChildren } from 'react';
import { Container } from '~/shared/ui';
import { headerStyle } from './header.style';

export const Header = ({ children }: PropsWithChildren) => {
  const { root, inner } = headerStyle();
  return (
    <header className={root()}>
      <Container className={inner()}>{children}</Container>
    </header>
  );
};

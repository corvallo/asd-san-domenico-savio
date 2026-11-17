import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/shared/ui';
import { isActivePath } from '../lib/is-active-path';
import { mobileNavigationStyles } from './mobile-navigation.style';
import type { NavigationItem } from '~/entities/navigation';

type MobileNavigationProps = {
  items: NavigationItem[];
  currentPath: string;
  title: string;
  cta: { label: string; href: string };
};

export const MobileNavigation = ({ items, currentPath, title, cta }: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);
  const styles = mobileNavigationStyles();
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant='ghost' size='icon' aria-label='Apri il menu' className={styles.trigger()} />}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side='bottom'>
        <SheetHeader>
          <SheetTitle className={styles.title()}>{title}</SheetTitle>
        </SheetHeader>
        <nav aria-label='Navigazione mobile' className={styles.nav()}>
          {items.map((item) => {
            const active = isActivePath(item.href, currentPath);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={active ? 'page' : undefined}
                className={styles.link({ active })}
              >
                {item.label}
              </a>
            );
          })}
          <Button as='a' href={cta.href} size='cta' onClick={close} className={styles.cta()}>
            {cta.label}
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

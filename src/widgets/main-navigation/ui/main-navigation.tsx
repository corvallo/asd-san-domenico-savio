import { useEffect, useRef, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { NavLink } from '~/features/nav-link';
import { ButtonLink } from '~/shared/ui/button';
import type { NavigationItem } from '~/entities/navigation';
import { colors } from '~/shared/styles/tokens/colors.stylex';

const styles = stylex.create({
  locked: { overflow: 'hidden' },
  desktop: { display: { default: 'flex', '@media (max-width: 1000px)': 'none' }, alignItems: 'center', gap: 28 },
  links: { display: 'flex', gap: 24, alignItems: 'center' },
  toggle: { display: { default: 'none', '@media (max-width: 1000px)': 'grid' }, placeItems: 'center', minWidth: 44, minHeight: 44, backgroundColor: 'transparent', border: 0, color: colors.gold400, cursor: 'pointer', ':focus-visible': { outline: '2px solid', outlineColor: colors.gold400, outlineOffset: 4 } },
  dialog: { inset: 0, margin: 0, width: '100%', maxWidth: 'none', height: '100dvh', maxHeight: 'none', boxSizing: 'border-box', padding: '24px 8%', border: 0, backgroundColor: colors.navy950, color: colors.ivory50, '::backdrop': { backgroundColor: colors.navy950 } },
  close: { display: 'flex', justifyContent: 'flex-end' },
  mobileLinks: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18, marginTop: 40, marginBottom: 28 },
});

export const MainNavigation = ({ items, currentPath }: { items: NavigationItem[]; currentPath: string }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const className = stylex.props(styles.locked).className!;
    document.body.classList.add(...className.split(' '));
    return () => { document.body.classList.remove(...className.split(' ')); };
  }, [open]);
  const close = () => { dialog.current?.close(); setOpen(false); trigger.current?.focus(); };
  const links = items.map(item => <NavLink key={item.id} href={item.href} active={item.href === currentPath} onClick={close}>{item.label}</NavLink>);
  return <>
    <div {...stylex.props(styles.desktop)}>
      <nav aria-label='Navigazione principale' {...stylex.props(styles.links)}>{links}</nav>
      <ButtonLink href='/contatti' variant='outline' size='sm'>Iscriviti ai corsi <span aria-hidden='true'>→</span></ButtonLink>
    </div>
    <button ref={trigger} type='button' aria-label='Apri menu' aria-expanded={open} aria-controls='mobile-menu' onClick={() => { dialog.current?.showModal(); setOpen(true); }} {...stylex.props(styles.toggle)}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' aria-hidden='true'><path d='M3 6h18M3 12h18M3 18h18' /></svg>
    </button>
    <dialog ref={dialog} id='mobile-menu' aria-label='Menu principale' onCancel={close} onClose={() => setOpen(false)} {...stylex.props(styles.dialog)}>
      <div {...stylex.props(styles.close)}><button type='button' aria-label='Chiudi menu' onClick={close} {...stylex.props(styles.toggle)}><svg width='24' height='24' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='1.5' aria-hidden='true'><path d='m5 5 14 14M19 5 5 19' /></svg></button></div>
      <nav aria-label='Navigazione mobile' {...stylex.props(styles.mobileLinks)}>{links}</nav>
      <ButtonLink href='/contatti' variant='outline' onClick={close}>Iscriviti ai corsi <span aria-hidden='true'>→</span></ButtonLink>
    </dialog>
  </>;
};

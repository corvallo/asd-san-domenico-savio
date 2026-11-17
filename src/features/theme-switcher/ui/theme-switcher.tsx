import { Moon, Sun } from 'lucide-react';
import { useSyncExternalStore } from 'react';
import { Button } from '~/shared/ui';

const STORAGE_KEY = 'theme';

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
};

const getSnapshot = () => document.documentElement.classList.contains('dark');
const getServerSnapshot = () => false;

const applyTheme = (dark: boolean) => {
  document.documentElement.classList.toggle('dark', dark);
  try {
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
  } catch {}
};

const toggleTheme = () => {
  const next = !getSnapshot();
  // Same-document view transition: fade defined in global.css (disabled for reduced motion there).
  if (!document.startViewTransition) {
    applyTheme(next);
    return;
  }
  document.startViewTransition(() => applyTheme(next));
};

export const ThemeSwitcher = () => {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const label = isDark ? 'Tema chiaro' : 'Tema scuro';

  return (
    <Button variant='ghost' size='icon' title={label} aria-label={label} onClick={toggleTheme}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

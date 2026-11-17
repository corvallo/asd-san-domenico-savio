const normalize = (path: string) => path.replace(/\/+$/, '') || '/';

export const isActivePath = (href: string, currentPath: string) => {
  const target = normalize(href);
  const current = normalize(currentPath);
  return target === '/' ? current === '/' : current === target || current.startsWith(`${target}/`);
};

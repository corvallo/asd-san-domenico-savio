import type { PropsWithChildren } from "react";
import { pageContentStyle } from "./page-content.style";

export type PageContentProps = { title: string } & PropsWithChildren;

export const PageContent = ({ title, children }: PageContentProps) => {
  return (
    <section aria-label={title} {...pageContentStyle()}>
      {children}
    </section>
  );
};

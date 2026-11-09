import { WaveDivider } from "~/features/wave-divider";
import { pageHeaderStyle } from "./page-header.style";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section {...pageHeaderStyle.root()}>
      <h1 {...pageHeaderStyle.title()}>{title}</h1>
      {subtitle && <p {...pageHeaderStyle.subtitle()}>{subtitle}</p>}
      <WaveDivider />
    </section>
  );
};

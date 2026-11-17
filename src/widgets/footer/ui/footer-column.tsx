type FooterColumnItem = { label: string; href?: string };

type FooterColumnProps = { title: string; items: FooterColumnItem[] };

export const FooterColumn = ({ title, items }: FooterColumnProps) => (
  <div>
    <h2 className='mb-3.5 font-sans text-[13px] font-semibold tracking-[0.15em] text-[#F5CF6B] uppercase'>{title}</h2>
    <ul className='m-0 list-none p-0'>
      {items.map((item) => (
        <li key={item.label} className='mb-2 text-[#E6EBF5]'>
          {item.href ? (
            <a href={item.href} className='transition-opacity hover:opacity-70'>
              {item.label}
            </a>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  </div>
);

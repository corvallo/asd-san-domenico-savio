import { tv } from 'tailwind-variants';

export const photoPlaceholderStyles = tv({
  base: `
    relative

    flex
    items-center
    justify-center
    overflow-hidden

    text-[13px]
    font-semibold
    tracking-[0.2em]

    bg-wood
    text-gold-foreground
  `,
  variants: {
    shape: {
      blob: `
        shape-blob
      `,
      leaf: `
        shape-leaf
      `,
      petal: `
        rounded-[200px_40px_200px_40px]
      `,
      'petal-reverse': `
        rounded-[40px_200px_40px_200px]
      `,
      'arch-top': `
        rounded-[200px_200px_40px_40px]
      `,
      'arch-bottom': `
        rounded-[40px_40px_200px_200px]
      `,
      'leaf-top': `
        rounded-[200px_40px_40px_40px]
      `,
      'leaf-bottom': `
        rounded-[40px_40px_40px_200px]
      `,
      'leaf-wide': `
        rounded-[120px_24px_120px_24px]
      `,
      soft: `
        rounded-3xl
      `,
      card: `
        rounded-2xl
      `,
      circle: `
        aspect-square

        rounded-full
      `,
    },
  },
  defaultVariants: {
    shape: 'soft',
  },
});

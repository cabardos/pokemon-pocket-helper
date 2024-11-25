const sizes = {
  '2xs': '4px',
  xs: '8px',
  s: '12px',
  base: '16px',
  m: '20px',
  l: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
  '4xl': '56px',
  '5xl': '64px',
  '6xl': '96px',
  '7xl': '144px',
} as const;

type SizeKey = keyof typeof sizes;

export const getSize = (size: SizeKey | string): string =>
  sizes[size as SizeKey] || size;

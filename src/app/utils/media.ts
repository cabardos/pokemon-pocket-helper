const sizes = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1440px',
};

export const media = {
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
  largeDesktop: `(min-width: ${sizes.largeDesktop})`,
};

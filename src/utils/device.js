export const size = Object.freeze({
  mobileL: 425,
  tabletL: 992,
});

const device = Object.freeze({
  tabletM: `(min-width: ${size.mobileL}px) and (max-width: ${size.tabletL}px)`,
});

export default device;

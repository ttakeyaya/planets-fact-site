const size = {
  mobileS:'320px',
  mobileL:'430px',
  tabletS:'680px',
  tabletM:'720px',
  tabletL:'780px',
  laptop:'1024px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tablet})`,
  tabletM: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
};
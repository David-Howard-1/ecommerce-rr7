export const trimStringForURLParam = (string: string) => {
  return string.replace(/\s+/g, '-').toLowerCase();
};

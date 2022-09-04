export const getUrlId = (url: string) => {
  const { length, [length - 2]: id } = url.split('/');
  return parseInt(id, 10);
};

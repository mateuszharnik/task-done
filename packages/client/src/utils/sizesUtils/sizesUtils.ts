export const getWindowInnerHeight = (offsetHeight = 0) => {
  const offsetHeightNumber = Number.isFinite(offsetHeight) ? offsetHeight : 0;
  const { innerHeight } = window;

  if (offsetHeightNumber <= 0) return innerHeight;

  return innerHeight > offsetHeightNumber ? innerHeight - offsetHeightNumber : innerHeight;
};

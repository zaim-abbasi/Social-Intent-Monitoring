export const splitIntoBatches = (array, size) => {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, i) => array.slice(i * size, i * size + size)
  );
};
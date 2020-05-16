export const randomNumberGenerator = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const getMultiple = (arrayOfThings: any[], numberToGet: number) => {
  return arrayOfThings
    .map(x => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(a => a.x)
    .slice(0, numberToGet);
}
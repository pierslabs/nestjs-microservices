export const randomUnits = (min: number, max: number, unit: string) => {
  const randomValue = Math.random() * (max - min) + min;
  const values = {
    unit,
    value: randomValue,
  };
  return values;
};

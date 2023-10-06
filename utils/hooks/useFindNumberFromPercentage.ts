export const useFindNumberFromPercentage = (number: number, percentage: number): string | null => {
  const numericNumber = Number(number);
  const numericPercentage = Number(percentage);

  if (isNaN(numericNumber) || isNaN(numericPercentage)) {
    return null;
  }

  const result = ((numericNumber / 100) * numericPercentage).toFixed(1);
  
  return result
};



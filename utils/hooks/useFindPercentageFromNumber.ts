export const useFindPercentageFromNumber = (thisNumber: number, fromNumber: number): string | null => {
  const numericThisNumber = Number(thisNumber);
  const numericFromNumber = Number(fromNumber);

  if (isNaN(numericThisNumber) || isNaN(numericFromNumber)) {
    return null;
  }

  const result = ((numericFromNumber / numericThisNumber) * 100).toFixed(1);
  
  return result
};

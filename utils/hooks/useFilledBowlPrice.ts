export const useFilledBowlPrice = (pricePerGram: number, capacity: number): string | null => {
  const numericPricePerGram = Number(pricePerGram);
  const numericCapacity = Number(capacity);

  if (isNaN(numericPricePerGram) || isNaN(numericCapacity)) {
    return null;
  }

  const result = (numericPricePerGram * numericCapacity).toFixed(1);

  return result;
};


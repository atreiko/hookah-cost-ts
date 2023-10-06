export const usePricePerGram = (price: number, weight: number): string | null => {
  const numericPrice = Number(price);
  const numericWeight = Number(weight);

  if (isNaN(numericPrice) || isNaN(numericWeight)) {
    return null;
  }

  const result = (numericPrice / numericWeight).toFixed(1);

  return result;
};


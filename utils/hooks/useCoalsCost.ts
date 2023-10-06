interface ICoalsCostResult {
  perOnePiece: string;
  perHookah: string;
}

export const useCoalsCost = (price: number, weight: number, pieces: number): ICoalsCostResult => {
  const numericPrice = Number(price);
  const numericWeight = Number(weight);
  const numericPieces = Number(pieces);
  
  if (isNaN(numericPrice) || isNaN(numericWeight) || isNaN(numericPieces)) {
    return { perOnePiece: '', perHookah: '' };
  }

  const perOnePiece = (numericPrice / numericWeight).toFixed(1);
  const perHookah = (+numericPieces * +perOnePiece).toFixed(1);

  return { perOnePiece, perHookah };
};

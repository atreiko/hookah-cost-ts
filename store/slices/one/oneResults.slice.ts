import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IOneResults {
  pricePerGram: string;
  coalsCost: {
    perOnePiece: string;
    perHookah: string;
  };
  filledBowlPrice: string;
}

const initialState: IOneResults = {
  pricePerGram: '',
  coalsCost: {
    perOnePiece: '',
    perHookah: '',
  },
  filledBowlPrice: '',
};

const oneResultsSlice = createSlice({
  name: 'oneResults',
  initialState,
  reducers: {
    setOnePricePerGram: (state, action: PayloadAction<string>) => {
      // console.log('oneResults PPG: ', action.payload);
      state.pricePerGram = action.payload;
    },

    setOneCoalsCost: (state, action) => {
      // console.log('oneResults COALS COST: ', action.payload);
      state.coalsCost = {
        perOnePiece: action.payload.perOnePiece || '',
        perHookah: action.payload.perHookah || '',
      }
    },
    setOneFilledBowlPrice: (state, action) => {
      // console.log('oneResults FILLED BOWL PRICE: ', action.payload);
      state.filledBowlPrice = action.payload;
    },
    resetOneResults: () => {
      return initialState;
    },
  },
});

export const { setOnePricePerGram, setOneCoalsCost, setOneFilledBowlPrice, resetOneResults } =
  oneResultsSlice.actions;
export default oneResultsSlice.reducer;

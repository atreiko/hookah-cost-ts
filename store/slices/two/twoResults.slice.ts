import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITwoResults {
  pricePerGram: {
    first: string;
    second: string;
  };
  coalsCost: {
    perOnePiece: string;
    perHookah: string;
  };
  filledBowlPrice: {
    first: string;
    second: string;
    both: string;
  };
}

const initialState: ITwoResults = {
  pricePerGram: {
    first: '',
    second: '',
  },
  coalsCost: {
    perOnePiece: '',
    perHookah: '',
  },
  filledBowlPrice: {
    first: '',
    second: '',
    both: '',
  },
};

const twoResultsSlice = createSlice({
  name: 'twoResults',
  initialState,
  reducers: {
    setTwoPricePerGram: (state, action: PayloadAction<{ first: string; second: string }>) => {
      state.pricePerGram = { ...state.pricePerGram, ...action.payload };
    },
    setTwoCoalsCost: (state, action: PayloadAction<{ perOnePiece: string; perHookah: string }>) => {
      state.coalsCost = { ...state.coalsCost, ...action.payload };
    },
    setTwoFilledBowlPrice: (
      state,
      action: PayloadAction<{ first: string; second: string; both: string }>
    ) => {
      state.filledBowlPrice = { ...state.filledBowlPrice, ...action.payload };
    },
    resetTwoResults: () => {
      return initialState
    }
  },
});

export const { setTwoPricePerGram, setTwoCoalsCost, setTwoFilledBowlPrice, resetTwoResults } =
  twoResultsSlice.actions;
export default twoResultsSlice.reducer;

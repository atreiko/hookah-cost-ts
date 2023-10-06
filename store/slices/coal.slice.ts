import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICoal {
  coalPriceKg: string;
  piecesPerKg: string;
  coalConsumption: string;
}

const initialState: ICoal = {
  coalPriceKg: '',
  piecesPerKg: '',
  coalConsumption: '',
};

const coalSlice = createSlice({
  name: 'coal',
  initialState,
  reducers: {
    setCoal: (state, action: PayloadAction<ICoal>) => {
      console.log('COALS: ', action.payload);
      return { ...state, ...action.payload };
    },
    resetCoal: () => {
      return initialState
    },
  },
});

export const { setCoal, resetCoal } = coalSlice.actions;
export default coalSlice.reducer;

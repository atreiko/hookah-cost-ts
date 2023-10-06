import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface IBrandsAmount {
  amount: 'one' | 'two';
}

const initialState: IBrandsAmount = {
  amount: 'one'
}

const brandsAmountSlice = createSlice({
  name: 'brandsAmount',
  initialState,
  reducers: {
    setBrandsAmount: (state, action: PayloadAction<'one' | 'two'>) => {
      state.amount = action.payload;
    }
  }
});

export const { setBrandsAmount } = brandsAmountSlice.actions;
export default brandsAmountSlice.reducer;
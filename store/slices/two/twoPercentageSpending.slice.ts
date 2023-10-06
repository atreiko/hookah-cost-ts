import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface ITwoPercentageSpending {
  firstTobacco: string;
  secondTobacco: string;
  bothTobaccos: string;
  coals: string;
  salary: string;
  additionalExpenses: string;
}

const initialState: ITwoPercentageSpending = {
  firstTobacco: '',
  secondTobacco: '',
  bothTobaccos: '',
  coals: '',
  salary: '',
  additionalExpenses: ''
}

const twoPercentageSpendingSlice = createSlice({
  name: 'twoSpending',
  initialState,
  reducers: {
    setTwoPercentageSpending: (state, action: PayloadAction<ITwoPercentageSpending>) => {
      return { ...state, ...action.payload }
    },
    resetTwoPercentageSpending: () => {
      return initialState;
    }
  }
})

export const { setTwoPercentageSpending, resetTwoPercentageSpending } = twoPercentageSpendingSlice.actions
export default twoPercentageSpendingSlice.reducer

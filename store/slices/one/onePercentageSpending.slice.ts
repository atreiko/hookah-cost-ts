import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IOnePercentageSpending {
  tobacco: string;
  coals: string;
  salary: string;
  additionalExpenses: string;
}

const initialState: IOnePercentageSpending = {
  tobacco: '',
  coals: '',
  salary: '',
  additionalExpenses: ''
}

const onePercentageSpendingSlice = createSlice({
  name: 'onePercentageSpending',
  initialState,
  reducers: {
    setOnePercentageSpending: (state, action: PayloadAction<IOnePercentageSpending>) => {
      return { ...state, ...action.payload }
    },
    resetOnePercentageSpending: () => {
      return initialState;
    }
  }
})

export const { setOnePercentageSpending, resetOnePercentageSpending } = onePercentageSpendingSlice.actions
export default onePercentageSpendingSlice.reducer

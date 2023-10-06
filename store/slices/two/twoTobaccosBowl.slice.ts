import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITwoTobaccosBowl {
  bowlCapacity: string;
  percentageFirst: string;
  percentageSecond: string;
}

const initialState: ITwoTobaccosBowl = {
  bowlCapacity: '',
  percentageFirst: '',
  percentageSecond: '',
}

const twoTobaccosBowlSlice = createSlice({
  name: 'twoTobaccosBowl',
  initialState,
  reducers: {
    setTwoTobaccosBowl: (state, action: PayloadAction<ITwoTobaccosBowl>) => {
      console.log('TWO TOBACCOS BOWL: ', action.payload);
      return { ...state, ...action.payload }
    },
    resetTwoTobaccosBowl: () => {
      return initialState
    }
  }
})

export const { setTwoTobaccosBowl, resetTwoTobaccosBowl } = twoTobaccosBowlSlice.actions
export default twoTobaccosBowlSlice.reducer 
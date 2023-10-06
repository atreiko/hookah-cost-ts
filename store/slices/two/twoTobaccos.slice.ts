import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITwoTobaccos {
  tobaccoPrice: string;
  tobaccoWeight: string;
  secondTobaccoPrice: string;
  secondTobaccoWeight: string;
}

const initialState: ITwoTobaccos = {
  tobaccoPrice: '',
  tobaccoWeight: '',
  secondTobaccoPrice: '',
  secondTobaccoWeight: ''
}

const twoTobaccosSlice = createSlice({
  name: 'two',
  initialState,
  reducers: {
    setTwoTobaccos: (state, action: PayloadAction<ITwoTobaccos>) => {
      console.log('ACTION.PAYLOAD TWO: ', action.payload); 
      const { tobaccoPrice, tobaccoWeight, secondTobaccoPrice, secondTobaccoWeight } = action.payload;
      
      state.tobaccoPrice = tobaccoPrice;
      state.tobaccoWeight = tobaccoWeight;
      state.secondTobaccoPrice = secondTobaccoPrice;
      state.secondTobaccoWeight = secondTobaccoWeight;
    },
    resetTwoTobaccos: () => {
      return initialState;
    }
  }
})

export const { setTwoTobaccos, resetTwoTobaccos } = twoTobaccosSlice.actions
export default twoTobaccosSlice.reducer 
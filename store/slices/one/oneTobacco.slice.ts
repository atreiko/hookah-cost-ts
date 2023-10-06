import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IOneTobacco {
  tobaccoPrice: string
  tobaccoWeight: string
}

const initialState: IOneTobacco = {
  tobaccoPrice: '',
  tobaccoWeight: '',
}

const oneTobaccoSlice = createSlice({
  name: 'one',
  initialState,
  reducers: {
    setOneTobacco: (state, action: PayloadAction<IOneTobacco>) => {
      console.log('ONE TOBACCO: ', action.payload);
      return { ...state, ...action.payload }
    },
    resetOneTobacco: () => {
      return initialState
    }
  }
})

export const { setOneTobacco, resetOneTobacco } = oneTobaccoSlice.actions
export default oneTobaccoSlice.reducer 
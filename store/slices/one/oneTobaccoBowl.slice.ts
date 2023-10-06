import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IOneTobaccoBowl {
  bowlCapacity: string
}

const initialState: IOneTobaccoBowl = {
  bowlCapacity: ''
}

const oneTobaccoBowlSlice = createSlice({
  name: 'oneTobaccoBowl',
  initialState,
  reducers: {
    setOneTobaccoBowl: (state, action: PayloadAction<IOneTobaccoBowl>) => {
      console.log('ONE TOBACCO BOWL: ', action.payload);
      return { ...state, ...action.payload }
    },
    resetOneTobaccoBowl: () => {
      return initialState
    }
  }
})

export const { setOneTobaccoBowl, resetOneTobaccoBowl } = oneTobaccoBowlSlice.actions
export default oneTobaccoBowlSlice.reducer

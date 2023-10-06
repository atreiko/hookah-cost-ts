import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ITotal {
  cost: {
    value: string | null,
    percentage: string | null;
  },
  proceeds: {
    value: string | null;
    percentage: string | null;
  }
}

const initialState: ITotal = {
  cost: {
    value: '',
    percentage: '',
  },
  proceeds: {
    value: '',
    percentage: '',
  }
}

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    setCost: (state, action: PayloadAction<{ percentage: string | null, value: string | null }>) => {
      state.cost = { ...state.cost, ...action.payload };
    },
    setProceeds: (state, action: PayloadAction<{ percentage: string | null, value: string | null }>) => {
      state.proceeds = { ...state.proceeds, ...action.payload };
    },
    resetTotal: () => {
      return initialState
    }
  }
})

export const { setCost, setProceeds, resetTotal } = totalSlice.actions;
export default totalSlice.reducer;
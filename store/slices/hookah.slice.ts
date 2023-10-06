import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IHookah {
  hookahPrice: string;
  salaryPerOneHookah: string;
  additionalExpenses: string;
}

const initialState: IHookah = {
  hookahPrice: '',
  salaryPerOneHookah: '0',
  additionalExpenses: '0',
};

const hookahSlice = createSlice({
  name: 'hookah',
  initialState,
  reducers: {
    setHookah: (state, action: PayloadAction<IHookah>) => {
      console.log('HOOKAH: ', action.payload);
      return { ...state, ...action.payload };
    },
    resetHookah: () => {
      return initialState
    }
  },
});

export const { setHookah, resetHookah } = hookahSlice.actions;
export default hookahSlice.reducer;
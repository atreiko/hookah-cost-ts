import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import brandsAmountSlice from './slices/brandsAmount.slice';
import oneTobaccoSlice from './slices/one/oneTobacco.slice';
import twoTobaccosSlice from './slices/two/twoTobaccos.slice';
import coalSlice from './slices/coal.slice';
import oneTobaccoBowlSlice from './slices/one/oneTobaccoBowl.slice';
import twoTobaccosBowlSlice from './slices/two/twoTobaccosBowl.slice';
import hookahSlice from './slices/hookah.slice';
import oneResultsSlice from './slices/one/oneResults.slice';
import twoResultsSlice from './slices/two/twoResults.slice';
import onePercentageSpendingSlice from './slices/one/onePercentageSpending.slice';
import twoPercentageSpendingSlice from './slices/two/twoPercentageSpending.slice';
import totalSlice from './slices/total.slice';

const rootReducer = combineReducers({
  brands: brandsAmountSlice,
  one: oneTobaccoSlice,
  two: twoTobaccosSlice,
  coal: coalSlice,
  bowlOne: oneTobaccoBowlSlice,
  bowlTwo: twoTobaccosBowlSlice,
  hookah: hookahSlice,
  oneResults: oneResultsSlice,
  twoResults: twoResultsSlice,
  oneSpending: onePercentageSpendingSlice,
  twoSpending: twoPercentageSpendingSlice,
  total: totalSlice 
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), //.concat(rootReducer.middleware),
});

setupListeners(store.dispatch);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

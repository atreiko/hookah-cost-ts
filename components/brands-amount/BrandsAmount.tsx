'use client';

import Cell from '../ui/cell/Cell';
import OneResults from '../results/one/OneResults';
import TwoResults from '../results/two/TwoResults';
import One from '../tobacco/one/One';
import Two from '../tobacco/two/Two';
import OnePercentageSpending from '../results/one/OnePercentageSpending';
import TwoPercentageSpending from '../results/two/TwoPercentageSpending';
import OneCost from '../results/one/OneCost';
import OneProceeds from '../results/one/OneProceeds';
import TwoCost from '../results/two/TwoCost';
import TwoProceeds from '../results/two/TwoProceeds';
import ActionButtons from '../ui/action-buttons/ActionButtons';

import { useAppDispatch, useAppSelector } from '@/utils/hooks/hooks';
import { BRANDS_SELECT as selectFields } from '@/utils/constants/field.constants';
import { BRANDS_TOOLTIP } from '@/utils/constants/string.constants';

import { setBrandsAmount } from '@/store/slices/brandsAmount.slice';
import { resetTwoTobaccos } from '@/store/slices/two/twoTobaccos.slice';
import { resetOneTobacco } from '@/store/slices/one/oneTobacco.slice';
import { resetCoal } from '@/store/slices/coal.slice';
import { resetOneTobaccoBowl } from '@/store/slices/one/oneTobaccoBowl.slice';
import { resetTwoTobaccosBowl } from '@/store/slices/two/twoTobaccosBowl.slice';
import { resetHookah } from '@/store/slices/hookah.slice';
import { resetOneResults } from '@/store/slices/one/oneResults.slice';
import { resetTwoResults } from '@/store/slices/two/twoResults.slice';
import { resetOnePercentageSpending } from '@/store/slices/one/onePercentageSpending.slice';
import { resetTwoPercentageSpending } from '@/store/slices/two/twoPercentageSpending.slice';
import { resetTotal } from '@/store/slices/total.slice';

import { persistor } from '@/store/redux.provider';

const BrandsAmount = () => {
  const { amount } = useAppSelector((state) => state.brands);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    if (newValue === 'one' || newValue === 'two') {
      dispatch(setBrandsAmount(newValue));

      dispatch(resetCoal());
      dispatch(resetHookah());
      dispatch(resetTotal());

      if (newValue === 'one') {
        dispatch(resetTwoTobaccos());
        dispatch(resetTwoTobaccosBowl());
        dispatch(resetTwoResults());
        dispatch(resetTwoPercentageSpending());
      }

      if (newValue === 'two') {
        dispatch(resetOneTobacco());
        dispatch(resetOneTobaccoBowl());
        dispatch(resetOneResults());
        dispatch(resetOnePercentageSpending());
      }
    }

    persistor.purge();
  };

  const handleReset = () => {
    dispatch(resetOneTobacco());
    dispatch(resetTwoTobaccos());
    dispatch(resetCoal());
    dispatch(resetOneTobaccoBowl());
    dispatch(resetTwoTobaccosBowl());
    dispatch(resetHookah());
    dispatch(resetOneResults());
    dispatch(resetTwoResults());
    dispatch(resetOnePercentageSpending());
    dispatch(resetTwoPercentageSpending());
    dispatch(resetTotal());

    persistor.purge();
  };

  const handleSave = () => {
    console.log('saved.');
    // ! Only auth.
  };

  const brandsOptions = selectFields.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-8 mb-8'>
        {amount === 'one' ? <OneResults /> : <TwoResults />}

        <Cell title='Brands Amount'>
          <label data-tooltip={BRANDS_TOOLTIP} htmlFor='brands'>
            brands amount
          </label>
          <select id='brands' value={amount} onChange={handleChange}>
            {brandsOptions}
          </select>
        </Cell>

        {amount === 'one' ? <One /> : <Two />}
        {amount === 'one' ? <OnePercentageSpending /> : <TwoPercentageSpending />}
        {amount === 'one' ? <OneCost /> : <TwoCost />}
        {amount === 'one' ? <OneProceeds /> : <TwoProceeds />}
      </div>

      <div className='mb-8'>
        <ActionButtons
          onClickFirst={handleReset}
          onClickSecond={handleSave}
          titleFirst='Reset'
          titleSecond='Save'
          iconFirst='Reset'
          iconSecond='Save'
        />
      </div>
    </>
  );
};

export default BrandsAmount;

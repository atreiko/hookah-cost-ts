import { Metadata } from 'next';

import CellInfo from '@/components/ui/cell-info/CellInfo';
import Divide from '@/components/pages/about/formulas/divide/Divide';
import Multiply from '@/components/pages/about/formulas/multiply/Multiply';
import FindNumber from '@/components/pages/about/formulas/find-number/FindNumber';
import Sum from '@/components/pages/about/formulas/sum/Sum';
import FindPercentage from '@/components/pages/about/formulas/find-percentage/FindPercentage';
import Total from '@/components/pages/about/formulas/total/Total';
import Minus from '@/components/pages/about/formulas/minus/Minus';

import {
  BOWL_DESC,
  BOWL_INFO,
  TOBACCO_DESC,
  TOBACCO_INFO,
  COAL_DESC,
  COAL_INFO,
  HOOKAH_INFO,
  HOOKAH_DESC,
} from '@/utils/constants/string.constants';

export const metadata: Metadata = {
  title: 'Hookah Cost | Formulas',
  description: 'Formulas',
};

const Formulas: React.FC = () => {
  const tobaccoPricePerGram = (
    <Divide result='Price per gram' numerator='Tobacco price' denominator='Tobacco weight' />
  );

  const coalsPricePerOnePiece = (
    <Divide result='Price per one piece' numerator='Price per kilogram' denominator='Coal pieces' />
  );

  const coalsPricePerHookah = (
    <Multiply
      result='Cost per hookah'
      firstMultiplier='Consumption'
      secondMultiplier='Price per one piece'
    />
  );

  const filledBowlPrice = (
    <Multiply
      result='Filled bowl price'
      firstMultiplier='Capacity'
      secondMultiplier='Price per gram'
    />
  );

  const gramsFromPercent = (
    <FindNumber result='Grams' number='Bowl capacity' percentage='Percent' />
  );

  const filledBowlPriceEachTobacco = (
    <Multiply
      result='Price each tobacco'
      firstMultiplier='Grams'
      secondMultiplier='Price per gram each tobacco'
    />
  );

  const filledBowlPriceBoth = (
    <Sum
      result='Both tobaccos price'
      number1='First tobacco price'
      number2='Second tobacco price'
    />
  );

  const percentageSpending = (
    <FindPercentage
      result='Percentage spending (%)'
      number1='Hookah price'
      number2='Search value'
    />
  );

  const totalCost = (
    <Total
      result='Cost(%)'
      number1='Filled bowl price | both tobaccos(%)'
      number2='Coal(%)'
      number3='Salary(%)'
      number4='Additional Expenses(%)'
    />
  );

  const proceeds = <Minus result='Proc.' number1='Hookah price(100%)' number2='Cost(%)' />;

  return (
    <main className='min-h-screen pt-[45px]'>
      <div className='container'>
        <h1 className='text-2xl mt-8'>Our form calculations</h1>
        <div className='mt-8 grid md:grid-cols-2 grid-cols-1 gap-4'>
          <CellInfo title='Tobacco' info={TOBACCO_INFO} desc={TOBACCO_DESC}>
            {tobaccoPricePerGram}
          </CellInfo>
          <CellInfo title='Coal' info={COAL_INFO} desc={COAL_DESC}>
            <div className='flex flex-col gap-4'>
              {coalsPricePerOnePiece}
              {coalsPricePerHookah}
            </div>
          </CellInfo>
          <CellInfo title='Bowl' info={BOWL_INFO} desc={BOWL_DESC}>
            <div className='flex flex-col gap-4'>
              {filledBowlPrice}
              {gramsFromPercent}
              {filledBowlPriceEachTobacco}
              {filledBowlPriceBoth}
            </div>
          </CellInfo>
          <CellInfo title='Hookah' info={HOOKAH_INFO} desc={HOOKAH_DESC}>
            <div className='flex flex-col gap-4'>
              {percentageSpending}
              {totalCost}
              {proceeds}
            </div>
          </CellInfo>
        </div>
      </div>
    </main>
  );
};

export default Formulas;

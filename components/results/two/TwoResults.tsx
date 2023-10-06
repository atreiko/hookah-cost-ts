import CellResult from '@/components/ui/cell-result/CellResult';
import TwoPricePerGram from './TwoPricePerGram';
import CoalsCost from '../CoalsCost';
import TwoFilledBowlPrice from './TwoFilledBowlPrice';

const TwoResults: React.FC = () => {
  return (
    <CellResult>
      <TwoPricePerGram />
      <CoalsCost />
      <TwoFilledBowlPrice />
    </CellResult>
  );
};

export default TwoResults;

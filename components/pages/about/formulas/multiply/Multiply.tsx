import { Gothic_A1 } from 'next/font/google';

type MultiplyProps = {
  result: string;
  firstMultiplier: string;
  secondMultiplier: string;
};

const gothic_a1 = Gothic_A1({ subsets: ['latin'], weight: ['400'] });

const Multiply: React.FC<MultiplyProps> = ({ result, firstMultiplier, secondMultiplier }) => {
  return (
    <div className={gothic_a1.className}>
      <div className='flex justify-center items-center p-4 rounded-xl border border-neutral-700 bg-neutral-900 text-base uppercase'>
        <h6 className='font-medium text-white flex items-center'>
          {result} <span className='text-xl mx-2'>=</span>
          <span className='font-medium text-white'>{firstMultiplier}</span>
          <span className='text-xl mx-2'>*</span>
          <span className='font-medium text-white'>{secondMultiplier}</span>
        </h6>
      </div>
    </div>
  );
};

export default Multiply;

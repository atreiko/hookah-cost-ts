import { Gothic_A1 } from 'next/font/google';

type MinusProps = {
  result: string;
  number1: string;
  number2: string;
};

const gothic_a1 = Gothic_A1({ subsets: ['latin'], weight: ['400'] });

const Minus: React.FC<MinusProps> = ({ result, number1, number2 }) => {
  return (
    <div className={gothic_a1.className}>
      <div className='flex justify-center items-center p-4 rounded-xl border border-neutral-700 bg-neutral-900 text-base uppercase'>
        <h6 className='font-medium text-white flex items-center'>
          {result} <span className='text-xl mx-2'>=</span>
          <span className='font-medium text-white'>{number1}</span>
          <span className='text-xl mx-2'> - </span>
          <span className='font-medium text-white'>{number2}</span>
        </h6>
      </div>
    </div>
  );
};

export default Minus;

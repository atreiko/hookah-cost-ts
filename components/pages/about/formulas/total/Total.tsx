import { Gothic_A1 } from 'next/font/google';

type TotalProps = {
  number1: string;
  number2: string;
  number3: string;
  number4: string;
  result: string;
};

const gothic_a1 = Gothic_A1({ subsets: ['latin'], weight: ['400'] });

const Total: React.FC<TotalProps> = ({ number1, number2, number3, number4, result })  => {
  return (
    <div className={gothic_a1.className}>
      <div className='flex justify-center items-center p-4 rounded-xl border border-neutral-700 bg-neutral-900 text-base uppercase'>
        <div className='flex'>
          <h6 className='font-medium text-white flex items-center'>
            {result} <span className='text-xl mx-2'>=</span>
          </h6>
          
          <div className='flex flex-col'>
            <span className='font-medium text-white'>{number1}</span>
            <span className='text-xl mx-2'>+</span>
            <span className='font-medium text-white'>{number2}</span>
            <span className='text-xl mx-2'>+</span>
            <span className='font-medium text-white'>{number3}</span>
            <span className='text-xl mx-2'>+</span>
            <span className='font-medium text-white'>{number4}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Total
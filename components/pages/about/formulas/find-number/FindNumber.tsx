import { Gothic_A1 } from 'next/font/google';

type FindNumberProps = {
  result: string;
  number: string;
  percentage: string;
};

const gothic_a1 = Gothic_A1({ subsets: ['latin'], weight: ['400'] });

const FindNumber: React.FC<FindNumberProps> = ({ result, number, percentage }) => {
  return (
    <div className={gothic_a1.className}>
      <div className='flex justify-center items-center p-4 rounded-xl border border-neutral-700 bg-neutral-900 text-base uppercase'>
        <div className='flex'>
          <h6 className='font-medium text-white flex items-center'>
            {result} <span className='text-xl mx-2'>=</span>
          </h6>
        </div>

        <div className='flex flex-col'>
          <p className='flex p-2 border-b border-neutral-700 text-white'>{number}</p>
          <p className='flex justify-center p-2 text-white'>100</p>
        </div>

        <span className='text-xl mx-2'>*</span>

        <p className='flex text-white'>{percentage}</p>
      </div>
    </div>
  );
};

export default FindNumber;

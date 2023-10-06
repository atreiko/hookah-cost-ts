import { Gothic_A1 } from 'next/font/google';

type DivideProps = {
  result: string;
  numerator: string;
  denominator: string;
};

const gothic_a1 = Gothic_A1({ subsets: ['latin'], weight: ['400'] });

const Divide: React.FC<DivideProps> = ({ result, numerator, denominator }) => {
  return (
    <div className={gothic_a1.className}>
      <div className='flex justify-center items-center p-4 rounded-xl border border-neutral-700 bg-neutral-900 text-base uppercase'>
        <div className='flex'>
          <h6 className='font-medium text-white flex items-center'>
            {result}<span className='text-xl mx-2'>=</span>
          </h6>
        </div>

        <div className='flex flex-col'>
          <p className='flex p-2 border-b border-neutral-700 text-white'>{numerator}</p>
          <p className='flex p-2 text-white'>{denominator}</p>
        </div>
      </div>
    </div>
  );
};

export default Divide;

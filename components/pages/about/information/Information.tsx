import Link from 'next/link';
import Image from 'next/image';

import me from '/public/me.jpeg';

const Info: React.FC = () => {
  return (
    <div className='flex items-center gap-20 mt-40'>
      <div>
        <h2 className='text-2xl mb-8'>Our field of activity</h2>
        <p className='mb-2'>
          Greetings! I'm Artem. In 2018, I had the privilege of launching one of Ukraine's largest
          hookah bars.
        </p>

        <p>
          I was fortunate to lead an incredible team in facing and overcoming various challenges for
          the satisfaction of our guests. Our establishment was known as "GODZ Hookah & Cocktails"
          and was situated in the heart of Ukraine's capital.
        </p>

        <p className='mb-2'>
          We maintained a presence on social media and were featured on various websites. Feel free
          to explore our online presence if you're curious:&nbsp;
          <a
            className='underline text-neutral-500'
            href='https://www.instagram.com/godz_kiev/'
            target='_blank'>
            Instagram
          </a>
          , &nbsp;
          <a
            className='underline text-neutral-500'
            href='https://www.facebook.com/ingodzwetrust'
            target='_blank'>
            Facebook
          </a>
          , &nbsp;
          <a
            className='underline text-neutral-500'
            href='https://www.tripadvisor.ru/Restaurant_Review-g294474-d15087368-Reviews-Godz_Hookah_Cocktails-Kyiv.html'
            target='_blank'>
            Tripadvisor
          </a>
          .
        </p>

        <p className='mb-2'>
          Whether you're in the hookah service industry, handling procurement to meet the needs of
          your establishment, or just a curious guest keen on calculating the cost of preparing a
          hookah, you'll find yourself performing similar calculations to arrive at the desired
          result.
        </p>

        <p className='mb-2'>
          I'm excited to share a tool with you that will simplify these calculations.
        </p>

        <p className='mb-2'>
          Hookah tobacco comes in various packaging, ranging from 15g to 1000g. As you prepare your
          hookah by filling the bowl, you might wonder about the cost involved. To calculate this,
          you need to determine the price per gram and the quantity of grams that fit in the bowl.
          Or perhaps you want to blend two different tobaccos with varying prices and package sizes.
          And what about the cost of the coals you're using? We've got you covered with all these
          calculations.
        </p>

        <p className='mb-2'>
          You can find detailed instructions with the formulas you need at this{' '}
          <Link className='underline text-neutral-500' href='/formulas'>
            link.
          </Link>
        </p>
      </div>

      <Image
        className='rounded-xl shadow-sm shadow-neutral-950'
        width={400}
        src={me}
        alt='photo'
        priority={true}
      />
    </div>
  );
};

export default Info;

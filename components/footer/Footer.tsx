import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-4 border-t border-t-neutral-700 backdrop-blur bg-neutral-950'>
      <div className='container grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-8 mb-8'>

        <div>
          <h6 className='text-lg mb-4'>About</h6>
          <ul>
            <li className='mb-1 font-thin'><Link href='/about/info'>Our field of activity</Link></li>
            <li className='mb-1 font-thin'><a href='/about/formulas'>Our form calculations</a></li>
          </ul>
        </div>

        <div>
          <h6 className='text-lg mb-4'>Questions</h6>
          <ul>
            <li className='mb-1 font-thin'><Link href='/protected/client'>PROTECTED CLIENT</Link></li>
            <li className='mb-1 font-thin'><Link href='/protected/server'>PROTECTED SERVER</Link></li>
            <li className='mb-1 font-thin'><Link href='/profile/client'>PROFILE CLIENT</Link></li>
            <li className='mb-1 font-thin'><Link href='/profile/server'>PROFILE SERVER</Link></li>
          </ul>
        </div>
        
        <div>
          <h6 className='text-lg mb-4'>Contact</h6>
          <ul>
            <li className='mb-1 font-thin'><a href='#'>hookah.cost@gmail.com</a></li>
            <li className='mb-1 font-thin'><a href='#'>Facebook</a></li>
          </ul>
        </div>

      </div>

      <div className='container'>
        <p className='font-thin text-xs uppercase'>All rights are reserved.</p>
        <span className='font-thin text-xs uppercase'>Copyright 2023</span>
        <Link className='block w-3 h-3 rounded-full border border-neutral-50' href='/dashboard' />
      </div>
    </footer>
  );
};

export default Footer;


{/* <li className='mb-1 font-thin'><a href='#'>Сan I see the formulas you use to calculate?</a></li>
<li className='mb-1 font-thin'><a href='#'>How can I understand the forms I fill out in more detail?</a></li>
<li className='mb-1 font-thin'><a href='#'>Can I use these calculations for business?</a></li>
<li className='mb-1 font-thin'><a href='#'>What privileges do registered users have?</a></li> */}
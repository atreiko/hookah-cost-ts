'use client';

import { signIn } from 'next-auth/react';
import Button from '../ui/button/Button';
import Link from 'next/link';

type SignInProps = {
  callbackUrl: string;
};

const SignIn: React.FC<SignInProps> = ({ callbackUrl }) => {
  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <Button onClick={() => signIn('google', { callbackUrl })} typeIcon='Google'>
          Continue with Google
        </Button>
        <div>
          <p>if you don't have an account, follow the <Link className='underline' href='/signup'>link</Link> to register.</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

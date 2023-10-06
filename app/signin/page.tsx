import React from 'react';
import SignIn from '@/components/auth/SignIn';
import { NextPage } from 'next';

type SignInPageProps = {
  searchParams: {
    callbackUrl?: string;
  };
};

const SignInPage: NextPage<SignInPageProps> = ({ searchParams: { callbackUrl } }) => {
  
  return (
    <div className='min-h-screen pt-[45px]'>
      <div className='container'>
        <SignIn callbackUrl={callbackUrl || '/'} />
      </div>
    </div>
  );
};

export default SignInPage;

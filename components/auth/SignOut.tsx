'use client';
import { signOut } from 'next-auth/react';
import Button from '../ui/button/Button';

const SignOut = () => {
  return <Button variant='secondary' onClick={() => signOut()}>SignOut</Button>;
};

export default SignOut;

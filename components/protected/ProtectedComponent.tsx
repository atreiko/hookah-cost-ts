'use client';
import { useSession } from 'next-auth/react';

const ProtectedComponent = ({ user }: any) => {
  const { data: session } = useSession();

  return <p>You are logged is as: <b>{session?.user?.name || user?.name}</b></p>
};

export default ProtectedComponent;

'use server';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '@/models/userModel';

export async function updateUser({ name, image }: { name: string; image: string }) {
  const session = await getServerSession(authOptions);

  if (!session) throw new Error('Unauthorization.');

  try {
    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image,
      },
      { new: true }
    ).select('-password');

    if (!user) throw new Error("Email doesn't exist!");

    return { message: 'Profile updated successfully.' }; 
  } catch (error) {
    if (error instanceof Error) {
      redirect(`/errors?error=${error.message}`);
    }
  } 
  console.log('UPDATE USER ACTION: ', session);
}

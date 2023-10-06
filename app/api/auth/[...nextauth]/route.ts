import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/utils/constants/string.constants';

import connectDB from '@/lib/mongoose';
import User from '@/models/userModel';

connectDB();

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  throw new Error('Google client ID or client secret not found in environment variables.');
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      // console.log('ROUTE SIGNIN:', {account, profile});

      //! types
      if (account?.type === 'oauth') {
        return await signInWithOAuth({ account, profile });
      }
      // console.log('SIGNIN', { account, profile });
      return true;
    },

    async jwt({ token, trigger, session }: any) {
      //! types
      console.log('JTW: ', { TOKEN: token, TRIGGER: trigger, SESSION: session });

      if (trigger === 'update') {
        token.user.name = session.name;
        token.user.image = session.image;

      } else {
        const user = await getUserByEmail({ email: token.email });
        // console.log('USER: ', user.token);
        token.user = user;
      }
      return token;
    },

    async session({ session, token }: any) {
      // console.log( { SESSION: session, TOKEN: token });
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

async function signInWithOAuth({ account, profile }: any) {
  //! types
  const user = await User.findOne({ email: profile.email });

  if (user) return true;

  // console.log('ACCOUNT: ', account);

  const newUser = new User({
    name: profile.name,
    email: profile.email,
    image: profile.picture,
    provider: account.provider,
  });

  // console.log('signInWithOAuth NEW USER: ', newUser);
  await newUser.save();
  return true;
}

async function getUserByEmail({ email }: any) {
  const user = await User.findOne({ email }).select('-password');
  if (!user) throw new Error('Email does not exist.');
  return { ...user._doc, _id: user._id.toString() };
}

//todo ################################################################

// import NextAuth from 'next-auth/next';
// import GoogleProvider from 'next-auth/providers/google';
// import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/utils/constants/string.constants';

// import connectDB from '@/lib/mongoose';
// import User from '@/models/userModel';
// import { Account, Profile } from 'next-auth';
// import { AdapterUser } from 'next-auth/adapters';

// type SignInParams = {
//   user: string;
//   account?: {
//     type: string;
//     provider: string;
//   };
//   profile?: Profile;
//   email?: { verificationRequest?: boolean };
//   credentials?: Record<string, any>;
// };

// type SignInWithOAuthParams = {
//   account: {
//     type: string;
//     provider: string;
//   };
//   profile: {
//     name: string;
//     email: string;
//     image: string;
//   };
// };

// connectDB();

// if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
//   throw new Error('Google client ID or client secret not found in environment variables.');
// }

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: '/signin',
//   },
//   callbacks: {
//     async signIn(params: SignInWithOAuthParams) {
//       if (params.account?.type === 'oauth') {
//         return await signInWithOAuth(params);
//       }
//       console.log('SIGNIN', { params });
//       return true;
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// async function signInWithOAuth(params: SignInWithOAuthParams) {
//   const user = await User.findOne({ email: params.profile.email });

//   if (user) return true;

//   console.log('ACCOUNT: ', params.account);

//   const newUser = new User({
//     name: params.profile.name,
//     email: params.profile.email,
//     image: params.profile.image,
//     provider: params.account.provider,
//   });

//   console.log('signInWithOAuth NEW USER: ', newUser);
//   await newUser.save();
//   return true;
// }

# Hookah Cost

Stack:

- Next.JS 13
- TypeScript
- Server Actions
- Redux Toolkit
- Redux Persist
- React hook form
- Zod
- Next-Auth
- JWT
- Nodemailer
- Mongoose
- Tailwind

## Auth

1. Main functions

- SignIn with OAuth ( Google )
- SignIn with Credentials ( Email, Password )
- SignUp with Name, Email, Password
- Verify Email
- Update Profile
- Change Password
- Forgot Password
- Middleware to secure certain page

### Authentication implementation steps:

1. `npm i mongoose next-auth bcrypt jsonwebtoken nodemailer`
2. $ mkdir root/context/provider.js

```js
/* provider.js */
'use client';
import { SessionProvider } from 'next-auth/react';

export const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
```

3. Wrap components with Provider

```js
/* layout.js */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```

4. $ mkdir api/auth/[...nextauth]/route.js

```js
/* route.ts */
import NextAuth from 'next-auth';

export const authOptions = {
  providers: [],
  pages: '/signin',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

USE React Devtools to discover Provider component.
Inside Provider we discover SessionProvider, then Context.Provider

5. Header SignIn, SignUp, client/server pages, admin

```js
/* Header.tsx */
'use server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Header: React.FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {!session ? (
        <div>Avatar</div>
      ) : (
        <div>
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      )}
    </>
  );
};
```

- Create server/client routes.
- Create Profile and Dashboard page.
- Create SignIn and SignUp pages.

6. SignIn with OAuth ( Google ) without DB

```js
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/utils/constants/string.constants';

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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

Generate secret:  
 $ openss1 rand -base 32

Access to Google Cloud Console to get GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET  
`https://console.cloud.google.com/`

- Create a new project
- APIs & Services => Credential => Create Credential => OAuth client ID =>  
  => Web application => Authorized JavaScript origins ( http://localhost:3000 ) =>  
  => Authorized redirect URIs ( http://localhost:3000/api/auth/callback/google )

```.env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= (openssl rand -base 32)

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

 MONGODB_URI=
```

```js
/* SignIn.tsx */
'use client';
import { signIn } from 'next-auth/react';
import Button from '../ui/button/Button';

const SignIn = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <Button onClick={() => signIn('google', { callbackUrl: '/' })} typeIcon='Google'>
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
```

Sign in with Google and look at session

```jsx
/* Header.tsx */
const Header: React.FC = async () => {
  const session = await getServerSession(authOptions);
  console.log('SESSION: ', { session });

```

```terminal
  SESSION:  {
  session: {
    user: {
      name: 'Name Surname',
      email: 'n.surname@gmail.com',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocI9zA4pkcMv_mTfVRbpbdIbn0JzPWfCzbu6n-sviliP=s96-c'
    }
  }
}
```

7. SignOut and Middleware keep site protected

- Create SignOut component

```jsx
/* middleware.ts */
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/profile/:path*', '/protected/:path*', '/dashboard/:path*'],
};
```

```jsx
/* app/signin/page.tsx */
import React from 'react';
import SignIn from '@/components/auth/SignIn';
import { NextPage } from 'next';

type SignInPageProps = {
  searchParams: {
    callbackUrl?: string,
  },
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
```

- Protected page render

Protected Client page

```jsx
/* app/protected/client/page.tsx */
'use client';
import { useSession } from 'next-auth/react';

const ProtectedClientPage = () => {
  const { data: session } = useSession();

  return (
    <div className='min-h-screen pt-[45px]'>
      <div className='container'>
        <h2 className='py-4 text-xl'>PROTECTED CLIENT PAGE</h2>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
        <span>{session?.expires}</span>
        {/* <p>{session?.user?.image}</p> */}
      </div>
    </div>
  );
};

export default ProtectedClientPage;
```

Protected Server page

```jsx
'use server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='min-h-screen pt-[45px]'>
      <div className='container'>
        <h2 className='py-4 text-xl'>PROTECTED SERVER PAGE</h2>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
        {/* <p>{session?.user?.image}</p> */}
      </div>
    </div>
  );
};

export default ProtectedServerPage;
```

8. Setup MongoDB ( mongoose )

- Models ( models/userModel.ts )
- Connect to MongoDB ( lib/mongoose.ts )

Create cluster, get URI

9. SignIn with OAuth ( Google ) with Database ( mongoose )

- async signIn => signInWithOAuth

```jsx
/* app/api/auth/[...nextauth]route.ts */
callbacks: {
  async signIn(params: any) { //! types
      if (params.account?.type === 'oauth') {
        return await signInWithOAuth(params);
      }
      return true;
    },
  }
```

```ts
/* app/api/auth/[...nextauth]route.ts */
async function signInWithOAuth({ account, profile }: any) {
  const user = await User.findOne({ email: profile.email })
  console.log('signInWithOAuth USER: ', user)

  if (user) return true;

  // if !user => sign up => sign in
  const newUser = new User({
    name: profile.name,
    email: profile.email,
    image: profile.picture,
    provider: profile.provider
  })

  console.log('signInWithOAuth NEW USER: ', newUser)
  await newUser.save();
  return true;
```

Check saved result in DB.
Check data in SessionProvider ( React DevTools )

```t
signInWithOAuth NEW USER:  {
  name: 'Artem Treiko',
  email: 'a.treiko92@gmail.com',
  image: 'https://lh3.googleusercontent.com/a/ACg8ocI9zA4pkcMv_mTfVRbpydIbn0JzPWfCzbu6n-sviliP=s96-c',
  role: 'user',
  provider: 'google',
  _id: new ObjectId("65097e36f98c834002aba48e")
}
```

- async jwt => getUserByEmail

```jsx
/* app/api/auth/[...nextauth]route.ts */
callbacks: {
    async jwt({ token, trigger, session }: any) {
      console.log('JTW: ', {'TOKEN': token, 'TRIGGER': trigger, 'SESSION': session })
      const user = await getUserByEmail({ email: token.email });
      console.log('USER: ', user);
      token.user = user;
      return token
    }
  },
```

```t
JTW:  {
  TOKEN: {
    iat: 1695194381,
    exp: 1697786381,
    jti: 'ef328f5a-7ce3-4d11-a4e3-ab5e9967d345'
  },
  TRIGGER: undefined,
  SESSION: undefined
}

USER:  {
  _id: '6509e2d330ded22789779333',
  name: 'Artem Treiko',
  email: 'a.treiko92@gmail.com',
  role: 'user',
  provider: 'google',
  createdAt: 2023-09-19T18:05:07.244Z,
  updatedAt: 2023-09-19T18:05:07.244Z,
  __v: 0
}
```

```tsx
/* app/api/auth/[...nextauth]route.ts */
async function getUserByEmail({ email }: any) {
  const user = await User.findOne({ email }).select('-password');
  if (!user) throw new Error('Email does not exist.');
  return { ...user._doc, _id: user._id.toString() };
}
```

- async session => session.user = token.user

```tsx
callbacks: {
    async session({ session, token }: any) {
      console.log( { SESSION: session, TOKEN: token });
      session.user = token.user
      return session;
    },
  },
```

```t
{
  SESSION: {
    user: {
      name: 'Artem Treiko',
      email: 'a.treiko92@gmail.com',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocI9zA4pkcMv_mTfVRbpydIbn0JzPWfCzbu6n-sviliP=s96-c'
    },
    expires: '2023-10-20T09:07:26.345Z'
  },
  TOKEN: {
    name: 'Artem Treiko',
    email: 'a.treiko92@gmail.com',
    picture: 'https://lh3.googleusercontent.com/a/ACg8ocI9zA4pkcMv_mTfVRbpydIbn0JzPWfCzbu6n-sviliP=s96-c',
    sub: '101292155934328324803',
    iat: 1695200713,
    exp: 1697792713,
    jti: '61df06e0-ce67-485a-9517-08796e969bd6',
    user: {
      _id: '6509e2d330ded22789779333',
      name: 'Artem Treiko',
      email: 'a.treiko92@gmail.com',
      role: 'user',
      provider: 'google',
      createdAt: 2023-09-19T18:05:07.244Z,
      updatedAt: 2023-09-19T18:05:07.244Z,
      __v: 0
    }
  }
}
```

10. Profile Page Render

- Server/Client pages ( profile/client & profile/server )
- Profile Component ( components/pages/profile/profile-component )
- ProfileInfo Component ( components/pages/profile/profile-info )
- nextConfig = {
    images: {
      domains: ['domain', 'domain']
    }
  }

11. Update User Profile

- ProfileUpdate Component ( ProfileUpdate.tsx )
- models/userMode.ts
- updateUser Action

```ts
/* actions/auth.actions.ts */
'use server';
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
```

11. Update and Re-Render User Profile

- update({ name, image }) on Client-Side
- add ProtectedComponent to protected server and client pages  
```ts
/* app/api/auth/[...nextauth]route.ts */
async jwt({ token, trigger, session }) {
  if (trigger === 'update') {
    token.user.name = session.name;
    token.user.image = session.image;
  } else {
    const user = await getUserByEmail({ email: token.email });
    token.user = user;
  }
  return token;
    },
```

12. Sign Up with Credentials ( name, email, password )
- SignUp Component  
- signUpWithCredentials Action  

   
import React from 'react';
import {useSession, signIn, signOut} from 'next-auth/react';

const AuthTest = () => {
  const {data: session} = useSession();
  if (session) {
    return (
      <div>
        Signed in as {session.user?.email}
        <button onClick={() => signOut()}>Signout</button>
      </div>
    );
  }
  return (
    <div>
      Not signed in
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default AuthTest;


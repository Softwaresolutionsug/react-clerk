import * as React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function DashboardLayout() {
  const { signOut, userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if ( isLoaded && !userId ) {
      navigate('/sign-in');
    }
  }, [isLoaded])

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <div>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
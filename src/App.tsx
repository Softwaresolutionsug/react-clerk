import { Link, Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Clerk publishable key not found");
}

export default function App() {
  const navigate = useNavigate();

  return (
    <ClerkProvider 
    routerPush={(to) => navigate(to)}
    routerReplace={(to) => navigate(to, { replace: true })}
    publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'}>
      <header>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
}
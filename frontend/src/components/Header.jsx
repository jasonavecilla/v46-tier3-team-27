import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Header = () => {
  const { loginWithRedirect, isLoading, user, logout } = useAuth0();
  return (
    <header className="py-2 bg-neutral text-neutral-content">
      <div className="flex justify-center align-element sm:justify-end">
        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8">
            <p className="text-xs sm:text-sm">Hello, {user.name}</p>
            <button
              type="button"
              className="btn btn-xs btn-outline btn-primary"
              onClick={() => logout()}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-xs link link-hover sm:text-sm"
              onClick={() => loginWithRedirect()}
            >
              Sign in
            </button>
            {/* <button
              type="button"
              className="text-xs link link-hover sm:text-sm"
            >
              Create Account
            </button> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkTokensValidation } from "../util/checkTokensValidation";

/**
 * Higher-Order Component to check user authentication.
 * @param {React.Component} Component - The component to be wrapped.
 * @param {boolean} isProtected - Flag to indicate if the route is protected.
 * @returns {React.Component} - A new component that handles authentication checks.
 */
export const checkAuthentication = (Component, isProtected = true) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();
    const { isLoggedIn } = checkTokensValidation();

    useEffect(() => {
      // Redirect to dashboard if logged in and accessing a public route
      if (isLoggedIn && !isProtected) {
        navigate("/dashboard");
      }

      // Redirect to login if not logged in and accessing a protected route
      if (!isLoggedIn && isProtected) {
        navigate("/login");
      }
    }, [isLoggedIn, isProtected, navigate]); // Ensure all dependencies are included

    return <Component {...props} />;
  };

  return React.memo(AuthenticatedComponent); // Use memoization to avoid unnecessary re-renders
};

// import React, { useState } from "react";

// const Login = () => {
//   return (
//     <div className="pgbody">
//       <h1>Login Page</h1>
//       <p>
//         Allow users to login via 3rd party authentication e.g. their google
//         login... Ensure that email verification is used. Once a user is
//         authenticated they will have a new option on the navigation menu "New
//         Post" which will allow them to navigate to the NewPostPage. There they
//         will have the ability to create a brand new post to the system.
//       </p>
//     </div>
//   );
// };

// export default Login;


import React from "react";

// Make sure this matches what you use elsewhere
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function Login() {
  const handleGoogleLogin = () => {
    // this will redirect the browser to your backend's OAuth start
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Log in</h1>
      <p>Use your Google account to sign in:</p>
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer"
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}

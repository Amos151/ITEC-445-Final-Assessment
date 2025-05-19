import React from "react";


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

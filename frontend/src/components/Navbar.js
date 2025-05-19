import React, { useContext } from "react";
import { Link }          from "react-router-dom";
import { AuthContext }   from "../App";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function NavBar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="container">
      <div id="navlinks">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          {user && (
            <li><Link to="/new-post">New Post</Link></li>
          )}
        </ul>
      </div>

      <div id="loginbtn">
        {user ? (
          // Logging out will clear the session cookie on your backend
          <a href={`${API_URL}/auth/logout`}>
            <button>Logout</button>
          </a>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

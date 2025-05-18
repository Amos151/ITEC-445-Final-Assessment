import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="container">
    <div id="navlinks">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </div>
    <div id="loginbtn">
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
    </div>
  </nav>
);

export default NavBar;

import "./App.css";
import AllRoutes from "./AllRoutes";
import NavBar from "./components/Navbar";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function App() {
  const [user, setUser]     = useState(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/auth/user`, { withCredentials: true })
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setIsChecking(false));
  }, []);

  if (isChecking) {
    return <div>Loading authentication…</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header className="App-header">Blog Central!</header>
        <NavBar />
        <AllRoutes />
      </div>
    </AuthContext.Provider>
  );
}

export default App;

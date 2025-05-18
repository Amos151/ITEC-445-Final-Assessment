import "./App.css";
import AllRoutes from "./AllRoutes";
import NavBar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">Blog Central!</header>
      <NavBar />
      <AllRoutes />
    </div>
  );
}

export default App;

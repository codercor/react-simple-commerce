import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, LoginRegister } from "./views"
import { Navbar } from "./components"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;

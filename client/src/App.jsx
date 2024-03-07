import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" Component={Signup} />
          <Route path="/dashboard/:user" Component={Dashboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

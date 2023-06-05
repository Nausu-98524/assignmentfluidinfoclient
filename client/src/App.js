import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Dashboard from "./component/Dashbooard/Dashboard";
import AdminLogin from "./component/Login/AdminLogin";
import Home from "./component/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import StudentLogin from "./auth/StudentLogin";
import FacultyLogin from "./auth/FacultyLogin";
import OwnerLogin from "./auth/OwnerLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/facultylogin" element={<FacultyLogin />} />
          <Route path="/ownerlogin" element={<OwnerLogin />} />
          {/* <Route
                path="/userlogin"
                element={
                  <UserLogin
                    loginSTUHandle={loginSTUhandle}
                    STUrole={STUrole}
                  />
                }
              /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import StudentLogin from "./Authentication/Student/StudentLogin";
import FacultyLogin from "./Authentication/Faculty/FacultyLogin";
import OwnerLogin from "./Authentication/Owner/OwnerLogin";
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
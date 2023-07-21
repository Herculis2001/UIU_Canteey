import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import StudentLogin from "./Authentication/Student/StudentLogin";
import FacultyLogin from "./Authentication/Faculty/FacultyLogin";
import OwnerLogin from "./Authentication/Owner/OwnerLogin";
import StudentReg from "./Authentication/Student/StudentReg";
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
          <Route path="/studentreg" element={<StudentReg />} />
          {/* <Route
                path="/userlogin"
                element={
                  <UserLogin
                    loginSTUHandle={loginSTUhandle}
                    STUrole={STUrole}
                  />
                }
              /> */}
          {/* <Route path="/studentregister" element={<StudentReg />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
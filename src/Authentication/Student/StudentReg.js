import React, { useState } from 'react';
import './studentReg.css';

const StudentReg = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [password_conf ,setConfirmPassword] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // If the password dont match
    if (password !== password_conf) {
      alert("Passwords don't match");
      return;
    }
  }
  

  return (
    <div className='sign'>
      <table>
        <tr>
        <h1>Sign Up</h1>
        </tr>
        <tr>
        <td><img src="./studentLogin.css" alt="Logo" className='circle' /></td>
        </tr>
        <tr>
          <td><label> Student ID</label> <input type="number" id={"txt"} value={id} onChange={handleIdChange} placeholder="Enter your Student ID" required /></td>
        </tr>
        <tr>
          <td><label> Password</label> <input type="password"  id={"txt"} onChange={handlePasswordChange} placeholder="Enter a Password" required /></td>
        </tr>
        <tr>
          <td><label> Confirm Password</label> <input type="password"  id={"txt"} onChange={handleConfirmPasswordChange} placeholder="Re-Enter your Password" required /></td>
        </tr>
        <tr>
          <button className="my-button" onChange={handleSubmit} type="submit">Sign Up</button>
        </tr>
        <tr>
          <p>Already have an account?<a href='./StudentLogin.js'> Sign In</a></p>
        </tr>
      </table>
    </div>
    
  );
}


export default StudentReg;
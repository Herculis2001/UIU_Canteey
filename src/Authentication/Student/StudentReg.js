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
      <h2>Student Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <img src={logo} alt="Logo" className="logo"/>
        </div>
        <div clas>
          <label>Student Id</label>
          <input type="number" value={id} onChange={handleIdChange} placeholder='Enter your Student ID' required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder='Enter a Password' required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" value={password_conf} onChange={handleConfirmPasswordChange} placeholder='Re-Enter your Password' required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <p><a href='./StudentLogin.js'>Already have an account? Sign In</a></p>
      </div>
    </div>
  );
}
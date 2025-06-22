import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        navigate('/');
      } else {
        alert("Enter valid credentials");
      }
    } catch (error) {
      console.error("Login request failed:", error);
      alert("Unable to reach backend. Please make sure your backend server is running on http://localhost:5000");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <Navbar />
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} required />
          </div>
          <div className="m-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} required />
          </div>
          <button type="submit" className="m-3 btn btn-success">Login</button>
          <Link to="/createuser" className="m-3 btn btn-danger">New User</Link>
        </form>
      </div>
    </div>
  );
}

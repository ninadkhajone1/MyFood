import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    let navLocation = () => {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
    };

    let latlong = await navLocation().then(res => {
      let latitude = res.coords.latitude;
      let longitude = res.coords.longitude;
      return [latitude, longitude];
    });

    let [lat, long] = latlong;
    const response = await fetch("http://localhost:5000/api/auth/getlocation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ latlong: { lat, long } })
    });

    const { location } = await response.json();
    setCredentials({ ...credentials, geolocation: location });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation
      })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authToken);
      navigate("/login");
    } else {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      backgroundSize: 'cover',
      height: '100vh'
    }}>
      <Navbar />
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="m-3">
            <label htmlFor="geolocation" className="form-label">Address</label>
            <input type="text" className="form-control" name='geolocation' placeholder="Click below to fetch address" value={credentials.geolocation} onChange={onChange} />
          </div>
          <div className="m-3">
            <button type="button" onClick={handleClick} className="btn btn-success">Click for Current Location</button>
          </div>
          <div className="m-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

function Login() {
  // State to manage email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate password strength (example: at least 6 characters)
  const validatePassword = (password) => {
    return password.length >= 6; // You can customize this logic
  };

  // Handle form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login (e.g., redirect, show success message)
        alert('Login successful:', data);
        // You can redirect or perform any action on successful login here
      } else {
        // Handle error response
        console.error('Login failed:', data.message);
        alert(data.message); // Show an alert with the error message
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in'); // Show a generic error message
    }
  };

  return (

      <section className="vh-100 d-flex justify-items-center">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleLogin}>
                {/* Email Input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`}
                    placeholder="Enter a valid email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                    required
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>

                {/* Password Input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    className={`form-control form-control-lg ${passwordError ? 'is-invalid' : ''}`}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    required
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>

                {/* Remember me and Forgot password */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-body">
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
 
  );
}

export default Login;

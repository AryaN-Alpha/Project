import React, { useState } from 'react';

function Signup() {
  // State to manage form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [nameError, setNameError] = useState('');
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
  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setNameError('');
    setEmailError('');
    setPasswordError('');

    if (!name.trim()) {
      setNameError('Name is required.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    if (!termsAccepted) {
      alert('You must accept the terms and conditions.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name: name, Email: email, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful signup (e.g., redirect, show success message)
        console.log('Signup successful:', data);
        // You can redirect or perform any action on successful signup here
      } else {
        // Handle error response
        console.error('Signup failed:', data.message);
        alert(data.message); // Show an alert with the error message
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up'); // Show a generic error message
    }
  };

  return (
    <div className='container'>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSignup}>

                        {/* Name Input */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="text" 
                              id="form3Example1c" 
                              className={`form-control ${nameError ? 'is-invalid' : ''}`} 
                              value={name} 
                              onChange={(e) => setName(e.target.value)} 
                              required 
                            />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            {nameError && <div className="invalid-feedback">{nameError}</div>}
                          </div>
                        </div>

                        {/* Email Input */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="email" 
                              id="form3Example3c" 
                              className={`form-control ${emailError ? 'is-invalid' : ''}`} 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)} 
                              required 
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            {emailError && <div className="invalid-feedback">{emailError}</div>}
                          </div>
                        </div>

                        {/* Password Input */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="password" 
                              id="form3Example4c" 
                              className={`form-control ${passwordError ? 'is-invalid' : ''}`} 
                              value={password} 
                              onChange={(e) => setPassword(e.target.value)} 
                              required 
                            />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                          </div>
                        </div>

                        {/* Terms and Conditions Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input 
                            className="form-check-input me-2" 
                            type="checkbox" 
                            checked={termsAccepted} 
                            onChange={() => setTermsAccepted(!termsAccepted)} 
                            id="form2Example3c" 
                            required 
                          />
                          <label className="form-check-label" htmlFor="form2Example3c">
                            I agree to all statements in <a href="#">Terms of service</a>
                          </label>
                        </div>

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;

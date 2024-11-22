import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Group_Classes() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [className, setClassName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for registering, ${name}! You have been signed up for ${className}.`);
  };

  const classes = [
    { name: "Yoga", time: "9:00 AM - 10:00 AM", description: "A relaxing morning yoga session" },
    { name: "HIIT", time: "10:30 AM - 11:30 AM", description: "High-Intensity Interval Training" },
    { name: "Zumba", time: "12:00 PM - 1:00 PM", description: "Dance your way to fitness" },
    { name: "Pilates", time: "5:00 PM - 6:00 PM", description: "Core strengthening and flexibility" },
    { name: "Spin Class", time: "6:30 PM - 7:30 PM", description: "Endurance workout on stationary bikes" }
  ];

  const instructors = [
    { name: "Sarah", expertise: "Yoga & Pilates", image: "https://www.w3schools.com/w3images/avatar2.png" },
    { name: "Mike", expertise: "HIIT & Strength", image: "https://www.w3schools.com/w3images/avatar5.png" },
    { name: "Emma", expertise: "Zumba & Dance", image: "https://www.w3schools.com/w3images/avatar3.png" },
    { name: "John", expertise: "Spin & Cardio", image: "https://www.w3schools.com/w3images/avatar4.png" }
  ];

  const testimonials = [
    { name: "Rachel", text: "The yoga classes are amazing! I feel so relaxed and energized." },
    { name: "Alex", text: "HIIT is the best workout I’ve ever done. My fitness has skyrocketed." },
    { name: "Chris", text: "Spin class was intense but so much fun. Highly recommend!" }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1>ReviveFit</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item"><a href="#schedule" className="nav-link text-white">Class Schedule</a></li>
              <li className="nav-item"><a href="#instructors" className="nav-link text-white">Instructors</a></li>
              <li className="nav-item"><a href="#testimonials" className="nav-link text-white">Testimonials</a></li>
              <li className="nav-item"><a href="#register" className="nav-link text-white">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Class Schedule */}
      <section id="schedule" className="container my-5">
        <h2 className="text-center mb-4">Group Class Schedule</h2>
        <div className="row">
          {classes.map((groupClass, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{groupClass.name}</h5>
                  <p className="card-text"><strong>Time:</strong> {groupClass.time}</p>
                  <p className="card-text">{groupClass.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Instructors</h2>
          <div className="row">
            {instructors.map((instructor, index) => (
              <div className="col-md-3 text-center" key={index}>
                <div className="card">
                  <img src={instructor.image} alt={instructor.name} className="card-img-top rounded-circle" />
                  <div className="card-body">
                    <h5 className="card-title">{instructor.name}</h5>
                    <p className="card-text">{instructor.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container my-5">
        <h2 className="text-center mb-4">What Our Members Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4" key={index}>
              <div className="card p-3">
                <p className="card-text">"{testimonial.text}"</p>
                <footer className="blockquote-footer">{testimonial.name}</footer>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Register for a Class</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
              >
                <option value="">Select Class</option>
                <option value="Yoga">Yoga</option>
                <option value="HIIT">HIIT</option>
                <option value="Zumba">Zumba</option>
                <option value="Pilates">Pilates</option>
                <option value="Spin Class">Spin Class</option>
              </select>
            </div>
            <button type="submit" className="btn btn-light w-100">Register Now</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 text-center">
        <p>&copy; 2024 FitGym. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Group_Classes;
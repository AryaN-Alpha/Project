import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background from './back2.jpg';

import service1Image1 from './background1.jpg';
import service1Image2 from './background2.jpg';
import service1Image3 from './background3.jpg';
import service1Image4 from './back2.jpg';
const StrengthTrainingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-dark text-white text-center p-5"
        style={{
            backgroundImage: `url(${service1Image4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="display-4">Build Strength, Build Confidence</h1>
        <p className="lead">
          Unlock your potential with expert-guided strength training programs.
        </p>
        <button className="btn btn-primary btn-lg mt-3">Get Started</button>
      </div>

      {/* Benefits Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Why Strength Training?</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-heart-pulse display-4 text-primary mb-3"></i>
            <h4>Boost Heart Health</h4>
            <p>
              Regular strength training helps improve cardiovascular health and
              stamina.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-people-fill display-4 text-primary mb-3"></i>
            <h4>Enhance Mental Well-being</h4>
            <p>
              Strength training reduces stress and promotes mental clarity.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-lightning-fill display-4 text-primary mb-3"></i>
            <h4>Increase Energy</h4>
            <p>
              Build muscle and endurance to stay energized throughout the day.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Exercises Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Top Strength Training Exercises</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image1}
                  className="card-img-top"
                  alt="Deadlifts"
                />
                <div className="card-body">
                  <h5 className="card-title">Deadlifts</h5>
                  <p className="card-text">
                    Strengthen your back, glutes, and hamstrings with this
                    essential lift.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image2}
                  className="card-img-top"
                  alt="Bench Press"
                />
                <div className="card-body">
                  <h5 className="card-title">Bench Press</h5>
                  <p className="card-text">
                    Build chest and tricep strength with controlled presses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image3}
                  className="card-img-top"
                  alt="Squats"
                />
                <div className="card-body">
                  <h5 className="card-title">Squats</h5>
                  <p className="card-text">
                    Develop lower body strength and stability with proper squat
                    form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">What Our Members Say</h2>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <blockquote className="blockquote">
                <p>
                  "Strength training transformed my life. I feel stronger,
                  healthier, and more confident!"
                </p>
                <footer className="blockquote-footer">John Doe</footer>
              </blockquote>
            </div>
            <div className="carousel-item text-center">
              <blockquote className="blockquote">
                <p>
                  "The trainers here are amazing! I've achieved my fitness
                  goals faster than I expected."
                </p>
                <footer className="blockquote-footer">Jane Smith</footer>
              </blockquote>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white text-center p-5">
        <h2>Ready to Build Your Strength?</h2>
        <p>
          Join our community and take the first step towards a stronger you.
        </p>
        <button className="btn btn-light btn-lg">Join Now</button>
      </div>
    </div>
  );
};

export default StrengthTrainingPage;

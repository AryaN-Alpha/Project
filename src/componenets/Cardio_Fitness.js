import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import service1Image1 from './cardio1.jpg';
import service1Image2 from './cardio2.jpg';
import service1Image3 from './cardio3.jpg';
import service1Image4 from './back2.jpg';
const CardioFitnessPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="text-white text-center py-5 position-relative"
        style={{
          backgroundImage: `url(${service1Image4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      >
        {/* Overlay for Translucency */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 font-weight-bold">Cardio Fitness: Revitalize Your Body</h1>
          <p className="lead font-weight-bold">
            Discover the ultimate way to boost endurance, heart health, and energy levels.
          </p>
          <a href="#benefits" className="btn btn-light btn-lg mt-3">
            Learn More
          </a>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="benefits" className="container py-5">
        <h2 className="text-center mb-4">Why Cardio Fitness?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-heart-fill display-4 text-danger mb-3"></i>
            <h4>Boost Heart Health</h4>
            <p>
              Cardio exercises improve circulation, lower blood pressure, and strengthen your heart.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-lightning-fill display-4 text-warning mb-3"></i>
            <h4>Increase Energy</h4>
            <p>
              Feel more energetic and tackle your day with improved stamina and endurance.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-calendar-check-fill display-4 text-primary mb-3"></i>
            <h4>Manage Weight</h4>
            <p>
              Burn calories effectively and maintain a healthy weight with regular cardio.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Cardio Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Popular Cardio Exercises</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image1}
                  className="card-img-top"
                  alt="Running"
                />
                <div className="card-body">
                  <h5 className="card-title">Running</h5>
                  <p className="card-text">
                    A great way to improve cardiovascular health and build endurance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image2}
                  className="card-img-top"
                  alt="Cycling"
                />
                <div className="card-body">
                  <h5 className="card-title">Cycling</h5>
                  <p className="card-text">
                    Burn calories and strengthen your legs with this low-impact activity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image3}
                  className="card-img-top"
                  alt="Swimming"
                />
                <div className="card-body">
                  <h5 className="card-title">Swimming</h5>
                  <p className="card-text">
                    A full-body workout that improves flexibility and cardiovascular fitness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Transformations from Our Members</h2>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <blockquote className="blockquote">
                <p>
                  "Cardio training helped me lose 20 pounds and feel stronger
                  than ever!"
                </p>
                <footer className="blockquote-footer">Sarah Wilson</footer>
              </blockquote>
            </div>
            <div className="carousel-item text-center">
              <blockquote className="blockquote">
                <p>
                  "I never thought I’d run a marathon, but with regular cardio
                  training, I did it!"
                </p>
                <footer className="blockquote-footer">Mark Johnson</footer>
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
      </section>

      {/* Call to Action */}
      <div className="bg-dark text-white text-center p-5">
        <h2>Join Our Cardio Fitness Program Today!</h2>
        <p>
          Take the first step towards a healthier, more active lifestyle. Your
          heart will thank you!
        </p>
        <a href="#contact" className="btn btn-light btn-lg">Sign Up Now</a>
      </div>
    </div>
  );
};

export default CardioFitnessPage;

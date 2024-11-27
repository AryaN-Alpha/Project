import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import service1Image1 from './cardio1.jpg';
import service1Image2 from './cardio2.jpg';
import service1Image3 from './cardio3.jpg';
import service1Image4 from './back2.jpg';

const YogaClassesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="text-white text-center py-5 position-relative"
        style={{
          backgroundImage: `url(${service1Image1})`,
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
          <h1 className="display-4 font-weight-bold">Experience the Art of Yoga</h1>
          <p className="lead font-weight-bold">
            Unlock balance, flexibility, and peace through our guided classes.
          </p>
          <a href="#benefits" className="btn btn-light btn-lg mt-3">
            Explore Classes
          </a>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="benefits" className="container py-5">
        <h2 className="text-center mb-4">Why Practice Yoga?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-heart-pulse-fill display-4 text-primary mb-3"></i>
            <h4>Improve Flexibility</h4>
            <p>
              Yoga helps in improving your flexibility, posture, and muscle
              strength.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-mind-map display-4 text-success mb-3"></i>
            <h4>Reduce Stress</h4>
            <p>
              Achieve mental clarity and calmness through mindful breathing and
              movement.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-droplet-half display-4 text-info mb-3"></i>
            <h4>Enhance Wellness</h4>
            <p>
              Strengthen your immune system and promote overall physical and
              mental health.
            </p>
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Yoga Classes</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image2}
                  className="card-img-top"
                  alt="Beginner Yoga"
                />
                <div className="card-body">
                  <h5 className="card-title">Beginner Yoga</h5>
                  <p className="card-text">
                    Perfect for those new to yoga, focusing on basic poses and
                    breathing techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image3}
                  className="card-img-top"
                  alt="Vinyasa Yoga"
                />
                <div className="card-body">
                  <h5 className="card-title">Vinyasa Flow</h5>
                  <p className="card-text">
                    A dynamic flow of yoga poses for improved strength and
                    flexibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={service1Image4}
                  className="card-img-top"
                  alt="Restorative Yoga"
                />
                <div className="card-body">
                  <h5 className="card-title">Restorative Yoga</h5>
                  <p className="card-text">
                    A slow-paced class aimed at relaxation and recovery for mind
                    and body.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Spotlight */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Meet Our Instructors</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://www.w3schools.com/w3images/avatar3.png"
                    className="img-fluid rounded-start"
                    alt="Instructor 1"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Sophia Mitchell</h5>
                    <p className="card-text">
                      With over 10 years of experience, Sophia specializes in
                      Vinyasa and Hatha yoga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    className="img-fluid rounded-start"
                    alt="Instructor 2"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Ethan Carter</h5>
                    <p className="card-text">
                      A mindfulness coach and yoga instructor with a focus on
                      meditation and restorative yoga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div className="carousel slide" id="testimonialCarousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active text-center">
                <blockquote className="blockquote">
                  <p>
                    "Yoga classes here have changed my life. I feel more at
                    peace and energetic!"
                  </p>
                  <footer className="blockquote-footer">Emily Johnson</footer>
                </blockquote>
              </div>
              <div className="carousel-item text-center">
                <blockquote className="blockquote">
                  <p>
                    "The instructors are amazing and the classes suit all
                    levels of practice."
                  </p>
                  <footer className="blockquote-footer">James Brown</footer>
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
      </section>

      {/* Call to Action */}
      <div className="bg-dark text-white text-center p-5">
        <h2>Join Our Yoga Classes Today!</h2>
        <p>
          Start your journey towards inner peace, flexibility, and strength.
        </p>
        <a href="#signup" className="btn btn-light btn-lg">Sign Up Now</a>
      </div>
    </div>
  );
};

export default YogaClassesPage;

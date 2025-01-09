<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';  // Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';
import backgroundImage from './backgroundimg.jpg';
import service1Image1 from './background1.jpg';
import service1Image2 from './background2.jpg';
import service1Image3 from './background3.jpg';
import service1Image4 from './background44.jpg';
import service1Image5 from './background5.jpg';
import service1Image6 from './background6.jpg';
import service1Image7 from './background7.jpg';
import service1Image8 from './background8.jpg';
import service1Image9 from './background10.jpg';
import Personal_Training from './Personal_Training'; // Import your Personal Training component

const Home = () => {
  return (
    <div className='bg-gray-900'>
      <header
        className="text-white text-center py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '50vh',
          position: 'relative', // Ensure positioning for overlay
        }}
      >
        <div
          style={{
            position: 'absolute', // Position the overlay
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black overlay with opacity (translucent effect)
          }}
        />
      
        <div className="container position-relative">
          <h1 className="display-4 fw-bold text-white" >
            Welcome to Revive-Fit Website
          </h1>
          <p className="lead font-weight-bold fw-bold">Explore our services and connect with us to learn more</p>
          <Link to="#about" className="btn btn-light btn-lg mt-3">Learn More</Link>
        </div>
      </header>

      <section id="services" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="font-weight-bold text-white">Our Services</h2>
          <p className="lead font-weight-bold text-white">What we offer to our clients</p>

          {/* First Row */}
          <div className="row mt-4">
            <div className="col-md-4">
              <Link to="/Personal_Training"> {/* Link to Personal Training page */}
                <div className="card p-3 service-card" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
                  <img src={service1Image8} className="card-img-top" alt="Personal Training" />
                  <h3 className="card-title font-weight-bold text-dark">Personal Training</h3>
                  <p className="card-text text-dark">Get one-on-one coaching tailored to your fitness goals with our certified trainers.</p>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <div className="card p-3 service-card" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
                <img src={service1Image5} className="card-img-top" alt="Group Classes" />
                <h3 className="card-title font-weight-bold text-dark">Group Classes</h3>
                <p className="card-text text-dark">Join our dynamic group classes, including HIIT, Zumba, and Yoga, to stay motivated.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 service-card" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
                <img src={service1Image9} className="card-img-top" alt="Nutritional Guidance" />
                <h3 className="card-title font-weight-bold text-dark">Nutritional Guidance</h3>
                <p className="card-text text-dark">Receive personalized nutrition plans to enhance your performance and recovery.</p>
              </div>
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./AboutUs";
import backgroundImage from "./backgroundimg.jpg";
import service1Image4 from "./background44.jpg";
import service1Image5 from "./background5.jpg";
import service1Image6 from "./background6.jpg";
import service1Image7 from "./background7.jpg";
import service1Image8 from "./background8.jpg";
import service1Image9 from "./background10.jpg";
import HomeBackImg from "./HomeBack.jpg";
import HomeBackImg4 from "./HomeBack4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <header
        className="text-white text-center py-5 position-relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
        }}
      >
        {/* Overlay for translucency */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
            zIndex: 1, // Ensure the overlay is below the content
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 font-weight-bold">
            Welcome to Revive-Fit Website
          </h1>
          <p className="lead font-weight-bold">
            Explore our services and connect with us to learn more
          </p>
          <a href="#about" className="btn btn-light btn-lg mt-3">
            Learn More
          </a>
        </div>
      </header>

      <section id="services" className="bg-light py-5 text-white"
      
      style={{
        backgroundImage: `url(${HomeBackImg4})`,
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
      
      >
        <div
          className="container text-center"
          style={{
            maxWidth: "950px",
            background: "transparent",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            border: "1px solid rgba(0, 0, 0, 0.1)", // Light border
          }}
        >
          <h2 className="font-weight-bold ">Our Services</h2>
          <p className="lead font-weight-bold ">
            What we offer to our clients
          </p>

          {/* First Row */}
          <div className="row mt-4">
            <div className="col-md-5 d-flex align-items-center">
              <Link to="/Personal_Training" className="card-link">
                <div
                  className="card p-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "#212529",
                    width: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 10)", // Subtle shadow
                    border: "1px solid rgba(0, 0, 0, 0.3)", // Light border
                  }}
                >
                  <img
                    src={service1Image8}
                    className="card-img-top"
                    alt="Personal Training"
                  />
                  <h3 className="card-title font-weight-bold text-white">
                    Personal Training
                  </h3>
                  <p
                    className="card-text text-white "
                    style={{ lineHeight: "1.5em" }}
                  >
                    Get one-on-one coaching tailored to your fitness goals with
                    our certified trainers.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-7 d-flex align-items-center text-right">
              <p
                className="text-white"
                style={{ maxWidth: "80%", lineHeight: "1.6em" }}
              >
                Experience a personalized training plan designed specifically
                for your fitness goals. Our experienced trainers will assess
                your needs, track your progress, and ensure that you stay
                motivated to reach your fitness potential.
              </p>
>>>>>>> 9dd821d667dba30e3a0cba96695fc1f8794dc664
            </div>
          </div>

          {/* Second Row */}
          <div className="row mt-4">
<<<<<<< HEAD
            <div className="col-md-4">
              <div className="card p-3 service-card" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
                <img src={service1Image2} className="card-img-top" alt="Strength Training" />
                <h3 className="card-title font-weight-bold text-dark">Strength Training</h3>
                <p className="card-text text-dark">Build muscle and increase strength with our structured strength training programs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 service-card" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
                <img src={service1Image4} className="card-img-top" alt="Cardio Fitness" />
                <h3 className="card-title font-weight-bold text-dark">Cardio Fitness</h3>
                <p className="card-text text-dark">Improve your endurance with our cardio-focused workouts, including cycling and running.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 service-card" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
                <img src={service1Image3} className="card-img-top" alt="Yoga Classes" />
                <h3 className="card-title font-weight-bold text-dark">Yoga Classes</h3>
                <p className="card-text text-dark">Enhance flexibility and mindfulness with our diverse yoga sessions for all levels.</p>
              </div>
=======
            <div className="col-md-7 d-flex align-items-center text-left text-white">
              <p
                className="text-white"
                style={{ maxWidth: "80%", lineHeight: "1.6em" }}
              >
                Our group fitness classes are designed to keep you motivated,
                engaged, and challenged. Whether you're into high-intensity
                interval training (HIIT), yoga, or cycling, we have something
                for everyone to help you achieve your fitness goals.
              </p>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <Link to="/group_classes" className="card-link">
                <div
                  className="card p-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "#212529",
                    width: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 10)", // Subtle shadow
                    border: "1px solid rgba(0, 0, 0, 0.3)", // Light border
                  }}
                >
                  <img
                    src={service1Image5}
                    className="card-img-top"
                    alt="Group Classes"
                  />
                  <h3 className="card-title font-weight-bold text-white">
                    Group Classes
                  </h3>
                  <p
                    className="card-text text-white"
                    style={{ lineHeight: "1.5em" }}
                  >
                    Join our dynamic group classes, including HIIT, Zumba, and
                    Yoga, to stay motivated.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Third Row */}
          <div className="row mt-4">
            <div className="col-md-5 d-flex align-items-center">
              <Link to="/Nutrition_Guide" className="card-link">
                <div
                  className="card p-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "#212529",
                    width: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 10)", // Subtle shadow
                    border: "1px solid rgba(0, 0, 0, 0.3)", // Light border
                  }}
                >
                  <img
                    src={service1Image9}
                    className="card-img-top"
                    alt="Nutritional Guidance"
                  />
                  <h3 className="card-title font-weight-bold text-white">
                    Nutritional Guidance
                  </h3>
                  <p
                    className="card-text text-white"
                    style={{ lineHeight: "1.5em" }}
                  >
                    Receive personalized nutrition plans to enhance your
                    performance and recovery.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-7 d-flex align-items-center text-left">
              <p
                className="text-white"
                style={{ maxWidth: "80%", lineHeight: "1.6em" }}
              >
                Fuel your body the right way with expert nutritional guidance
                tailored to your fitness needs. Our nutritionists will work with
                you to create meal plans that complement your training, ensuring
                maximum results.
              </p>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="row mt-4">
            <div className="col-md-7 d-flex align-items-center text-left text-white">
              <p
                className="text-white"
                style={{ maxWidth: "80%", lineHeight: "1.6em" }}
              >
                Strength training is essential for building muscle, improving
                bone density, and increasing metabolism. Our strength programs
                are designed for all fitness levels, from beginners to advanced.
              </p>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <Link to="/Strength_Training" className="card-link">
                <div
                  className="card p-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "#212529",
                    width: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 10)", // Subtle shadow
                    border: "1px solid rgba(0, 0, 0, 0.3)", // Light border
                  }}
                >
                  <img
                    src={service1Image7}
                    className="card-img-top"
                    alt="Strength Training"
                  />
                  <h3 className="card-title font-weight-bold text-white">
                    Strength Training
                  </h3>
                  <p
                    className="card-text text-white"
                    style={{ lineHeight: "1.5em" }}
                  >
                    Build muscle and increase strength with our structured
                    strength training programs.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Fifth Row */}
          <div className="row mt-4">
            <div className="col-md-5 d-flex align-items-center">
              <Link to="/Cardio_Fitness" className="card-link">
                <div
                  className="card p-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "#212529",
                    width: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 10)", // Subtle shadow
                    border: "1px solid rgba(0, 0, 0, 0.3)", // Light border
                  }}
                >
                  <img
                    src={service1Image4}
                    className="card-img-top"
                    alt="Cardio Fitness"
                  />
                  <h3 className="card-title font-weight-bold text-white">
                    Cardio Fitness
                  </h3>
                  <p
                    className="card-text text-white"
                    style={{ lineHeight: "1.5em" }}
                  >
                    Improve your endurance with our cardio-focused workouts,
                    including cycling and running.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-7 d-flex align-items-center text-left">
              <p
                className="text-white"
                style={{ maxWidth: "80%", lineHeight: "1.6em" }}
              >
                Boost your cardiovascular health with our heart-pumping cardio
                workouts designed to improve endurance, burn fat, and enhance
                overall health.
              </p>
            </div>
          </div>

          {/* Sixth Row */}
          <div className="row mt-4">
            <div className="col-md-7 d-flex align-items-center text-left">
              <p
                className="text-white"
                style={{ maxWidth: "80%", lineHeight: "1.6em" }}
              >
                Yoga helps improve flexibility, reduce stress, and build mental
                clarity. Whether you're a beginner or an experienced yogi, our
                classes cater to all skill levels.
              </p>
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <Link to="/Yoga_Classes" className="card-link">
                <div
                  className="card p-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "#212529",
                    width: "100%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 10)", // Subtle shadow
                    border: "1px solid rgba(0, 0, 0, 0.3)", // Light border
                  }}
                >
                  <img
                    src={service1Image6}
                    className="card-img-top"
                    alt="Yoga Classes"
                  />
                  <h3 className="card-title font-weight-bold text-white">
                    Yoga Classes
                  </h3>
                  <p
                    className="card-text text-white"
                    style={{ lineHeight: "1.5em" }}
                  >
                    Enhance flexibility and mindfulness with our diverse yoga
                    sessions for all levels.
                  </p>
                </div>
              </Link>
>>>>>>> 9dd821d667dba30e3a0cba96695fc1f8794dc664
            </div>
          </div>
        </div>
      </section>

      <AboutUs />

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
<<<<<<< HEAD
        <p className="font-weight-bold">&copy; {new Date().getFullYear()} ReviveFit. All Rights Reserved.</p>
=======
        <p className="font-weight-bold">
          &copy; {new Date().getFullYear()} ReviveFit. All Rights Reserved.
        </p>{" "}
        {/* Bold Font */}
>>>>>>> 9dd821d667dba30e3a0cba96695fc1f8794dc664
      </footer>
    </div>
  );
};

export default Home;

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
            </div>
          </div>

          {/* Second Row */}
          <div className="row mt-4">
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
            </div>
          </div>
        </div>
      </section>

      <AboutUs />

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="font-weight-bold">&copy; {new Date().getFullYear()} ReviveFit. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

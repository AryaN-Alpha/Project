import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <section id="about" className="py-5 bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-1 mt-4 mt-md-0">
            <h2 className="display-4 mb-3 text-white">About Us</h2>
            <p className="lead text-white  ">We are dedicated to delivering top-notch services and creating outstanding experiences for our clients.</p>
            <p className="text-secondary text-nowrap text-white">With years of experience in the industry, our team brings expertise, commitment, and creativity to every project. Join us on this journey and discover what sets us apart.</p>
            <a href="#contact" className="btn btn-primary mt-3">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

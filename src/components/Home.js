import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Tata Consultancy Services</h1>
          <p>Transforming businesses through technology and innovation</p>
          <a href="#services" className="cta-button">Explore Our Services</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="services">
        <h2>Our Key Services</h2>
        <div className="feature-cards">

          <div className="card">
            <h3>Consulting</h3>
            <p>Our consulting services offer tailored strategies to drive innovation and efficiency. We provide expert advice on technology integration and business transformation to ensure your organization remains competitive in a rapidly evolving market. Partner with us to unlock new growth opportunities and enhance operational effectiveness.</p>
          </div>

          <div className="card">
            <h3>Digital Transformation</h3>
            <p>Embrace the future with our digital transformation solutions designed to modernize your operations. We help businesses leverage cutting-edge technologies to streamline processes, improve customer experiences, and achieve agility. Transform your digital landscape and stay ahead of industry trends with our comprehensive services</p>
          </div>

          <div className="card">
            <h3>Cloud Services</h3>
            <p>Our cloud services provide scalable and secure solutions to optimize your IT infrastructure. From seamless migration to robust management, we ensure your cloud environment enhances performance and reduces costs. Benefit from increased flexibility and reliability with our tailored cloud strategies.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default Home;

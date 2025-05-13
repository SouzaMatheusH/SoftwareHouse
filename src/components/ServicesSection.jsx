import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const services = [
  { title: 'UI/UX', description: 'Creating user-centered design for website interfaces.' },
  { title: 'Brand Identity', description: 'We specialize in providing comprehensive brand identity services.' },
  { title: 'SEO', description: 'We provide excellent SEO to make your business stand out.' },
  { title: 'Web Design', description: 'Crafting visually elegant and user-centric sites.' },
  { title: 'Web Development', description: 'Developing feature-rich websites efficiently.' },
  { title: 'App Development', description: 'We build apps that add value to your business.' },
];

function ServicesSection() {
  return (
    <section className="services">
      <h2>Our Delightful Services</h2>
      <p>We are a group of passionate people working closely with clients so their business can grow.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

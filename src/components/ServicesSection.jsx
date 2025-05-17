import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';
import { FaPalette, FaIdBadge, FaSearch, FaLaptopCode, FaCode, FaMobileAlt } from 'react-icons/fa';

const services = [
  { icon: <FaPalette />, title: 'UI/UX', description: 'Creating user centered design for web/app interfaces.' },
  { icon: <FaIdBadge />, title: 'Brand Identity', description: 'We specialize in providing comprehensive brand identity services to businesses of all sizes.' },
  { icon: <FaSearch />, title: 'SEO', description: 'We provide excellent Search Engine Optimization (SEO) so you can capture more traffic and revenue' },
  { icon: <FaLaptopCode />, title: 'Web Design', description: 'Crafting web design that not only works but looks good.' },
  { icon: <FaCode />, title: 'Web Development', description: 'Developing those beautifully designed websites efficiently and fast!' },
  { icon: <FaMobileAlt />, title: 'App Development', description: 'We build apps that add value to your business, and boost your efficiency through cutting edge technologies' },
];

function ServicesSection() {
  return (
    <section className="services">
      <h2>Our Delightful Services</h2>
      <p className='section-title'>We are a group of passionate people working closely with clients so their business can grow.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

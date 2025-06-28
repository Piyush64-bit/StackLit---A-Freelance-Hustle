// AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layouts/Layout';

import Home from '../pages/Home/home';
import About from '../pages/About/About';
import Services from '../pages/ServicesGiven/Services';
import Portfolio from '../pages/Portfolio/Portfolio';
import Testimonials from '../pages/Testimonials/Testimonials';
import Contact from '../pages/Contact/Contact';
import TeamShowcase from '../pages/Team/TeamShowcase';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<TeamShowcase />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

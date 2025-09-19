import React, { Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from '../components/common/loader';

const Home = React.lazy(() => import('../pages/home'));
const About = React.lazy(() => import('../pages/about'));
const Products = React.lazy(() => import('../pages/products'));
const Contact = React.lazy(() => import('../pages/contact'));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader variant="branded" message="Loading page..." />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;

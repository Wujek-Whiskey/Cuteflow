import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Biography, Contact, Error, Home, Works } from 'pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/biography' element={<Biography />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/404' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
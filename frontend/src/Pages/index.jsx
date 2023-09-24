import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import Error from '../Pages/ErrorPage/Error';
import DetailedPost from '../Components/Body/Posts/DetailedPost';

const Routing = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post/:id' element={<DetailedPost />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );

export default Routing;
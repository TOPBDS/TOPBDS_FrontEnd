import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './layout/Layout';
import Main from './pages/main/Main';
import Profile from './pages/profile/Profile';
import Blog from './pages/blog/Blog';
import Report from './pages/report/Report';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import HouseDetail from './components/main/HouseDetail';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/my' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/report' element={<Report />} />
          <Route path='/search' element={<Main />} />
          <Route path='/item/:idx' element={<HouseDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

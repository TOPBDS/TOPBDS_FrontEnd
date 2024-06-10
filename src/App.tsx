import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import './assets/fonts/font.css';
import Layout from './layout/Layout';
import Main from './pages/main/Main';
import Profile from './pages/profile/Profile';
import Blog from './pages/blog/Blog';
import Report from './pages/report/Report';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/login/Login';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/my' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/report' element={<Report />} />
          <Route path='/search' element={<Main />} />
          <Route path='/item/:idx' element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

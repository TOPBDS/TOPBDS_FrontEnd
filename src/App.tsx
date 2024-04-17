import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './layout/Layout';
import Main from './pages/main/Main';
import Profile from './pages/profile/Profile';
import Blog from './pages/blog/Blog';
import Report from './pages/report/Report';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/my' element={<Profile />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/report' element={<Report />} />
          <Route path='/search' element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<div>main</div>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

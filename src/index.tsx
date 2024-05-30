import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/font.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ConfigureStore from './store/configStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ConfigureStore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigureStore>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

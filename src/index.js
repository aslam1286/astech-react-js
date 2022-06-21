import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from 'react-router-dom'
import Hero from './my-components/js/Hero';
import About from './my-components/js/About';
import Contact from './my-components/js/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


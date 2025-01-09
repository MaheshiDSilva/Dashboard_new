import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
// import News from './Components/Newsletter'
import Footer from './Components/Footer'
import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero/>
    <About/>
    <Services/>
    <Contact/>
    {/* <News/> */}
    <Footer/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

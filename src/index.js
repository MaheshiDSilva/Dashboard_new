import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import MilestonesDashboard from './Components/MilestonesDashboard'
import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MilestonesDashboard/>
  </React.StrictMode>
);


reportWebVitals();

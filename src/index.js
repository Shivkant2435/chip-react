import React from 'react';
import ReactDOM from 'react-dom';
import ChipComponent from './ChipComponent.tsx'; // Import ChipComponent
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChipComponent /> {/* Render ChipComponent */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

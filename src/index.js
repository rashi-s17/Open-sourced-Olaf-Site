import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Snowfall from 'react-snowfall';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <div style={{ height: 0, width: 400}}>
      <Snowfall />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);



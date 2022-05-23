import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/worker');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

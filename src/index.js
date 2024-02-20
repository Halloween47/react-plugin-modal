import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
export { default as Modal } from './modal/modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Modal />
    {/* <App /> */}
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Product from './product'
//import Card1 from './card1'
//import Card2 from './card2'
//import ProductCard from './productCard';
//import Card3 from './card3'
//import Routerex from './Routerex'
//import Counter from './counter'
import OnOff from './onOff';
//import NameChanger from './namechanger'

import DelayedAlert from './DelayedAlert'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DelayedAlert />

    </React.StrictMode>
);+

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import './product.css';
import Thar from './thar.jpg';
function product(){
    return(
        <div className="container">
            <h1>CSS positioning Task</h1>
            <div className="card">
                <img src={Thar} alt="product"/>
                <h3>product Name</h3>
                <p className="price">$99.99</p>
            </div>
        </div>
    );
}
export default product;
import React from 'react';
import './Double.css';

const Double = ({double}) => {

    const {img, name, price, description} = double;

    return (
        <div className='double-container'>
            <img src={img} alt="double-room-img" />
            <h2> {name} </h2>
            <h4> Price : $ {price} </h4>
            <p> {description} </p>
            <button className='book-now-btn'>Book Now!</button>
        </div>
    );
};

export default Double;
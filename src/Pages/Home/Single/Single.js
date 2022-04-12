import React from 'react';
import { Link } from 'react-router-dom';
import './Single.css';

const Single = ({single}) => {

    const {img, name, price, description} = single;

    return (
        <div className='single-container'>
            <img src={img} alt="single-room-img" />
            <h2> {name} </h2>
            <h4> Price : $ {price} </h4>
            <p> {description} </p>
            <button className='book-now-btn'>Book Now!</button>
        </div>
    );
};

export default Single;
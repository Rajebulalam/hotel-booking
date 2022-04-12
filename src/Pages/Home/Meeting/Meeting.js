import React from 'react';
import './Meeting.css';

const Meeting = ({meeting}) => {

    const {img, name, price, description} = meeting;

    return (
        <div className='meeting-container'>
            <img src={img} alt="meeting-room-img" />
            <h2> {name} </h2>
            <h4> Price : $ {price} </h4>
            <p> {description} </p>
            <button className='book-now-btn'>Book Now!</button>
        </div>
    );
};

export default Meeting;
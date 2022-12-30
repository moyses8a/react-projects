import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  const checkNumber = (n) => {
    if (n > people.length - 1) return 0;
    if (n < 0) return people.length - 1;
    return n;
  }

  const randomNumber = () => {
    const n = Math.floor(Math.random() * people.length);
    if (n === index) return checkNumber(n-1);
    return checkNumber(n);
  }

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={() => setIndex((prev) => checkNumber(prev - 1))}>
          <FaChevronLeft />
        </button>
        <button className='next-btn'  onClick={() => setIndex((prev) => checkNumber(prev + 1))}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => setIndex(randomNumber())}>Suprise me</button>
  </article>;
};

export default Review;

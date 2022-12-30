import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [isExpanded, setExpanded] = useState(false);
  return <div className="question">
    <header>
      <h4>{title}</h4>
      {isExpanded ? 
        <button className='btn' onClick={() => setExpanded(false)}><AiOutlineMinus/></button> : 
        <button className='btn' onClick={() => setExpanded(true)}><AiOutlinePlus/></button>}
    </header>
    {isExpanded && <p>{info}</p>}
  </div>;
};

export default Question;

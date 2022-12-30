import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hex}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const reverseColor = (rgb[0] + rgb[1] + rgb[2]) > 400 ? '0,0,0' : '256,256,256';
  //const hex = rgbToHex(...rgb);
  const hexValue = `#${hex}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  })
  return <article
    className={`color ${index > 4 && 'color-light'}`}
    style={{backgroundColor: `rgb(${bcg})`}}
    onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(hexValue)
    }}>
    <p className='percent-value' style={{color: `rgb(${reverseColor})`}}>{weight}%</p>
    <p className='color-value' style={{color: `rgb(${reverseColor})`}}>{hexValue}</p>
    {alert && <p className='alert'> copied to Clipboard</p>}
  </article>
}

export default SingleColor

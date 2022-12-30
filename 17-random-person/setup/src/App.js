import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState('name');
  const getProfile = async () => {
    setLoading(true);
    setField('name');
    const response = await fetch(url);
    const data = await response.json();
    const {
      name: {first, last},
      dob: { age },
      email,
      location: { street: { number: streetNumber, name: streetName } },
      phone,
      login: { password },
      picture: { thumbnail }
    } = data.results[0];
    const profileData = {
      name: `${first} ${last}`,
      age,
      email,
      address: `${streetNumber} ${streetName}`,
      phone,
      password,
      image: thumbnail || defaultImage
    }
    setProfile(profileData);
    setLoading(false);
  }
  useEffect(() => {
    console.log('effect');
    getProfile();
  }, []);
  const selectField = (e) => {
    const label = e.target.dataset.label;
    if (label && label !== field) {
      setField(label);
    }
  }
  return <main>
    <div className='block bcg-balck'></div>
    <div className='block'>
      <div className="container">
        <img src={profile.image} alt="" />
        <p className="user-title">My {field} is</p>
        <p className="user-value">{profile[field]}</p>
        <div className="values-list">
          <button className='icon' data-label='name' onMouseOver={selectField}><FaUser/></button>
          <button className='icon' data-label='email' onMouseOver={selectField}><FaEnvelopeOpen/></button>
          <button className='icon' data-label='age' onMouseOver={selectField}><FaCalendarTimes/></button>
          <button className='icon' data-label='address' onMouseOver={selectField}><FaMap/></button>
          <button className='icon' data-label='phone' onMouseOver={selectField}><FaPhone/></button>
          <button className='icon' data-label='password' onMouseOver={selectField}><FaLock/></button>
        </div>
        <button className="btn" type='button' onClick={getProfile}>{loading ? 'loading...' : 'random user'}</button>
      </div>
    </div>
  </main>
}

export default App

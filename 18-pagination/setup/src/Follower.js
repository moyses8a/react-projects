import React from 'react'

const Follower = ({ id, user, avatar, link }) => {
  return <article className="card">
    <img src={avatar} alt={user} />
    <h4>{user}</h4>
    <a href={link} className="btn">view profile</a>
  </article>
}

export default Follower

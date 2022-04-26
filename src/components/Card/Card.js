import React from 'react'
import './Card.css';

const Card = ({ id, title, short_url, long_url }) => {
  return (
    <div className="url">
      <h3>{title}</h3>
      <a href={short_url} target="blank">{short_url}</a>
      <p>{long_url}</p>
    </div>
  )
}

export default Card

import React from 'react'
import './Card.css';

const Card = ({ id, title, short_url, long_url }) => {
  return (
    <div className="url-card">
      <h3 className='card-title'>{title}</h3>
      <a className='short-url' href={short_url} target="blank">{short_url}</a>
      <p className='long-url'>{long_url}</p>
    </div>
  )
}

export default Card

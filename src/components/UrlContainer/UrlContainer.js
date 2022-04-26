import React from 'react';
import './UrlContainer.css';
import Card from '../Card/Card'

const UrlContainer = ({ urls }) => {
  const urlEls = urls.map((url) => {
    return (
      <Card
        id={url.id}
        title={url.title}
        short_url={url.short_url}
        long_url={url.long_url}
      />
    )
  });

  return (
    <section className='cards-container'>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;

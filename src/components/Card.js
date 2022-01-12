import React from 'react'

function Card() {
  return (
    <div className='card'>
      <div className='topImg'>
        {/* xoxo image api should be pulled here */}
        Image
      </div>
      <div className='description'>
        <p>Price</p>
        <p>Description</p> 
        <p>Rating</p>
      </div>
    </div>
  )
}

export default Card

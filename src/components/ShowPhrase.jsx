import React from 'react'

const ShowPhrase = ({phrase}) => {
    console.log(phrase)
  return (
    <div className='text'>
        <p>{phrase.phrase}</p>
        <p>fuente:{phrase.author}</p>
    </div>
  )
}

export default ShowPhrase;

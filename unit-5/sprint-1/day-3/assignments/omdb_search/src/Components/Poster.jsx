import React from 'react'

const Poster = ({Title,Poster,Year,Type}) => {
  return (
    <div>
        <img src={Poster}/>
        <h4>Title: {Title}</h4>
        <p>Type: {Type}</p>
        <p>Year: {Year}</p>

    </div>
  )
}

export default Poster
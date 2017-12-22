import React from 'react';


const Beer = ({name, imageSrc, foodPairing, toggleFlipped, id, flipped}) => {

  let flippedClass = "flippedDiv";
    if( flipped ){
      flippedClass = "flippedDiv flipped";
    }

  return (
    <div className="container">
      <div className={flippedClass} onClick={toggleFlipped} >
        <div className="front" id={id}>
          <img src={imageSrc}/>
          <h2>{name}</h2>
        </div>
        <div className="back" id={id}>
          <p>{foodPairing}</p>
        </div>
      </div>
    </div>
  )
}

export default Beer;

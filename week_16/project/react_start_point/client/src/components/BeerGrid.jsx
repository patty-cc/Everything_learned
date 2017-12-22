import React from 'react';
import Beer from './Beer.jsx';

const BeerGrid = (props) => {
  const beers = props.beers.map( (beer, index ) => {

  return <Beer
      name={beer.name}
      imageSrc={beer.image_url}
      foodPairing={beer.food_pairing}
      toggleFlipped={props.toggleFlipped}
      flipped={beer.flipped}
      key={index}
      id={beer.id}
    />
  }
  );

  // console.log(props.beers)
  if(!props.beers) return null;
  return(
    <div className="singleBeer">
      {beers}
    </div>
  )
}

export default BeerGrid;

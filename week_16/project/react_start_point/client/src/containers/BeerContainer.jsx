import React from 'react';
import BeerGrid from '../components/BeerGrid.jsx';

class BeerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.toggleFlipped = this.toggleFlipped.bind(this);
  }

  toggleFlipped( event ) {
    const idToFlip = parseInt(event.target.id);
    const beerToFlip = this.state.beers.find(( beer ) => {
      return idToFlip === beer.id;
    });

    if(beerToFlip.flipped){
      beerToFlip.flipped = false;
    }
    else{
      beerToFlip.flipped = true;
    }

    const updatedBeers = this.state.beers.map( function(beer){
      if(idToFlip === beer.id) {
        return beerToFlip
      }
      else{
        return beer
      }
    })
    this.setState({beers: updatedBeers})
  }

  componentDidMount() {
    const url = 'https://api.punkapi.com/v2/beers';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load',() => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({beers: data});
    })
    request.send();
  }

  render() {
    return (
      <div className="beerData">
        <BeerGrid
          beers={this.state.beers}
          toggleFlipped={this.toggleFlipped}
        />
      </div>
    );
  }
}

export default BeerContainer;
